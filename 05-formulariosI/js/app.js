function Saludar() {
    /*
    let valor = 10 * 10;
    console.log('La página esta cargada...');
    alert('Hola que tal. ' + valor);
    */
   let nombre = document.getElementById('name').value;
   alert('El nombre es; ' + nombre);
   let apellido = document.getElementById('surname').value;
   alert('Los apellidos son; ' + apellido);
   let edad = parseInt (document.getElementById('age').value);
   let edadfinanl = edad + (10);
   alert('La edad es; ' + edadfinanl);

//    parseInt para convertir numeros a texto


}
