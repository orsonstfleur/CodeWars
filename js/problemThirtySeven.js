function largestPairSum(numbers)
{
 let newNumbers = numbers.sort()
 return Math.max(...newNumbers) + Math.max(...newNumbers.pop())

}
