const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

button.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    // Tworzenie elementów
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");

    checkbox.type = "checkbox";
    span.textContent = taskText;

    // Styl przekreślenia po zaznaczeniu
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    // Dodanie elementów do li
    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);

    input.value = "";
});