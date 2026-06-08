const updateCounters = () => {
   const checkboxes = document.querySelectorAll(".check_box");

   const completedCount = [...checkboxes].filter(cb => cb.checked).length;

   const inProgressCount = checkboxes.length - completedCount;

   document.getElementById("completed").textContent =`выполненные: ${completedCount}`;

   document.getElementById("in_progress").textContent = `невыполненные: ${inProgressCount}`;

};


document.getElementById("task_form").addEventListener("submit", function (evt) {
evt.preventDefault();

const taskInput = document.getElementById("task");
const value = taskInput.value;
const addBtn = document.getElementById("add_btn");

const li = document.createElement("li");
const checkbox = document.createElement("input");
checkbox.type ="checkbox";
checkbox.className = "check_box";
li.appendChild(checkbox);
li.append(`${value}`);

document.getElementById("task_list").appendChild(li);

updateCounters ();


taskInput.value = "";


});


document.getElementById("task_list").addEventListener("change", function(evt) {
if(evt.target.type === "checkbox") {
  updateCounters ();  
}
});

