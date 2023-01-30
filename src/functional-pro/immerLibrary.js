import { produce } from "immer";

const book = { name: "Harry Potter" };

function publish(book) {
  produce(book, (bookObj) => {
    bookObj.isPublished = true;
  });
}

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);
