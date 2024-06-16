import heroes, { type Owner } from "../data/heroes";

//console.log(heroes, owners);

export const getHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByOwners = (owner: Owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

//console.log(getHeroById(100));
//console.log(getHeroesByOwners("DC"));
