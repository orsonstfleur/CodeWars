Write a function getDrinkByProfession/get_drink_by_profession()
that receives as input parameter a string, and produces outputs according to the following table:

function getDrinkByProfession(param){
  let drinks = param.toLowerCase()
    if(drinks == "Jabroni"){
    return "Patron Tequila"
  }else if(drinks == "School Counselor"){
    return "Anything with Alcohol"

  }else if(drinks ==  "Programmer"){
     return "Hipster Craft Beer"

  }else if(drinks == "Bike Gang Member"){
     return "Moonshine"

  }else if(drinks == "Politician"){
     return "Your tax dollars"

  }else if(drinks == "Rapper"){
     return "Cristal"

  }else if(drinks !== "School Counselor" || "Jabroni" || "Programmer" ||  "Bike Gang Member" || "Politician" || "Rapper" ){
    return "Beer"
  }
}
