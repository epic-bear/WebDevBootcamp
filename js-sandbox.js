const generateName = require("sillyname");
const superheroes = require('superheroes');

console.log(generateName() + " AKA " + superheroes.random());