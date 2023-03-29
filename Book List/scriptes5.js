// ES5 function constructor version
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
    // console.log(book, bookList, row)
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

// delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// clear input fields
UI.prototype.clearInputFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

// Local storage constructor
function StoreData(){}

// method for fetching data from the local storage
StoreData.prototype.getBook = function(){
    let books = [];
    // checking if data exist
    if(localStorage.getItem('books') !== null){
        // converting data to array of objects
        books = JSON.parse(localStorage.getItem('books')); 
    }

    return books;
}

// object for storing data
const storeData = new StoreData();

// method for adding data to the local storage
StoreData.prototype.addBook = function(book){
    // fetching data from local storage
    const books = storeData.getBook();
    // pushing data in the array
    books.push(book)

    // storing data in the local storage
    // converting to stringified json array to store
    localStorage.setItem('books', JSON.stringify(books))
}

// method for displaying data in ui after fetching from the local storage
StoreData.prototype.displayBooks = function(){
    // fetching data from local storage
    const books = storeData.getBook();
    // user interface
    const ui = new UI();

    books.forEach(function(book){
        // adding book to ui
        ui.addBook(book);
    })
}

// method for removing data from the local storage
StoreData.prototype.removeBook = function(isbn){
    // fetching data
    const books = storeData.getBook();

    // running for loop to remove the book
    books.forEach(function(book, index){
        // checking if the desired book found
        if (book.isbn === isbn){
            // deleting the book from array
            books.splice(index, 1);
        }
    })
    // resetting local storage
    localStorage.setItem('books', JSON.stringify(books));
}

// event listener for displaying data from storage
document.addEventListener('DOMContentLoaded', storeData.displayBooks);

// Event Listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e){
    // getting form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate UI
    const ui = new UI(); 

    // instantiate Store Data
    const storeData = new StoreData()

    // Validation
    if(title === '' || author === '' || isbn === ''){
        // error alert
        ui.showAlert('please fill in all fields', 'error');
    }else{
        // add book to list
        ui.addBook(book);

        // add book to local storage
        storeData.addBook(book);

        // success text
        ui.showAlert('Book Added', 'success');

        // clear input fields
        ui.clearInputFields();
    }

    // console.log(book);
    e.preventDefault();
})

// event listener for deleting book

// gets booklist
const bookList = document.getElementById('book-list');

bookList.addEventListener('click', function(e){

    // ui object
    const ui = new UI();

    // object for storing data
    const storeData = new StoreData();

    // deleting book from the ui
    ui.deleteBook(e.target);

    // getting isbn value
    const isbn = e.target.parentElement.previousElementSibling.textContent;
    // deleting book from the local storage
    storeData.removeBook(isbn);

    // shows alert
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
})