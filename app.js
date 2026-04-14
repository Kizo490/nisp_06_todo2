// Pobranie elementów z HTML
const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Obsługa kliknięcia przycisku
button.addEventListener("click", function () {
    const taskText = input.value.trim();

    // Sprawdzenie czy coś wpisano
    if (taskText === "") {
        return;
    }

    // Tworzenie nowego elementu listy
    const li = document.createElement("li");
    li.textContent = taskText;

    // Dodanie do listy
    taskList.appendChild(li);

    // Czyszczenie inputa
    input.value = "";
});