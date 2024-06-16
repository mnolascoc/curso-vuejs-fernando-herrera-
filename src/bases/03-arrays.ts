export const numbersArry = [1, 2, 4, 5];
numbersArry.push(6);
console.log(numbersArry);

const array2 = [...numbersArry];
console.log(array2);

const array3 = numbersArry.map((value) => value);
