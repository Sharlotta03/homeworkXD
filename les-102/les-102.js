// const person = {
//   name: Alisa,
//   age: 19,
//   isAdmin: true
// }


// const person = {
//   sayHello(name) {
//     return `Hello ${name}`
//   },
//   age: 19,
//   isAdmin: true
// }

// console.log(person.sayHello('Alisa'))


const people = [
  {
    name: 'Alisa',
    age: 19,
    isAdmin: true
  },

  {
    name: 'Tom',
    age: 23,
    isAdmin: false
  }
]

let simplePerson = 0

for (let i = 0; i < people.length; i++) {
  if (people[i].isAdmin === true)
    simplePerson++
}
console.log(simplePerson)
