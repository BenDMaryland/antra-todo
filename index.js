let todoContainer = document.querySelector("section")
document.querySelector("#sorter").addEventListener("click", sortHandler)
document.querySelector("#filter").addEventListener("click", filterHandler)
document.querySelector("#searcher").addEventListener("keyup", searchHandler)
let allTodos

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(r => r.json())
    .then(data => allTodos = data)
    .then(allTodos => displayTodos(allTodos))

function displayTodos(allTodos) {
    console.log(allTodos)
    todoContainer.innerHTML = ""
    allTodos.forEach(todo => {
        //creating html elements
        let toDoUserId = document.createElement("p")
        let todoDiv = document.createElement("div")
        let todoTitle = document.createElement("h3")
        let checkBox = document.createElement("input")
        let completed = document.createElement("label")
        let toDoId = document.createElement("p")

        let divContainer = todoContainer.appendChild(todoDiv)
        divContainer.className = 'card'

        divContainer.appendChild(toDoId).innerText = `# ${todo.id}`
        let deleteBtn = divContainer.appendChild(document.createElement("button"))
        deleteBtn.addEventListener("click", deleteHandler)
        deleteBtn.innerText = "delete"
        deleteBtn.id = todo.id

        divContainer.appendChild(todoTitle).innerText = todo.title
        divContainer.appendChild(toDoUserId).innerText = `User: ${todo.userId}`
        // the checkbox 
        divContainer.appendChild(completed).innerText = "Completed"
        divContainer.appendChild(checkBox)
        checkBox.type = "checkbox"
        checkBox.checked = todo.completed
    })
}


function deleteHandler(e,) {
    e.target.parentNode.remove()
    console.log(e, this.id)
    allTodos = allTodos.filter(todo => todo.id != this.id)

}

function sortHandler(e) {

allTodos.sort((a, b) => (a.completed - b.completed))
   
    displayTodos(allTodos)
}

function filterHandler(e) {

    let filteredTodos = allTodos.filter(todo => todo.completed && todo)

    displayTodos(filteredTodos)
}

function searchHandler(e) {
    console.log(e)
    let searchedTodos = allTodos.filter(todo => todo.title.includes(e.target.value) && todo)

    displayTodos(searchedTodos)

}