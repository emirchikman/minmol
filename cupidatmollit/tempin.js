const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
];

// Custom sort function
const sort = (arr) => _.sortBy(arr, 'user', 'age');

// Sorting by user first, then by age
const sortedUsers = sort(users);

console.log(sortedUsers);
