/*Testing scopes of variables*/

let productID = 10;
let dave = 5;
let myName = 'tim';
function showProductID(value1, value2) {
    let math = value1 * value2 * 5;

    return math; /** */
    


}




let newcode = showProductID(productID,dave); 
 /*these values can be real numbers or the variables.  
 It is passing these values is now feeding a value of productID or Dave into the function. The Func wil then do something with it* */

console.log('show me the contents of newcode ', newcode); /*This will output the variable newcodes value* */
console.log('show me the product Id ', productID);



let message1='hi';
let message2 ='hello';

function changeMessage(a,b) 
{

    message1 ='Bye';
    message2 ='Leave';
}

changeMessage();
console.log('show me the message :', message1, message2);





        

