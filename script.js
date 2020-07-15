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

      for (var i = 0; i < usuarios.length; i++) {
        let nombre = usuarios[i].name
        let genero = usuarios[i].gender
        let etiquetas = []

        for (var j = 0; j < 5; j++) {
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

        let plantilla = `<div class="usuario col-lg-3 col-md-3 col-sm-12">
                          <div class="datos">
                            <h4 class="nombre">${nombre}</h4>
                            <small class="genero">${genero}</small>
                            <p class="etiquetas">
                              <small class= "tag"> <a href="#" onclick= filterElements(this)>${tag1}</a></small>
                              <small class= "tag"> <a href="#" onclick= filterElements(this)>${tag2}</a></small>
                              <small class= "tag"> <a href="#" onclick= filterElements(this)>${tag3}</a></small>
                              <small class= "tag"> <a href="#" onclick= filterElements(this)>${tag4}</a></small>
                              <small class= "tag"> <a href="#" onclick= filterElements(this)>${tag5}</a></small>
                            </p>
                          </div>
                        </div>`

        document.getElementById('contenido-examen').innerHTML += plantilla
      }

    })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

let filterElements = (obj) => {
  var filterText = $(obj).text();
  console.log("CLICKED: " + filterText)
  let usuarios = document.getElementsByClassName("datos");
  let userTags = []

  //console.log(usuarios)
  for (var i = 0; i < usuarios.length; i++){
    //console.log(usuarios[i].children[2].children)
    
   console.log("USER " + (i+1) + "'S TAGS")
    for(var j = 0; j < 5; j++){
      //console.log(usuarios[i].children[2].children[j].textContent)
      userTags.push(usuarios[i].children[2].children[j].textContent.trim());
    }

    console.log(userTags);
    console.log(userTags.includes(filterText));


   if(!(userTags.includes(filterText))){      
      usuarios[i].style.display = "none";
    }
    
    userTags = [];
  }
}


let resetFilter = () => {
  let usuarios = document.getElementsByClassName("datos");
  for (var i = 0; i < usuarios.length; i++){
    usuarios[i].style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadUsuarios();
})