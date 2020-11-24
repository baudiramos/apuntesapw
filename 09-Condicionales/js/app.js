

function comprobar(evt) {

  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;


  let longitud = name.length;
  let porcion = name.substring(0,5);
  let pase = age.length;


  console.log (`Nombre: ${name}, edad: ${age} `);
  console.log (`nº de letras: ${longitud} `);
  console.log (`porcion: ${porcion}`);

  if (age < 18) {  
    evt.preventDefault();
    alert('Eres menor de 18 años');
  }
  // == para preguntar si es igual a 5
  // Debe tener tener 5 letras != es el simbolo de distinto
  if (longitud != 5) {  
    evt.preventDefault();
    alert('Escribeee mas de 5 letras');
  }

  
}
