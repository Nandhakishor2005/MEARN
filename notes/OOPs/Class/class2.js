class Book{
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;

    }
    readBook(){
        this.isRead = true;
    }
    getinfo(){
        console.log(`Title of book : ${this.title}`,`Name of author :${this.author}`,`No of pages: ${this.pages}`,`Is read : ${this.isRead}`)
    }

}
let obj1 = new Book("uwguwuw","wbhwbfh",900);
let obj2 = new Book("vydwvc","fvefg",300)

obj1.readBook();
obj1.getinfo();
obj2.getinfo();
obj2.readBook();
obj2.getinfo();
