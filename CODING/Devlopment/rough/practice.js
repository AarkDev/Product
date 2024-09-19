

// // let color="red";

// // if(color=="red"){
// //     console.log("STOP!");
// // }
// // else if (color=="yellow"){
// //     console.log("READY");
// // }
// // else{
// //     console.log("GO");
// // }
// // let str="Apple";
// // console.log(str);
// // console.log(str.length);
// // if((str[0]=="A"|| str[0]=="a")&&(str.length>=5)){
// //     console.log(`${str} is a good string`);
// // }

// // let day=1;

// // switch(day){
// //     case 1:
// //         console.log("monday");
// //         break;
        
// //     case 2:
// //         console.log("tuesday");
// //         break;
// //     case 3:
// //         console.log("wednesday");
// //         break;
// //     case 4:
// //         console.log("thrusday");
// //         break;
// //     case 5:
// //         console.log("friday");
// //         break;
// //     case 6:
// //         console.log("saturday");
// //         break;
// //     case 7:
// //         console.log("sunday");
// //         break;

// // }

// // let name=prompt("Enter A name : ");
// // console.log(name);
// // let age=prompt("Enter A age : ");
// // console.log(age);

// // let str2 = "                hello              ";
// // console.log (str2.trim().toUpperCase());
// // let l="                I    Love    Coding         ";
// // console.log(l.trim().toUpperCase());
// // console.log(l);
// // let msg="UTKARSH SAHU ";
// // let news =msg.slice(0).replace("UTKARSH","MANSHI");
// // console.log(news);
// // console.log(msg.repeat(5));
// // let array =["Utkarsh","Manshi","Umang","Mandvi"];

// // console.log(array);

// // console.log(array.length);
// // const cars = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Audi", "Volkswagen", "Nissan", "Hyundai"];
// // console.log(cars);
// // cars.push("Bugaati");
// // console.log(cars);
// // console.log(cars.length);
// // cars.pop();
// // console.log(cars);
// // cars.shift();
// // console.log(cars);
// // cars.unshift();
// // console.log(cars);
// // let n = prompt("Enter the number of elements:"); // Initialize n
// // let array = [];

// // for (let k = 0; k < n; k++) { // Corrected for loop syntax
// //     array[k] = prompt("Enter a number: ");
// // }

// // for (let j = 0; j < n; j++) { // Corrected for loop syntax
// //     console.log(array[j]);
// // }
// // let count=0;
// // for(i=0;i<n;i++){
// //     if(array[i]>=0){
// //         console.log(array[i]);
// //         count++;
// //     }
// // }
// // console.log(count);

// // let n=prompt("Enter a number: ");
// // for(let i=1;i<=n;i++){
    
// //         console.log(i*5);
    
// // }
// // comment
// // let movie="avatar";
// // let guess=prompt("Enter your movie guess : ");
// // while((guess!=movie)&&(guess!="quit")){
// //     console.log("wrong");
// //     guess=prompt("Enter your movie guess : ");
// // }

// // let alpha=["A","B","C","D","E","F","G","H","I"];
// // for(let i=alpha.length;i>=0;i--){
// //     console.log(alpha[i]);
// // }

// // let nestedArray = [
// //     [1, 2, 3, 4, 5],
// //     [6, 7, 8, 9, 10],
// //     [11, 12, 13, 14, 15],
// //     [16, 17, 18, 19, 20],
// //     [21, 22, 23, 24, 25]
// // ];

// // for(i of nestedArray){
// //     for(j of i){
// //         console.log(j);
// //     }
// // }
// let todo=[];
// while(true){
//     let req = prompt("Enter your request : ");

//     if(req =="quit"){
//         console.log("You quit");
//         break;
//     }

    
//     if(req=="list"){
//         console.log("-------------------");
//         console.log("Your list is : ");
        
//         for(let i=0;i<todo.length;i++)
//             {console.log(i,todo[i]);}

//         console.log("-------------------");
//     }
    
//    else if(req =="add"){
        
//         let task=prompt("Enter the task you want to add :");
//         todo.push(task);
//         console.log(`Your task added is ${task}`);
       
//     }
//     else if(req=="del"){
        
