let loadUsuarios = () => {

  fetch("https://dataserverdaw.herokuapp.com/usuarios/")
    .then(function (resultado) {
      return resultado.json()
    })
    .then(function (arreglo) {
      //console.log(arreglo.users)
      let usuarios = arreglo.users
      /*for(var i = 0; i < usuarios.length; i++){
        console.log("USER " + (i+1))
        console.log(usuarios[i].name)
        console.log(usuarios[i].gender)
        console.log("USER " + (i+1) +"'s tags")
        for(var j = 0; j < 5; j++){
          console.log(usuarios[i].tags[j])
        }
      }*/

      for(var i = 0; i < usuarios.length; i++){
        let nombre = usuarios[i].name
        let genero = usuarios[i].gender
        let etiquetas = []

        for(var j = 0; j < 5; j++){
          etiquetas.push(usuarios[i].tags[j])
        }

        let tag1 = etiquetas[0]
        let tag2 = etiquetas[1]
        let tag3 = etiquetas[2]
        let tag4 = etiquetas[3]
        let tag5 = etiquetas[4]

        /*console.log("USER " + (i+1))
        console.log(nombre)
        console.log(genero)
        console.log("USER " + (i+1) +"'s tags")
        console.log(tag1)
        console.log(tag2)
        console.log(tag3)
        console.log(tag4)
        console.log(tag5)*/

        let plantilla = `<div class="usuario">
                          <div class="datos">
                            <h4 class="nombre">${nombre}</h4>
                            <small class="genero">${genero}</small>
                            <p class="etiquetas">
                              <small> <a href="#">${tag1}</a></small>
                              <small> <a href="#">${tag2}</a></small>
                              <small> <a href="#">${tag3}</a></small>
                              <small> <a href="#">${tag4}</a></small>
                              <small> <a href="#">${tag5}</a></small>
                            </p>
                          </div>
                        </div>`








      }





    })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  loadUsuarios();
})