
//array
class Producto {
    constructor(nombre, precio, personalizado) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.talle = talle;
    }
}
const productos = [
    {
        tipo: `Almohadon basico`,
        precio: 1500,
        talle: `S, M, L`,
        img: "./imagenes/productos/almohadones/07.png"
    },
    {
        tipo: `Almohadon personalizado`,
        precio: 1800,
        talle: `S, M, L`,
        img: "./imagenes/productos/almohadones/01.png"
    },
    {
        tipo: `Barbijo basico`,
        precio: 400,
        talle: `S, M, L`,
        img: "./imagenes/productos/barbijos/4.png"
    },
    {
        tipo: `Barbijo personalizado`,
        precio: 550,
        talle: `S, M, L`,
        img: "./imagenes/productos/barbijos/9.png"
    }
];
let precio = 0;

//funcion de inicio 
ingreso();
function ingreso() {
    let nameUser = prompt(`¡Bienvenido! Ingrese su nombre, porfavor.`);
    //si ingresa un nombre que no sea "", muestra productos.
    if (nameUser !== ``) {
        //cartel emergente
        let cartel = document.querySelector(`.productos_intro`);
        cartel.innerHTML = `${nameUser}, ¡Realizando una compra de 2 productos o más, el envío será gratis! `
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
            <button type="button" class="btn btn-primario"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
    `;
            cartas.append(carta);
        }

    }
    //si el nombre fue "", solicita ingresar nuevamente nombre.
    else {
        alert(`El nombre ingresado no es valido, por favor intentelo nuevamente.`)
        ingreso();
    }
    }