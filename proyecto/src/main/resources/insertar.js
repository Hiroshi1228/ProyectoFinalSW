function insertarOptions() {
    var respuestaC = document.getElementById('respuestas').value;
    const conteRespC = document.getElementById('respuestasC');
    const respSelect = document.createElement('option');
    

}

function insertarPreguntaA() {
    var preguntaA = document.getElementById('pregunta').value;
    var tipoP = document.getElementById('tipoPreguntas').value;
    
    var videoG = document.getElementById('video').value;

    const listaA = document.getElementById('contedorPreguntas');
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'w-3/6 m-auto py-4';
    nuevoDiv.innerHTML = '<div class="flex flex-wrap w-full m-auto">'+
                            '<div class="w-2/3 px-4 m-auto">'+
                                '<input type="text" name="pregunta" id="pregunta" placeholder="  Pregunta:" class="w-4/5 border" value="'+preguntaA+'" disabled>'+
                            '</div>'+
                            '<div class="w-1/3 pl-2 pr-8">'+
                                '<select name="tipoPreguntas" id="tipoPreguntas" class="w-40" disabled>'+
                                    '<option value="'+tipoP+'">Pregunta abierta</option>'+
                                '</select>'+
                            '</div>'+
                        '</div>'+
                        '<div class="w-auto mt-4 p-2 text-center">'+
                            '<div class="w-full py-2">'+
                                '<input type="file" name="video" id="video" accept=".mp4"  value="'+videoG+'" class="" disabled>'+videoG+
                            '</div>'+
                            '<div class="w-full mt-4 ml-56 mb-4">'+
                                '<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit" disabled> Agregar </button>'+
                            '</div>'+
                        '</div>';
    listaA.appendChild(nuevoDiv);
}