const marvel_heros = ["ironman","spiderman","thor"]

const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)


const all_new_hero = [...marvel_heros,...dc_heros]

console.log(all_new_hero) //  [ 'ironman', 'spiderman', 'thor', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,8,9,[10,11,12,[13,14,15]]]

const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))

// console.log(Array.from({name: "hitesh"})) // interesting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(score1,score2,score3) //100 200 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
