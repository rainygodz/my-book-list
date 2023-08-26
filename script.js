const openModalBtn = document.querySelector("#open-modal");
const modalWindow = document.querySelector("dialog");

const myBookList = [];

function Book(title, author, pages, read="not read yet") {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

openModalBtn.addEventListener("click", () => {
  modalWindow.style.display = "visible"
  modalWindow.showModal();
});