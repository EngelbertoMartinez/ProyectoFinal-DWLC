// PRODUCTOS
const productos = [
{ id: 1, nombre: "PC Gamer Alpha X", precio: 17999, imagen: "images/producto 1.png", descripcion: "Potente equipo diseñado para ofrecer un rendimiento fluido en juegos exigentes y tareas multitarea. Ideal para gamers que buscan velocidad, gráficos estables y una experiencia inmersiva tanto en gaming como en creación de contenido." },
{ id: 2, nombre: "PC Gamer Shadow Pro", precio: 9999, imagen: "images/producto 2.png", descripcion: "PC de alto desempeño optimizada para sesiones prolongadas de juego. Su arquitectura garantiza tiempos de respuesta rápidos, estabilidad térmica y compatibilidad con los títulos más recientes del mercado." },
{ id: 3, nombre: "PC Gamer Titan Core", precio: 20000, imagen: "images/producto 3.png", descripcion: "Diseñada para jugadores competitivos, esta PC combina potencia y eficiencia para ofrecer gráficos nítidos y un desempeño constante. Perfecta para streaming, edición básica y gaming avanzado." },
{ id: 4, nombre: "PC Gamer Nova RGB", precio: 25099, imagen: "images/producto 4.png" , descripcion: "Equipo equilibrado con diseño moderno e iluminación RGB. Ofrece una experiencia de juego envolvente y un excelente rendimiento para usuarios que buscan potencia y estilo en un solo dispositivo."},
{ id: 5, nombre: "Teclado Mecánico RGB Pro", precio: 750, imagen: "images/producto 5.png", descripcion: "Teclado mecánico de alta precisión con iluminación RGB personalizable. Ideal para gamers que requieren respuesta rápida y durabilidad en cada pulsación." },
{ id: 6, nombre: "Mouse Gamer Precision", precio: 760, imagen: "images/producto 6.png", descripcion: "Mouse de alta precisión con sensor óptico avanzado. Diseñado para ofrecer rapidez y exactitud en juegos competitivos." },
{ id: 7, nombre: "Alfombrilla Gamer XL", precio: 299, imagen: "images/producto 7.png", descripcion: "Superficie amplia y suave que garantiza movimientos precisos del mouse. Ideal para configuraciones gamer profesionales." },
{ id: 8, nombre: "Teclado Gamer Compact", precio: 450, imagen: "images/producto 8.png", descripcion: "Diseño compacto que ahorra espacio sin sacrificar funcionalidad. Perfecto para escritorios pequeños y jugadores que prefieren movilidad y comodidad." },
{ id: 9, nombre: "Alfombrilla Antideslizante Pro", precio: 500, imagen: "images/producto 9.png", descripcion: "Base antideslizante que asegura estabilidad total durante el juego. Diseñada para ofrecer precisión y control en cada movimiento." },
{ id: 10, nombre: "Teclado Mecánico Silent", precio: 550, imagen: "images/producto 10.png", descripcion: "Proporciona una escritura precisa con bajo nivel de ruido. Ideal para gamers y usuarios que buscan rendimiento sin distracciones sonoras." },
{ id: 11, nombre: "Teclado Gamer Ergonómico", precio: 600, imagen: "images/producto 11.png", descripcion: "Diseñado para reducir la fatiga en sesiones prolongadas. Su distribución de teclas y diseño ergonómico mejoran la comodidad y el control." },
{ id: 12, nombre: "Mouse RGB", precio: 650, imagen: "images/producto 12.png", descripcion: "Mouse ergonómico con iluminación RGB y botones programables. Ideal para personalizar controles y mejorar el rendimiento en gaming." },
{ id: 13, nombre: "Monitor UltraSlim Pro", precio: 1800, imagen: "images/producto 13.png", descripcion: "Pantalla de alta definición que ofrece imágenes nítidas y colores vibrantes. Ideal para gaming competitivo y uso diario." },
{ id: 14, nombre: "Teclado RGB Advanced", precio: 750, imagen: "images/producto 14.png", descripcion: "Teclado moderno con múltiples modos de iluminación y teclas programables. Perfecto para personalizar la experiencia de juego." },
{ id: 15, nombre: "MiniKeyborad Wireless", precio: 800, imagen: "images/producto 15.png", descripcion: "Diseñado para reducir la fatiga en sesiones prolongadas. Su distribución de teclas y diseño ergonómico mejoran la comodidad y el control." },
{ id: 16, nombre: "Monitor Gamer 27” Alta Frecuencia", precio: 1899, imagen: "images/producto 16.png", descripcion: "Monitor diseñado para ofrecer una experiencia fluida y sin interrupciones. Perfecto para juegos rápidos y gráficos dinámicos." },
{ id: 17, nombre: "Monitor Curvo Immersive", precio: 1999, imagen: "images/producto 17.png", descripcion: "Pantalla curva que mejora la inmersión y el campo visual. Perfecta para juegos, películas y trabajo multitarea." },
{ id: 18, nombre: "Monitor Gamer 24” Full HD", precio: 2950, imagen: "images/producto 18.png", descripcion: "Pantalla de alta definición que ofrece imágenes nítidas y colores vibrantes. Ideal para gaming competitivo y uso diario." },
{ id: 19, nombre: "Audífonos Gamer Comfort", precio: 699, imagen: "images/producto 19.png", descripcion: "Ofrecen sonido envolvente que permite identificar cada detalle del entorno de juego. Ideales para una experiencia inmersiva y comunicación clara." },
{ id: 20, nombre: "Audífonos Gamer Surround", precio: 1050, imagen: "images/producto 20.png", descripcion: "Diseñados para largas sesiones de uso, con almohadillas suaves y audio balanceado. Perfectos para gaming y entretenimiento." }
];


