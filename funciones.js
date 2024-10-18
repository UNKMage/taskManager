const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const descriptionInput = document.getElementById("description");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
	const task = taskInput.value;
	const priority = priorityInput.value;
	const deadline = deadlineInput.value;
    const description = descriptionInput.value;
	if (task.trim() === "" || deadline === "") {
		alert("Completa los campos faltantes.")
		return; 
	}

	const selectedDate = new Date(deadline);
	const currentDate = new Date();

	if (selectedDate <= currentDate) {
		alert("Selecciona una fecha posterior para la tarea.");
		return; 
	}

	const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.style.backgroundColor = "white";
    taskItem.innerHTML = `
        <div class="task-header">
            <p>${task}</p>
            <p>Prioridad: ${priority}</p>
            <p>Fecha de vencimiento: ${deadline}</p>
            <button class="mark-done">No Completada</button>
        </div>
        <div class="description">
            <p>Descripción: ${description}</p>
        </div>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = "";
    priorityInput.value = "Alta";
    deadlineInput.value = "";
    descriptionInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;

        if (event.target.textContent === "No Completada") {
            event.target.textContent = "Completada";
            event.target.style.backgroundColor = "green";
        } else {
            event.target.textContent = "No Completada";
            event.target.style.backgroundColor = "red";
        }
    }
});
