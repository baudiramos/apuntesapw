

 function comproba () {
     console.log('Has pulsado');
     let edad = 0;
     let contrasena = '';
     console.log( 'Edad:'+ edad );
     console.log('Pass' + contrasena);
     edad = document.getElementById('age').value;
     pass = document.getElementById('pass').value;
 }

function basee() {
    let base = parseFloat (document.getElementById('based').value);
    let altura = parseFloat (document.getElementById('altura').value);
    based = document.getElementById('based').value;
    altura = document.getElementById('altura').value;
    alert(base * altura /2)
}

function validar () {
    let name = document.getElementById('name').value;
    let masculino = document.getElementById('male').checked;
    let femenino = document.getElementById('female').checked;
    let bici = document.getElementById('bici').checked;
    let coche = document.getElementById('coche').checked;
    let moto = document.getElementById('moto').checked;
    let componente = document.getElementById('ciudad_id').value;
    let nombreCiudad = component.options[componente.selectedIndex].text;
    let nace = document.getElementById('nace').value ='2014-02-09';

    alert(`Nombre : ${name} \n
           Masculino: ${masculino} \n
           Femenino: ${femenino} \n 
           Bici: ${bici} \n
           Cochecito: ${coche} \n
           Motito ${moto} \n
           Ciudad ${nombreCiudad}
           Nace ${nace}.checked`);
}