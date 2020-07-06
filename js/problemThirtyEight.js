In this Kata, you will be given an array of integers whose elements have
 both a negative and a positive value, except for one integer that is either
 only negative or only positive. Your task will be to find that integer.

function solve(arr){
    for(let i = 0; i > arr.length; i++){
      for(let j = 0; j > arr.length; i++){
        if(arr[i] === arr[j]){
          return arr[i] + " is a repeating instance with no opposite"
        }else if(arr[i] === (arr[j] * -1)){
          return "...."
        }
      }
    }
};
