// const hello="Hi world";
// console.log(hello);
// const input= document.querySelectorAll("input");
// console.log(input);
// input.forEach(input => {
//     console.log(input)
// })
 // lesson 3
//  const  square= (width:number)=> {
//     return width*Math.PI;
//  }
// console.log(square(34));
// if want to specify which type of parameter use parameter: type
// lesson 4
// var students=[
//     ["ka",343]
// ]
// students.push("hello",ewr)
// students.push(["heng","sdfh"])
// console.log(students)
// can't change types of array after declare

// interface User {
//     name: string,
//     age: number,
//     isSingle: boolean,

// }
// var user: User={
//     name: "heng",
//     age: 12,
//     isSingle: true,
// }
// u can set types of properties in object beforehand by using interface

// var greeting=(parameter1: number, parameter2: string, parameter3:? number| string=10): void=>{
// console.log(parameter1,parameter2,parameter3);

// }
// greeting(12,"fsdfsf",233)
// for parameter in function u can use | to set it can be either types, if with ? then it is condition it return if it true
// if function with parameter not return with value then it is a void
// type StringOrBoolean= boolean|string;
// const hello=(
//     user:{
//         name: string,
//         age: number,
//         isSingle: StringOrBoolean,
//     }
// )=>{
// console.log(`This is my ${user.name} he is ${user.isSingle}`);
// }
// const hi= document.querySelector("input")!;
// console.log(hi.type);
// when select element if there are attribute inside, ts will say it may be null cuz it can not check with html file
//so just use ? in log or ! after select
// classes:
