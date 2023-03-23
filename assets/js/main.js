
const recuperarCarrito = () =>{
    return JSON.parse(localStorage.getItem("BicicletaCarrito")) || [];
    }

const guardarCarrito = () =>{
    if(carrito.cantidadProductos() >= 0){
        localStorage.setItem("BicicletaCarrito", JSON.stringify(carrito.array()));
    }
}


const carrito = new Carrito(recuperarCarrito());


const buscarProducto = (id) => bicicletas.find(producto => producto.id === parseInt(id));
const buscarCarrito = (id) => carrito.array().find(producto => producto.id === parseInt(id));



const toast = (text)=> {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: { background: "  rgb(46, 45, 45)", fontSize: '20px'},
        }).showToast();
}

const alerta = (toast, timer, icon, position, title, text, cancelB )=> {
    return new Promise((resolve)=> {
    Swal.fire({
        toast: toast || false, 
        position: position || 'center', 
        icon: icon || 'info',     
        title: title || '',
        text: text || '',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        showCancelButton: cancelB || false,
        timer: timer,      
        cancelButtonText: 'Seguir comprando'    
    }).then((result)=>{
        resolve(result);
    })
})
}