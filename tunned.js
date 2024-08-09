document.addEventListener("DOMContentLoaded", () => {
    const okButton = document.getElementById('ok-button');
  
    okButton.addEventListener("click", () => {
        console.log("Button clicked");

        const horarioTask = document.getElementById("input-task-horario");
        const nomeTask = document.getElementById("input-task-name");
          
        let horarioValue = horarioTask.value;
        let nomeValue = nomeTask.value;
  
        // Select the correct element based on the time value
        let taskElement;
        if (horarioValue == "06:00") {
            taskElement = document.querySelector('.task-from-input');
        } else if (horarioValue == "07:00") {
            taskElement = document.querySelector('.task-from-input-7');
        }
        
        if (taskElement && nomeValue) {
            console.log("Task Time:", horarioValue);
            console.log("Task Name:", nomeValue);
            taskElement.textContent = `${nomeValue}`;
            taskElement.style.display = 'block';
        } else {
            alert("Preencha os campos corretamente");
            // Hide all task elements if input is incorrect
         
        }
    });
});
