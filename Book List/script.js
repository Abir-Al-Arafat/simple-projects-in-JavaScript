// Book Constructor: creates the actual book object
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor: set of prototype methods
function UI(){}

// creating a prototype
// adding book to list
UI.prototype.addBook = function(book){
    // getting the booklist container
    const bookList = document.getElementById('book-list');
    // create row element
    const row = document.createElement('tr');

    // inserting elements in the row
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `

    bookList.appendChild(row);
    console.log(book, bookList, row)
}

// show alert
UI.prototype.showAlert = function(message, className){
    // creates tag
    const div = document.createElement('div');
    // add class
    div.className = `alert ${className}`;
    // add child in div
    div.appendChild(document.createTextNode(message));

    // parent tag
    const container = document.querySelector('.container');

    // form tag
    const form = document.getElementById('book-form');

    // inserting message
    container.insertBefore(div, form);

    // time limit of showing alert
    // second parameter takes time as argument in miliseconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}

// clear input fields
UI.prototype.clearInputFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // getting form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate UI
    const ui = new UI(); 

    // Validation
    if(title === '' || author === '' || isbn === ''){
        // error alert
        ui.showAlert('please fill in all fields', 'error');
    }else{
        // add book to list
        ui.addBook(book);

        // success text
        ui.showAlert('Book Added', 'success');
        
        // clear input fields
        ui.clearInputFields();
    }

    // console.log(book);
    e.preventDefault();
})