// UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

console.log(form);

// load event listeners
loadEventListeners();

// load event listeners
function loadEventListeners(){
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
}

// Add Task
function addTask(e){

    // gives alert if no input entered
    if(taskInput.value === ''){
        alert('No task was entered');
    }

    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node
    const textNode = document.createTextNode(taskInput.value);
    // append child
    li.appendChild(textNode);
    // create link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon tag
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li); 
    // clear input
    taskInput.value = '';

    console.log(li);

    // prevents default behaviour
    e.preventDefault();
}

// remove task
function removeTask(e){
    // checking if the class exists
    if(e.target.parentElement.classList.contains('delete-item')){
        // confirmation pop up
        if (confirm('Do you want to remove the task?'))
            // removing the list tag
            e.target.parentElement.parentElement.remove();
    }
}