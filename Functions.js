

  function fun() {
    ('This is a functionS');   // Creating the function  
    } 
    
    fun();    // call the function
    
    
/* Taking your name and returns something else 
    
For example, 
Name:Prajwal
Return:Hello prajwal
    
function PK() {
    var name=prompt('What is your name?');
    var result='Hello '+name;     //or for space use' '(string concatenation)
    console.log(result);
}
PK(); 


//arguements in functions
How we add two numbers in function

function ass(a,b) {
    var result=a+b ;
    console.log(result);
}
 ass(10,15); */
 

function pk (a,b){
    result= a+b;
    console.log(result);
}
pk(1,2);

// Or we can also do
let kk = (a,b) => console.log(a+b);    //Else(a+b) only & here return value will not work(or put pretesis with return)
kk(2,4);

/* We can also do
pk.forEach((pk1) => console.log(pk));  */

// Constructor Function 
function People(firstname,lastname,address){
    this.firstname=firstname;
    this.lastname=lastname;
    this.address=address;
    this.getfullname = function(){
        return (this.firstname+' '+ this.lastname);
    }
}
// Instantiate Object
let People1 = new People('Prajwal','khatiwada','Baklouri');
console.log(People1.getfullname());
 

// Single element selector
console.log(document.getElementById('name'));

// Multi element selector
console.log(document.querySelectorAll('.li'));    //Also we can use getElementByclassname/tagname

let op = document.querySelectorAll('.li');
op.forEach((li)=> console.log(li));

let ul = document.querySelector('.list');
// ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent='prajwal';
ul.lastElementChild.innerHTML='<h1>Prajwal</h1>';


/* To style in JS(for btn)

let color = document.getElementById/queryselector('.btn or any id/class');
btn.color.background='red';


let color = document.getElementById/queryselector('.btn or any id/class');
.btn.addEventListener('click',(e) => {      // 1st is event & 2nd is function that run when this event happens 
    e.preventDefult();                     //This is used to prevent flash on clicking the btn(e = arrow function)
    console.color('click');

});  */














     
    