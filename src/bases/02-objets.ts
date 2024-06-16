export const person = {
  firstname: "Miguel",
  lastname: "Nolasco",
  age: 41,
  address: {
    city: "Lima",
    country: "Peru",
  },
}; //as const

person.age = 55;

const person2 = structuredClone(person);
const person3 = { ...person };
person2.firstname = "Deici";
console.log(person);
console.log(person2);
console.log(person3);
