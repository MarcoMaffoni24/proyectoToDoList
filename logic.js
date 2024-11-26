function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // if(taskInput.value.trim() !=''){
    //     const li = document.createElement('li');
    //     li.textContent = taskInput.value;
    //     taskList.appendChild(li);
    //     taskInput.value = ''; //Para borrar lo que esta en el taskInput dsp de appendearlo a la lista
    // }
    if(taskInput.value.trim() !==''){
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function() {
            li.classList.toggle('completed');
        };

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value.trim();

        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'Eliminar';
        // deleteButton.onclick = function() {
        //     taskList.removeChild(li);
        // }

        li.appendChild(checkbox);
        li.appendChild(taskText);
        // li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}