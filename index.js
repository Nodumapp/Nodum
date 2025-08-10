const btnMensual = document.getElementById('btnMensual');
const btnAnual = document.getElementById('btnAnual');
const descuentoAnual = document.getElementById('descAhorro');

// Precios para mensual y anual
const precios = {
    mensual: {
        basico: '$45.000',
        pro: '$60.000 ARS',
        empresarial: '$80.000 ARS'
    },
    anual: {
        basico: '$351.000',
        pro: '$468.000 ARS',
        empresarial: '$624.000 ARS'
    }
};

// Botones seleccionar plan
const btnBasico = document.getElementById('btnBasico');
const btnPro = document.getElementById('btnPro');
const btnEmpresarial = document.getElementById('btnEmpresarial');

// Precio elementos
const precioBasico = document.getElementById('precioBasico');
const precioPro = document.getElementById('precioPro');
const precioEmpresarial = document.getElementById('precioEmpresarial');

// Función para actualizar precios
function actualizarPrecios(tipo) {
    if (tipo === 'mensual') {
        btnMensual.classList.add('active');
        btnAnual.classList.remove('active');
        precioBasico.textContent = precios.mensual.basico;
        precioPro.textContent = precios.mensual.pro;
        precioEmpresarial.textContent = precios.mensual.empresarial;
        descAhorro.style.display = 'none';  // Oculta el texto
    } else {
        btnAnual.classList.add('active');
        btnMensual.classList.remove('active');
        precioBasico.textContent = precios.anual.basico;
        precioPro.textContent = precios.anual.pro;
        precioEmpresarial.textContent = precios.anual.empresarial;
        descAhorro.style.display = 'block'; // Muestra el texto
    }
}

// Cambiar active del switch y actualizar precios
btnMensual.addEventListener('click', () => actualizarPrecios('mensual'));
btnAnual.addEventListener('click', () => actualizarPrecios('anual'));

// Inicializa con mensual
actualizarPrecios('mensual');

// Funcionalidad para seleccionar plan (opcional)
const btnsPlanes = [btnBasico, btnPro, btnEmpresarial];
btnsPlanes.forEach(btn => {
    btn.addEventListener('click', () => {
        btnsPlanes.forEach(b => {
            b.classList.remove('selected');
            b.textContent = "Seleccionar plan";
            b.nextElementSibling.textContent = "";
            b.style.cursor = 'pointer';
        });
        btn.classList.add('selected');
        btn.textContent = "Seleccionado";
        btn.nextElementSibling.textContent = "¡Contratar ahora!";
        btn.style.cursor = 'default';
    });
});