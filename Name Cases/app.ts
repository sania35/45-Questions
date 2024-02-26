// Upper case 
let personName: string = "Manahil";
console.log("uppercase:", personName.toLocaleUpperCase());

// lower case
console.log("lowercase:", personName.toLocaleLowerCase());

// title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase())); 