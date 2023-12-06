function add(){
    var num1= document.getElementById("num1");
    var num2= document.getElementById("num2");
    var res= parseInt(num1.value) +parseInt(num2.value);
    var result =document.getElementById("result");
    result.innerText = res;
}

function sub(){
    var num1= document.getElementById("num1");
    var num2= document.getElementById("num2");
    var res= parseInt(num1.value) -parseInt(num2.value);
    var result =document.getElementById("result");
    result.innerText = res;

}

function mult(){
    var num1= document.getElementById("num1");
    var num2= document.getElementById("num2");
    var res= parseInt(num1.value) *parseInt(num2.value);
    var result =document.getElementById("result");
    result.innerText = res;

}

function div(){
    var num1= document.getElementById("num1");
    var num2= document.getElementById("num2");
    var res= parseInt(num1.value) /parseInt(num2.value);
    var result =document.getElementById("result");
    result.innerText = res;

}