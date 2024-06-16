import { Hero } from "../data/heroes";
import { getHeroById } from "./07-import-export";
// console.log("Init");

// new Promise((resolve, reject) => {
//   //console.log("cuerpo de la promesa");
//   resolve("se cumplio la promesa");
//   //reject("No se cumplió la promesa");
// })
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));

// console.log("Fin");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
        return;
      }
      reject("Heroe no encontrado con el id " + id);
    }, 1500);
  });
};

getHeroByIdAsync(100)
  .then((hero) => console.log("El nombre es: " + hero.name))
  .catch((error) => console.log(error));
