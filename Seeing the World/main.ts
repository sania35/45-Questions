// Task 18: 

let favPlaces: string [] = ["Saudia Arabia" , "Dubai" , "America" ,"Paris"];
console.log("original order:" , favPlaces);
console.log("Alphabetical order:" , [...favPlaces].sort());
console.log("original order after sorting:" , favPlaces);
console.log("Reverse alphabetical order:" , [...favPlaces].sort().reverse());
console.log("original order after reversing" , favPlaces);
favPlaces.reverse();
console.log("Reverse order after original original" , favPlaces);
console.log("Original order after reversing", favPlaces);
console.log("Alphabetical order after original:" , [...favPlaces].sort());
console.log("Reverse alphabetical order after sorting:" , [...favPlaces].sort().reverse());