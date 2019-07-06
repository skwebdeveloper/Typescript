// TYPRSCRIPT BEGIN

// function log(message){
//    console.log(message);
// }
//
// var message = "Hello to this Angular World";
//
// log(message);

//------------------------------------------------------------------------------

// Declaring variables

// function dosomething(){
//   for(var i= 0; i<5 ; i++){
//     console.log(i);
//   }
//   console.log('Finally' + i);
// }
//
// dosomething();

// Types

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlack = 2;
//
// enum Color {Red = 0 , Green = 1 , Black = 2};
// let backgroundColor = Color.Red;

//------------------------------------------------------------------------------

// Type assertion

// let message;
// message = 'abc';
// 1. let nowmesage = (<string>message).endsWith('c');
// 2. let nowmesage = (message as string).endsWith('c');

//------------------------------------------------------------------------------

// Arrow function
// let anything = (message) => {
//   console.log(message);
// }

//------------------------------------------------------------------------------

// Interfaces

// interface Point{
//   x : number,
//   y: number,
//   z: 'string'
// }
//
// let animation = (love: Point) =>{
//   // ........
// }
//
// animation({
//   x:1,
//   y:324,
//   z: 'Saurabh'
// });

//------------------------------------------------------------------------------

// Class

// class Point {
//  // First two members are called field
//   x: number;
//   y: number;
//   draw() {
//    console.log('X: ' + this.x + ' Y: ' + this.y);
// }
// }
//
// let point = new Point();
// point.x = 11;
// point.y = 11;
// point.draw();

//------------------------------------------------------------------------------

// Constructor

// class Point {
 // First two members are called field
// x: number;
// y: number;
//
//   constructor(x: number , y: number){
//         this.x = x;
//         this.y = y;
// }
// draw() {
//    console.log('X: ' + this.x + ' Y: ' + this.y);
// }}
// let point = new Point(1,12);
// point.draw();