// ---------- INVENTARIO CON BARRA DE BUSQUEDA ----------
const contenedor = document.getElementById("productos");
if (contenedor) {
function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.imagen}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>

            <button onclick='agregarCarrito(${JSON.stringify(p)})'>
                Añadir al carrito
            </button>

            <button onclick="irDetalles(${p.id})">
                Detalles
            </button>
        `;
        contenedor.appendChild(card);
    });
}
    if (contenedor) {
        mostrarProductos(productos);
    }

    const inputBusqueda = document.getElementById("busqueda");

if (inputBusqueda) {
    inputBusqueda.addEventListener("keyup", () => {
        const texto = inputBusqueda.value.toLowerCase();

        const filtrados = productos.filter(p =>
            p.nombre.toLowerCase().includes(texto)
        );

        mostrarProductos(filtrados);
    });
}


}

/* AGREGAR CARRITO */
function agregarCarrito(producto) {
    const clave = obtenerClaveCarrito();
    if (!clave) {
        alert("Debes iniciar sesión para agregar productos al carrito");
        return;
    }

let carrito = JSON.parse(localStorage.getItem(clave)) || [];

    const existe = carrito.find(p => p.id === producto.id);

    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    localStorage.setItem(clave, JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert("Producto agregado al carrito");
}


// ---------- CARRITO ----------
const tablaCarrito = document.getElementById("carrito");
if (tablaCarrito) {
    const clave = obtenerClaveCarrito();
    let carrito = clave
         ? JSON.parse(localStorage.getItem(clave)) || []
        : [];
    let total = 0;

    carrito.forEach((p, index) => {
        const subtotal = p.precio * p.cantidad;
        total += subtotal;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><img src="${p.imagen}" width="60"></td>
            <td>${p.nombre}</td>
            <td>$${p.precio}</td>
            <td>${p.cantidad}</td>
            <td>$${subtotal}</td>
            <td><button onclick="eliminar(${index})">Eliminar</button></td>
        `;
        tablaCarrito.appendChild(fila);
    });

    const totalCarrito = document.getElementById("totalCarrito");
    if (totalCarrito) {
        totalCarrito.textContent = `Total: $${total}`;
    }
}

