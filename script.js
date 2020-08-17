let verificar = true
let expRegNome = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; 
let expRegTelefone = /^[a-z0-9-]+$/;
let expRegEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; 
		        
function validarDados (evento) {

	

	let caixa = evento.target,
		validado = true,
		color;

	if (caixa.id == "nome")
	{
		if (!expRegNome.exec(caixa.value))
		{
			alert("O campo "+caixa.placeholder+" aceita apenas letras e espaços em branco");
			validado = false;
			caixa.focus();		
		}
		else
		{
			let valor = document.getElementById("nome").value;
			console.log(valor);
		}
	}
	
	else if (caixa.id == "telefone")
	{
		if (!expRegTelefone.exec(caixa.value))
		{
			alert("O campo "+caixa.placeholder+" telefone aceita apenas numeros");
			validado = false;
			caixa.focus();			
		}
		else
		{
			let valor = document.getElementById("telefone").value;
			console.log(valor);
		}
	}
	else if(caixa.id == "Email")
	{
		if (!expRegEmail.exec(caixa.value))
		{
			alert("O campo "+caixa.placeholder+" precisa de um Email válido");
			validado = false;
			caixa.focus();
		}
		else
		{
			let valor = document.getElementById("Email").value;
			console.log(valor);
		}
	}	

	color = (validado)?"green":"red";
	caixa.style.outline = "thin solid "+color;	
}
	var captura = function(){
        		let listRegistro = document.getElementsByClassName("registro"),
           	arrayGuardar = [];         
        		for (var i = 0; i < listRegistro.length; i++) {    
           	arrayGuardar[i] = listRegistro[i].value;
            	console.log (listRegistro[i].value);     
            	}       
       	}

function cargaDocumento() {
	
	nome.addEventListener("blur",validarDados);
	telefone.addEventListener("blur",validarDados);
	Email.addEventListener("blur",validarDados);
	 
}

//ASIGNACIÓN DE EVENTOS
window.addEventListener("load",cargaDocumento);