let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Yay! You've got blackjack!")
    hasBlackJack = true
} else {
    console.log("You're out of the game!")
    isAlive = false
}

let age = 22
if (age <= 20) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}