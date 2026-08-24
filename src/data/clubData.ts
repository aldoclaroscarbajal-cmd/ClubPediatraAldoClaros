import { LiveMeetingPart, ScheduledMeeting, MiniAppFeature, FAQItem } from '../types';

export const MEETING_PARTS: LiveMeetingPart[] = [
  {
    partNumber: 1,
    title: 'PARTE 1 — TEMA DEL MES',
    subtitle: 'Tema central de interés pediátrico',
    description: 'Presentaré un tema pediátrico de máximo interés para los padres con fundamentos médicos claros y comprensibles.',
    icon: 'Presentation',
    highlights: ['Enfermedades comunes', 'Nutrición y alimentación', 'Sueño y descanso', 'Pautas de crianza']
  },
  {
    partNumber: 2,
    title: 'PARTE 2 — EDUCACIÓN PRÁCTICA',
    subtitle: 'Lo que realmente debes saber',
    description: 'Explicaré paso a paso los aspectos más importantes que los padres deben conocer y cómo actuar de forma segura en casa.',
    icon: 'BookOpenCheck',
    highlights: ['Mitos vs realidades', 'Guías de acción en casa', 'Qué hacer y qué evitar', 'Criterios claros']
  },
  {
    partNumber: 3,
    title: 'PARTE 3 — PREGUNTAS GENERALES',
    subtitle: 'Espacio de interacción para padres',
    description: 'Reservaremos un espacio exclusivo para responder preguntas generales de los padres relacionadas con el tema tratado en vivo.',
    icon: 'MessageCircleQuestion',
    highlights: ['Preguntas en vivo por chat', 'Dudas recurrentes', 'Orientación educativa', 'Comunidad de apoyo']
  }
];

export const UPCOMING_MEETINGS: ScheduledMeeting[] = [
  {
    id: 'meet-1',
    month: 'Próxima Reunión en Directo',
    date: 'Sábado 21 de Septiembre',
    time: '7:30 PM (Hora Lima/Perú)',
    topic: 'Fiebre infantil, mocos y tos: Signos de alarma vs manejo tranquilo en casa',
    description: 'Aprende a diferenciar una fiebre benigna de una emergencia, cómo medirla bien, qué hacer sin medicar en exceso y cuándo acudir a urgencias. Sesión 100% en vivo a través de un enlace privado en YouTube que se enviará a los miembros.',
    tags: ['Salud Infantil', 'Signos de Alarma', 'YouTube En Vivo'],
    status: 'upcoming'
  }
];

export const MINI_APPS_LIST: MiniAppFeature[] = [
  {
    id: 'app-fever',
    name: 'Calculadora de Dosis y Fiebre',
    category: 'Salud Infantil',
    description: 'Calcula dosis orientativas de paracetamol o ibuprofeno según el peso exacto de tu hijo y evalúa si la temperatura requiere vigilancia médica.',
    icon: 'Thermometer',
    badge: 'Popular',
    previewType: 'fever'
  },
  {
    id: 'app-nutrition',
    name: 'Guía de Alimentación 6–24 Meses',
    category: 'Nutrición Infantil',
    description: 'Buscador de alimentos, preparaciones según edad, guía de alérgenos y alimentos no recomendados antes de 1 año.',
    icon: 'Apple',
    badge: 'Esencial',
    previewType: 'nutrition'
  },
  {
    id: 'app-milestones',
    name: 'Monitor de Desarrollo y Neurodesarrollo',
    category: 'Crecimiento',
    description: 'Verifica mes a mes los hitos motores, del lenguaje y sociales de tu bebé, identificando oportunamente cualquier signo de rezago.',
    icon: 'TrendingUp',
    badge: 'Interactiva',
    previewType: 'milestones'
  },
  {
    id: 'app-alarm',
    name: 'Semáforo de Signos de Alarma',
    category: 'Prevención Médica',
    description: 'Guía rápida con código de colores (Verde, Amarillo, Rojo) para saber con claridad cuándo observar en casa y cuándo acudir de urgencia.',
    icon: 'AlertTriangle',
    badge: 'Tranquilidad',
    previewType: 'alarm'
  },
  {
    id: 'app-sleep',
    name: 'Calculadora de Sueño y Ventanas de Vigilia',
    category: 'Sueño Infantil',
    description: 'Determina las horas de sueño ideales, cantidad recomendada de siestas y tiempos de vigilia según la edad exacta en meses.',
    icon: 'Moon',
    badge: 'Nuevo',
    previewType: 'sleep'
  }
];

