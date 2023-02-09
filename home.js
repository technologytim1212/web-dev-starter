/*this is an object* */
let car = {

manufacturer: 'Honda',
colour: 'red',

}

console.log(car.manufacturer);

function swapout(){

    car.manufacturer ='Jaguar';
    car.colour = 'black';
}

swapout();

console.log(car.manufacturer);
console.log(car.colour);