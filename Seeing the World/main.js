// Task 18: 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["Saudia Arabia", "Dubai", "America", "Paris"];
console.log("original order:", favPlaces);
console.log("Alphabetical order:", __spreadArray([], favPlaces, true).sort());
console.log("original order after sorting:", favPlaces);
console.log("Reverse alphabetical order:", __spreadArray([], favPlaces, true).sort().reverse());
console.log("original order after reversing", favPlaces);
favPlaces.reverse();
console.log("Reverse order after original original", favPlaces);
console.log("Original order after reversing", favPlaces);
console.log("Alphabetical order after original:", __spreadArray([], favPlaces, true).sort());
console.log("Reverse alphabetical order after sorting:", __spreadArray([], favPlaces, true).sort().reverse());
