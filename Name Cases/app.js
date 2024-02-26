// Upper case 
var personName = "Manahil";
console.log("uppercase:", personName.toLocaleUpperCase());
// lower case
console.log("lowercase:", personName.toLocaleLowerCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
