/* Conditionals , Controls flows (IfElse)
// 18-35 are my target

var age = prompt('what is your age?');

if( (age>=18 && age<=35) ) {
      result = 'It is my target';
      console.log(result);

}else{
      result = 'It is not my target';
      console.log(result);
}
*/

// Switch statements 
// Differentiate between weekend & weekday
// Day 0 - sunday, weekend
// Day 1 - monday, weekday
// Day 2 - tuesday
// Day 3 - wednesday
// Day 4 - thursday,weekend
// Day 5 - friday, weekend
// Day 6 - saturday, weekday


switch(5) {
      case 0:
            Text ='weekend';
            break;
      case 4:
            Text = 'weekend';
            break;
      case 5:
            Text = 'weekend';
            break;
      default:
            Text = 'weekday';
            
}
console.log(Text);

// Ternary operators of using contion
let x = 20
let y =x > 10 ?'red': 'blue';
console.log(y);

switch(y){
      case 'red':
      console.log('Color is red');
      break;
      case 'blue':
      console.log('Color is blue');
      break;
      default:
      console.log('Color is neither res nor blue');

}




