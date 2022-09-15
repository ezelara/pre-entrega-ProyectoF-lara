/* ARRAY QUE SIMULA BASE DE DATOS */
let indumentaria = [
    {
        id: 1,
        tipo: 'remera',
        color: 'blanca',
        talla: 'S',
        genero: 'MUJER',
        stock: 20,
        precio: 4500,
    },
    {
        id: 2,
        tipo: 'remera',
        color: 'azul',
        talla: 'M',
        genero: 'HOMBRE',
        stock: 20,
        precio: 4500,
    },
    {
        id: 3,
        tipo: 'remera',
        color: 'amarilla',
        talla: 'M',
        genero: 'UNISEX',
        stock: 20,
        precio: 4500,
    },
    {
        id: 4,
        tipo: 'pantalon',
        color: 'azul',
        talla: 'S',
        genero: 'MUJER',
        stock: 20,
        precio: 4500,
    },
    {
        id: 5,
        tipo: 'pantalon',
        color: 'negro',
        talla: 'M',
        genero: 'HOMBRE',
        stock: 20,
        precio: 4500,
    },
    {
        id: 6,
        tipo: 'musculosa',
        color: "negra",
        talla: 'M',
        genero: 'UNISEX',
        stock: 20,
        precio: 4500,
    },
    {
        id: 7,
        tipo: 'musculosa',
        color: 'blanca',
        talla: 'M',
        genero: 'UNISEX',
        stock: 20,
        precio: 4500,
    },
]

//Realizar la compra de un producto
function comprarProducto() {
    seleccionarProducto()
}

comprarProducto()

// para eso debe seleccionar el filtro de lo que quiere comprar
function seleccionarProducto() {
    let tipoProducto = ingresarNumero('Selecciona Tipo: 1.Remera 2.Pantalon 3.Musculosa', 0, 3)
    let generoProducto = ingresarNumero('Selecciona Genero: 1.UNISEX 2.MUJER 3.HOMBRE', 0, 3)
    let talla = ingresarCaracter('Selecciona Talla: S, M, L')
    let productoEncontrado = mostrarProduto(tipoProducto, generoProducto, talla)

    alert(productoEncontrado) 
    //let productoSeleccionado = ingresarNumero(productoEncontrado, 0, 3);

    if (productoEncontrado != "SIN STOCK") {
        if (confirm("Deseas Comprar el Producto")) {
            let cantidad =  prompt("Selecione cantidad")
    
            procesarCompra(tipoProducto, generoProducto, talla, cantidad)
            alert("Gracias por tu compra. la info fue enviada a tu mail ")
        } else {
            alert("Esperamos que vuelva")
        }
    } else {
        alert("Esperamos que vuelva")
    }
}

//Funcion generica que pide un numero y valida que sea correcto
function ingresarNumero(mensaje, minimo, maximo) {
    let numero = prompt(mensaje)

    while (numero < minimo || numero > maximo) {
        numero = prompt("Error. " + mensaje)
    }
    return numero
}

//Funcion generica que pide un caracter y valida que sea correcto
function ingresarCaracter(mensaje) {
    let caracter = prompt(mensaje).toLocaleUpperCase();

    let opciones = 'SML';

    let existe = opciones.indexOf(caracter);

    while (existe == -1) {
        caracter = prompt(mensaje).toLocaleUpperCase();
    }
    return caracter
}

//Luego se muestra el producto en formar general si solo si hay stock disponible
function mostrarProduto(tipo, genero, talla) {


    
    let mensaje = "";

    let tipoProducto = "";
    if (tipo == '1') {
        tipoProducto = 'remera';
    } else if (tipo == '2') {
        tipoProducto = 'pantalon';
    }else if (tipo == '3') {
        tipoProducto = 'musculosa';
    }

    let generoAux = "";
    if (genero == '1') {
        generoAux = 'UNISEX'; 
    } else if (tipo == '2') {
        generoAux = 'MUJER';
    } else if (tipo == '3') {
        generoAux = 'HOMBRE';
    }

    indumentaria.forEach(i => {

        if (i.tipo === tipoProducto /*&& i.genero == generoAux && i.talla == talla*/) {
            mensaje += i.tipo + " Color: " + i.color + " $ " + i.precio + "\n";
        } 
    });

    return mensaje;
}

// funciones a desarrollar a medida de avanzar el proyecto 
/*function validarStock(id) {
    let producto = indumentaria.find(i => i.id == id)

    producto.stock
    return false;
}*/

/*function procesarCompra () {

}*/
//una vez que acepte se procesa la compra y se actualizan los valores del array */