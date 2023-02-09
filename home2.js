
function showMessage(price) { // price here is teh variable name
    document.getElementById('price').textContent= price; //price here is the html element ID as well. Dont get confused!
  }

/* -- this is my first object and embedding a function in an object
let person = {

name: 'Tim',
age: 45,
height:'185cm',
alive: true,
price: function () {
    showMessage('the show is at 1') ;
    }
};


person.price();     this runs the function - well calls it to run
console.log(person.name, person.age,person.height, person.alive,person.price);


/* 
let price = '10p'; -----varibale is set to Hi

function changeMessage(price) {
console.log('the price is ' + price);
price ='20p';
console.log('the price is ' + price);
}

changeMessage(price);
showMessage(price);
*/ 




/* this section uses a function to change a property called name in an object.*/
/*
let person = {

    name: 'Tim',
    age: 45,
    height:'185cm',
    alive: true,
    price: function () {
        showMessage('the show is at 1') ;
        }
    };
    
    function changeName() --this changes the name of Tim to Dave--
    {
 person.name = 'Daves';
    } 
 
     person.price(); ----this runs the function - well calls it to run--
     changeName(person); run the function
     console.log(person.name, person.age,person.height, person.alive,person.price); /* --print it out


     this code is passing setting up variables, creating a fucntion, then executing a function which conbines the two

     let rectangle =
     {
            a:5,
            b:10

     }
     function areaOfRectangle({a,b})
     {
        return (a * b);
     }

    let area = areaOfRectangle(rectangle)

     console.log('The area of the rectangle is  ' + area)
 */

     