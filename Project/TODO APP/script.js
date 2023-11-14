let todoList=[
    {
        item: "Buy Milk",
        dueDate:'23/10/23'
    },
    {
        item: "Buy Bread",
        dueDate:'24/10/23'
    },
];

displayItem();

function addTodo(){
    let inputElement=document.querySelector("#todo-input");
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({item: todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItem();

}

function displayItem(){

    let containerElement=document.querySelector(".todo_container");
    let newHtml='';
    for(let i = 0; i < todoList.length; i++){

        let {item, dueDate}=todoList[i];
        newHtml+=`
            
            <span>${item}</span>
            <span>${dueDate}</span>
            <button  class="btn-delete" onclick="todoList.splice(${i},1); displayItem(); " >Delete</button>
            
        `;

    }
    containerElement.innerHTML=newHtml;

}