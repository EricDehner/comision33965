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
let carrito = [];
const compras = [];
let productos = [];
const precioCarrito = [];
const cartas = document.getElementById(`cartas`)
const total = document.getElementById(`totalAPagar`)
const btnCompra = document.getElementById(`btnCompra`)
const btnCerrar = document.getElementById(`btnCerrar`)
const btnPrecio = document.getElementById(`btnCarrito`)
const btnEliminar = document.getElementById(`btnEliminar`)
const contenidoCarrito = document.getElementById(`carrito`)


//Ejecución de funciones

calcularPrecio();
obtenerProductos();


//Declaracion de funciones

const inputValue = ""
const { value: userName } = await Swal.fire({
    title: '¡Bienvenido!',
    input: 'text',
    inputLabel: '¡Accedé a ofertas increibles! Ingresa tu nombre, por favor.',
    inputValue: inputValue,
    background: 'rgba(227, 227, 227, 0.98)',
    confirmButtonColor: 'rgba(197, 200, 172)',
    inputValidator: (value) => {
        if (!value) {
            return '¡Por favor, ingrese su nombre!'
        }
    }
})

//Si no ingresa su nombre, pierde descuento de envios. 
if (userName) {
    Swal.fire(`Hola, ${userName}. ¡Bienvenido!`)
    let cartel = document.querySelector(`.intro`);
    cartel.innerHTML = `<p class="productos_intro boxShadow" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="1000">
    ${userName}, ¡Realizando una compra de 5 productos o más, el envío será gratis! </p>`
}

function obtenerProductos() {
    const URLJSON = "js/productos.json"
    fetch(URLJSON)
        .then(res => res.json())
        .then(data => {
            productos = data
            cardsProductos()
        })
}


function cardsProductos() {

    for (const producto of productos) {
        let carta = document.createElement(`div`);
        carta.className = `card`;
        carta.innerHTML = `<div>
        <a><img src="${producto.img}" class="productos_img card-img-top" alt="productos" data-bs-toggle="modal" data-bs-target="#_${producto.id}"></a>
        </div>
        <div class="modal fade" id="_${producto.id}">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body modal-xl d-flex flex-column">
                        <img src="${producto.img}" class="gallery-item productos_img-modal" alt="gallery">
                    </div>
                </div>
            </div>
        </div>
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
    </div>
    `;
        cartas.append(carta);
        // Evento Button 
        const button = document.getElementById(`agregarCarrito${producto.id}`)
        button.addEventListener("click", (e) => {
            e.preventDefault()
            Swal.fire(
                `${producto.tipo}`,
                `Agregado al carrito`,
                `success`
            );
            carrito.push(producto)
            //console.log(carrito)
            calcularPrecio();
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        })
    }
}


//funcion precio carrito
function calcularPrecio() {
    const precios = carrito.map(x => x.precio)
    precioCarrito.push = (precios)
    const { push } = precioCarrito
    const sumaPrecio = (...push) => {
        return push.reduce((acc, el) => acc + el, 0);
    }
    let montoTotal = sumaPrecio(...push)
    //console.log(montoTotal);
    carrito.length === 0 ? total.innerHTML = `<p>¡Su carrito se encuentra vacío!</p>` : total.innerHTML = `<p>Total a pagar $${montoTotal}</p>`
}

btnPrecio.addEventListener("click", contCarrito)

function contCarrito() {
    for (const producto of carrito) {
        let contCarrito = document.createElement(`div`);
        contCarrito.innerHTML = ` 
        <div class=cardCarrito>
            <img src="${producto.img}" class="cart_image" alt="productos">
        <div class="cart_cont">
            <h5 class=" d-flex justify-content-center align-items-center card-title">${producto.tipo}</h5>
            <div class="d-flex justify-content-around align-items-center">
                <div>
                <p class="card-text">$${producto.precio}</p>
                </div>
            </div>
            <div class="contenedor_trash">
            <i onclick="eliminarDelCarrito" id="btnEliminar" class="fa-sharp trash fa-solid fa-trash"></i>
            </div>
        </div>
        </div>
        <hr>
        `;
        contenidoCarrito.append(contCarrito);
    }
}

btnCerrar.addEventListener(`click`, function () {
    contenidoCarrito.innerHTML = ``;
})

btnCompra.addEventListener(`click`, function () {
    carrito.length !== 0 ?
        //Si el carrito tiene productos y se presiona comprar.
        correct()
        :
        //Si el carrito no posee productos y se presiona comprar. 
        Swal.fire(
            `¡Aun no posee productos en su carrito!`,
            `Seleccione el prodcuto que desee y vuelva a intentarlo`,
            `error`
        );
})

/*Justificación de librería. 

Utilicé solo SweetAlert porque segun mi criterio es lo mas sutil para las interacciones en las alertas para el contenido de mi pagina.*/
function correct() {
    Swal.fire(
        `¡Su compra se ha realizado con exito!`,
        `No dude en volver a comprarnos`,
        `success`
    )
    compras.push(carrito)
    contenidoCarrito.innerHTML = ``;
    localStorage.setItem("Compra exitosa", JSON.stringify(compras[0]))
    carrito.length = 0;
    contCarrito();
    calcularPrecio();
}


