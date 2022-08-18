//array
class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

//Declaracion de arrays
const carrito = [];
const precioCarrito = [];
const cartas = document.getElementById(`cartas`)
const contenidoCarrito = document.getElementById(`carrito`)
const total = document.querySelector(`#totalAPagar`)


//Productos
import { productos } from "./productos.js";

//Ejecución de funciones

cardsProductos();
calcularPrecio();


//Declaracion de funciones


function cardsProductos() {
    for (const producto of productos) {
        let carta = document.createElement(`div`);
        carta.className = `card`;
        carta.innerHTML = `<img src="${producto.img}" class="productos_img card-img-top" alt="productos">
    <div class="card-body">
        <h5 class="d-flex justify-content-center align-items-center card-title">${producto.tipo}</h5>
        <h6 class="d-flex justify-content-center align-items-center card-title talles">Talles disponibles<br>${producto.talle}</h6>
        <div class="d-flex justify-content-around align-items-center">
            <p class="card-text">$${producto.precio}</p>
            <div>
            <button id="agregarCarrito${producto.id}" type="button" class="btn btn-primario"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
    </div>
    `;
        cartas.append(carta);
        // Evento Button 
        let button = document.getElementById(`agregarCarrito${producto.id}`)
        button.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(`agregaste ${producto.tipo} al carrito.`)
            carrito.push(producto)
            console.log(carrito)
            // contCarrito();
            calcularPrecio();
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        })
    }
}


//funcion precio carrito
function calcularPrecio() {
    const precios = carrito.map(x => x.precio)
    //console.log(precios);
    precioCarrito.push = (precios)
    const {push}=precioCarrito
    //console.log(push);
    //console.log(precioCarrito);
    const sumaPrecio = (...push) => {
        return push.reduce((acc, el) => acc + el, 0);
    }
    let montoTotal = sumaPrecio(...push)
    console.log(montoTotal);
    carrito.length == 0 ? total.innerHTML = `<p>¡Su carrito se encuentra vacío!</p>` : total.innerHTML = `<p>Total a apagar $${montoTotal}</p>`
}


let btnPrecio = document.getElementById(`botonPrecio`)
btnPrecio.addEventListener("click", contCarrito)

function contCarrito() {
    for (const producto of carrito) {
        let contCarrito = document.createElement(`div`);
        contCarrito.innerHTML = 
        ` 
        <div class=cardCarrito>
        <img src="${producto.img}" class="cart_image" alt="productos">
        <div class="cart_cont">
        <h5 class=" d-flex justify-content-center align-items-center card-title">${producto.tipo}</h5>
        <div class="d-flex justify-content-around align-items-center">
        <p class="card-text">$${producto.precio}</p>
                </div>
            </div>
            </div>
            <hr>
            `;
            contenidoCarrito.append(contCarrito);
            
        }
        
    }
    
    let btnCerrar = document.getElementById(`btnCerrar`)
    btnCerrar.addEventListener(`click`, function () {
    contenidoCarrito.innerHTML = ``;
    })
