# Activity-2: Build a Simple Library Management System (JavaScript)

## Objective
Practice fundamental OOP concepts: **Classes, Objects, Inheritance, Encapsulation, and Polymorphism** by building a simple Library Management System in JavaScript.

---

## Problem Statement

You are tasked to create a Library Management System using OOP principles. The system should allow:
- Adding books to the library
- Displaying available books
- Borrowing and returning books

---

## Instructions

### 1. Create a `Book` class
- **Attributes**: `title`, `author`, `isbn`, `isBorrowed`
- **Methods**: 
    - `borrow()`: Marks the book as borrowed
    - `returnBook()`: Marks the book as available
    - `toString()`: Returns a string representation of the book

### 2. Create a `Member` class
- **Attributes**: `name`, `memberId`, `borrowedBooks` (array)
- **Methods**:
    - `borrowBook(book)`: Adds a book to borrowedBooks if possible
    - `returnBook(book)`: Removes a book from borrowedBooks

### 3. Create a `Library` class
- **Attributes**: `books` (array of Book objects), `members` (array of Member objects)
- **Methods**:
    - `addBook(book)`: Adds a book to the library
    - `displayBooks()`: Displays all books and their status
    - `registerMember(member)`: Adds a member to the library
    - `findBook(isbn)`: Finds and returns a book by ISBN

---

## Bonus (Optional)
- Add an `EBook` class that inherits from `Book` and has an additional attribute such as `fileSize`.
- Override the `toString()` method for `EBook`.

---

## Deliverable

Create a file named `oop_library.js` and implement the above classes and methods. Test your classes by creating a few books, members, and library actions at the end of the file.

---

## Example

```js
// Example: Creating a Book
const myBook = new Book('The Hobbit', 'J.R.R. Tolkien', '978-0261103344');
console.log(myBook.toString()); // The Hobbit by J.R.R. Tolkien (ISBN: 978-0261103344) - Available
```

---

## Submission

- Commit your `oop_library.js` file to your repository named `Activity-<number>`.
- Make sure your code is commented and readable.

---
### Prepared by:
`Mathew Cris Goco` - BSIT Instructor
