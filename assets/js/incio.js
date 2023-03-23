const bicicletas = [];
const servidor = "https://641bc3a31f5d999a44697c88.mockapi.io/api/v1/bicicleta";
const rutaLocal= "bicicletas.json";


fetch(servidor) 
        .then((response)=> productos = response.json())
        .then((productos) => bicicletas.push(...productos))
        .then(() => cargarTienda(bicicletas))
        .then(()=> activeClickShopAdd())
        .catch(() => {
            selectorTienda.innerHTML = errorMensaje('servidor')   
            selectorTienda.innerHTML += " <h2>Cargando productos desde la base de datos local</h2>" 
fetch(rutaLocal) 
            .then((response)=> productos = response.json())
            .then((productos) => bicicletas.push(...productos))        
            .then(() => cargarTienda(bicicletas))           
            .then(()=> activeClickShopAdd())
            .catch(error => selectorTienda.innerHTML = errorMensaje('servidor')) 
           
  
        })
    
const updateValue = e => {
    let valor = e.target.value;
if (valor) {
    cargarTienda(filtrar(bicicletas,valor))
    .then((result) => activeClickShopAdd())
    .catch(error => selectorTienda.innerHTML = errorMensaje('tienda'));
}else {   
    cargarTienda(bicicletas)
        .then((result) => activeClickShopAdd())
        .catch(error => selectorTienda.innerHTML = errorMensaje('tienda')); 
}
}
const filtrar = (array,valor) => {
    let resultado = [];
    array.forEach(producto => {
        if(JSON.stringify(producto.Marca+producto.tipo).includes(valor)){
            resultado.push(producto);
        }
    });
    return (resultado)?resultado:bicicletas;
}

selectorFilterInput.addEventListener('input', updateValue);
selectorFilterCategory.addEventListener('change', updateValue);


const cargarTienda = array => {
    let tiendaHTML ="";
    let filtroHTML="";
    selectorLoad.classList.remove("d-none");
    return new Promise((resolve,reject)=> {
            setTimeout(() => {
                selectorLoad.classList.add("d-none");
                if(array.length <= 0){
                    reject();
                }
                array.forEach(producto =>{
                tiendaHTML += cargarProductos(producto);
                filtroHTML += `<option value="${producto.Marca}"></option>`;
            });
            selectorTienda.innerHTML = tiendaHTML;
            selectorFilter.innerHTML = filtroHTML;
            resolve(true);
        }, 500) 
})
}



const activeClickShopAdd = () =>{
    const addButton = document.querySelectorAll("button.btn.cart-add")
    addButton.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            const inputAmount = document.getElementById(`i${e.currentTarget.id}`);
            let cantidad = parseInt(inputAmount.value);
            let resultado = buscarProducto(e.currentTarget.id);
            resultado.cantidad = cantidad;
            (cantidad!==0)?carrito.agregarProducto(resultado):carrito.quitarProducto(resultado);
           
        });
    });
}


