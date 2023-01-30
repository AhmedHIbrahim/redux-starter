// -- shallow copy approaches

const person = { name: "omar", hobbies: ["swim", "run"] };

const updated = Object.assign({}, person, { age: 30 });
// or
const updated2 = {...person, age: 30}
// both are doing the same

// the drawback of this approach,
// it doesn't do a deep copy of the objects
// for example:
updated2.hobbies = ['sleep']
// both person and updated obj hobbies will be changed !!!


//  -- -- -- --
// - DEEP COPY -
//  -- -- -- --

const personUpdated = structuredClone(person);
