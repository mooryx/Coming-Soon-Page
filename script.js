

function emailCheck() {
    var icon = [];
    icon = document.getElementsByClassName("err-span");
    input = document.querySelector("input");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      
      icon[0].classList.add("err-off");
      input.classList.remove("input-err");
      document.getElementById("err-msg").classList.add("err");
  
      return true;
  
    } else {
      
      
      icon[0].classList.remove("err-off");
      input.classList.add("input-err");
      document.getElementById("err-msg").classList.remove("err");
     
      
  
      return false;
  
    }
  
  }