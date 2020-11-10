var tel = document.getElementById("output");
var ad =document.getElementById("userinput")

function limpartela(){
	document.getElementById("userinput").value = ''
	tel.value = ''
}

function tela(value){
	tel.value = value
}
 function converter(){
 	var adValue = reverseString(ad.value) 
 	var i;
 	var outrovalor = 0;
 	for(i = 0; i < adValue.length; i++){
 		outrovalor += Number(adValue[i]) * Math.pow(2, i) 
 	}
 	tela(outrovalor)
 }

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}