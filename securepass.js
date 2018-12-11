//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true;
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){
  
  for(let i = 0; i < password.length; i++){

    if(password.CharCodeAt(i) >= 65 && password.CharCodeAt(i) <= 90){
      return true
    }
  }
  return false;
}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){

  for(let i = 0; i < password.length; i++){

    if(password.CharCodeAt(i) >= String.fromCharCode(97) && (password.CharCodeAt(i) <= String.fromCharCode(122))){
      return true;
    }
    else if(password.CharCodeAt(i) < String.fromCharCode(97) || (password.CharCodeAt(i) > String.fromCharCode(122))){
      return false;
    }
  } 
}








//returns true or false if there is a numerical character
function numberCheck(password){

  for(let i = 0; i < password.length; i++){

    if(password.CharCodeAt(i) >= String.fromCharCode(48) && (password.CharCodeAt(i) <= String.fromCharCode(57))){
      return true
    }
    else if(password.CharCodeAt(i) < String.fromCharCode(48) || (password.CharCodeAt(i) > String.fromCharCode(57))){
      return false;
    }
  } 
}







//returns true or false if there is a special character in the password
function specialCheck(check){

  for(let i = 0; i < password.length; i++){

    if(password.CharCodeAt(i) >= String.fromCharCode(33) && (password.CharCodeAt(i) <= String.fromCharCode(47))){
      return true
    }
    if(password.CharCodeAt(i) >= String.fromCharCode(58) && (password.CharCodeAt(i) <= String.fromCharCode(64))){
      return true
    }
    if(password.CharCodeAt(i) >= String.fromCharCode(91) && (password.CharCodeAt(i) <= String.fromCharCode(96))){
      return true
    }
    if(password.CharCodeAt(i) >= String.fromCharCode(125) && (password.CharCodeAt(i) <= String.fromCharCode(127))){
      return true
    }
    else if(password.CharCodeAt(i) < String.fromCharCode(65) || (password.CharCodeAt(i) > String.fromCharCode(90))){
      return false;
    }
  } 
}










function passedAllChecks(){

}









//returns a string which represents the grade for your password
function grade(password){


}
