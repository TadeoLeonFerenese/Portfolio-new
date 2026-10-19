/** @type {import('./types.js').Project[]} */
export const projects = [
  {
    id: 'nodo-inventory',
    title: 'NODO INVENTORY',
    subtitle:
      'Sistema de Inventario Multiplataforma (Windows + Android) con Sincronización Local-First e IA.',
    repo: 'https://github.com/TadeoLeonFerenese/Nodo',
    badges: ['SQLite Activo', 'Wi-Fi Direct :4545', 'Motor IA: gemini-3.5-flash'],
    details: [
      'Evolución completa de la tesis universitaria de la UNaB ("Stockeate"). Funciona de forma nativa y sincronizada en Windows (Nodo Central) y Android.',
      'Sincronización sin Nube: motor propio (Wi-Fi Direct Local Engine) que abre un servidor local (ej. puerto 4545) y vincula teléfonos Android en la misma red mediante lectura de Código QR.',
      'Módulo de IA (Visión): integración con Google Gemini (gemini-3.5-flash) en la sección de "Remitos" para tomar fotos de facturas/remitos en papel o subir archivos y extraer automáticamente los ítems al stock.',
      'Funcionalidades: catálogo con lector de código de barras por cámara, control de stock mínimo, historial de movimientos (entradas/salidas con marcas de tiempo) y configuración de API Key local.',
    ],
    pipeline: [
      'Foto Remito / Escaneo Android',
      'Procesamiento Gemini 3.5 Flash',
      'Sync Wi-Fi Puerto 4545',
      'Base Local SQLite / PostgreSQL',
    ],
    media: [
      {
        type: 'video',
        label: 'VIDEO DEMO: Sincronización en tiempo real entre PC Windows y Android + Lectura de Remito con IA',
        aspect: '16/9',
      },
      {
        type: 'device-desktop',
        label: 'CAPTURA WINDOWS 1: Panel de Perfil & Sincronización mostrando SQLite Activo, configuración Gemini 3.5 Flash y Servidor Wi-Fi con QR',
        aspect: '16/10',
      },
      {
        type: 'device-desktop',
        label: 'CAPTURA WINDOWS 2: Vista de Catálogo limpio de escritorio',
        aspect: '16/10',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 1: Catálogo con precios y stock',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 2: Historial de Movimientos (Entradas/Salidas)',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 3: Carga de Remito con IA',
        aspect: '9/19.5',
      },
    ],
  },
  {
    id: 'bunker-notas',
    title: 'BUNKER NOTAS',
    subtitle:
      'Aplicación Android Local-First de notas seguras, personalización avanzada y asistencia por IA.',
    repo: 'https://github.com/TadeoLeonFerenese/bunker-notas',
    badges: ['Android APK', 'Seguridad & Privacidad', 'Asistente IA', 'Dogfooding: Uso Diario'],
    details: [
      'Aplicación construida para resolver una necesidad real de organización personal diaria sin exponer datos privados en servidores de terceros.',
      'Características principales: clasificación por pestañas (Todas, Marcadas, Seguras con bloqueo por candado), buscador en tiempo real, editor rico con modo lectura/edición, recordatorios, notas de voz e imágenes.',
      'Personalización e IA: menú de configuración de IA integrada, sistema de Copias de Seguridad (Backup), selector de 5 temas de color y personalización de fondos de pantalla.',
    ],
    media: [
      {
        type: 'video',
        label: 'VIDEO DEMO: Recorrido fluido por Bunker Notas, cambio de temas, desbloqueo de notas seguras y uso del botón flotante de IA',
        aspect: '16/9',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 1: Grilla principal de notas con stickers/categorías',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 2: Vista de lectura/edición de nota extensa',
        aspect: '9/19.5',
      },
      {
        type: 'device-android',
        label: 'CAPTURA ANDROID 3: Menú desplegable mostrando Configurar IA, Copia de seguridad y Temas',
        aspect: '9/19.5',
      },
    ],
  },
  {
    id: 'poder-judicial',
    title: 'PODER JUDICIAL DE LA NACIÓN',
    subtitle: 'Desarrollo y Mantenimiento de Software Crítico (Área de Planificación).',
    badges: ['Código Privado / Confidencialidad Institucional'],
    confidential: true,
    details: [
      'Mantenimiento evolutivo, corrección de bugs y actualización de vistas frontend y lógica de negocio backend en PHP y Laravel.',
      'Sistemas intervenidos: Escuela Judicial, Gestión de Auditorías UAI y Registro de Pliego Automotor.',
      'Gestión de entornos locales de desarrollo y pruebas aisladas utilizando máquinas virtuales en Oracle VirtualBox.',
    ],
    media: [],
  },
  {
    id: 'pedimon',
    title: 'PEDIMON',
    subtitle:
      'Mi primera página web (Proyecto Inicial en NUCBA). E-commerce interactivo con catálogo dinámico y carrito de compras funcional.',
    demo: 'https://pedimon-juee-60loepjfe-tadeoleonfereneses-projects.vercel.app/',
    stack:
      'JavaScript (ES6+), HTML5, CSS3 / Diseño Web Responsivo, desplegado en producción sobre Vercel.',
    badges: ['Primera Web / Hito Inicial', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vercel'],
    details: [
      'Mi primera página web: el punto de partida donde di mis primeros pasos maquetando interfaces y programando lógica en el navegador durante el Coding Bootcamp (NUCBA).',
      'Aunque es un proyecto sencillo frente a mis sistemas actuales en producción, cumple al 100% su objetivo: catálogo dinámico, carrito de compras funcional y despliegue en vivo sobre Vercel.',
    ],
    media: [
      {
        type: 'image',
        label: 'VISTA INTERACTIVA EN VIVO: Navegá Pedimon directamente desde el visor o abrilo en pantalla completa',
        aspect: '16/9',
      },
    ],
  },
]

