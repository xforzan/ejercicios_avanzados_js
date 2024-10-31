function findArrayIndex(array, text) {
    for (let i=0; i<array.length; i++){
        if(array[i] === text){
            return i + 1

        }
        
    }
    return ("No nos consta en la lista.")
}

function removeItem (array,text){
     index = findArrayIndex(array,text) -1 
     array.splice(index,1)
     return array


}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Obi-Wan"))

console.log(removeItem(mainCharacters,"Anakin"))