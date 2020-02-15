// // Problem #1
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
//
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16


const areaOrPerimeter = function(l , w) {
if(l===w){
  var area= l*w
  return area
}else{
 var perimeter= 2*(l+w)
  return perimeter
}

};
