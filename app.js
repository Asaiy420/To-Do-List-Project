// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the Add Task button
    document.getElementById('addTaskBtn').addEventListener('click', function() {
        // Get the value of the input field
        let taskInput = document.getElementById('taskInput');
        let taskText = taskInput.value;

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item (li) element
        let taskList = document.getElementById('taskList');
        let taskItem = document.createElement('li');

        // Set the inner HTML of the list item
        taskItem.innerHTML = `
            ${taskText}
            <button class="deleteBtn">Delete</button>
        `;

        // Append the new list item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Add an event listener to the Delete button
        taskItem.querySelector('.deleteBtn').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    });
});
