/*this is an object* */
let car = {

manufacturer: 'Honda',
colour: 'red',
age: 20,
wheels: 4

}


function swapout(){

    car.manufacturer ='Jaguar';
    car.colour = 'black';
    car.age = 30;

}

swapout();

console.log(car.manufacturer);
console.log(car.colour);
console.log(car.age);
console.log(car.wheels);

