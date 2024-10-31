function swap (array,num1,num2) {
    const change= array[num1]
    array[num1] = array[num2]
    array[num2] = change

    return array
}

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

console.log(swap(fantasticFour,1,3))