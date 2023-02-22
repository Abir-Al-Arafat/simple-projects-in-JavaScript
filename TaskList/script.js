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
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear all tasks
    clearBtn.addEventListener('click', clearAllTasks);
    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// show tasks from local storage
function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // create list element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // create text node
        const textNode = document.createTextNode(task);
        // appending node
        li.appendChild(textNode);
        // create link
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // add icon tag
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // appending link to list item
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);
    });
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

    // adding task in local storage
    storeInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = '';

    // console.log(li);

    // prevents default behaviour
    e.preventDefault();
}

// adding to the local storage
function storeInLocalStorage(task){
    let tasks;

    // checking if tasks exist
    if(localStorage.getItem('tasks') === null){
        // setting empty array
        tasks = [];
    }else{
        // parsing as json
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // pushing the task
    tasks.push(task);
    // setting item in local torage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task
function removeTask(e){
    let listElement;
    // checking if the class exists
    if(e.target.parentElement.classList.contains('delete-item')){
        // confirmation pop up
        if (confirm('Do you want to remove the task?'))
            // storing list text content
            listElement = e.target.parentElement.parentElement;
            // removing the list tag
            e.target.parentElement.parentElement.remove();
            // removing from local storage
            removeFromLocalStorage(listElement);
    }
}

function removeFromLocalStorage(taskItem){
    let tasks;

    // checking if items exist or not
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // running for loop to check if the task exists
    tasks.forEach(function(task, index){
        if (task === taskItem.textContent){
            tasks.splice(index, 1);
        }
    });

    // resetting the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
function clearAllTasks(){
    // taskList.innerHTML = '';

    // faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // clear tasks from local storage
    localStorage.clear();
}

// filter tasks
function filterTasks(e){
    // storing input value
    const inputText = e.target.value.toLowerCase();

    // storing all list items
    const collectionItems = document.querySelectorAll('.collection-item');

    // running for loop on the list items
    collectionItems.forEach(function(task){
        // storing the text
        let item = task.firstChild.textContent;
        // converting the text to lower case
        item = item.toLowerCase();

        // checking if the text matches
        if(item.indexOf(inputText)!=-1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
    console.log(inputText)
}