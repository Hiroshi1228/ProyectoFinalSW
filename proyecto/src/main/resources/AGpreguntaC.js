var btnAgregar2 = document.getElementById("agregar2")
btnAgregar2.addEventListener("click", function () {
    axios.post("http://localhost:4567/preguntaC", {
        pregunta : document.getElementById("pregunta2").value,
        video : document.getElementById("video2").value,
        respuesta : document.getElementById("respuesta2").value
    })
    .then(function (response) {
        
    })
    .catch(function (error) {
        console.log(error);
    })
})