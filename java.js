

function matematika() {
var x=document.getElementById("num1").value
var z=document.getElementById("operatori").value
 var c=document.getElementById("num2").value



switch(z) {

case "+":
 

    document.getElementById("pasuxi").innerHTML  = x+c

    break;
    case "-":
        document.getElementById("pasuxi").innerHTML = x-c
        break;

case "/":
document.getElementById("pasuxi").innerHTML=x/c

break;

case "*":
    document.getElementById("pasuxi").innerHTML=x*c

    break;
    case "/":
        document.getElementById("pasuxi").innerHTML=x/c
        break;
    default: document.getElementById("pasuxi").innerHTML= "თქვენ არ აგირჩევიათ ოპერატორი"

}

}







