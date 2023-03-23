
const formulario = document.querySelector("#form")
const envio = document.querySelector ("#envio")
const aceptacion = document.getElementById ("aceptacion")


formulario. addEventListener ("submit",enviarformulario) 
    

function enviarformulario (event) {
event.preventDefault()
const form= new FormData (this)
console.log (form.get(`message`))
envio.setAttribute (`href`, `mailto: aldiaz2979@gmail.com?subject=${form.get (`name`)}${form.get (`email`)}${form.get (`linea`)}&body=${form.get(`message`)}`)
envio.click ()
alerta(false, 0, 'success', '', 'Email enviado exitosamente', 'a la brevedad nos estamos comunicando!, muchas gracias')
aceptacion.classList.add("ocultar")
}



const alerta = (toast, timer, icon, position, title, text )=> {
    Swal.fire({
        toast:  false, 
        position: 'center',
        icon: icon || 'info',     
        title: title || '',
        text: text || '',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        timer: timer
      })
}

