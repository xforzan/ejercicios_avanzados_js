function rollDice(num) {
    const resultado =  Math.floor(Math.random()* num) +1
    return resultado
}

console.log(rollDice(10))