//         let idx =prompt("Enter the task you want to delete :");
//         todo.splice(idx,1);
//         console.log("Task Deleted Sucessfully");
//     }

//     else console.log("Invalid Request");
//     req="Please enter your next request."

   
    
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }

// let x = prompt("Enter the value");
// x = Number(x); // Convert prompt input to number

// // Loop to remove all occurrences
// for (let i = 0; i < arr.length; i++) {
//     if (x == arr[i]) {
//         arr.splice(i, 1); // Remove element
//         i--; // Adjust index after removal
//     }   
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i]);
// }
// let x=prompt("Enter the value");
// x=Number(x);
// for(let i=0;i<arr.length;i++){
//     if(x==arr[i]){
//         arr.splice(i,1);
//         i--;
//     }   
// }
// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i]);
    
//  }

// let x = prompt("Enter a number: ");
// x = Number(x);

// let count = 0;
// let sum=0;
// while ( x !== 0) {
// let digit=x%10;
// sum+=digit;

//     x=Math.floor(x/10)// Update x by dividing it by 10
// }
// console.log(sum);

// const student={
//     name:"utkarsh sahu",
//     cgpa:9.5,
// }
// console.log(student.cgpa);
// console.log(student.name);
// student.gender;
// student.gender="male";
// console.log(student.gender);

// const classRoom={
//     aman:{
//         cgpa:11,
//         city:"lucknow"
//     },

//     ritu:{
//         cgpa:11,
//         city:"mumbai",
//     },

//     utkarsh:{
//         cgpa:9.2,
//         city:"lucknow",
//     },


// };


// console.log(classRoom);
// console.log(classRoom.aman);
// console.log(classRoom.aman.cgpa);

// const arrOfobj=[
//     {
//         name:"Utkarsh",
//         cgpa:1.9,
//         city:"Lucknow",
//     },
//     {
//         name:"Mahi",
//         cgpa:1.9,
//         city:"Delhi",
//     },
//     {
//         name:"Ishita",
//         cgpa:0.9,
//         city:"Mumbai",
//     },
//     {
//         name:"Ansh",
//         cgpa:1.9,
//         city:"Gujrat",
//     },
// ];

// console.log(arrOfobj);
// console.log(arrOfobj[0]);

// for(items of arrOfobj){
//     console.log(items);
// }


// const max =prompt("Enter the Max Range: ");
// const random = Math.floor( Math.random()*max)+1;
// console.log(`Your Maximum Range is ${max}`);

// let guess=prompt("Enter your Guess number : ");
// while(true){
// if(guess=="quit"){
//     console.log("You Quit The game");
//     break;
// }
//  if (guess==random){
//     console.log("Your guess is Correct. You Win!! Your Random Number is",random );
//     break;
// }
// else if(guess<random){
//     guess = prompt("Your hint--> Random No.is greater ");
// }
// else{
//     guess=prompt("Your Guess is too smale")
// }
// // else
// // {
// //     guess = prompt("Your Guess is Wrong.Please Try Again...");
    
// // }
// }

// function shloka()
// {
//     console.log(`Chapter 2, Verse 47 

// Your right is to perform your duty only, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.”

// This verse emphasizes the importance of focusing on one’s duties and actions without being attached to the outcomes. It’s a central teaching in the Bhagavad Gita and offers profound wisdom on how to approach life and work.

// `);
// }

// shloka();


// function rollDice()
// {
//     const num= Math.floor(Math.random()*6)+1;
//     console.log(num);
// }

// rollDice();

// function sum(n1,n2,n3,n4){
//     let avg=0;
//     avg=(n1+n2+n3+n4)/4;
//     console.log(`average of four number is ${avg}`);
// }

// sum(10,20,30,40);
// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} times ${i} is ${num * i}`);
//     }
// }

// table(2);

// function sum(n){
//     sum=0;
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     console.log(`The sum of a number from 1 to ${n} is ${sum}`);
// }

// sum(10);

// function concatArr(array){
//     let concat="";
//     for(let i=0;i<array.length;i++){
//         concat+=array[i];
//         console.log("  ")
//     }
//         return concat;
// }

// let arr =["Hi ","I ","Am ","a ","Iron Man"];
// concatArr(arr);

