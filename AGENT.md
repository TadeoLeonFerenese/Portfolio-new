Actúa como un Senior Frontend Architect y Product Designer. Necesito que desarrolles el código completo, modular y responsivo del Portfolio Profesional (MVP) para **Tadeo Daniel Leon Ferenese**, posicionándolo hacia la tendencia actual del mercado: **Software & Applied AI Engineer | Data Science & Local-First Architectures**.

### 1. STACK TECNOLÓGICO REQUERIDO
- **Framework:** React.js (componentes funcionales con Hooks).
- **Estilos:** Tailwind CSS (diseño moderno, limpio, con soporte nativo o estética Dark Mode elegante estilo dashboard técnico).
- **Iconografía:** `lucide-react`.

---

### 2. DIRECCIÓN VISUAL Y LAYOUT (Basado en referencia de alto impacto + Dashboard UI)
- **Paleta de Colores:** Fondo principal oscuro profundo (`bg-zinc-950` / `bg-slate-950`), tarjetas secundarias en gris pizarra (`bg-zinc-900/80` con bordes sutiles `border-zinc-800`), textos en blanco/gris claro, y colores de acento en **Índigo/Violeta** (`indigo-500`, inspirado en su app Nodo Inventory) y **Verde Esmeralda** (`emerald-400`, para indicadores de estado "Activo/Online").
- **Regla de Oro para Multimedia:** NO uses imágenes genéricas de internet. Crea contenedores visuales estructurados (Placeholders interactivos con aspect-ratio definido, bordes punteados o marcos de dispositivos PC/Android) claramente etiquetados para reemplazar luego por fotos editadas y videos reales (`.mp4` / `.webm`).

---

### 3. ESTRUCTURA SECCIÓN POR SECCIÓN Y CONTENIDO EXACTO (NO INVENTAR DATOS)

#### A. NAVBAR (Fija superior con Blur)
- **Logo izquierdo:** `TADEO.DEV` con un indicador verde pulsante (`System Online`).
- **Links centrales:** Inicio | Especialidades | Proyectos & Demos | Trayectoria | Educación.
- **Acción derecha:** Botón destacado "Contactar" + Links directos a GitHub y LinkedIn.

#### B. SECCIÓN 1: HERO (División 50/50 de alto impacto)
- **Columna Izquierda (Presentación y Posicionamiento):**
  - **Píldora superior (Badge):** `— Software & Applied AI Engineer | Data Science (75%)`
  - **Título Principal:** "Hola, soy Tadeo Leon"
  - **Subtítulo Técnico:** "Ingeniero de Software en el Poder Judicial de la Nación y creador de aplicaciones multiplataforma Local-First potenciadas con Inteligencia Artificial (LLMs & Visión). Combino formación universitaria en Programación y Ciencia de Datos con +10 años de trayectoria sólida resolviendo infraestructura crítica."
  - **Botones (CTAs):** 
    1. Primario: `Ver Sistemas y Demos` (Scroll a proyectos).
    2. Secundario: `Descargar CV (PDF)`.
- **Columna Derecha (Composición Visual con Anillo Orbitante):**
  - Un contenedor circular grande con un aro luminoso (`border-indigo-500/40`) que aloje el **[PLACEHOLDER: FOTO DE PERFIL PROFESIONAL RECORTADA O COMPOSICIÓN PRINCIPAL]**.
  - **4 Nodos/Iconos flotando alrededor del círculo** representando sus 4 pilares actuales:
    1. `AI / Gemini API` (Integración LLM & OCR)
    2. `Python & Data` (Pandas, NumPy, SQL)
    3. `React & Local-First` (Web, Android, Sync)
    4. `PHP / Laravel & Linux` (Backend & Infraestructura)

#### C. SECCIÓN 2: ESPECIALIDADES (Grid 2x2 Izquierda + Propuesta de Valor Derecha)
- **Lado Izquierdo (Grid 2x2 de Tarjetas con ligero desfasaje vertical):**
  1. **Applied AI & Automatización:** Integración de modelos multimodales (`gemini-3.5-flash`) mediante API para visión artificial (extracción inteligente de ítems en remitos) y asistentes contextuales en producción.
  2. **Ciencia de Datos & Motores SQL:** Análisis estadístico con Python (Pandas, NumPy, Matplotlib) y diseño relacional en PostgreSQL, MySQL y SQLite (manejados con DBeaver y TablePlus).
  3. **Arquitectura Local-First & Web/Mobile:** Desarrollo en PHP, Laravel, Node.js y React.js. Creación de motores de sincronización Wi-Fi Direct por sockets/puerto local entre Windows y Android sin depender de la nube.
  4. **Infraestructura Crítica & Fierros:** 10 años de dominio real en administración Linux, Docker, entornos virtualizados (Oracle VirtualBox), Apache/Nginx y diagnóstico avanzado de redes y servidores.
