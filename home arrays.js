/* Testing arrays*/ 

const values =['a','b','c', 'd','e','f'];
const newvalues = values.slice(2,5);
console.log(newvalues)

const values1 =['a','b','c', 'd','e','f'];
const newvalues1 = values1.splice(2,2);
console.log(newvalues1)
console.log(values1)

const values2 =['a','b','c', 'd','e','f'];
const newvalues2 = values2.splice(1,0,'hello','tim','emma');


console.log(values2);

const set =values.filter(function(item)
{
return item > 'd';

});
console.log('the set output is :', set)


values2.forEach(function(item){
console.log(item);
});

