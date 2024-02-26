// let names: string [] = ["Ayesha" , "Bisma" , "Alisha"];
//let message: string = "Let’s celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.";
//console.log(`Dear ${names[0]}, ${message}.`);
//console.log(`Dear ${names[1]}, ${message}.`);
//console.log(`Dear ${names[2]}, ${message}.`);

//Task 15: Changing Guest List
// let cannotAttend : string = "Bisma";
//console.log(cannotAttend + " " ,"can not attend the dinner.")
// let newGuest : string = "Hiba"
// names [names.indexOf(cannotAttend)] = newGuest
 
//console.log(names)

//names.map((items) =>
//console.log(`Dear ${items}, you are invited to the dinner.`)
//);

//Task 16 : More Guests

//let invitation : string ="I found a bigger dinner table" ;

//console.log(`Dear ${names[0]}, ${invitation}.`);
//console.log(`Dear ${names[1]}, ${invitation}.`);
//console.log(`Dear ${names[2]}, ${invitation}.`);

// let nameBeg : string ="Manisha"
// names.unshift(nameBeg)
//console.log(names);

// let middleName : string = "Khadija"
// let middleIndex = names.length/3
// names.splice(middleIndex,0,middleName)
//console.log(names);

// names.push("Fiza")
//console.log(names);

//let message : string = "You are cordially invited to a dinner party at my place. Join us for a night of great food and even better company."
//names.map((items) =>
//console.log(`Dear ${items}, ${message}`)
//);

//Task 17 : Shrinking guest list

// console.log("I just found out  that my new dinner table won't arrive in time for the dinner, and I have space for only two people for dinner.")

// while (names.length > 2) {  
//    const removedname = names.pop();
//    console.log(`Sorry ${removedname}, you are not invited anymore`);
// }

// names.forEach((names) => {
//    console.log(`Dear ${names}, You are still invited to the dinner.`)
// });

// // names.pop();
// // names.pop();

//  console.log(`"Final guest list:", ${names}`);


// Task 19 

let invitation : string [] = ["Manisha" , "Khadija"]
let count_invitations : number = invitation.length

console.log(`${count_invitations} peoples will attend the dinner.`)
