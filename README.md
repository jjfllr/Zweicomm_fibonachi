# Prueba_Zweicom
Descripcion del desarrollo:

Esta pagina fue desarrollada como prueba para Zweicom.
Su objetivo es el de calcular el numero N de fibonacci y retornar este valor y el previo.
_____________________________________________________

Dependencias:

Se ha elegido utilizar una version local del CCS bootstrap-4.0.0 beta.2, por lo que es requerido tener en la carpeta donde se encuentre el archivo index.html las carpetas CSS y JS disponibles para descarga desde https://goo.gl/81h8QZ .

Se ha optado por tener un favicon y un logo de zweicom en la pagina, luego son necesarios favicon.ico y la carpeta img en el directorio donde se encuentre index.html.

Se han programado una serie de funciones JavaScript para hacer los calculos del numero requerido, estas se encuentran en el archivo funciones.js dentro del directorio fcn. Es necesario tener esta carpeta en el mismo directorio de index.html.
_____________________________________________________

Instrucciones de Uso:

Al hacer click en el logo de Zweicom la pagina redirige al portal de la empresa.

para utilizar la calculadora se debe rellenar el formulario que se presenta ("Quiero el Fibonacci Numero") y clickear el boton "calcular". Una ventana emergera dando el numero requerido y su predecesor.
_____________________________________________________

Funciones programadas:

obtenerNumero(): Esta funcion rescata el numero del formulario y llama a las funciones de calculo para poder dar el resultado esperado.

fibonacci(N): Esta funcion calcula de manera iterativa el numero de fibonacci. Guarda el resultado en una variable global. Se elige utilizar el metodo iterativo de calculo frente al recursivo por su orden, siendo esta funcion O:N frente al O:2^N de la segunda.

fibonacciBigInt(N): Debido a que JavaScript utiliza el estandar IEEE754 para sus numeros (punto flotante de doble presicion) existe un valor maximo sobre el cual no se puede asegurar exactitud. Debido a este tema, se programa una funcion "hermana" a fibonacci antes descrita. Esta intenta utilizar strings para hacer las sumas iterativas, para asi evitar el limite impuesto por el estandar. Finalmente hay un problema no identificado en esta funcion que no permite el calculo, ya que dispara el uso de memoria del sistema y la carga en CPU.

addBigInt(x,y): esta funcion realiza suma de enteros que esten representados como strings. Separa este numero de gran tamaño en segmentos los cuales suma por separado, asegurando asi exactitud en la operacion para numeros mas grandes que el entero maximo seguro que define IEEE754.
_____________________________________________________

Pruebas:
Debido a la simplicidad del sistema se definen las siguientes pruebas basicas para este programa:

	1: Peticion Fibonacci 0:	Se espera que se entregue solamente el 0 como Numero, ya que fibonacci es una sucesion definida a partir de este valor.
	2: Peticion Fibonacci -10:	Se espera que se entregue solamente el 0 como Numero, ya que fibonacci es una sucesion definida a partir de este valor.
	3: Peticion Fibonacci 2:	Se espera que se entreguen valores 1 y 1.
	4: Peticion Fibonacci 40: 	Se espera que se entreguen valores 102334155 y 63245986.
	5: Peticion Fibonacci 78:	Se espera que se entreguen valores 8944394323791464 y 5527939700884757.

El navegador no puede obtener valores superiores al Fibonacci 78 debido a las limitaciones de IEEE754, la funcion addBigInt es capaz de sumar aisladamente numeros de ordenes superiores a 10e15 con un limite superior dado por cuanto sea el manejable por JavaScript y la memoria del sistema en el cual se ejecute, pero por problemas no identificados, pero sospechados de ser de la funcion fibonacciBigInt(), no es posible realizar pruebas a menos que sean manuales llamando a la funcion aisladamente. 
De todas formas es posible hacer una prueba modificando el archivo funciones.js, descomentando las lineas 16, 17 y 18, y comentando la 21. Esto hara que se pueda calcular el fibonacci numero 79 al pedirlo desde la aplicacion (resultado esperado 14472334024676221 y 8944394323791464). Cabe notar que si se pide cualquier numero superior a este, respondera erradamente, estas lineas fueron pensadas para probar la funcion addBigInt() y no la aplicacion web.

Valores objetivos obtenidos de https://goo.gl/L0JC4

_____________________________________________________

Notas sobre compatibilidad:
La pagina ha sido desarrollada utilizando html5, y se ha probado utilizando la ultima version de Google Chrome a la fecha 2017-11-09 (version 62.0.3202.89)

Se reporta que el boton no responde en Microsoft Edge(V. 41.16299.15.0) ni Internet Explorer (V. 11.15.16299.0). No se ha ahondado en este tema.
_____________________________________________________

Notas personales:

Este ha sido mi primer acercamiento a JavaScript, por lo que pienso que algunas soluciones han sido propuestas de una manera poco eficiente. El tiempo mayormente fue dedicado a realizar la funcion addBigInt() lo que permitio generar un entendimiento superficial de como funciona el lenguaje, y a la vez genero muchisimas dudas.

Me hubiese gustado poder entregar los resultados de los calculos en la pagina misma en lugar de un pop-up, pero no logre mantener estaticos los valores injectados por JavaScript en el HTML, estos duraban unas milesimas de segundo en los formularios o espacios que fueron asignados para luego desaparecer.

El proceso de aprendizaje fue ayudado por gente que presentaba problemas similares en Stackoverflow.com y los tutoriales de w3schools.com

_____________________________________________________
