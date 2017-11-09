var fiboResp = [0,1];
var bigFibo = ["5527939700884757","8944394323791464"];//Fibonacci 77 y 78
sessionStorage.setItem('numero', '1');
sessionStorage.setItem('previo', '0');

function obtenerNumero(){
	var num = Number(document.getElementById('NumeroObjetivo').value);
	sessionStorage.setItem('numeroFib', num);
	if(num < 1){
		alert('fibonacci 0 es: ' + fiboResp[0] + '\nLa secuencia empieza aca.');
	}
	else{
		if(num > 78){
			alert('Se ha sobrepasado el numero mas grande que puede ser representado con presición, Se utilizara una funcion mas lenta para el calculo.');
			
			//resultado = addBigInt(bigFibo[1], bigFibo[0]);
			//bigFibo[0] = bigFibo[1];
			//bigFibo[1] = resultado;
			
			
			fibonacciBigInt(num);
			
			
			
			
			sessionStorage.setItem('numero', bigFibo[1]);
			sessionStorage.setItem('previo', bigFibo[0]);
			alert('fibonacci ' + num + ' es: ' + sessionStorage.getItem("numero") + '\nfibonacci '+ --num + ' es: ' + sessionStorage.getItem("previo"));

			
			
		}else{
			fibonacci(num);
			sessionStorage.setItem('numero', fiboResp[1]);
			sessionStorage.setItem('previo', fiboResp[0]);
			alert('fibonacci ' + num + ' es: ' + sessionStorage.getItem("numero") + '\nfibonacci '+ --num + ' es: ' + sessionStorage.getItem("previo"));
		}

		
		}
}

function fibonacci(N){
	//Se implementa en loop en vez de recursivo para tener funcion de orden N en lugar de 2^N
	var resultado = 0;
	for (i = 0; i < N-1; i++){
		resultado = fiboResp[0] + fiboResp[1];
		fiboResp[0] = fiboResp[1];
		fiboResp[1] = resultado;
	}
	
	return;
}

function fibonacciBigInt(N){
	//Se implementa en loop en vez de recursivo para tener funcion de orden N en lugar de 2^N
	var resultado = "";
	for (i = 78; i < N-1; i++){
		resultado = addBigInt(bigFibo[1], bigFibo[0]);
		bigFibo[0] = bigFibo[1];
		bigFibo[1] = resultado;
	}
	
	return;
}

function addBigInt(x,y){
	//deben entrar como strings
	//Solucion ideada para poder calcular sumas sobre el limite impuesto por IEEE754

	operaciones = Math.ceil(Math.max(x.length,y.length)/15)+1;
	remanente = new Array(operaciones).join('0').split('');
	resultado = new Array(operaciones).join('0').split('');
	x = x.split("").reverse().join("");
	y = y.split("").reverse().join("");
	num1 = new Array(operaciones).join('0').split('');
	num2 = new Array(operaciones).join('0').split('');
	
	for (i = 0; i < remanente.length; i++){
		num1[i] = Number(x.substring(i*15,i*15+15).split("").reverse().join(""));
		num2[i] = Number(y.substring(i*15,i*15+15).split("").reverse().join(""));
		if (i == 0){
			resultado[i] = num1[i] + num2[i];
		}else{
			resultado[i] = num1[i] + num2[i] + Number(remanente[i-1]);
		}
		aux = String("000000000000000" + resultado[i]).slice(-16);
		
		remanente[i] = Math.floor(Number(aux)/1e15);
		resultado[i] = aux.slice(-15);
	}
	
	//reconstruimos el numero
	aux= " ";
	for(i=resultado.length-1; i >= 0; i--){
		aux = aux.concat(resultado[i]);
	}
	aux = aux.slice(-Math.ceil(Math.max(x.length,y.length)+1));
	
	if(aux.substring(0,1) == "0") {
		aux = aux.slice(-Math.ceil(Math.max(x.length,y.length)));
	}
	return aux;
}

