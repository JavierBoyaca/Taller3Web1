//Punto8/
// //Piramide punta arrba
// var altura = Number(prompt("Digite la altura de la piramide"));
// for (var x = 1; x <= altura; x++){
//     for(var y = 1; y <= x; y++){
//         document.write("*");
//     }
//     //instruccion final
//     document.write("<br>");
// }
 /////////////////////////////////////////////////////////////////
//Punto9 Piramide punta abajo
//  var altura = Number(prompt("Digite la altura de la piramide"));
//  for (var x = 1; x <= altura; x++){
//     for(var y = altura; y >= x; y--){
//         document.write("*");
//     }
//     //instruccion final
//     document.write("<br>")
//  }
 ///////////////////////////////////////////
 //Punto10:10.	 Cree un programa que permite registrar el número de compras que se venden cada día. 
 //pedir al usuario cuantos productos va a comprar y registrar el precio unitario, 
 //calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.

 // var clientes = prompt("¿Deseas realizar una compra? si/No");
// var contaClientes = 0;
// var totalCompra = 0
// for(var x = 1; clientes != "no"; x++){
//     document.write("Cliente#"+x+"<br>");
//     var NumPro = Number(prompt("¿Cuantos producos quiere comprar?"));
//     var totalCompra = 0
//     for(var y=1; y <= NumPro; y++){
//         var nombrePro = prompt("Digite el nombre del producto")
//         var precioPro = Number(prompt("Digite el valor del producto #"+y));
//         document.write("Precio"+nombrePro+ "#"+y+":"+precioPro+"<br>");
//         totalCompra+=precioPro; 
//     }
//     contaClientes++;
//     document.write("------------------<br>");
//     document.write("total compra: "+totalCompra+"<br>");
//     clientes = prompt("¿Desea realizar una compra? si/no");

    
// }
// document.write("------------------ <br>");
// document.write("Total Clientes del dia:"+contaClientes+"<br>");
// document.write("Total General del dia:"+totalComprasXdia+"<br>")
///////////////////////////////
//punto11


function calcularPromedio() {
    let alumnos = [];

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt(`Ingrese el nombre del alumno ${i}:`);
        let materia = prompt(`Ingrese la materia del alumno ${i}:`);
        let notas = [];
        for (let j = 1; j <= 3; j++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${j} del alumno ${nombre} en la materia ${materia}:`));
            if (isNaN(nota)) {
                alert("Por favor ingrese un número válido.");
                j--;
                continue;
            }
            notas.push(nota);
        }
        let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
        alumnos.push({ nombre, materia, notas, promedio });
    }

    document.write('<h2>Promedios de los alumnos:</h2>');
    alumnos.forEach((alumno) => {
        document.write(`<p>Nombre: ${alumno.nombre}</p>`);
        document.write(`<p>Materia: ${alumno.materia}</p>`);
        document.write(`<p>Notas: ${alumno.notas.join(', ')}</p>`);
        document.write(`<p>Promedio: ${alumno.promedio.toFixed(2)}</p>`);
    });
}

calcularPromedio();


// // Llamar a la función para calcular el promedio
// calcularPromedio();
////////////////////////////////////////////////

// //punto12
// var filas = Number(prompt("Digite total de filas de la tabla"));
// var columnas = Number(prompt("Digite total de columnas de la tabla"));
// var contar = 1;
// document.write("<table border= '1'>");
// for (var x = 1; x <= filas; x++);{
//     document.write("<tr>");
//     for(var y = 1; y <= columnas;y++){
//         document.write("<td>");
//         document.write(contar++);
//         document.write ("</td>");
//     }
//     document.write("</tr>");
// } 
// document.write("</table>");
/////////////////////////////////////////////////////////////////
//punto13
// function determinarEdades() {
//     var menoresDeEdad = 0;
//     var mayoresDeEdad = 0;

//     
//     for (var i = 1; i <= 10; i++) {
//         var edad = parseInt(prompt("Ingrese la edad del estudiante #" + i));

//         
//         if (edad < 18) {
//             menoresDeEdad++;
//         } else {
//             mayoresDeEdad++;
//         }
//     }

//     
//     alert("Número de estudiantes menores de edad: " + menoresDeEdad);
//     alert("Número de estudiantes mayores de edad: " + mayoresDeEdad);
// }

// // Llamar a la función para determinar las edades
// determinarEdades();
//////////////////////
//Punto14
// function adivinarNumero() {
//     var numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
//     var intentos = 3;

//    
//     while (intentos > 0) {
//         var intentoUsuario = parseInt(prompt("Intenta adivinar el número (entre 1 y 100):"));

//         if (intentoUsuario === numeroAleatorio) {
//             alert("¡Felicidades! ¡Adivinaste el número!");
//             return; // Termina la función si el usuario adivina el número
//         } else {
//             if (intentoUsuario > numeroAleatorio) {
//                 alert("El número que ingresaste es demasiado grande. Intenta de nuevo.");
//             } else {
//                 alert("El número que ingresaste es demasiado pequeño. Intenta de nuevo.");
//             }
//             intentos--;
//         }
//     }

//     alert("Lo siento, has agotado tus intentos. El número correcto era: " + numeroAleatorio);
// }

//
// adivinarNumero();


