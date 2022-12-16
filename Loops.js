/* While loops 


var num1=0;

while(num1<100) {
    num1+=1;
    console.log(num1);
}
*/

// For loop

for(let num1=0;num1<=100;num1++) {    // var or let
    console.log(num1);

}
let pk = [
    {
        id: 1,
        text: 'pk is hero',
        completed: true
    },
    {
        id: 2,
        text: 'pk is zero',
        completed: false
    },
    {
        id: 3,
        text: 'pk is pk',
        completed: true
    }
];
let pkJSON=JSON.stringify(pk);
console.log(pkJSON);

// For each
pk.forEach(function(pk1){
    console.log(pk1.text);
})

// For Map
let pk1text= pk.map(function(pk1){
    return pk1.text;
});
console.log(pk1text);

// For Filter
let pk1completed=pk.filter(function(pk1){
    return pk1.completed === true;
}).map(function(pk1){
    return pk1.text;
})
console.log(pk1completed);

