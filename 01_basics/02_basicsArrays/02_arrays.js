const marvle_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvle_heros.push(dc_heros)

// console.log(marvle_heros);
// console.log(marvle_heros[3][1]);

// const allHeros = marvle_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvle_heros, ...dc_heros]

// console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6],7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Nitin"));
console.log(Array.from("Nitin"));
console.log(Array.from({name: "Nitin"})); // interesting