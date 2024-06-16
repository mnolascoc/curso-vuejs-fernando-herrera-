const characters = ["Goku", "Vegeta", "Trunks", "Goten"];

const [goku, , trunks] = characters; //desestructuracion por posicion
console.log(goku, trunks);

const returnArray = () => {
  return [123, "ABC"] as const;
};

const [numbers, letters] = returnArray();
console.log(numbers, letters.toLocaleLowerCase());
