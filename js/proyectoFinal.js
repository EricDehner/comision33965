//array
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
const productos = [
    {
        id: 1,
        tipo: `Almohadon basico`,
        precio: 1500,
        talle: `S, M, L`,
        img: "./imagenes/productos/almohadones/07.png"
    },
    {
        id: 2,
        tipo: `Almohadon personalizado`,
        precio: 1800,
        talle: `S, M, L`,
        img: "./imagenes/productos/almohadones/01.png"
    },
    {
        id: 3,
        tipo: `Barbijo basico`,
        precio: 400,
        talle: `S, M, L`,
        img: "./imagenes/productos/barbijos/4.png"
    },
    {
        id: 4,
        tipo: `Barbijo personalizado`,
        precio: 550,
        talle: `S, M, L`,
        img: "./imagenes/productos/barbijos/9.png"
    }
];
let precioSuma = 0;
const precioCarrito = []
function calcularPrecio() {
    for (let i = 0; i < precioCarrito.length; i++) {
        precioSuma += precioCarrito[i];
    }
    console.log(`Total a pagar: $` + precioSuma);
}
//funcion de inicio 
ingreso();
function ingreso() {
    let nameUser = prompt(`¡Bienvenido! Ingrese su nombre, porfavor.`);
    //si ingresa un nombre que no sea "", muestra productos.
    if (nameUser !== ``) {
        //cartel emergente
        let cartel = document.querySelector(`.productos_intro`);
        cartel.innerHTML = `${nameUser}, realizando una compra de 2 productos o más, ¡el envío será gratis! `
        //cards
        let cartas = document.getElementById(`cartas`)
        for (const producto of productos) {
            let carta = document.createElement(`div`);
            carta.className = `card`;
            carta.innerHTML = `<img src="${producto.img}" class="productos_img card-img-top" alt="productos">
    <div class="card-body">
        <h5 class="d-flex justify-content-center align-items-center card-title">${producto.tipo}</h5>
        <h6 class="d-flex justify-content-center align-items-center card-title talles">Talles disponibles<br>${producto.talle}</h6>
        <div class="d-flex justify-content-around align-items-center">
            <p class="card-text">$${producto.precio}</p>
            <button id="agregarCarrito${producto.id}" type="button" class="btn btn-primario"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
    `;
            cartas.append(carta);
        }
        let botonPrecio = document.getElementById(`botonPrecio`);
        botonPrecio.addEventListener(`click`, precio)
        function precio(){
            calcularPrecio();
        }


        let agregarCarrito1 = document.getElementById(`agregarCarrito1`);
        agregarCarrito1.addEventListener(`click`, interactuar1)
        function interactuar1() {
            alert(`¡Agregaste Almohadon basico!`)
            const precios = productos.map((el) => el.precio)
            precioCarrito.push(precios[0]);
            //console.log(precioCarrito);
            //calcularPrecio();
        }
        let agregarCarrito2 = document.getElementById(`agregarCarrito2`);
        agregarCarrito2.addEventListener(`click`, interactuar2)
        function interactuar2() {
            alert(`¡Agregaste Almohadon personalizado!`)
            const precios = productos.map((el) => el.precio)
            precioCarrito.push(precios[1]);
            //console.log(precioCarrito);
            //calcularPrecio();
        }
        let agregarCarrito3 = document.getElementById(`agregarCarrito3`);
        agregarCarrito3.addEventListener(`click`, interactuar3)
        function interactuar3() {
            alert(`¡Agregaste Barbijo basico!`)
            const precios = productos.map((el) => el.precio)
            precioCarrito.push(precios[2]);
            //console.log(precioCarrito);
            //calcularPrecio();
        }
        let agregarCarrito4 = document.getElementById(`agregarCarrito4`);
        agregarCarrito4.addEventListener(`click`, interactuar4)
        function interactuar4() {
            alert(`¡Agregaste Barbijo personalizado!`)
            const precios = productos.map((el) => el.precio)
            precioCarrito.push(precios[3]);
            //console.log(precioCarrito);
            //calcularPrecio();
        }
    }
    //si el nombre fue "", solicita ingresar nuevamente nombre.
    else {
        alert(`El nombre ingresado no es valido, por favor intentelo nuevamente.`)
        ingreso();
    }
}

