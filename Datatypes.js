// Data types

let yourage =18;                                        // Number

let yourName = 'prajwal '                              // String

let Name = {first: 'prajwal', last: 'khatiwada'};     //Object

let truth= true/false                                // boolean
 
let groceries= ('apple','banana');                  //array
 
let random;                                        // undefined

let nothing=null                                  // Null value



// string in java (common methods)

let fruit=('Banana,Apple,Orange,Mango');
let morefruits = 'Banana\nApple';                // New line(\n) 
console.log(morefruits);
console.log(fruit.length);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('Ban', 'App'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5));              //or (fruit(5))
console.log(fruit.split(''));              //Split by character
console.log(fruit.split(','));             //Split by comma


// Array in java(variable that holds multiple values)....And arrays are zero based in every PL

let fruits=['banana','apple','mango'];    //or fruits=new array('banana')....Also,Word after New is called Constructer
console.log(fruits[1]);                   // access value at index 1

//let ass=prompt('Your fav fruit?');
fruits[0]='orange';
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}

// Array common methods
    //Fruits
console.log('Choose one:', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits, fruits.pop(), fruits);         //Removes last items
console.log(fruits.push('berry'),fruits);         //Appends
fruits[3] = 'new fruits';                        //Same as push
console.log(fruits);
fruits.shift();                                 //Remove first element from an array
console.log(fruits);
fruits.unshift('any fruit');
console.log(fruits);                            //Add first element to an array

    //Vegetables
let vegetables = ['broccoli','onion','tomato'];
let veg= fruits.concat(vegetables);           //Combine arrays 
console.log(veg);
console.log(veg.slice(1, 7));
console.log (veg.reverse());
console.log(veg.sort());
  
//Example
let number=[2, 55, 7, 2, 8, 9, 5, 4, 9, 11, 23, 34];
console.log(number.sort(function(a,b) {return a-b}));   //For ascending   
console.log(number.sort(function(a,b) {return b-a}));   //For descending

let emptyArray = [];
for(num=0; num<= 10; num++ ) {
    emptyArray.push(num);
}
console.log(emptyArray);

    













