const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userKeyName = 'level';

const person = {
  'first name': 'Max',
  age: 30,
  'hobbies' : ['Sports', 'Cooking'],
  [userKeyName]:'..22.',
  greet: () => {
    alert('Hi there!')
  },
  1.5: 'hello'
};

person.isAdmin = true;
delete person.age;
// person.age = null;
// person.age = undefined;
const keyName = 'firstName';

console.log(person[userKeyName]);
console.log(person[1.5]);
console.log(person)
;
// person.greet();