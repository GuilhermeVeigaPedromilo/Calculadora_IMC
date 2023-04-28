var altura;
       var peso;
       var imc;
       var resultado;

        function calcular(event) {
            event.preventDefault();
           
 peso = parseFloat(document.getElementById("peso").value);
            altura = parseFloat(document.getElementById("altura").value);

            imc = peso / (altura * altura);

            console.log(imc);

            if (imc < 17) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo no peso!";
            } else if (imc >= 17 && imc <= 18.49) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso";
            } else if (imc >= 18.5 && imc <= 24.99) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed + "<br/> Você está no peso ideal";
            } else if (imc >= 25 && imc <= 29.99) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Sobrepeso!";
            } else if (imc >= 30 && imc <= 34.99) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Obesidade grau I";
            } else if (imc >= 35 && imc <= 39.99) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Obesidade grau II";
            } else if (imc >= 40) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Obesidade grau III";
        }
		
		document.getElementById("peso").value = "";
		document.getElementById("altura").value = "";
           
    }