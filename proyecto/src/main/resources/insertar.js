function insertarRadio() {
    const lista = document.getElementById('respuestaRadio');
    const respuesta = document.getElementById('respuestas').value;
    const inpRadio = document.createElement('input');
    inpRadio.type = 'radio';
    inpRadio.name = 'respuestaC';
    inpRadio.id = 'respuestaC';
    inpRadio.innerText = respuesta;

    const resNombre = document.createElement('p');
    resNombre.innerHTML = respuesta + ' ';

    const contene = document.createElement('div');
    contene.className = 'w-2/3 mr-auto text-center'

    resNombre.appendChild(inpRadio)
    contene.appendChild(resNombre);
    lista.appendChild(contene);
}

function insertarPreguntaC() {
    
}