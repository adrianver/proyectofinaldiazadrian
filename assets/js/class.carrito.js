
class Carrito{
    constructor(productos){
        this.productos = productos;
    }  

        vaciarCarrito(){
            this.productos.length = 0;
            guardarCarrito();
            toast(`🟣Se vació el carrito`);
        }

        agregarProducto(producto) {
            let index = this.productos.findIndex(valor => valor.id === producto.id);
            if(index < 0){
                this.productos.push(producto);
                toast(` 🟢 Se agregó ${producto.Marca} al carrito`);
            }else{
                this.productos[index].cantidad = producto.cantidad;
                toast(`🟡 Se actualizó ${producto.Marca} del carrito`);
            }
            guardarCarrito();
        }
    
        
        quitarProducto(producto) {
            let index = this.productos.findIndex(valor => valor.id === producto.id);
            if(index >= 0){
                this.productos.splice(index,1);
                toast(` 🟠 Se quitó ${producto.Marca} del carrito`);
            }
            guardarCarrito();
        }
    
    mostrarProductos(){
        if (this.productos.length > 0) {
            console.table(this.productos);
            return this.productos;
        } else {
            console.warn("El carrito está vacío!");
            return 0;
        }
    }

   
    cantidadProductos(){
        return this.productos.length;
    }

   
    array(){
        return this.productos;
    }

   
    totalCarrito(){
        if (this.productos.length > 0) {
            return this.productos.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0).toFixed(2)
        } else {
            return 0;
        }
    }

}