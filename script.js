document.getElementById("task_form").addEventListener("submit", function (evt) {
evt.preventDefault();

const taskInput = document.getElementById("task");
const value = taskInput.value;
const addBtn = document.getElementById("add_btn");

document.getElementById("task_list").innerHTML +=`<li>${value}</li>`;

taskInput.value = "";
});