export const VALUE_PILLARS = [
  {
    number: '1',
    title: 'MINI APPS PEDIÁTRICAS',
    subtitle: 'Para consultar desde tu celular',
    icon: 'Smartphone',
    desc: 'Herramientas interactivas creadas para resolver dudas inmediatas de peso, dosis orientativas, sueño y desarrollo en segundos.',
    accent: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-700'
  },
  {
    number: '2',
    title: 'NUEVAS HERRAMIENTAS',
    subtitle: 'El Club sigue creciendo',
    icon: 'Sparkles',
    desc: 'Actualizaciones continuas y nuevos recursos interactivos incorporados periódicamente según las necesidades de los miembros.',
    accent: 'border-amber-500/20 bg-amber-500/5 text-amber-700'
  },
  {
    number: '3',
    title: 'REUNIÓN MENSUAL EN DIRECTO',
    subtitle: 'Un encuentro educativo conmigo cada mes por YouTube',
    icon: 'Video',
    desc: 'Una reunión virtual en directo exclusiva cada mes por YouTube con el Pediatra Aldo Claros mediante enlace privado para revisar el tema del mes y resolver dudas.',
    accent: 'border-teal-500/20 bg-teal-500/5 text-teal-700'
  }
];

export const CLUB_CHECKLIST_ITEMS = [
  'Acceso total a la plataforma del Club desde cualquier celular o computadora',
  'Mini apps pediátricas interactivas y actualizadas',
  'Herramientas para salud infantil y manejo de síntomas comunes',
  'Guía de alimentación complementaria de 6 a 24 meses',
  'Monitor de Crecimiento y Neurodesarrollo mes a mes',
  'Calculadora de Sueño infantil y ventanas de vigilia',
  'Semáforo interactivo de Signos de Alarma para actuar a tiempo',
  'Nuevos recursos y herramientas incorporados periódicamente',
  '1 reunión educativa EN DIRECTO cada mes por YouTube (enlace privado) con el Pediatra Aldo Claros',
  'Comunidad educativa y segura para padres'
];

export const FAQS_LIST: FAQItem[] = [
  {
    question: '¿Cómo son las reuniones mensuales en directo con el Dr. Aldo Claros?',
    answer: 'Se realizan una vez al mes en directo a través de YouTube mediante un enlace privado exclusivo que te enviaremos directamente. Durante la sesión, el Dr. Aldo Claros presenta el tema del mes, explica pautas prácticas y responde preguntas en vivo por el chat. Importante: Las reuniones son 100% en vivo y no quedarán grabadas.',
    category: 'reunion'
  },
  {
    question: '¿Cuándo es la próxima reunión en directo y por qué medio se transmite?',
    answer: 'La próxima reunión será el Sábado 21 de Septiembre a las 7:30 PM (Hora Lima/Perú) en directo por YouTube a través de un enlace privado que recibirás como miembro activo del Club.',
    category: 'reunion'
  },
  {
    question: '¿Las reuniones quedan grabadas para ver después?',
    answer: 'No. Las reuniones mensuales son sesiones en directo pensadas para la interacción y atención en tiempo real, por lo que no quedarán grabadas.',
    category: 'reunion'
  },
  {
    question: '¿La reunión mensual reemplaza una consulta médica presencial?',
    answer: 'No. Es fundamental tener presente que las reuniones mensuales y las herramientas digitales del Club tienen una exclusiva finalidad educativa y de orientación para familias. No constituyen consultas médicas individuales, diagnósticos ni prescripciones personalizadas. Ante cualquier emergencia o síntoma específico de tu hijo, debes acudir a su pediatra o centro médico.',
    category: 'medico'
  },
  {
    question: '¿Cuánto cuesta y cómo se paga la membresía?',
    answer: 'La membresía cuesta únicamente S/10 al mes (sin contratos de permanencia, puedes cancelar cuando desees). Puedes pagar de forma fácil y rápida con Yape (al número 998 631 300), Plin, transferencia bancaria o tarjeta de crédito/débito.',
    category: 'pago'
  },
  {
    question: '¿Qué tipo de mini apps incluye el Club?',
    answer: 'Tendrás acceso a calculadoras orientativas de dosis según peso, el semáforo interactivo de signos de alarma, la guía de alimentación complementaria 6-24 meses, el monitor de neurodesarrollo y la calculadora de sueño y ventanas de vigilia. Constantemente se agregan nuevas herramientas.',
    category: 'apps'
  },
  {
    question: '¿Puedo hacer preguntas previas al Dr. Aldo para la reunión?',
    answer: '¡Sí! Como miembro del Club tienes acceso a un buzón digital para proponer temas o enviar tus dudas frecuentes antes de cada sesión en directo para que el Dr. Aldo pueda abordarlas durante la transmisión.',
    category: 'reunion'
  },
  {
    question: '¿Cómo accedo a las herramientas desde mi teléfono?',
    answer: 'La plataforma del Club está 100% optimizada para dispositivos móviles (smartphones y tablets). Solo ingresas con tu correo y contraseña desde el navegador de tu celular, sin necesidad de descargas pesadas.',
    category: 'apps'
  }
];
