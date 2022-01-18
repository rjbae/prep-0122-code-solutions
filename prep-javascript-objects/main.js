const person = {
  firstName: 'LeBron',
  lastName: 'James',
  hobby: 'Basketball'
};
person.job = 'GOAT';
person.previousJob = 'prodigy';
console.log(person);

const fullName = 'The ' + "person's " + 'name ' + 'is: ' + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

const job = 'The ' + "person's " + 'current ' + 'job ' + 'is: ' + person.job + '.';
console.log(job);

const previousJob = 'The ' + "person's " + 'previous ' + 'job ' + 'is: ' + person.previousJob + '.';
console.log(previousJob);

console.log(person);
