
const cargarProductos = (producto)=>{
    let resultado = buscarCarrito(producto.id);
    let valor = 0;
    if(resultado){
        valor = resultado.cantidad || '0';
    }
    return `<div class="container text-center">
                <div class="row">
                    <div class="col-sm-4">
                        <img class="p-2 img-fluid bicicletas__card-img" src=${producto.imagen} alt="${producto.Marca}">
                    </div>
                    <div class="col-sm-8 align-middle m-auto">
                        <div class="row">
                            <div class="col-sm-6 m-auto">
                                <h2 class="bicicletas__card-h2">${producto.Marca.toUpperCase()}</h2>
                                <p class="bicicletas__card-p">Precio $: ${producto.precio.toFixed (2)}</p>
                                <p class="bicicletas__card-p">N° de Rodado:  ${producto.tipo}</p>
                                <p class="bicicletas__card-p">Caracteristicas:  ${producto.Caracteristicas}</p>
                            </div>
                            <div class="col-sm-6 m-auto">
                                <p>Cantidad</p>
                                <input class="m-auto text-center bg-dark text-light" id="i${producto.id}" type="number" min="0" max="100" step="1" value="${valor}"/>
                                <button class="btn cart-add" id="${producto.id}"><i class="bi bi-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <hr>`;
    
}

const cargarTabla = (producto)=>{
    return `<tr>
                <td class="d-none d-md-block"><img src=${producto.imagen} alt=${producto.Marca} width="350px"></td>
                <td>${producto.Marca.toUpperCase()}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio.toFixed(2)}</td>
                <td><button class="btn cart-remove" id="${producto.id}"><i class="bi bi-cart-dash"></i></button></td>
            </tr>`;
    
}
const cargarCompra = (total) => {
    return `<div class="finalizarCompra container text-center p-4">
                <h2>Total del carrito</h2>
                <table class="table table-success table-striped-columns p-4">
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$${total}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-success finalizar">Finalizar compra</button>
                <button class="btn btn-warning vaciar">Vaciar carrito</button>
            </div>`;
}

const errorMensaje = (valor) => {
    const error = { servidor: `<h2 class="p-4 text-center error text-dark"> Error al cargar los datos del servidor</h2>`,
                    tienda: `<h2 class="p-4 text-center error text-dark"> No encontramos productos disponibles</h2>`,
                    carrito: `<h2 class="p-4 text-center error text-dark"> No encontramos productos en el carrito</h2>`}
    return error[valor];
}

