const ciudades = ["Londres", "Buenos Aires", "Paris", "Madrid", "Viena"];

//--------------- Sincronico

function sincronico(){
    const msj = document.getElementById("mensajes");
    msj.innerHTML = "";
    agregarMsj(ciudades[0]);
    agregarMsj(ciudades[1]);
    agregarMsj(ciudades[2]);
    agregarMsj(ciudades[3]);
    agregarMsj(ciudades[4]);
}

function agregarMsj(texto){
    const msj = document.getElementById("mensajes");
    const div = document.createElement("div");
    div.innerText = texto;
    msj.appendChild(div);
}



//--------------- Con Callback

function mostrarCiudades(){
    ciudades.forEach(function(ciudad, index){
        agregarMsj(index + " - " + ciudad);
    })
}

function conCallback(){
    const msj = document.getElementById("mensajes");
    msj.innerHTML = "";
    agregarMsj("-------- Sincronico ----------")
    mostrarCiudades();
    agregarCiudad("Montevideo", mostrarCiudades);
    agregarMsj("-------- Fin de Sincronico ----------");
}

function agregarCiudad(valor, callback){
    //Se ejecuta a los 3 segundos
    setTimeout(function(){
        const msj = document.getElementById("mensajes");
        ciudades.push(valor);
        agregarMsj("-------- Con Callback ----------")
        callback();
        agregarMsj("-------- Fin de Callback ----------");
    },        
    3000);
}







//------------ Con Promise


function conPromise(){
    const msj = document.getElementById("mensajes");
    msj.innerHTML = "";
    agregarMsj("-------- Con Promise ----------")
    let promesa = new Promise(function(resolve, reject) {
        setTimeout(function() {
            ciudades.push("Bogota");
            resolve('timeout');
        }, 3000);
      });  
      
    promesa.then(function(data) {
        mostrarCiudades();
    });
    agregarMsj("Lo ejecuto antes aunque esta despues");
}





//------------ Async/Await
  
async function conAsync() {
    const msj = document.getElementById("mensajes");
    msj.innerHTML = "";
    agregarMsj(ciudades[0]);

    const mensaje = await esperar();
    agregarMsj(mensaje);
    agregarMsj(ciudades[2]);
    agregarMsj(ciudades[3]);
    agregarMsj(ciudades[4]);
    agregarMsj("No lo ejecute porque estuve esperando");

}

function esperar(val) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(ciudades[1]);
        },        
        3000);
   });
}


