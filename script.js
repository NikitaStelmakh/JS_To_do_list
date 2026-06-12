const skippedElement = document.getElementById("skipped");
let skippedCount = 0;

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

   const deleteBtn = document.createElement("input");
   deleteBtn.type = "button";
   deleteBtn.className ="delete_btn";
   deleteBtn.value = "❌";

   li.appendChild(checkbox);
   li.append(`${value}`);
   li.appendChild(deleteBtn);

   document.getElementById("task_list").appendChild(li);

   updateCounters ();


   taskInput.value = "";
  
   const skippedCounter = () => {
    if(!checkbox.checked) {
      skippedCount++;
      skippedElement.textContent = `отклоненные: ${skippedCount}`;
      }
  };

   deleteBtn.addEventListener("click", () => {
     skippedCounter();
     li.remove();
     updateCounters();
  });

  document.addEventListener("change", ()=> {
  if(checkbox.checked) {
    li.classList.add("completed_style"); 
  } else {
    li.classList.remove("completed_style")
  };
}) 
});


document.getElementById("task_list").addEventListener("change", (evt) => {
   if(evt.target.type === "checkbox") { 
     updateCounters ();  
   }
});

const filter = document.getElementById("filter");

filter.addEventListener("change", ()=> {
  const tasks = document.querySelectorAll("#task_list li");
  tasks.forEach(task => {
  switch(filter.value) {
    case "all": 
    task.style.display = "flex";
    break;

    case "completed":
    task.style.display =
    task.classList.contains("completed_style")
      ? "flex"
      : "none";
    break;

    case "in_progress":
    task.style.display =
    task.classList.contains("completed_style")
      ? "none"
      : "flex";
    break;
  }
  })
})


