name = 'Hayden';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Hayden';
    console.log(name);
}

console.log('derf');
let avg = findAvg(2, 2);
console.log('final derf', avg);
function findAvg(a, b) {
    console.log('derf func block');
    var answerAvg = (a + b) /2;
    return answerAvg;
}

let fruits = ['banana', 'tangerine', 'apple'];


function showFruits() {
    let favFruit = fruits[2]
    console.log(fruits[0]);

    function showFavFruit() {
        console.log(favFruit);
    }
}

showFruits();



showFavFruit();

