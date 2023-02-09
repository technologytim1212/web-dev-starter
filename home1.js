/* This function is used to swap out the contents of a H1 tag in the main HTML

function showMessage(price) { // price here is teh variable name
    document.getElementById('price').textContent= price; //price here is the html element ID as well. Dont get confused!
  }



let price = 'UK651212601234'; //declaring the variable

price = price.substring(8); //chopping off the front two
price = Number.parseFloat(price)

showMessage(price); //calling the variable
console.log(price);

*/

//This function is used to swap out the contents of a H1 tag in the main HTML

function showMessage(price) { // price here is teh variable name
    document.getElementById('price').textContent= price; //price here is the html element ID as well. Dont get confused!
  }


/*  - playing with a basic object
let price = {

firstName: 'Tim',
lastName: 'Dunning',
age: '45'

};
showMessage(price.firstName + ' ' +price.lastName); //calling the variable
console.log(price);
*/

/* playing with double ==
let var_output = '';

if (1 == '1'){
  var_output ='1 int is eq to 100 string';
  showMessage(var_output);

}

else if (1 === '1'){
var_output ='1 int is not eq to 1 string';
showMessage(var_output);

}
*/

/* for (let i=0 ; i=10; i++) {
showMessage(i);  this is if you want it to appear in the html elemement,  it will display the last element in the loop
  console.log(i);  remember this is the console window in the browser 
}
*/

/*
let count = 0;
while (count<40){
console.log(count);
count++;
}
*/

/*let count = 5;
while (count>0){
console.log(count);
count--;
}
*/
/* -- this is a function in a function
let key = 43;
function secretKey(value) {

                let newKey = function () {
                let key = 24;
                console.log('The key value is currently', key);
                return key;

                }

  let code = value * newKey();
  console.log('The secret key is:', key) ;
  return code;

}
let secretKeyOutput = secretKey(2);

console.log(secretKeyOutput);

*/

