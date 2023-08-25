function Book(author, pages) {
  this.author = author;
  this.pages = pages;

  this.info = function() {
    return `${author}, ${pages}`;
  }
}

const book1 = new Book("Petr", 23);
console.log(book1.info());