/* FUNCION ELIMINAR */
function eliminar(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    tablaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((p, i) => {
        total += p.precio;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><img src="${p.imagen}" width="60"></td>
            <td>${p.nombre}</td>
            <td>$${p.precio}</td>
            <td><button onclick="eliminar(${i})">Eliminar</button></td>
        `;
        tablaCarrito.appendChild(fila);
    });

    const totalCarrito = document.getElementById("totalCarrito");
    if (totalCarrito) {
        totalCarrito.textContent = `Total: $${total}`;
    }
} 


function irDetalles(id) {
    window.location.href = `detalles.html?id=${id}`;
}

// Mostrar detalles.html en pantalla completa
const contenedorDetalle = document.getElementById("detalleProducto");

if (contenedorDetalle) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const producto = productos.find(p => p.id === id);

    if (producto) {
        contenedorDetalle.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}">
                <h2>${producto.nombre}</h2>
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <p>${producto.descripcion}</p>

                <button onclick='agregarCarrito(${JSON.stringify(producto)})'>
                    Añadir al carrito
                </button>
            </div>
        `;
    }
}

/* REGISTRAR USUARIO */ 

function registrarUsuario(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert("Este correo ya está registrado");
        return;
    }

    usuarios.push({ nombre, email, password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso");
    window.location.href = "login.html";
}

/* FUNCION LOGEAR USUARIO */

function loginUsuario(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
        u => u.email === email && u.password === password
    );

    if (!usuario) {
        alert("Credenciales incorrectas");
        return;
    }

    localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify({ nombre: usuario.nombre, email: usuario.email })
    );

    window.location.href = "index.html";
}

/* NOMBRE LOGIN */

const usuarioHeader = document.getElementById("usuarioHeader");

if (usuarioHeader) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    if (usuario) {
        usuarioHeader.innerHTML = `
            <a href="carrito.html" class="icon">
                🛒 <span id="contadorCarrito">0</span>
            </a>

            <div class="user-menu">
                <span class="user-name" onclick="toggleMenu()">
                    👋 ${usuario.nombre} ▾
                </span>

                <div class="dropdown" id="dropdownMenu">
                    <a href="cuenta.html">Mi cuenta</a>
                    <a href="pedidos.html">Mis pedidos</a>
                    <a href="#" onclick="logout()">Salir</a>
                </div>
            </div>
        `;
    }
}

// Menu desplegable
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

function logout() {
    localStorage.removeItem("usuarioLogueado");
    window.location.reload();
}

/* Eliminar TODO el producto*/

function eliminar(index) {
    const clave = obtenerClaveCarrito();
    if (!clave) return;

    let carrito = JSON.parse(localStorage.getItem(clave)) || [];
    carrito.splice(index, 1);

    localStorage.setItem(clave, JSON.stringify(carrito));
    actualizarContadorCarrito();
    location.reload();
}


// FUNCION VACIAR CARRITO
function vaciarCarrito() {
    if (!confirm("¿Seguro que deseas vaciar el carrito?")) return;

    const clave = obtenerClaveCarrito();
    if (!clave) return;

    localStorage.removeItem(clave);
    actualizarContadorCarrito();
    location.reload();
}

// Simular compra
function finalizarCompra() {
    const clave = obtenerClaveCarrito();
    if (!clave) {
        alert("Debes iniciar sesión para finalizar la compra");
        return;
    }

    let carrito = JSON.parse(localStorage.getItem(clave)) || [];

    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    let resumen = "🧾 RESUMEN DE COMPRA\n\n";
    let total = 0;

    carrito.forEach(p => {
        const subtotal = p.precio * p.cantidad;
        total += subtotal;
        resumen += `${p.nombre} x${p.cantidad} - $${subtotal}\n`;
    });

    resumen += `\nTOTAL A PAGAR: $${total}\n\n¿Deseas confirmar la compra?`;

    if (!confirm(resumen)) return;

const claveCompras = obtenerClaveCompras();
let compras = JSON.parse(localStorage.getItem(claveCompras)) || [];

compras.push({
    fecha: new Date().toLocaleString(),
    productos: carrito,
    total: total
});

localStorage.setItem(claveCompras, JSON.stringify(compras));

// Vaciar carrito
localStorage.removeItem(clave);
actualizarContadorCarrito();

alert("✅ ¡Compra realizada con éxito!\nTu pedido ha sido guardado");
window.location.href = "pedidos.html";
}

