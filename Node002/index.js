const superheroes = require('superheroes');
const supervillains = require('supervillains');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var superhero1 = superheroes.random();
console.log(superhero1);
//=> 'Spider-Ham'

var supervillain1 = supervillains.random();
console.log(supervillain1);
