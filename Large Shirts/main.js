function makeShirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log("You oder a ".concat(size, ", shirt that have message : ").concat(text));
}
makeShirt();
makeShirt('Medium');
makeShirt('Small', 'I love being me');
