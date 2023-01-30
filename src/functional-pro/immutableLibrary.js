import { Map } from "immutable";

// -- drawbacks of this library
// - you have to learn the whole library to use
// - to access obj, use get
// - to assign use 'set', it returns an immutable obj
// - obj.toJS() to convert obj back to be js readable

let book = Map({ name: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
