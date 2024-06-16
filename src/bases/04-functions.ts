function greetPerson(name) {
  return "Hola " + name;
}

export const greetPersonFun = (name) => "Hola " + name;

console.log(greetPerson("Miguel"));
console.log(greetPersonFun("Mile"));

const getUserInfo = () => ({
  uuid: "abc234",
  username: "Tony001",
});

console.log(getUserInfo());

const heroes = [
  { id: 1, name: "batman" },
  { id: 2, name: "robin" },
  { id: 3, name: "superman", power: "super fuerza" },
];

const hero = heroes.find((h) => h.id === 1);
console.log(hero?.power?.toUpperCase());
