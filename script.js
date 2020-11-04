function converter(){
	var ad = document.getElementById("userinput").value;
	let number = parseInt(ad, 2)
    tela(number)

}

function limpartela(){
	document.getElementById("userinput").value = ''
	tel.value = ''
}

function tela(value){
	tel.value = value
}

var tel = document.getElementById("output");