- **Lado Derecho (Bloque de Texto "¿De los fierros al código? Mi diferencial en tu equipo"):**
  - Explicación clara de su ventaja competitiva: A diferencia de un perfil estándar que solo conoce el código superficial, cuenta con 10 años sosteniendo sistemas bajo presión (Pentacom S.A. y Dirección Gral. de Tecnología del PJN), sumado a una base académica sobresaliente en la UNaB (Graduado en Programación con promedio 8.50 y 75% de Ciencia de Datos con promedio 8.33).

#### D. SECCIÓN 3: PROYECTOS EN PRODUCCIÓN (Formato Dashboard con Tabs y Espacio para Videos/Capturas)
Cada proyecto debe tener una tarjeta amplia tipo "Case Study" con pestañas internas para alternar entre **[ 🎥 Video Demo ]**, **[ 📸 Galería de Capturas ]** y **[ ⚙️ Arquitectura & Flujo ]**:

1. **PROYECTO ESTRELLA 1: NODO INVENTORY (Evolución de Tesis Universitaria "Stockeate")**
   - **Subtítulo:** Sistema de Inventario Multiplataforma (Windows + Android) con Sincronización Local-First e IA.
   - **Repositorio:** `https://github.com/TadeoLeonFerenese/Nodo`
   - **Badges de Estado:** `[SQLite Activo]` `[Wi-Fi Direct :4545]` `[Motor IA: gemini-3.5-flash]`
   - **Detalle Técnico Completo:**
     - Evolución completa de la tesis universitaria de la UNaB. Funciona de forma nativa y sincronizada en Windows (Nodo Central) y Android.
     - **Sincronización sin Nube:** Motor propio (`Wi-Fi Direct Local Engine`) que abre un servidor local (ej. puerto `4545`) y vincula teléfonos Android en la misma red mediante lectura de Código QR.
     - **Módulo de IA (Visión):** Integración con Google Gemini (`gemini-3.5-flash`) en la sección de "Remitos" para tomar fotos de facturas/remitos en papel o subir archivos y extraer automáticamente los ítems al stock.
     - **Funcionalidades:** Catálogo con lector de código de barras por cámara, control de stock mínimo, historial de movimientos (entradas/salidas con marcas de tiempo) y configuración de API Key local.
   - **Diagrama Visual (Pipeline):** `[Foto Remito / Escaneo Android] -> [Procesamiento Gemini 3.5 Flash] -> [Sync Wi-Fi Puerto 4545] -> [Base Local SQLite / PostgreSQL]`
   - **Espacios Multimedia Reservados:**
     - `[PLACEHOLDER VIDEO DEMO: Sincronización en tiempo real entre PC Windows y Android + Lectura de Remito con IA]`
     - `[PLACEHOLDER CAPTURA WINDOWS 1: Panel de Perfil & Sincronización mostrando SQLite Activo, configuración Gemini 3.5 Flash y Servidor Wi-Fi con QR]`
     - `[PLACEHOLDER CAPTURA WINDOWS 2: Vista de Catálogo limpio de escritorio]`
     - `[PLACEHOLDER 3 CAPTURAS ANDROID EN MARCO MÓVIL: 1. Catálogo con precios y stock | 2. Historial de Movimientos (Entradas/Salidas) | 3. Carga de Remito con IA]`

