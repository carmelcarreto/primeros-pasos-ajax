document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    //Crear el objeto xmlhttpresquest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // //Una vez que carga, es una forma
    // xhr.onload = function(){
    //     //200 : Correcto | 403: Prohibido | 404 : No encontrado
    //     if(this.status === 200){
    //         document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

    // Otra Forma de cargar
     xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);
        
        if(this.readyState === 4 && this.status === 200){
            //console.log(this.responseText);
        }
     }
     //ready status
     /*
        0 - No inicializado
        1 - Conexion establecida
        2 - Recibido
        3 - Procesando
        4 - Respuesta lista
     */


    //Enviar el request
    xhr.send();
}