// let greet =function(){
//     console.log("HII I AM DEVIL");
// }
// try{
//     function greedRepeat(func,n){
//         for(let i=1;i<=n;i++){
//             func();
//         }
//     }

// }catch{
//     console.log("there is an error: ");
// }

// greedRepeat(greet,10);

// try{
//     console.log(a);
// } catch(err){
//     console.log("There is an error");
//     console.log(err);
// }

// const sum =(a,b)=>(
//     console.log(`The sum of a and b is ${a+b}`)
// );



// setTimeout(()=>sum(2,8),3000);

// let words =["Apple","Orange","Lichi","Grapes","Banana","Mango"];


// words.forEach(function up(ele){
//     console.log(ele.toUpperCase());
// });
// console.log("-----------------------------------------------------------------------------------------")
// words.forEach((ele,index,array)=>(
// console.log(ele.toUpperCase(),index,array[index+1])
// ));
// try{
//     // MAP IS USED TO CREATE NEW ARRAY WITH MODIFIED ELE OF PREVIOUS ARR
//     let newArr= words.map((ele)=>{
//    return ele.toLowerCase();
//     });
    
//     console.log(newArr);
// }catch(err){
//     console.log(err);
// }

// let arr=[10,20,30,44,50,60,70,90,11,33,5,2,8];
// let trueOrfalse=arr.every((ele)=>(ele%10==0));
// console.log(trueOrfalse);

// let minimum = arr.reduce((min,ele)=>{
//     if(min<ele){
//         return min;
//     }else return ele;
// });

// console.log(minimum);
// let arr = [1, 2, 1];
// let newArr = [];

// for(let i = 0; i < arr.length * 2; i++) {
//     if(i < arr.length) {
//         newArr[i] = arr[i];
//     } else {
//         newArr[i] = arr[i - arr.length];
//     }
// }

// console.log(newArr);
//  function creatrHelloWorld(){
//     function internal(){
//         console.log("Hello World");
//     }
//     internal();
//  }

//  creatrHelloWorld();

// function createHelloWorld(){
//     return function(){
//         return "Hello World";
//     };
// }

// let hello = createHelloWorld();
// console.log(hello());

//  function multiply(num1,num2){
//     return(BigInt(num1)*BigInt(num2)).toString();
//  }

//  let num1="1222223";
//  let num2= "12122222";
// console.log(multiply(num1,num2));


// let newArr = arr.map((ele)=>{
   
   //       return ele+1;
   
   // });
//    let arr =[1,2,3];
// let fx = function(arr){
//    let newArr=[];
//    for(let i=0;i<arr.length;i++){
//       newArr.push(arr[i]+1);
//    }
//    return newArr;
// };
// let newArr = fx(arr);
// console.log(newArr);

// function a(){
//    let x =234222888882;
//    function b(){
//       console.log("Inner : " ,x);
//    }
//    b();

// }

// function print(func,n){
//    for(let i=0;i<=n;i++){
//       func();
//    }
// }
// print(a,3);
// let fx = function(a) {
//    return a +100;
// };

// function executeFx(n) {
//    for (let i = 0; i < n; i++) {
//        console.log(fx(i)); // Call fx with current index i and log the result
//    }
// }

// // Call executeFx with a value of 3
// executeFx(10);

// const std={
//       aman:{
//          grade:"A++",
//          city:"Mumbai",
//       },
//       shardha:{
//          grade:"b",
//          city:"Pune",
//       },
//     praful:{
//       grade:"a",
//       city:"c",
//     },

// };

// for(let key in std){
//    console.log(key);
//    console.log(std[key]);
// }

// std.aman.gender;
// std.aman.gender="Male";

// console.log(std.aman);
// delete std.aman;

// const calculator ={
//    add:function(a,b){
//       return a+b;
//    },
//    sub:function(a,b){
//       return a-b;
//    },
//    mul:function(a,b){
//       return a*b;
//    },
//    div:function(a,b){
//       if(a>b)return a/b;
//       if(a<b)return b/a;
//    }

// };

// console.log(calculator.add(1,5));
// console.log(calculator.sub(1,5));
// console.log(calculator.mul(1,5));
// console.log(calculator.div(1,5));














