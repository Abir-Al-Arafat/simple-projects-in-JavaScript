// es6 class version

// class for book details
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// class for adding books to the ui
class UI{
    // method for adding book
    addBook(book){
        // getting book list
        const bookList = document.getElementById('book-list');
        // create row element
        const row = document.createElement('tr');

        // inserting book details in a row
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        // adding a row to the book list
        bookList.appendChild(row);
    }

    // method for showing alert
    showAlert(message, className){
        // creating div tag
        const div = document.createElement('div');
        // adding classes
        div.className = `alert ${className}`;

        // adding text to the div
        div.appendChild(document.createTextNode(message));

        // getting container
        const container = document.querySelector(".container");

        // getting form
        const form = document.getElementById("book-form");

        // inserting text
        container.insertBefore(div, form);

        // time limit of showing alert
        // second parameter takes time as argument in miliseconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }

    // method for clearing input fields
    clearInputFields(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    // method for deleting book
    deleteBook(target){
        // checking if the correct class pressed
        if (target.className === 'delete'){
            // removing the row
            target.parentElement.parentElement.remove();
        }
    }
}

// event listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e){
    // getting form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // creating ui object
    const ui = new UI();

    // checking if input field is empty or not
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fillup all the fields', 'error');
    }else{
        // creating object
        const book = new Book(title, author, isbn);

        // adding book to ui
        ui.addBook(book);
        // showing alert
        ui.showAlert('Book Added!', 'success');
        // clear input fields
        ui.clearInputFields();
    }

    e.preventDefault()
})

// event listener for deleting books
const bookList = document.getElementById('book-list');

bookList.addEventListener('click', function(e){
    // creating object
    const ui = new UI();

    // deleting a book
    ui.deleteBook(e.target);

    // showing confirmation
    ui.showAlert('Book Deleted Successfully!', 'success');
    e.preventDefault()
})