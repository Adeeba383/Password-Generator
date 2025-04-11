

function passwordGen(){

const passwordLength = Number(document.getElementById("length").value);
const lowerCase = document.getElementById("lower");
const upperCase = document.getElementById("upper");
const Numbers = document.getElementById("number");
const Symbols = document.getElementById("symbol");

const Lower = "abcdefghijklmnopqrstuvwxyz";
const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const sym = "!@#$%^&*()-+=_[]{}\';";

    
let allowedChar="";
let password = "";

    if (lowerCase.checked){
        allowedChar += Lower;
    }
    if(upperCase.checked){
        allowedChar += Upper;
    }
    if(Numbers.checked){
        allowedChar += num;
    }
    if(Symbols.checked){
        allowedChar += sym;
    }
    if(!allowedChar) {
        document.getElementById("Password").innerHTML = "Invalid";
        
    }

    for (let i= 0; i < passwordLength; i++){
      const tired =  Math.floor(Math.random() * allowedChar.length);
      password += allowedChar[tired];
    }

    document.getElementById("Password").innerHTML = `Password: ${password}`;
  
    function resetGen(){
        document.getElementById("Password").innerHTML = `Password: `;
        document.getElementById("length").value = "";
        lowerCase.checked = false;
        upperCase.checked = false;
        Numbers.checked = false;
        Symbols.checked = false;
    
    }
    window.resetGen = resetGen;
}

