function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician:string[] = ["Hamid","Ubaid","Shayan"];
// show_magicians(magician)
// Question 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["Huzaifa", "Ahmed", "Ahsan"];
// make_great(magicians2)
// show_magicians(magicians2)
// Question 43 : Unchanged Magicians
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
var magicians3 = ["Huzaifa", "Ahmed", "Ahsan"];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
