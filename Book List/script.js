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

    console.log(ui)

    // add book to list
    ui.addBook(book);

    // clear input fields
    ui.clearInputFields();

    // console.log(book);
    e.preventDefault();
})