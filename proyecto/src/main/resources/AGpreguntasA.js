var btnAgregar = document.getElementById("agregar")
btnAgregar.addEventListener("click", function () {
    axios.post("http://localhost:4567/preguntaA", {
        pregunta : document.getElementById("pregunta").value,
        video : document.getElementById("video").value,
        respuesta : document.getElementById("respuesta").value
    })
    .then(function (response) {
        
    })
    .catch(function (error) {
        console.log(error);
    })
})