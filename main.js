

//  }
//  logger('Message');

 // chuyển thành arrow function 
 const logger =  (log) => {
  console.log(log);

 }
 logger('Message');


 // hàm sum arrow function 

 const sum = (a,b) => {

  return a + b;
 }
 console.log(sum(2,3));

// đối tượng 
const course = {
  name: 'javascript ',
  getName : function () {
      return this.name;
  }
};
console.log(course.getName());

// arrow function sử dụng để làm contructor sẽ báo lỗi
const mon = function(name,price) {
  this.name = name;
  this.price = price;
}
const jsCourse = new course('Javvascript',10000);

console.log(jsCourse);

// Bài tập
// function sumEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//           sum += arr[i];
//       }
//   }
//   return sum;
// }

const sumEvenNumbers = arr => arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
