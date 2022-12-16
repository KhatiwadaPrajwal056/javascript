
function ageInDays() {
      var name = prompt('Enter your name');
      var a = prompt('Enter your birth year');
      var b = prompt('Enter your birth month');
      var c = prompt('Enter your birth date');
      var d = (2076-a)*365;
      var e = (12-b)*30;
      var ageInDayss = (d+e+30-c+3);
      var h1 = document.createElement('h1');
      var textAnswer = document.createTextNode( name + ' You are ' + ageInDayss + 'days old.');
      h1.setAttribute('id', 'ageInDays');
      h1.appendChild(textAnswer);
      document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
      document.getElementById('ageInDays').remove();

}
