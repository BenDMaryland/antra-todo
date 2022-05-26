let todoContainer = document.querySelector("section")

let allTodos
console.log(todoContainer)
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(r => r.json())
    .then(data => allTodos = data)
    .then(allTodos => displayTodos(allTodos))

function displayTodos() {
    console.log(allTodos)
    allTodos.forEach(todo => {
        let todoDiv = document.createElement("div")
        let todoTitle = document.createElement("h3")
        let checkBox = document.createElement("input")
        let completed = document.createElement("label")
        let toDoId = document.createElement("p")

        let divContainer = todoContainer.appendChild(todoDiv)
divContainer.className = 'card'

        divContainer.appendChild(toDoId).innerText = `# ${todo.id}`
        divContainer.appendChild(todoTitle).innerText = todo.title

      
        divContainer.appendChild(completed).innerText = "Completed"
        divContainer.appendChild(checkBox)
        checkBox.type = "checkbox"
        checkBox.checked  = todo.completed
    })

}