// ACTUALIZAR CONTADOR CARRITO
function actualizarContadorCarrito() {
    const clave = obtenerClaveCarrito();
    let carrito = clave
        ? JSON.parse(localStorage.getItem(clave)) || []
        : [];
    let totalCantidad = 0;

    carrito.forEach(p => {
        totalCantidad += p.cantidad;
    });

    const contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.textContent = totalCantidad;
    }
}
actualizarContadorCarrito();

// TEST - Carrito de compras por usuario
// Clave por carrito
function obtenerClaveCarrito() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (!usuario) return null;
    return `carrito_${usuario.email}`;
}


// TEST - historial de compras
function obtenerClaveCompras() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (!usuario) return null;
    return `compras_${usuario.email}`;
}

// Lista de compras
const listaPedidos = document.getElementById("listaPedidos");

if (listaPedidos) {
    const claveCompras = obtenerClaveCompras();
    let compras = claveCompras
        ? JSON.parse(localStorage.getItem(claveCompras)) || []
        : [];

    if (compras.length === 0) {
        listaPedidos.innerHTML = "<p>No tienes compras registradas.</p>";
    } else {
        compras.forEach((compra, index) => {
            let html = `
                <div class="card">
                    <h3>Pedido #${index + 1}</h3>
                    <p><strong>Fecha:</strong> ${compra.fecha}</p>
                    <ul>
            `;

            compra.productos.forEach(p => {
                html += `<li>${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}</li>`;
            });

            html += `
                    </ul>
                    <p><strong>Total:</strong> $${compra.total}</p>
                </div>
            `;

            listaPedidos.innerHTML += html;
        });
    }
}

// Datos Cuenta
const infoCuenta = document.getElementById("infoCuenta");

if (infoCuenta) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    if (!usuario) {
        alert("Debes iniciar sesión");
        window.location.href = "login.html";
    } else {
        infoCuenta.innerHTML = `
            <h3>Información de la cuenta</h3>
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
        `;
    }
}

// Ofertas Index
const ofertasInicio = document.getElementById("ofertasInicio");

if (ofertasInicio) {
    const productosOferta = [
        {
            id: 7,
            nombre: "ALFOMBRILLA PROFESIONAL",
            precio: 400,
            oferta: 299,
            imagen: "images/producto 7.png",
        },
        {
            id: 16,
            nombre: "MONITOR GAMER 144HZ",
            precio: 2200,
            oferta: 1899,
            imagen: "images/producto 16.png",
        },
        {
            id: 19,
            nombre: "AUDIFONOS GAMER",
            precio: 699,
            oferta: 449,
            imagen: "images/producto 19.png",
        },
        {
            id: 2,
            nombre: "PC GAMER",
            precio: 12999,
            oferta: 9999,
            imagen: "images/producto 2.png",
        }
    ];

    productosOferta.forEach(producto => {
        ofertasInicio.innerHTML += `
            <div class="producto-card oferta">
                <span class="badge-oferta">OFERTA</span>
                <img src="${producto.imagen}">
                <h3>${producto.nombre}</h3>
                <p class="precio-normal">$${producto.precio}</p>
                <p class="precio-oferta">$${producto.oferta}</p>
            </div>
        `;
    });
}

/* MENSAJE DE CONTACTO */
function enviarMensaje(e) {
    e.preventDefault();
    alert("Gracias por contactarnos. Te responderemos pronto.");
    e.target.reset();
}
