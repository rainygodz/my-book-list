const openModalBtn = document.querySelector("#open-modal");
const modalWindow = document.querySelector("dialog");
const addBookBtn = document.querySelector("#add-book");


const myBookList = [];


class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}


function addBookToList() {
  const form = document.querySelector("form");
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#read-status").value;

  const book = new Book(title, author, pages, readStatus);
  myBookList.push(book);
  form.reset();
}

function updateBookList() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  myBookList.forEach((book, index) => {
    const bookCardDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const readDiv = document.createElement("div");
  const buttonsDiv = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCardDiv.classList.add("book-card");
  infoDiv.classList.add("info");
  titleDiv.classList.add("title");
  authorDiv.classList.add("author");
  pagesDiv.classList.add("pages");
  readDiv.classList.add("read");
  buttonsDiv.classList.add("buttons");
  readBtn.setAttribute("id", "read");
  readBtn.setAttribute("book-id", `${index}`);
  removeBtn.setAttribute("id", "remove");
  removeBtn.setAttribute("book-id", `${index}`);

  titleDiv.textContent = book.title;
  authorDiv.textContent = book.author;
  pagesDiv.textContent = "Pages: " + book.pages;
  readDiv.textContent = book.readStatus;
  readBtn.textContent = "Read";
  removeBtn.textContent = "Remove";

  buttonsDiv.appendChild(readBtn);
  buttonsDiv.appendChild(removeBtn);

  infoDiv.appendChild(titleDiv);
  infoDiv.appendChild(authorDiv);
  infoDiv.appendChild(pagesDiv);
  infoDiv.appendChild(readDiv);

  bookCardDiv.appendChild(infoDiv);
  bookCardDiv.appendChild(buttonsDiv);

  container.appendChild(bookCardDiv);
  })

  if (!container.innerHTML) {
    const emptyMessage = document.createElement("h1");
    emptyMessage.textContent = "No books in your list yet.";
    emptyMessage.classList.add("empty-message");
    container.appendChild(emptyMessage);
  }

  const readBtns = document.querySelectorAll("#read");
  readBtns.forEach(button => {
    button.addEventListener("click", changeReadStatus);
  });

  const removeBtns = document.querySelectorAll("#remove");
  removeBtns.forEach(button => {
    button.addEventListener("click", removeBook);
  })
}

function changeReadStatus(event) {
  const bookId = event.target.getAttribute("book-id");

  if (myBookList[bookId].readStatus === "Read") {
    myBookList[bookId].readStatus = "Not read yet";
    updateBookList();
  } else {
    myBookList[bookId].readStatus = "Read"
    updateBookList();
  }
}


function removeBook(event) {
  const bookId = event.target.getAttribute("book-id");
  myBookList.splice(bookId, 1);
  updateBookList();
}


openModalBtn.addEventListener("click", () => {
  modalWindow.showModal();
});

addBookBtn.addEventListener("click", addBookToList);
addBookBtn.addEventListener("click", updateBookList);

