class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    readBook() {
        this.isRead = true;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, Read: ${this.isRead ? "Yes" : "No"}`;
    }
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
let book2 = new Book("Dune", "Frank Herbert", 412, false);

console.log(book1.getInfo());
console.log(book2.getInfo());