document.addEventListener("DOMContentLoaded", () => {
    // 🔹 Variables de idioma y periodo
    let currentLang = "es";
    let currentPeriod = "mensual";

    // 🔹 Traducciones
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_solutions: "Soluciones",
            nav_plans: "Planes",
            nav_faq: "FAQs",
            btn_register: "Registrarme",
            btn_login: "Ingresar",
            hero_title: "Activá tus procesos.<br>Sin <span class='highlight'>pedir permiso.</span>",
            hero_subtitle: "La plataforma autogestionada para empresas que quieren simplificar, escalar y dejar de depender de terceros.",
            plans_title: "Planes simples y diseñados para crecer con tu empresa.",
            plans_desc: "Elegí el módulo o plan que se ajuste a tus necesidades. Activación inmediata sin contratos ni costos ocultos.",
            btn_monthly: "Mensual",
            btn_yearly: "Anual",
            save_desc: "Ahorra <span>35%</span>",
            plan_basic: "Básico",
            plan_basic_desc: "Ideal para empresas que quieren empezar a digitalizar procesos...",
            plan_pro: "Pro",
            plan_pro_desc: "Para empresas que necesitan más potencia, flexibilidad y herramientas.",
            plan_enterprise: "Empresarial",
            plan_enterprise_desc: "La experiencia completa de Nodum...",
            btn_select_plan: "Seleccionar plan",
            btn_selected: "Seleccionado",
            label_popular: "Popular",
            faq_title: "Preguntas Frecuentes (FAQ)",
            faq_subtitle: "Todo lo que tenés que saber para empezar",
            faq1_q: "¿Qué es Nodum y cómo funciona?",
            faq1_a: "Nodum es una plataforma online que reúne diferentes herramientas...",
            faq2_q: "¿Necesito conocimientos técnicos para usar Nodum?",
            faq2_a: "No, Nodum está diseñado para ser fácil de usar y no requiere conocimientos técnicos previos.",
            faq3_q: "¿Puedo cambiar de plan en cualquier momento?",
            faq3_a: "Sí, puedes cambiar cuando quieras...",
            faq4_q: "¿Qué soporte técnico ofrecen?",
            faq4_a: "Soporte por email, chat y teléfono."
        },
        en: {
            nav_home: "Home",
            nav_solutions: "Solutions",
            nav_plans: "Plans",
            nav_faq: "FAQs",
            btn_register: "Sign up",
            btn_login: "Log in",
            hero_title: "Activate your processes.<br>Without <span class='highlight'>asking for permission.</span>",
            hero_subtitle: "The self-managed platform for companies that want to simplify, scale, and stop depending on third parties.",
            plans_title: "Simple plans designed to grow with your company.",
            plans_desc: "Choose the module or plan that suits your needs. Immediate activation without contracts or hidden fees.",
            btn_monthly: "Monthly",
            btn_yearly: "Yearly",
            save_desc: "Save <span>35%</span>",
            plan_basic: "Basic",
            plan_basic_desc: "Ideal for companies that want to start digitizing processes...",
            plan_pro: "Pro",
            plan_pro_desc: "For companies that need more power, flexibility, and tools.",
            plan_enterprise: "Enterprise",
            plan_enterprise_desc: "The full Nodum experience...",
            btn_select_plan: "Select plan",
            btn_selected: "Selected",
            ecosystem_title: "An ecosystem of solutions you can activate when needed.",
            ecosystem_desc: "In Nodum, each module is an independent tool you can activate whenever you need it. No intermediaries, no complex integrations, no waiting for permissions.",
            label_popular: "Popular",
            faq_title: "Frequently Asked Questions (FAQ)",
            faq_subtitle: "Everything you need to know to get started",
            faq1_q: "What is Nodum and how does it work?",
            faq1_a: "Nodum is an online platform that brings different tools together...",
            faq2_q: "Do I need technical knowledge to use Nodum?",
            faq2_a: "No, Nodum is designed to be easy to use.",
            faq3_q: "Can I change my plan at any time?",
            faq3_a: "Yes, you can switch anytime.",
            faq4_q: "What technical support do you offer?",
            faq4_a: "Email, chat and phone support.",
             plan_basic_feat1: "1 active module",
      plan_basic_feat2: "Up to 3 users",
      plan_basic_feat3: "Email support",
      plan_basic_feat4: "Access to basic updates",
      plan_basic_feat5: "Centralized dashboard",
      plan_pro_feat1: "Up to 5 active modules",
      plan_pro_feat2: "10 users included",
      plan_pro_feat3: "Data and report export",
      plan_pro_feat4: "Priority support via chat and email",
      plan_pro_feat5: "Basic interface customization",
      plan_enterprise_feat1: "Unlimited modules",
      plan_enterprise_feat2: "Unlimited users",
      plan_enterprise_feat3: "24/7 support with dedicated account manager",
      plan_enterprise_feat4: "Onboarding and in-company training",
      plan_enterprise_feat5: "Scheduled exports: automatic report delivery via email"
        }
    };

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
const planes = document.querySelectorAll('.plan');
const botones = document.querySelectorAll('.btn-plan');

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Quitar selección de todos
    planes.forEach((plan) => plan.classList.remove('selected'));
    botones.forEach((b) => {
      b.textContent = 'Seleccionar plan';
      b.classList.remove('activo');
    });

    // Agregar selección al plan clickeado
    const plan = btn.closest('.plan');
    plan.classList.add('selected');
    btn.textContent = 'Seleccionado';
    btn.classList.add('activo');
  });
});
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    item.classList.toggle('active');
  });
});

    // 🔹 Traducción dinámica
    function loadTranslations(lang) {
        currentLang = lang;
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        // Actualiza texto de planes seleccionados
        btnsPlanes.forEach(btn => {
            if (btn.classList.contains('selected')) {
                btn.textContent = translations[lang].btn_selected;
            } else {
                btn.textContent = translations[lang].btn_select_plan;
            }
        });
    }

    // 🔹 Cambio de idioma con banderas
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang');
            loadTranslations(lang);
            const flag = document.getElementById('flag');
            const img = item.querySelector('img');
            flag.src = img.src;
            flag.alt = img.alt;
        });
    });

    // 🔹 Inicializa traducciones
    loadTranslations(currentLang);
});
