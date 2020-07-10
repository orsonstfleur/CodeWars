
Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  let newArr = arr.sort()
  return (newArr[0] - newArr[1]) * -1
}
