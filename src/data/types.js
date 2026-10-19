/**
 * Contratos de datos del portfolio (JSDoc). El contenido real vive en src/data/*.
 */

/**
 * @typedef {Object} MediaSlot
 * @property {'video'|'image'|'device-android'|'device-desktop'} type
 * @property {string} label Texto del placeholder (describe qué va a ir ahí).
 * @property {string} aspect Aspect ratio CSS, ej. '16/9'.
 * @property {string} [src] Ruta al archivo real. Si falta, se renderiza el placeholder.
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} [repo]
 * @property {string} [demo]
 * @property {string[]} badges
 * @property {string[]} details
 * @property {string[]} [pipeline]
 * @property {string} [stack]
 * @property {MediaSlot[]} media
 * @property {boolean} [confidential]
 */

/**
 * @typedef {Object} Experience
 * @property {string} role
 * @property {string} company
 * @property {string} period
 */

/**
 * @typedef {Object} Education
 * @property {string} title
 * @property {string} institution
 * @property {string} period
 * @property {number} progress Porcentaje 0-100.
 * @property {number} [average]
 * @property {string} [status]
 * @property {string} [notes]
 */

/**
 * @typedef {Object} NavLink
 * @property {string} label
 * @property {`#${string}`} href
 */

export {}
