let todoContainer = document.querySelector('#todo-panel');
let toDoInput = document.querySelector('#toDoInput')


let toDoList = [
    {
        id:'1',
        name:'ToDo 1'
    },
    {
        id:'2',
        name:'ToDo 2'
    },
    {
        id:'3',
        name:'ToDo 3'
    },
]

function renderTodos(todosList){
    // clear the todos List
    let toDoListChild = todoContainer.lastElementChild;
    while(toDoListChild){
        todoContainer.removeChild(toDoListChild)
        toDoListChild = todoContainer.lastElementChild
    }
    // start render a new list from object
    todosList.map((item)=>{
        let createList = document.createElement('li')
        createList.classList.add('todo-item')
        createList.setAttribute("id",item.id)
        createList.innerHTML = ` <p class="float-start">${item.name}</p>
                        <a href="#/" class="float-end" onclick="editTodo(${item.id})">edit</a> 
                        <i class="float-end pl-2 pr-2 d-inline-block">  |  </i> 
                        <a href="#/" class="float-end" onclick="deleteTodo(${item.id})">delete</a>`
        todoContainer.appendChild(createList)
    })
}
 renderTodos(toDoList)


   function addTodo (){
    // get data from input
    var newTodo = {id:Math.random(),name:toDoInput.value}
    toDoList.push(newTodo)
    // clear the input
    toDoInput.value = ""
    renderTodos(toDoList)
};

function deleteTodo (id) {
    console.log(id)
    toDoList =  toDoList.filter(item => item.id != id)
   renderTodos(toDoList)
}

function editTodo(id){
    let selectedTdo = toDoList.filter(item => item.id == id)
    toDoInput.value = selectedTdo[0].name;
    

}