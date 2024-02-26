function makeShirt(size: string = 'Large', text: string = 'I love typescript'): void{
    console.log(`You oder a ${size}, shirt that have message : ${text}`)
}
makeShirt();
makeShirt('Medium')
makeShirt('Small','I love being me')