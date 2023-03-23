

const actualizarTabla = () =>{
    cargarCarrito(carrito.array())
    .then((result) => activeClickCartRemove())
    .catch(error =>  selectorError.innerHTML = errorMensaje('carrito'));
}

const vaciarCarrito = () =>{
    carrito.vaciarCarrito();
    actualizarTabla();
}


const finalizarCompra = () => {

    const compra = new Compra(carrito);
    let estado = compra.comprar('finalizar');
    alerta('', '', estado.transaccion, '', estado.titulo, estado.mensaje,true )
    .then((result) => {
        if (result.isConfirmed) {
            estado = compra.comprar('confirmar')
            alerta('', '', estado.transaccion, '', estado.titulo, estado.mensaje,'')
            .then((result)=>{
                vaciarCarrito();
            })
        }
    })
}


const cargarCarrito = array => {
    let carritoHTML ="";
    selectorLoad.classList.remove("d-none");
    return new Promise((resolve,reject)=> {
            setTimeout(() => {
                selectorLoad.classList.add("d-none");
                if(array.length > 0){
                    array.forEach(producto => carritoHTML += cargarTabla(producto));
                    selectorCompra.innerHTML = cargarCompra(carrito.totalCarrito());
                    const selectorEnd = document.querySelector("button.finalizar");
                    const selectorVac = document.querySelector("button.vaciar");
                    selectorEnd.addEventListener('click',finalizarCompra);
                    selectorVac.addEventListener('click',vaciarCarrito);
                }else{
                    selectorCompra.innerHTML = "";
                    reject();
                }
                selectorCarrito.innerHTML = carritoHTML;
                resolve(true);
            }, 500) 
    })
}


const activeClickCartRemove = () =>{
    const addButton = document.querySelectorAll("button.btn.cart-remove")
    addButton.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            let resultado = buscarCarrito(e.currentTarget.id);
            carrito.quitarProducto(resultado);
            actualizarTabla();
        });
    });
}


actualizarTabla();

