import { useLanguage } from '@/context/useLanguage.js'
import { contact } from '../contact.js'
import { education } from '../education.js'
import { experience } from '../experience.js'
import { navigation } from '../navigation.js'
import { profile } from '../profile.js'
import { projects } from '../projects.js'
import { differential, specialties } from '../specialties.js'
import {
  enContact,
  enDifferential,
  enEducation,
  enExperience,
  enNavigation,
  enProfile,
  enProjects,
  enSpecialties,
  enUI,
} from './en.js'

export const esUI = {
  nav: {
    contactCTA: 'Contactar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    languageLabel: 'Idioma',
    spanish: 'Español',
    english: 'Inglés',
  },

  specialties: {
    badge: 'Dominios Técnicos & Capacidades',
    heading: 'Especialidades & Enfoque de Ingeniería',
    subtitle: 'Desde el diagnóstico de bajo nivel en servidores hasta modelos de IA multimodal en producción.',
  },
  projects: {
    badge: 'Proyectos & Sistemas en Producción',
    heading: 'Sistemas en Producción & Proyectos Destacados',
    subtitle: 'Casos de estudio interactivos con arquitectura detallada, demos multimedia y código de producción.',
    tabs: {
      video: 'Video Demo',
      captures: 'Galería de Capturas',
      architecture: 'Arquitectura & Flujo',
    },
    desktopSection: 'Entorno de Escritorio',
    mobileSection: 'Aplicación Android',
    technicalDetails: 'Detalles & Capacidades Técnicas',
    pipelineTitle: 'Flujo de Arquitectura',
    confidentialBadge: 'Acceso Restringido',
    confidentialTitle: 'Información Institucional & Código Privado',
    confidentialBanner:
      'Por acuerdos de confidencialidad y criticidad operativa con el Poder Judicial de la Nación, los repositorios y capturas de pantalla de estos sistemas se mantienen en reserva.',
    scopeTitle: 'Alcance y Responsabilidades',
  },
  timeline: {
    badge: 'Trayectoria Profesional & Formación Académica',
    heading: 'Trayectoria & Formación',
    subtitle:
      '+10 años resolviendo infraestructura crítica y desarrollo de software, complementados con una sólida formación universitaria en Programación y Ciencia de Datos.',
    experienceTitle: 'Experiencia Laboral',
    educationTitle: 'Educación & Métricas Académicas',
    academicProgress: 'Progreso Académico',
    gpaLabel: 'Promedio',
  },
  footer: {
    badge: 'Contacto Directo & Redes',
    heading: 'Construyamos software robusto juntos',
    subtitle:
      'Disponible para desafíos de ingeniería de software, arquitectura Local-First y soluciones aplicadas con Inteligencia Artificial.',
    emailTitle: 'Correo Electrónico',
    emailAction: 'Enviar mensaje',
    whatsappTitle: 'WhatsApp / Teléfono Directo',
    whatsappAction: 'Iniciar conversación',
    locationTitle: 'Ubicación & Disponibilidad',
    timezoneNote: 'Zona Horaria UTC-3 (Remoto / Híbrido)',
    copyright: 'Todos los derechos reservados.',
  },
}

/**
 * Returns localized datasets and UI copy based on the requested language.
 * @param {'es' | 'en'} lang
 */
export function getContent(lang = 'es') {
  if (lang === 'en') {
    return {
      navigation: enNavigation,
      profile: enProfile,
      specialties: enSpecialties,
      differential: enDifferential,
      projects: enProjects,
      experience: enExperience,
      education: enEducation,
      contact: enContact,
      ui: enUI,
    }
  }

  return {
    navigation,
    profile,
    specialties,
    differential,
    projects,
    experience,
    education,
    contact,
    ui: esUI,
  }
}

/**
 * Custom hook providing localized content reactively based on current language context.
 */
export function useContent() {
  const { language } = useLanguage()
  return getContent(language)
}
