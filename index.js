// functionscuberGreetingForFeet // checks if distance is less than 400 and gives tips if true
// and if distance is  
function scuberGreetingForFeet(distance){
  
  if (distance <= 400){
    return `This one is on me!`
  }else if(distance < 2500){
    return `I will gladly take your thirty bucks.`
  }else {
    return `No can do.`
  }
}

console.log(scuberGreetingForFeet(401))



function ternaryCheckCity(city){
 
  return city === "NYC" ? `Ok, sounds good.` : `No go.`
}
console.log(ternaryCheckCity("Pittsburgh"))




function switchOnCharmFromTip(tip){
  
  switch (tip){
    case `generous`:
      return `Thank you so much.`
      break;
    case `not as generous`:
      return `Thank you.`
      break;
    default:
      return `Bye.`  
  }
}
console.log(switchOnCharmFromTip(`not as generous`))











// if statement

// const age = 30;

// let isAdult;

// if (age >= 18) {
//     isAdult = true;
// } else {
//     isAdult = false;
// }

// console.log(isAdult)

// // ternary expressions

// const Age = 6;

// let isChild;

// Age >= 6 ? (isChild = true) : (isChild = false);

// console.log(isChild)

// // or

// const isChild = age >= 6 ? true : false;


// const age = 17;

// const isAdult = (age >= 18)? true : false;

// const canWork = (age >= 16) ? (1 === 1) : (1 !== 1);

// const canEnlist = (isAdult ? true : false)

// console.log(canEnlist)
// console.log(canWork)
// console.log(isAdult)

//nested if statement

// const age = 27;

// let isAdult, canWork, canEnlist, canDrink;

// if (age >= 16) {
//   canWork = true;

//   if (age >= 18) {
//     isAdult = true;
//     canEnlist = true;

//     if (age >= 21) {
//       canDrink = true;
//     }
//   }
// }

// console.log(canEnlist)

// // switch 

// const order = 'cheeseburger';

// let ingredients;

// switch (order) {
//     case 'cheeseburger':
//         ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
//         break;
//     case 'hamburger':
//         ingredients = 'bun, burger, lettuce, tomato, onion';
//         break;
//     case 'malted':
//         ingredients = 'milk, ice cream, malted milk powder';
//         break;
//     default:
//         console.log("Sorry, that's not on the menu right now.");
//         break;
// }


// // assign same set of statements to multiple case
// // If it contains anything other than a number
 
// const age = 15;

// let isTeenager;

// switch (age) {
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//         isTeenager = true;
//         break;
//     default:
//         isTeenager = false;
// }


// const age = 5;

// let isAdult, canWork, canEnlist, canDrink;

// switch (true) {
//     case age >= 21:
//         canDrink = true;
//     case age >= 18:
//         isAdult = true;
//         canEnlist = true;
//     case age >= 16:
//         canWork = true;
// }

// console.log(canDrink)

// const truthyValue = 'This value is truthy.';
// const falseyValue = 0;

// console.log( !!!!truthyValue)