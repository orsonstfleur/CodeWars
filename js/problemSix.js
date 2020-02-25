// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.
// parameter- hours minutes seconds
// return- millisecond
//
// psuedo-

function past(h, m, s){
  //#Happy Coding! ^_^
  return h * 3600000 + m * 60000 + s * 1000;
}
