const nums = [1, 2, 3];

// copy
const numsCp = [...nums];

// insert 4
const index = nums.indexOf(2);
const numsCp2 = [nums.slice(0, index), 4, nums.slice(index)];

// remove even numbers
const oddNums = nums.filter((n) => n % 2 !== 0);

// update evens to zero
const updatedNums = nums.map((n) => (n % 2 === 0 ? 0 : n));
