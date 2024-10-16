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
    taskItem.style.backgroundColor = "white";  // Inicialmente, el fondo es blanco
    taskItem.innerHTML = `
        <p>${task}</p>
        <p>Prioridad: ${priority}</p>
        <p>Fecha de vencimiento: ${deadline}</p>
        <button class="mark-done">No Completada</button>
        <p>Descripción: ${description}</p>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;

        // Alternar entre "No Completada" en rojo y "Completada" en verde
        if (event.target.textContent === "No Completada") {
            event.target.textContent = "Completada";
            event.target.style.backgroundColor = "green";  // Cambiar a verde
        } else {
            event.target.textContent = "No Completada";
            event.target.style.backgroundColor = "red";  // Cambiar a rojo
        }
    }
});