/*
Write code in a functional style to convert the input to the output: 
 input = { tag: 'JAVASCRIPT' } 
 output = '(javascript)'
*/

// -- https://immerjs.github.io/immer/update-patterns/

let input = { tag: "JAVASCRIPT" };

function getTag(startCharacter, tag, endCharacter) {
  return `${startCharacter}${tag}${endCharacter}`;
}

const output = getTag("(", input, ")");

/*
We have a recipe object as follows: 
recipe = { name: 'Spaghetti Bolognese',
     ingredients: ['egg', 'salt'] }
     
Assuming that this object is immutable, 
write code to  

-Add a new ingredient ('cream') 
-Replace 'egg' with 'egg white' 
-Remove an ingredient ('egg')
*/

import { produce } from "immer";

let recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] };

function updateRecipe(recipe) {
  const eggIndex = recipe.ingredients.indexOf("egg");

  return produce(recipe, (recipeDraft) => {
    recipeDraft.ingredients.push("cream");
    recipeDraft.ingredients[eggIndex] = 'egg white'

  });
}

recipe = updateRecipe(recipe)