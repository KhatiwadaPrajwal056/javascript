// Object in javascript 
// Dictionaries in python

let student = {
    firstname : 'prajwal',
    lastname : 'khatiwada',
    age : 18,
    address : 'baklouri',
    studentInfo: function () {
        return this.firstname + '\n' + this.lastname + '\n'+ this.age;
    }
};    
console.log(student.firstname);
console.log(student.lastname);
console.log(student.age);
console.log(student.address);
student.age++;
console.log(student.age);
console.log(student.studentInfo());