// Given an array of positive integers (the weights of the people),
// return a new array/tuple of two integers, where the first one is
// the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
  //your code here
     rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

}
