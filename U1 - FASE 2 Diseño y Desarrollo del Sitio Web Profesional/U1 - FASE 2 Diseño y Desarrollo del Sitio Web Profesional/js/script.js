// ===== MENÚ HAMBURGUESA (MÓVIL) =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== ACORDEÓN (VER MÁS EN SERVICIOS) =====
const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

botonesVerMas.forEach(boton => {
    boton.addEventListener('click', () => {
        const servicioId = boton.dataset.servicio;
        const detalle = document.getElementById(`detalle-${servicioId}`);
        const icono = boton.querySelector('i');
        
        // Cerrar otros abiertos
        document.querySelectorAll('.servicio-detalle.mostrar').forEach(d => {
            if (d.id !== `detalle-${servicioId}`) {
                d.classList.remove('mostrar');
                const otroBoton = document.querySelector(`[data-servicio="${d.id.split('-')[1]}"]`);
                if (otroBoton) {
                    otroBoton.querySelector('i').style.transform = 'rotate(0deg)';
                }
            }
        });
        
        // Abrir/cerrar actual
        detalle.classList.toggle('mostrar');
        
        // Rotar icono
        if (detalle.classList.contains('mostrar')) {
            icono.style.transform = 'rotate(180deg)';
        } else {
            icono.style.transform = 'rotate(0deg)';
        }
    });
});

// ===== ANIMACIÓN DE TEXTO (FADE-IN AL HACER SCROLL) =====
const fraseDestacada = document.querySelector('.frase-destacada');

if (fraseDestacada) {
    function checkFade() {
        const posicion = fraseDestacada.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;
        
        if (posicion < alturaPantalla - 100) {
            fraseDestacada.style.opacity = '1';
            fraseDestacada.style.transform = 'translateY(0)';
        }
    }

    // Estilo inicial para animación
    fraseDestacada.style.opacity = '0';
    fraseDestacada.style.transform = 'translateY(20px)';
    fraseDestacada.style.transition = 'all 0.8s ease';

    window.addEventListener('scroll', checkFade);
    checkFade(); // Ejecutar al cargar
}

// ===== MODAL (FORMULARIO) =====
const formulario = document.getElementById('form-contacto');
const modal = document.getElementById('modal-exito');
const modalClose = document.querySelector('.modal-close');
const modalBtn = document.querySelector('.modal-btn');

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que se envíe realmente
        
        // Mostrar modal
        if (modal) {
            modal.classList.add('mostrar');
        }
        
        // Limpiar formulario
        formulario.reset();
    });
}

function cerrarModal() {
    if (modal) {
        modal.classList.remove('mostrar');
    }
}

if (modalClose) {
    modalClose.addEventListener('click', cerrarModal);
}

if (modalBtn) {
    modalBtn.addEventListener('click', cerrarModal);
}

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});

// ===== SCROLL SUAVE PARA ENLACES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});