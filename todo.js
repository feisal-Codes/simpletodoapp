const form = document.createElement('form');
const text = document.createElement('textarea');
const submit = document.createElement('input');
const br = document.createElement('br');
submit.type = "submit";
submit.name = "submit";
submit.value = "Add";
text.required = true;
text.name = "task";

text.id = "task";
form.id = "todo";
form.appendChild(text);
form.appendChild(br);
form.appendChild(submit);

const todos = document.getElementById('todos');
const today = document.getElementById('today');


let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = date.getFullYear();
let todday = mm + '/' + dd + '/' + yyyy;
today.textContent = todday;











form.addEventListener('submit', e => {
    e.preventDefault();
    displayTask(form.elements.task.value);
    document.getElementById('third-sec').removeChild(form);


})

const displayTask = (task) => {

    const todo = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = task;
    todo.appendChild(checkbox)
    todo.appendChild(document.createTextNode(task));
    todos.appendChild(todo);
    todo.addEventListener('change', e => {

        todo.classList.toggle('checked');

    })


}






document.getElementById('button').addEventListener('click', () => {

    const third = document.getElementById('third-sec');
    third.insertBefore(form, third.firstChild)
})