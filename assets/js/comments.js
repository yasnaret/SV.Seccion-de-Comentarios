let incremento = 0
publishComments = () => {
    let divTextArea = document.getElementById('FormControlTextarea').value;
    if (divTextArea.length > 0) {
         incremento++
         field = document.getElementById('field');
         contenedor = document.createElement('div');
         contenedor.id = 'div'+incremento;
         contenedor.className='row contenedorComments'
         field.appendChild(contenedor);
         let comments=document.createElement('div');
         comments.id = 'div'+ incremento;
         comments.className = 'col-10'
         comments.innerHTML=divTextArea;
         document.getElementById('FormControlTextarea').value='';
         boton = document.createElement('input');
         boton.type = 'button';
         boton.value = 'Eliminar';
         boton.name = 'div'+incremento;
         boton.className='btn btn-secondary col-2';
         boton.onclick = function () {borrar(this.name)} //aqui llamamos a la funcion borrar
         contenedor.appendChild(comments)
         contenedor.appendChild(boton);

    } else {
        confirm("Por favor,ingresa un comentario");
    };
};

function borrar(obj) {//aqui la ejecutamos
    field = document.getElementById('field');
    field.removeChild(document.getElementById(obj));
  }