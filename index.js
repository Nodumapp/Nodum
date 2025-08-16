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
            ecosystem_title: "Un ecosistema de soluciones activables según tu necesidad.",
            ecosystem_desc: "En Nodum, cada modulo es una herramienta independiente que podes activar cuando lo necesitas. Sin intermediaros, sin integraciones complejas, sin esperar permisos.",
            features_title: "Caracteristicas principales",
            plan_basic_feat1: "1 módulo activo",
            plan_basic_feat2: "Hasta 3 usuarios",
            plan_basic_feat3: "Soporte por correo electrónico",
            plan_basic_feat4: "Acceso a actualizaciones básicas",
            plan_basic_feat5: "Panel de control centralizado",

            plan_pro_feat1: "Hasta 5 módulos activos",
            plan_pro_feat2: "Incluye 10 usuarios",
            plan_pro_feat3: "Exportación de datos e informes",
            plan_pro_feat4: "Soporte prioritario por chat y correo electrónico",
            plan_pro_feat5: "Personalización básica de la interfaz",

            plan_enterprise_feat1: "Módulos ilimitados",
            plan_enterprise_feat2: "Usuarios ilimitados",
            plan_enterprise_feat3: "Soporte 24/7 con gerente de cuenta dedicado",
            plan_enterprise_feat4: "Onboarding y capacitación en la empresa",
            plan_enterprise_feat5: "Exportaciones programadas: envío automático de informes por correo electrónico",
            faq_title: "Preguntas Frecuentes (FAQ)",
            faq_subtitle: "Todo lo que tenés que saber para empezar",
            faq1_q: "¿Qué es Nodum y cómo funciona?",
            faq1_a: " Nodum es una plataforma online que reúne diferentes herramientas para que tu empresa trabaje de forma mas simple, rapida y sin depender de terceros",
            faq2_q: "¿Necesito conocimientos técnicos para usar Nodum?",
            faq2_a: "No, Nodum está diseñado para ser fácil de usar y no requiere conocimientos técnicos previos.",
            faq3_q: "¿Puedo cambiar de plan en cualquier momento?",
            faq3_a: "Sí, puedes cambiar cuando quieras...",
            faq4_q: "¿Qué soporte técnico ofrecen?",
            faq4_a: "Soporte por email, chat y teléfono.",
            footer_terms: "Términos y Condiciones",
            footer_privacy: "Política de Privacidad",
            footer_security: "Seguridad de la Información",
            footer_cookies: "Cookies",
            footer_rights: "Todos los derechos reservados.",
            footer_legal: "Legales",
            card4_title: "Agenda Inteligente",
            card4_text: "Organiza tus reuniones y tareas de manera sencilla, con recordatorios automáticos y sincronización en todos tus dispositivos.",
            card3_title: "Tienda Online",
            card3_text: "Vende tus productos fácilmente con un sistema seguro, moderno y con opciones de pago integradas.",
            card2_title: "Sistema de Gestión / ERP",
            card2_text: "Controla tus procesos, equipos y recursos desde un solo lugar con reportes y análisis en tiempo real.",
            card1_title: "Ecosistema Integrado",
            card1_text: "Todas nuestras aplicaciones trabajan en conjunto. Agenda, gestión y ventas se sincronizan automáticamente para que tu negocio fluya sin fricciones.",


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
            features_title: "Key Features",
            faq_title: "Frequently Asked Questions (FAQ)",
            faq_subtitle: "Everything you need to know to get started",
            faq1_q: "What is Nodum and how does it work?",
            faq1_a: "Nodum is an online platform that brings together different tools so your company can work more simply, quickly, and without relying on third parties",
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
            plan_enterprise_feat5: "Scheduled exports: automatic report delivery via email",
            footer_terms: "Terms and Conditions",
            footer_privacy: "Privacy Policy",
            footer_security: "Information Security",
            footer_cookies: "Cookies",
            footer_rights: "All rights reserved.",
            footer_legal: "Legals",
            card4_title: "Smart Agenda",
            card4_text: "Organize your meetings and tasks easily, with automatic reminders and synchronization across all your devices.",
            card3_title: "Online Store",
            card3_text: "Sell your products easily with a secure, modern system and integrated payment options.",
            card2_title: "Management System / ERP",
            card2_text: "Control your processes, teams, and resources from a single place with real-time reports and analytics.",
            card1_title: "Integrated Ecosystem",
            card1_text: "All our applications work together. Scheduling, management, and sales sync automatically so your business flows without friction.",

        }
    };

    // 🔹 Elementos DOM
    const btnMensual = document.getElementById('btnMensual');
    const btnAnual = document.getElementById('btnAnual');
    const descAhorro = document.getElementById('descAhorro');

    const btnBasico = document.getElementById('btnBasico');
    const btnPro = document.getElementById('btnPro');
    const btnEmpresarial = document.getElementById('btnEmpresarial');

    const precioBasico = document.getElementById('precioBasico');
    const precioPro = document.getElementById('precioPro');
    const precioEmpresarial = document.getElementById('precioEmpresarial');

    const btnsPlanes = [btnBasico, btnPro, btnEmpresarial];
    const planes = document.querySelectorAll('.plan');
    const botones = document.querySelectorAll('.btn-plan');

    // 🔹 Precios originales en ARS
    const preciosARS = {
        mensual: { basico: '$45.000 ARS', pro: '$60.000 ARS', empresarial: '$80.000 ARS' },
        anual: { basico: '$351.000 ARS', pro: '$468.000 ARS', empresarial: '$624.000 ARS' }
    };

    // 🔹 Precios en USD
    const preciosUSD = {
        mensual: { basico: '$45 USD', pro: '$60 USD', empresarial: '$80 USD' },
        anual: { basico: '$351 USD', pro: '$468 USD', empresarial: '$624 USD' }
    };

    // 🔹 Función para actualizar precios
    function actualizarPrecios(tipo) {
        const preciosActuales = currentLang === 'en' ? preciosUSD : preciosARS;

        if (tipo === 'mensual') {
            btnMensual.classList.add('active');
            btnAnual.classList.remove('active');
            precioBasico.textContent = preciosActuales.mensual.basico;
            precioPro.textContent = preciosActuales.mensual.pro;
            precioEmpresarial.textContent = preciosActuales.mensual.empresarial;
            descAhorro.style.display = 'none';
        } else {
            btnAnual.classList.add('active');
            btnMensual.classList.remove('active');
            precioBasico.textContent = preciosActuales.anual.basico;
            precioPro.textContent = preciosActuales.anual.pro;
            precioEmpresarial.textContent = preciosActuales.anual.empresarial;
            descAhorro.style.display = 'block';
        }
    }

    // 🔹 Inicializa con mensual
    actualizarPrecios('mensual');

    // 🔹 Cambiar periodo
    btnMensual.addEventListener('click', () => { currentPeriod = 'mensual'; actualizarPrecios('mensual'); });
    btnAnual.addEventListener('click', () => { currentPeriod = 'anual'; actualizarPrecios('anual'); });

    // 🔹 Selección de plan
    btnsPlanes.forEach(btn => {
        btn.addEventListener('click', () => {
            btnsPlanes.forEach(b => {
                b.classList.remove('selected');
                b.textContent = translations[currentLang].btn_select_plan;
                b.nextElementSibling.textContent = "";
                b.style.cursor = 'pointer';
            });
            btn.classList.add('selected');
            btn.textContent = translations[currentLang].btn_selected;
            btn.nextElementSibling.textContent = currentLang === 'en' ? "Hire now!" : "¡Contratar ahora!";
            btn.style.cursor = 'default';
        });
    });

    botones.forEach((btn) => {
        btn.addEventListener('click', () => {
            planes.forEach((plan) => plan.classList.remove('selected'));
            botones.forEach((b) => {
                b.textContent = translations[currentLang].btn_select_plan;
                b.classList.remove('activo');
            });

            const plan = btn.closest('.plan');
            plan.classList.add('selected');
            btn.textContent = translations[currentLang].btn_selected;
            btn.nextElementSibling.textContent = currentLang === 'en' ? "Hire now!" : "¡Contratar ahora!";
            btn.classList.add('activo');
        });
    });

    // 🔹 FAQ toggle
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

        btnsPlanes.forEach(btn => {
            if (btn.classList.contains('selected')) {
                btn.textContent = translations[lang].btn_selected;
                btn.nextElementSibling.textContent = lang === 'en' ? "Hire now!" : "¡Contratar ahora!";
            } else {
                btn.textContent = translations[lang].btn_select_plan;
                btn.nextElementSibling.textContent = "";
            }
        });

        actualizarPrecios(currentPeriod);
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
