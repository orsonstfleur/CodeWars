// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.
//
// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
//
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

function pattern(n){
 var output="";
   for (var column = 0; column < n; column++) {
    for (row = 0; row < column+1; row++) {
      output += (column+1);
    }
    output += '\n'
  }
 return output.slice(0,-1);
}
