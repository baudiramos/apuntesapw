


let numero = 123;
let conDecimales = 123.45;
let msg = 'Hola que tal';

let numeros = [1,2,3, "Hola", 123.45 ];

console.log( numeros[ 3 ] );
console.log('Nº de elementos : ', numeros.length);

document.write('El valor de la posiición 4 es : ' + numeros [ 4 ]);
document.write('<br/>');
document.write(`El valor de la posiición 4 es : ${numeros [ 4 ]}`);

numeros.push(999);
document.write('<br/>');
document.write(`El valor de la posiición 4 es : ${numeros [ 5 ]}`);
console.log( 'Nº de elementos : ', numeros.length);

numeros[3] = 44; 
document.write('<br/>');
document.write(`El valor de la posiición 4 es : ${numeros [ 3 ]}`);

numeros.pop();
console.log('Nº de elementos : ', numeros.length);

numeros[3] = 'Hola'; 
document.write('<br/>');
document.write(`El valor de la posiición 4 es : ${numeros [ 3 ]}`);


let Saludo = 'Hola';
Saludo = 'Que tal';

let valorNumerico = 3;
console.log('Valor numérico; ', valorNumerico);
valorNumerico = valorNumerico + 1;
console.log('Valor numérico: ', valorNumerico);
// valornumerico++;
console.log('Valor numérico: ', valorNumerico);

//for( ValorInicial; valorFinal; incremento) {}
for( let contador = 0; contador <= 5; contador++) {
    // console.log( contador );
    // console.log(numeros[ contador ]);
    console.log(
        `Valor del array en la posición ${contador} es ${numeros[contador]}`
    );
}

let Notas = [ 4,3,5,4,10 ];

// Nota de izquierda a derecha

for( let contador = 0; contador < Notas.length; contador++) {
    console.log(`La Nota es ${Notas[contador]}`);
}

// Nota de derecha a izquierda
// for( let contador = 0; contador <= Notas.length; contador++) {
//     console.log(`La Nota es ${Notas[contador]}`);
// }



// // Obtener el valor mayor o igual a 5
// for( let contador = 0; contador < Notas.length; contador++) 
// if (Notas[contador] >= 5) {
//     document.write((`La Nota es: ${Notas[contador]}`));
// }


// Valor para saber cuantas aprobadas hay
let aprobados = 0

// Saber cuantos aprobados hay...
for( let contador = 0; contador < Notas.length; contador++) 
if (Notas[contador] >= 5) {
    document.write((`La Nota es: ${Notas[contador]} <br>`));
    aprobados = aprobados +1;
}
document.write((`El numero de aprobadas es: ${aprobados}`))
//
let notamayor = 0;
//Cual es la nota mas alta

for( let contador = 0; contador < Notas.length; contador++) 
if (Notas[contador] >= 5) {
    document.write((`La Nota mas alta es: ${Notas[contador]} <br>`));
   
     if (Notas[contador] = notamayor) {
         notamayor = Notas[contador];
     }
    //  document.write((`La Nota mas alta es: ${Notas[contador]} <br>`));
}

//Buscar nombres en arrays

let encontrado = 'No';
let nombre = ['Luis', 'Pedro', 'Antonio', 'Javier'];
let name = prompt('Dime el nombre a buscar...');
for( let contador = 0; contador < Notas.length; contador++)
if (name == nombre[contador]) {
    encontrado ='Si';
    alert('Debes introducir un numero');
}
if (encontrado == 'Si') {
    alert('El nomrbe está en la lista');
} else {
    alert('El nombre no está en la lista');
}