interface Hero {
  name: string;
  age: number;
  codename: string;
  power?: string;
}

export const person: Hero = {
  name: "Tony",
  age: 45,
  codename: "Ironman",
  //power
};

const { codename, power = "no tiene poder" } = person;
console.log(codename, power);

const createHero = ({ name, age, codename, power }: Hero) => ({
  id: "1233",
  name,
  age,
  codename,
  power: power ?? "no tiene poder",
});

console.log(createHero(person));
