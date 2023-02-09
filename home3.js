/* this is calling the button element */
const button_var = document.getElementById ('button') 
    /* this is listening for a button click*/

    button_var.addEventListener('click', function(){ 

    console.log('click'); /*this is recording the click to the console */
    /* now we setup the toggle on and off with the if statement controlling the class of the element* */

    const reveal_var = document.getElementById('reveal');

    if (reveal_var.classList.contains('hide-show')) {

        reveal_var.classList.remove('hide-show');
        button_var.textContent = 'Hide review';
    }
    else {
        reveal_var.classList.add('hide-show');
        button_var.textContent = 'This is a button';
    }

} );  /* this added bit closed the event listen function, without it, it will not run
The above will only add or remove the CSS from the class div. Without any CSS it will not have anything to add or remove*/




