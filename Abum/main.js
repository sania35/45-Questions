function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Aur", "Tu hai kahan");
console.log(album);
album = makeAlbum("Atif Aslam", "Tu jhoom");
console.log(album);
album = makeAlbum("Nazia Hussain", "Aap jesa koi");
console.log(album);
