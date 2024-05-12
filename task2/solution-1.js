/*
Задание 1

Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг,
 а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке,
 выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке,
 выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того,
 есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов;
в противном случае выбрасывайте ошибку.
 */

class Book {

    #title = "";

    constructor(title) {
        this.#title = title;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }
}

class Library {

    #allBooks;
    #result;

    constructor(books) {
        let originalLength = books.length;
        this.#allBooks = new Set(books.map(book => book.title));
        if (originalLength > this.#allBooks.size) {
            throw new Error("Duplicates was found, remove them, and try again");
        }
        this.#result = books;
    }

    get allBooks() {
        return this.#allBooks;
    }

    set allBooks(value) {
        this.#allBooks = value;
    }

    get result() {
        return this.#result;
    }

    set result(value) {
        this.#result = value;
    }

    addBook(title) {
        if (this.#allBooks.has(title)) {
            throw new Error(`Book with title ${title} already exists`);
        }

        this.#allBooks.add(title);
        this.#result.push(new Book(title));
    }

    removeBook(title) {
        if (!this.#allBooks.has(title)) {
            throw new Error(`Book with title ${title} not exists`);
        }
        this.#allBooks.delete(title);
        let index = this.#result.findIndex(book => book.title === title);
        this.#result.splice(index, 1);
    }

    hasBook(title) {
        return this.#allBooks.has(title);
    }
}

let book1 = new Book("BookA");
let book2 = new Book("BookB");
let book3 = new Book("BookC");
let book4 = new Book("BookA");
let book5 = new Book("BookD");

let library = new Library([book1, book2, book3, book5]);
console.log(library);

// library.addBook("BookA");
library.addBook("BookE");
library.removeBook("BookE");
// library.removeBook("BookE");
console.log(library.hasBook("BookC"));
console.log(library.hasBook("BookE"));
