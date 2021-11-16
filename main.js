'use strict';
document.querySelector('#push').onclick =
    function () {
        if (document.querySelector('#newtask input').
            value.length == 0) {
            alert("Please enter a task");
        } else {
            document.querySelector('#tasks').innerHTML +=
                `<div class="task">
                 <span id="taskname">
                 ${document.querySelector('#newtask input').value}
                 </span><button class="delete">X</button></div>`;
            
            let currentTasks = document.querySelectorAll('.delete');

            for (let i = 0; i < currentTasks.length; i++){
                currentTasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }

             let tasks = document.querySelectorAll('#taskname');

            for (let i = 0; i < tasks.length; i++){
                tasks[i].onclick = function () {
                    this.classList.toggle('completed');
                }
            }

            document.querySelector('#newtask input').value = "";
        }
}