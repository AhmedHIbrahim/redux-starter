import { compose, pipe } from "lodash/fp";

const input = "  Hello ";
const trim = (str) => str.trim();

// -- wrap is curried function
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

//const result = wrapInDiv(toLowerCase(trim(input)));

// -- in compose read from right to left
//const transform = compose(wrapInDiv, toLowerCase, trim);

// -- instead use pipe
const transform = pipe(trim, toLowerCase, wrap("div"));
transform(input);

console.log("Hello World!");
