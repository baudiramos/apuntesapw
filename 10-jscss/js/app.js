function cambiar() {
    // Etiqueta h1
    let buenos = document.getElementById('buenos-dias');
    let adios = 5;
    let hola = 6;
    let holai = adios + hola;
    let calcu = document.getElementById('calcu').value;

    //Cambia el texto al pulsar botón
    buenos.innerHTML = holai;

    //Modifica estilos css al pulsar el botón
    buenos.classList.add('buenos-dias');

     //Elimina una clase de o id estilos css al pulsar el botón
     // buenos.classList.remove('buenos-dias');
    
  

}