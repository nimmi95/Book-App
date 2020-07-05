//BOOK CLASS: REPRESENTS A BOOK
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI CLASS: HANDLE UI TASKS
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "1",
      },

      {
        title: "Book Two",
        author: "Stephen",
        isbn: "2",
      },

      {
        title: "Book Three",
        author: "Robert",
        isbn: "3",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#"  class="btn btn-danger btn-sm">X</a></td>
            `;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteFields(el) {
    el.parentElement.parentElement.remove();
  }
}

//EVENT: DISPLAY BOOKS

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//EVENT: Add a Book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //Prevent Default
  e.preventDefault();

  //Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //Instatiate book
  const book = new Book(title, author, isbn);

  //Add Book to UI
  UI.addBookToList(book);

  //clear fields
  UI.clearFields();
});

//EVENT: Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  var name = e.target.innerHTML;

  if (name == "X") {
    UI.deleteFields(e.target);
  }
});
