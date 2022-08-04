//saludo
alert(`¡Bienvenido!`)
//funcion de inicio 
bienvenida();
function bienvenida() {
    class Producto {
        constructor(nombre, precio, personalizado) {
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.personalizado = personalizado;
        }
    }
    const productos = [];
    let precio = 0;
    let nameUser = prompt(`Ingrese su nombre, porfavor.`);
    //si ingresa un nombre que no sea "", muestra productos.
    if (nameUser !== ``) {
        alert(`Hola ${nameUser}, ¿en qué podemos ayudarte? A continuacion te detallaremos nuestros productos`)
        adqProd = (prompt(`${nameUser}, ingrese que producto desea adquirir.\n - Almohadones basicos\n - Almohadones personalizados\n - Barbijos basicos\n - Barbijos personalizados\nPresione enter para continuar.`)).toLowerCase();
        calcular();
        function calcular() {
            while (adqProd != "") {
                switch (adqProd) {
                    case `almohadones basicos`:
                    case `almohadon basico`:
                        productos.push(new Producto(`almohadon basico`, 1500, false));
                        precio = precio + 1500;
                        break;
                    case `almohadones personalizados`:
                    case `almohadon personalizado`:
                        productos.push(new Producto(`almohadon personalizado`, 1800, true));
                        precio = precio + 1800;
                        break;
                    case `barbijos basicos`:
                    case `barbijo basico`:
                        productos.push(new Producto(`barbijo basico`, 400, false));
                        precio = precio + 400;
                        break;
                    case `barbijos personalizados`:
                    case `barbijo personalizado`:
                        productos.push(new Producto(`barbijo personalizado`, 550, true));
                        precio = precio + 550;
                        break;
                }
                console.table(productos)
                adqProd = prompt(`${nameUser}, ingrese que producto desea adquirir.\n - Almohadones basicos\n - Almohadones personalizados\n - Barbijos basicos\n - Barbijos personalizados\nPresione enter para continuar.`)
            }
            const personalizado = productos.filter((productos) => productos.personalizado == false)
            console.log(personalizado)
            console.log(`Total a pagar: $ ${precio}`);
        }
    }
    //si el nombre fue "", solicita ingresar nuevamente nombre.
    else {
        alert(`El nombre ingresado no es valido, por favor intentelo nuevamente.`)
        bienvenida();
    }
}
