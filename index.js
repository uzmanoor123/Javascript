// let smallRoom = prompt("Enter number of smallRooms: ");
// let largeRoom = prompt("Enter number of largeRooms: ");
// let smallCost = smallRoom * 10;
// let largeCost = largeRoom * 15;
// let totalCost = smallCost + largeCost;
// let tax = totalCost * 15 /100;
// let grandTotal = tax + totalCost;
// console.log("small room cost: $" +smallCost);
// console.log("large room cost: $" +largeCost);
// console.log("cost before tax: $" +totalCost);
// console.log("cost after tax: $" +tax);
// console.log("grandTotal: $" +grandTotal);


// let arr = [7,3,30,2,15,50];
// let highestNumber = arr[0];
// let secondHighest = arr[0];
// for ( let i=0; i < arr.length ; i++)
//     if (arr[i]> highestNumber)
//     {
//        secondHighest = highestNumber;
//        highestNumber = arr[i];
//     }
//     else if (
//         arr[i] > secondHighest &&  arr[i] < highestNumber
//     )
//     {
//         secondHighest = arr[i];
//     }
    
    
//     console.log("Highest Numer is : " +highestNumber);
//     console.log("Second  highest Number is :" +secondHighest);

// let students = [
//     {name: 'Ali', marks: 90},
//     {name: 'Ahmed', marks: 70},
//     {name: 'Aiza' , marks: 75},
//     {name: 'Aleena', marks: 60},
//     {name: 'Aliza', marks: 85}
// ];
// let highestMarks = students[0];
// let secondHighestMarks ={ marks: -Infinity};
// for (let i= 1; i<students.length ; i++){
//     if(students[i].marks> highestMarks.marks)
//     {
//         secondHighestMarks = highestMarks;
//         highestMarks = students[i];
//     }
//     else if(students[i].marks > secondHighestMarks.marks && students[i].marks < highestMarks.marks)
//     {
//         secondHighestMarks = students[i];
//     }
// }
// console.log("The Highest Students : " +highestMarks.name , "And Marks is " +highestMarks.marks);
// console.log("The  Second Highest Students : " +secondHighestMarks.name , "And Marks is " +secondHighestMarks.marks);


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// let nums = [2,7,11,15]
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         for (let j=i+1; j<nums.length; j++){
//             if (target == nums[i] + nums[j]){
//                 console.log("The target value is: " +target);
//                 console.log("value of i and j : ", i, j);
//                 console.log("sum of i and j : ", nums[i] +  nums[j]);
//                 let arr= [i,j];
//                 return arr;
//             }
//         }
//     }
// };
// console.log(twoSum(nums, 9))

// const person = {
//     name : "uzma",
//     phone : "redmi",
//     city : "rwp"

// };
// const student = {
//     ...person,
//     rollNo : 1,
//     grade : 'A'
// }
// console.log(student);
// let address = person.address;
// console.log(address)
// //object destructering
// const {name} = person;
// console.log(name);

// array filter method 
// let arr = [0,5,-5,9,-3];
// var  filtered = arr.filter(function(value){
//     return value < 0;
// });
// console.log(filtered);
//with arrow method
// let arr1 = [0,5,-5,9,-3];
// var  filtered = arr1.filter(value=> value >= 0);
// console.log(filtered);
// array map method
// let arr2 = [1,2,6,8];
// let mapping = arr2.map((value) => {  
//     return value * 2;
// });
// console.log(mapping);
// let arr3 = [4,8,30,50,-5,-10,100];
// let indexing = arr3.indexOf(8);
// console.log(indexing);


// let name = prompt("Enter user name: ");
// let email = prompt("Enter user email: ");
// let password = prompt("Enter user password: ");
// let person = {
//     name: name,
//     email: email,
//     password: password
// };
// for (const [key, value] of Object.entries(person)){
//     console.log(`${key} : ${value}`);
// }

// let user = {
//     name : "uzma",
//     email : "gmail.com",
//     password: 1234,
//     age: 23
// }
// let person = {
//     ...user,
//     address: "shabbir lane rwp",
//     phoneNo: 123456789
// }
// console.log(person);
// let {name: Name, age: Age, address: Address} = person;
// console.log(Name);
// console.log(Age);
// console.log(Address)

//  let students = [
//     {name: 'Ali', marks: 90,age:20},
//     {name: 'Ahmed', marks: 70,age:14},
//     {name: 'Aiza' , marks: 75,age:16},
//     {name: 'Aleena', marks: 60,age:21},
//     {name: 'Aliza', marks: 85,age:22}
// ];
// let student = students.map(student =>{
//     console.log(student.name, student.marks)
// });
// let std = students.filter(std => {
//     return std.age < 18
// });
// console.log(std);

// Object.entries(students).forEach(([key, students]) => {
//     console.log(` Name: ${students.name}, Marks: ${students.marks}, Age: ${students.age}`);
// }
// )

// students.forEach ((students)=>{
//     for (const [key, value] of Object.entries(students)){
//         console.log(`${key}: ${value}`)
//     }
// }
// );

// nums = [1,3,3,4];
// val = 3;
// const expectedNums = nums.map(myFunction)
// function myFunction(expectedNums){
//     for(let k=0;k<nums.length;k++)
//     if( val !== nums[k]){
//         nums.push(expectedNums)
//         return expectedNums
//     }
// }
// myFunction()
// console.log(expectedNums)

// nums=[1,3,3,4];
//  const val = 3 ;
// let expectedNums=[];
// console.log(expectedNums)
// expectedNums.push(myFunction);
// function myFunction(expectedNums){
//     for(let i=0; i<nums.length; i++){
//         if(nums !==val){
//             expectedNums.sort(nums);
//             return expectedNums;
//         }
//     }
// }
// myFunction()
// let nums = [1,3,3,4];
// let val = 3;
// function myFunction(val,nums){
//     let k= 0;
//     for (i=0;i<nums.length;i++){
//         if(nums[i]!==val){
//             nums[k]=nums[i]
//             k++
//         }
//      }
//   return k;  
// }
// let result = myFunction(val, nums);
// console.log("k = " +result);
// console.log("The updated array is " +nums)

// let num = [1,3,3,4];
// let value = 3;    
//     for (i=0;i<num.length;i++){
//         if(num[i]===value){
//           num.splice(i, 1) ;
//           i--;
//         }
//      }
    
// console.log("The updated array is" +"[" +num +"]");
// let x = 121;
// let convertString = x.toString();
// let reverseString = convertString.split('').reverse().join("");
// function isPalindrome(){
//     for(let i = 0; i< convertString.length; i++ ){
//     if(convertString[i] !== reverseString[i] ){
//         console.log("This is not a palindrome number." )
//         return false;
//     }
// }
// console.log("This is palindrome numbers")
// return true;
// }
// isPalindrome();

// var isPalindrome= function(x){
//     if( x<0 )
//         return false
//     let num = x;
//     let rev = 0;
//     while (x>0){
//         let dig = x%10;
//         rev = rev * 10 + dig;
//         x = Math.floor(x/10 );
//     }    
//      return num === rev;

// }
// find last word length in string
// let s = " hello World Hello ";
// let str = s.trim()
// let splittingArr = str.split(" ");
// let res = splittingArr.length-1
// console.log(res)

// let s = " hello Worl ";

// let str = s.trim();

// let splittingArr = str.split(" ");

// let lastWord = splittingArr[splittingArr.length - 1];

// let res = lastWord.length;

// console.log(res);

// var lengthOfLastWord = function(s) {

//     let words = s.trim().split(" ");

//     return words[words.length - 1].length;

// };
// console.log(lengthOfLastWord("hello worl thisi"));
// power of two
// var isPowerOfTwo = function(n) {
//     if(n<=0){
//         return false
//     }
//     while (n %2== 0){
//         n = n/2  
//     }
//     return n===1
// }
// console.log(isPowerOfTwo(16))

//  console.log(canConstruct("aab", "bba") )
// var canConstruct = function(ransomNote, magazine) {
//     for(let i = 0; i<ransomNote.length; i++){
//         if(magazine.includes(ransomNote[i])){
//             magazine = magazine.replace(ransomNote[i], "")
//         }
//        else {
//         return false
//        }
//     }
//      return true
// };
// console.log(canConstruct("aab", "baa"));


// var plusOne = function(digits) {
//      let number = BigInt(digits.join(''));
//      number++;
//      return Array.from(number.toString(), Number);
// };
// console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));
// var plusOne = function(digits){
//     let carry = 0;
// for(let i = digits.length-1;i>= 0; i--){
//     let sum;
//     if(i===digits.length-1){
//       sum =  digits[i] + 1 + carry
//     }
//     else{
//          sum = digits[i] + carry
//     }
//     digits[i] = sum % 10
//     carry = Math.floor(sum/10)
// }
// if(carry ===1 ){
//     digits.unshift(1)
// }
// return digits
// }
// console.log(plusOne([9,8,9]))

// var differenceOfSums = function(n, m) {
//      let num2Sum = 0 ;
//      let num1Sum = 0 ;
//     for(let i = 1;i<= n;i++){
     
//         if (i % m === 0 ){
//              num2Sum += i;
//         }
        
//         if(i% m!==0 ){
//             num1Sum+= i
//         }
//     } 
//     let num2= num2Sum;
//       let num1 = num1Sum
//     return num1-num2
// };
// console.log(differenceOfSums(10,3))

// var kidsWithCandies = function(candies, extraCandies) {
//     let arr = []
//     let max = Math.max(...candies)
//     for(let i = 0; i< candies.length;i++){
//         if(candies[i]+extraCandies >=max){
//          arr[i] = true
//         }
//         if(candies[i]+extraCandies< max){
//            arr[i] = false
//         }
//     }
//     return arr
// };
// console.log(kidsWithCandies([12,1,12], 10))

// var kidsWithCandies = function(candies, extraCandies) {
//       let arr = [];
//     let max = 0;
//     for(let m = 0;m<candies.length;m++ ){
//         if(candies[m]>max){
//             max = candies[m]
//         }
//     }
  
//     for(let i = 0; i< candies.length;i++){
//         if(candies[i]+extraCandies >=max){
//          arr[i] = true
//         }
//         if(candies[i]+extraCandies< max){
//            arr[i] = false
//         }
//     }
//     return arr
// };
// console.log(kidsWithCandies([2,3,5,1,3], 3))
// var kidsWithCandies = function(candies, extraCandies) {
//       let arr = [];
//        let max = Math.max(...candies)
//        for(let i = 0;i<candies.length;i++){
//         arr.push(candies[i]+extraCandies>=max)
//        }
//        return arr
// };
// console.log(kidsWithCandies([2,3,5,1,3], 3))

// var argumentsLength = function(...args) {
//      let arr=[]
//      for (let i= 0;i<arr.length;i++){
//       arr.push(args[i].length)
//      }
//       return arr
// };
// console.log( argumentsLength([1,2,3]))

// var addTwoPromises = async function(promise1, promise2) {
//     let num1 = await promise1
//     let num2 = await promise2 
//     return num1+num2

// };
// addTwoPromises(
//   new Promise(resolve => setTimeout(() => resolve(10), 50)),
//   new Promise(resolve => setTimeout(() => resolve(-12), 20))
// )
// .then(result => {
//     console.log(result);
// });

// var majorityElement = function(nums) {
//     let count = {};
//     for(let i=0;i<nums.length;i++){
//         if(count[nums[i]]){
//             count[nums[i]]++
//         }
//         else{
//             count[nums[i]]=1
//         }
//         if(count[nums[i]]>nums.length/2){
//             return nums[i]
//         }
//     }
//     console.log(nums)
// };
// console.log(majorityElement([2,2,1,1,1,2,2]))

// var finalValueAfterOperations = function(operations) {
//     let x= 0;
//     for(let i=0; i<operations.length; i++){
//         if(operations[i].includes("++")){
//             x++
//         }
//         if(operations[i].includes("--")){
//             x--
//         }
//     }
//     return x

// };
// console.log(finalValueAfterOperations(["x++","x--","++x"]))

// var numJewelsInStones = function(jewels, stones) {
//     let count = 0;
//     for(let i=0;i<stones.length;i++){
//         if(jewels.includes(stones[i])){
//             count ++   
//         }
//     }
//      return count
// };
// console.log(numJewelsInStones('aAA'),('aAaAbb'))

// var findClosest = function(x, y, z) {
//     let dist1 = Math.abs(x-z)
//     let dist2 = Math.abs(y-z)
//     if(dist1<dist2){
//         return 1
//     }
//     else if (dist2<dist1){
//         return 2
//     }
//     else{
//         return 0
//     }
// };
// console.log(findClosest(2,7,5))

// var numIdenticalPairs = function(nums) {
//     let count = 0
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]==nums[j]){
//                 count++
//             }
//         }
//     }
//     return count
// };
// console.log(numIdenticalPairs([1,2,3,1,1,3]))

// var maximumWealth = function(accounts) {
//     let maxWealth = 0;
//     for(let i=0; i<accounts.length;i++){
//         for(let j=0;j<accounts.length[i];j++){
//             let sum = 0;
//             sum = sum+accounts[i][j]  
//         }
//         if(sum > maxWealth){
//             maxWealth = sum;
//         }
//     }
//     return maxWealth;
// };
// console.log(maximumWealtth([[1,2,3],[3,2,1]]))

// var shuffle = function(nums, n) {
//     let result = [];
//     for (let i= 0;i<n; i++){
//       result.push(nums[i])
//       result.push(nums[i+n])
//     }
//     return result
// };
// console.log(shuffle([2,5,1,3,4,7]))

// let nums = [1,2,3,4]
//  let result
// for(let i=0;i<nums.length; i++){
//      result= [...nums].reverse();
// }
// console.log(result)

// import express from 'express'
// const app = express()

// app.listen(3000, ()=>{
//      console.log("server is running on port 3000")
// })

// const express = require('express')
// const app = express()

// app.listen(3000, () => {
//   console.log('Server is running on 3000')
// })
// app.get('/', (req,res)=>{
//      res.send("hello from node api")
// })

// var findWordsContaining = function(words, x) {
//     let result=[]
//     for(let i=0;i<words.length;i++){
//       if(words[i].includes(x)){
//         result.push(i)
//       }
//     }
//     return result
// };
// console.log(findWordsContaining(['leetcode', 'code'],'e'))

// var reversePrefix = function(word, ch) {
//     let index = word.indexOf(ch);
//     if(index === -1){
//       return word
//     }
//     let ans = ""
//     for(let i = index; i>=0;i--){
//       ans += word[i]
//     }
//     for (let i = index+1; i<word.length;i++){
//       ans += word[i]
//     }
//     return ans
// };

// var fizzBuzz = function(n) {
//    let answer = [];
//    for(let i = 1; i<=n;i++){
//     if(i%3==0 && i%5===0){
//         answer.push("fizzBuzz")
//     }
//     else if(i%3===0){
//         answer.push("fizz")
//     }
//     else if(i%5==0){
//         answer.push("Buzz")
//     }
//     else{
//         answer.push(i.toString())
//     }
//    } 
//    return answer
// };
// console.log(fizzBuzz(5))

// var minOperations = function(nums, k) {
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i]
//     }
//     for(sum%k!==0){
//         sum = sum-1;  
//         counter = sum 
//     }
//      if (sum%k==0){
//         return 0
//     }
//     return sum
// };

var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]") 
};