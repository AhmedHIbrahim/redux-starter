// -- ONCE CREATED, CANNOT BE CHANGED
// -- IN FUNCTIONAL PROGRAMMING, WE CAN'T MUTATE DATA
// -- JS is not full functional programming language.
// -- JS is multi paradigm language

// -- immutable example
let _name = 'Omar'
let newName = _name.toUpperCase()

// -- mutable example
let person = {name: 'omar'}
person.name = "Omar X"

// WHY IMMUTABILITY?
// -- PROS --
// -- predictability
// -- faster change detection
// -- concurrency

// -- CONS --
// -- Performance
// -- Memory Overhead <-- solved by structural sharing
// -- 