2. **PROYECTO DESTACADO 2: BUNKER NOTAS (App Móvil de Uso Diario)**
   - **Subtítulo:** Aplicación Android Local-First de notas seguras, personalización avanzada y asistencia por IA.
   - **Repositorio:** `https://github.com/TadeoLeonFerenese/bunker-notas`
   - **Badges:** `[Android APK]` `[Seguridad & Privacidad]` `[Asistente IA]` `[Dogfooding: Uso Diario]`
   - **Detalle Técnico Completo:**
     - Aplicación construida para resolver una necesidad real de organización personal diaria sin exponer datos privados en servidores de terceros.
     - **Características principales:** Clasificación por pestañas (`Todas`, `Marcadas`, `Seguras` con bloqueo por candado), buscador en tiempo real, editor rico con modo lectura/edición, recordatorios, notas de voz e imágenes.
     - **Personalización e IA:** Menú de configuración de IA integrada, sistema de Copias de Seguridad (Backup), selector de 5 temas de color y personalización de fondos de pantalla.
   - **Espacios Multimedia Reservados:**
     - `[PLACEHOLDER VIDEO DEMO: Recorrido fluido por Bunker Notas, cambio de temas, desbloqueo de notas seguras y uso del botón flotante de IA]`
     - `[PLACEHOLDER 3 CAPTURAS ANDROID EN MARCO MÓVIL: 1. Grilla principal de notas con stickers/categorías | 2. Vista de lectura/edición de nota extensa | 3. Menú desplegable mostrando Configurar IA, Copia de seguridad y Temas]`

3. **PROYECTO 3: PODER JUDICIAL DE LA NACIÓN (Sistemas de Gestión Interna)**
   - **Subtítulo:** Desarrollo y Mantenimiento de Software Crítico (Área de Planificación).
   - **Estado:** `[Código Privado / Confidencialidad Institucional]` (NO incluir capturas reales por seguridad; usar un diseño de tarjeta bloqueada con diagrama de arquitectura).
   - **Detalle Técnico Completo:**
     - Mantenimiento evolutivo, corrección de bugs y actualización de vistas frontend y lógica de negocio backend en **PHP y Laravel**.
     - Sistemas intervenidos: **Escuela Judicial**, **Gestión de Auditorías UAI** y **Registro de Pliego Automotor**.
     - Gestión de entornos locales de desarrollo y pruebas aisladas utilizando máquinas virtuales en **Oracle VirtualBox**.

4. **PROYECTO 4: PEDIMON (Plataforma Web Full Stack)**
   - **Subtítulo:** Proyecto integrador desarrollado en Coding Bootcamp (NUCBA).
   - **Demo en vivo:** `https://pedimon-chi.vercel.app/`
   - **Stack:** React.js, JavaScript (ES6+), CSS3 / Diseño Web Responsivo, desplegado en producción sobre Vercel.
   - **Espacio Multimedia Reservado:**
     - `[PLACEHOLDER CAPTURA WEB / GIF DE NAVEGACIÓN: Vista desktop y mobile de Pedimon]`

#### E. SECCIÓN 4: TRAYECTORIA Y EDUCACIÓN (Línea de Tiempo Dual)
- **Columna Experiencia Laboral:**
  1. **Desarrollador de Software (PHP/Laravel)** — *Poder Judicial de la Nación (Área de Planificación)* | Jun 2025 – Presente.
  2. **Analista de Soporte Técnico Especializado** — *Poder Judicial de la Nación (Dirección Gral. de Tecnología)* | Nov 2020 – May 2025.
  3. **Analista de Soporte Técnico** — *Pentacom S.A. (Innovación TI)* | Mar 2015 – Nov 2020.
- **Columna Educación y Métricas Académicas (Con barras de progreso visuales):**
  1. **Tecnicatura Universitaria en Ciencia de Datos** — *Universidad Nacional Guillermo Brown (UNaB)* | Feb 2025 – Presente | **Estado: 75% Aprobado | Promedio: 8.33** (Foco en Estadística, Python, Pandas, NumPy, Matplotlib).
  2. **Técnico Universitario en Programación** — *Universidad Nacional Guillermo Brown (UNaB)* | 2022 – Nov 2025 | **Estado: Graduado (100%) | Promedio: 8.50** (Tesis aprobada: "Stockeate" / actual "Nodo").
  3. **Programación Full Stack (MERN)** — *Coding Bootcamp (NUCBA)* | 2020 – 2021 (MongoDB, Express, React, Node.js).

#### F. FOOTER / CONTACTO DIRECTO
- Datos reales:
  - **Ubicación:** Buenos Aires, Argentina.
  - **Email:** `leonferenesetadeo@gmail.com`
  - **Teléfono / WhatsApp:** `(+54) 11 3065 0188`
  - **LinkedIn:** `https://www.linkedin.com/in/tadeo-leon-ferenese/`
  - **GitHub:** `https://github.com/TadeoLeonFerenese`