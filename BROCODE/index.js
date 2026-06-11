//console.log("HELLO HELLO")
//console.log("second line")
//window.alert("HACKED")
//window.alert("GO BACK")
//THIS IS COMMENT 
//document.getElementById("h1").textContent="HELLO";
//document.getElementById("p1").textContent="lalalala";


//1.declaration let x;
//2.assign x=100;
//let x=123;
//console.log(x)
// let age=25;
// console.log(age);
// let price=10101;
// console.log(price);
// console.log(`you are ${age} yrs old`);
// document.getElementById("h1").textContent="HELLOLOLO";
// console.log(typeof age);
// console.log(`the price is ${price}`);
// console.log(typeof price);
// let name="ABI KHADKA";
// console.log(typeof name);
// let email="abhi@gmail.com";
// console.log(`your mail is ${email}`);
// let online=true;
// console.log(`bro is online ${online}`);


//VARIABLE
// let fullname="ABI KHADKA";
// let age=18;
// let student=true;
// document.getElementById("p1").textContent=`your name is ${fullname}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`you are a student ${student}`;


//ARTHEMETIC OPERATIONS
// let students=30;
// students=students*2;
// students+=2;
// students++; //increment
// students--;//decrement
// console.log(`the number of students are ${students}`);
// document.getElementById("p1").textContent=`there  are ${students} students in the class`;


//INPUT
// let username;
// username=window.prompt("WHAT IS YOUR USERNAME?");
// console.log(username);

// let username;
// document.getElementById("button").onclick=function(){
//     username=document.getElementById("name").value;
//     console.log(username)
//     document.getElementById("h1").textContent=`hello ${username}`;
// }

//TYPE CONVERSION
// let x="55";
// x=Number(x);
// console.log(x);
// let x="pizzza";
// let y="pizza";
// let z="pzza";
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//CONSTANT
// const pi=3.14;
// let radius;
// let circumference;
// document.getElementById("click").onclick=function(){
//     radius=document.getElementById("radius").value;
//     radius=Number(radius);
//      circumference=2*pi*radius;
//     circumference=Number(circumference);
//     document.getElementById("h1").textContent=`the circumference is ${circumference}`;
//     }


//COUNT PROGRAM
// const DECREASE= document.getElementById("id1");
// const RESET= document.getElementById("id2");
// const INCREASE= document.getElementById("id3");
// const countt= document.getElementById("labell");
// let count= 0;
// INCREASE.onclick=function(){
//     count ++;
//     countt.textContent=count ;
// }
// DECREASE.onclick=function(){
//     count --;
//     countt.textContent=count ;
// }
// RESET.onclick=function(){
//     count=0;
//     countt.textContent=count;
// }
//RANDOM NUMBER
// let rand=Math.floor(Math.random() *6);
// console.log(rand);
// const max=100;
// const min=50;
// let ola=Math.floor(Math.random()*(max-min) +min);
// console.log(ola);
const roll=document.getElementById("roll");
const dis=document.getElementById("lv");
//let num=Math.floor(Math.random() *6);
roll.onclick=function(){
    let num=Math.floor(Math.random() *6);
    dis.textContent=num;

}



