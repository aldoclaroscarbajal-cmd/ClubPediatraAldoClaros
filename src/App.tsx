/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Video, 
  Smartphone, 
  BookOpen, 
  PlusCircle, 
  HelpCircle, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Stethoscope, 
  Users, 
  MessageCircleQuestion, 
  ChevronDown, 
  Calendar,
  Layers,
  Award,
  CheckCircle2,
  Lock,
  PhoneCall,
  Menu,
  X
} from 'lucide-react';

import { 
  VALUE_PILLARS, 
  CLUB_CHECKLIST_ITEMS, 
  FAQS_LIST,
  HOTMART_CHECKOUT_URL
} from './data/clubData';
import { MiniAppsInteractiveDemo } from './components/MiniAppsInteractiveDemo';
import { LiveMeetingSection } from './components/LiveMeetingSection';
import { JoinClubModal } from './components/JoinClubModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOpenJoin = () => {
    window.open(HOTMART_CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-200 text-[11px] font-bold uppercase tracking-wider">
            <Video className="w-3 h-3 text-teal-300" />
            1 Reunión en Directo al Mes
          </span>
          <span>
            Por solo <strong>15 soles/ mes</strong>: Mini apps pediátricas + reunión educativa mensual con el <strong>Pediatra Aldo Claros</strong>.
          </span>
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-amber-300 hover:text-white font-bold ml-1 cursor-pointer"
          >
            ¡Quiero unirme al Club! →
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* NAVIGATION BAR */}
      {/* ========================================================================= */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-teal-700/20">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg tracking-tight leading-none">
                Club Pediatra Aldo Claros
              </div>
              <div className="text-[11px] text-teal-700 font-semibold tracking-wide mt-1">
                Acompañamiento pediátrico digital & encuentros en vivo
              </div>
            </div>
          </div>

          {/* Desktop Nav Links & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <a href="#reunion-mensual" className="hover:text-teal-700 transition-colors">
                Reunión en Directo
              </a>
              <a href="#que-recibes" className="hover:text-teal-700 transition-colors">
                ¿Qué Recibes?
              </a>
              <a href="#mini-apps" className="hover:text-teal-700 transition-colors">
                Mini Apps
              </a>
              <a href="#oferta" className="hover:text-teal-700 transition-colors">
                Membresía 15 soles/ mes
              </a>
              <a href="#preguntas-frecuentes" className="hover:text-teal-700 transition-colors">
                Preguntas
              </a>
            </div>

            <a
              id="nav-join-btn"
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:shadow-amber-400/25 transition-all cursor-pointer flex items-center gap-1.5 border border-amber-500/50 hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              Entrar al Club (15 soles/ mes)
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a 
              href="#reunion-mensual" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-700 py-1.5"
            >
              🎥 Reunión Mensual en Directo
            </a>
            <a 
              href="#que-recibes" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-700 py-1.5"
            >
              📦 ¿Qué Recibes? (3 Beneficios)
            </a>
            <a 
              href="#mini-apps" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-700 py-1.5"
            >
              📱 Mini Apps Pediátricas
            </a>
            <a 
              href="#oferta" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-700 py-1.5"
            >
              🏷️ Oferta 15 soles/ mes
            </a>
            <a 
              href="#preguntas-frecuentes" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-700 py-1.5"
            >
              ❓ Preguntas Frecuentes
            </a>

            <div className="pt-2">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider text-center shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                ¡QUIERO UNIRME AL CLUB! (15 soles/ mes)
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ========================================================================= */}
      {/* 1. HERO PRINCIPAL */}
      {/* ========================================================================= */}
      <header className="relative bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Main Strategic Announcement Tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs sm:text-sm font-bold tracking-tight shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              NO ES SOLAMENTE UNA MINI APP • ES UN CLUB CON REUNIÓN EN DIRECTO CADA MES
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Hero Copy & Value Trigger */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.15]">
                Mucho más que mini apps: un Club para acompañarte en la crianza de tus hijos.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Accede desde tu celular a herramientas pediátricas sobre salud, alimentación, crecimiento, desarrollo y crianza, y participa cada mes en una reunión educativa en directo con el <strong>Pediatra Aldo Claros</strong>.
              </p>

              {/* Price & Core Checklist Block */}
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-3xl border border-teal-200 shadow-xl shadow-teal-900/5 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-teal-700">
                      Membresía Todo Incluido
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-0.5">
                      15 soles/ mes
                    </div>
                  </div>
                  <span className="inline-flex self-start sm:self-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    Sin contrato de permanencia
                  </span>
                </div>

                {/* Hero Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Mini apps pediátricas</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Monitor de desarrollo y alertas</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Nuevas herramientas continuas</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-teal-950 font-bold">1 reunión en directo al mes (clases grabadas en Hotmart)</span>
                  </div>
                </div>

                {/* Prominent High-Contrast Hero CTA Button */}
                <div className="pt-2 space-y-2">
                  <a
                    id="hero-main-cta"
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-lg sm:text-xl uppercase tracking-wider transition-all shadow-xl shadow-amber-400/25 hover:shadow-amber-400/35 border-2 border-amber-500/50 flex items-center justify-center gap-3 cursor-pointer group hover:scale-[1.01]"
                  >
                    <Sparkles className="w-5 h-5 text-slate-950" />
                    <span>¡QUIERO ENTRAR AL CLUB!</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="text-center text-xs text-slate-500 font-medium">
                    ⚡ Acceso inmediato desde tu celular por solo 15 soles/ mes • Cancela cuando quieras
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Trust Card of the Doctor & The Live Meeting */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-teal-800/50 relative overflow-hidden space-y-6">
                
                {/* Visual badge */}
                <div className="flex items-center justify-between border-b border-teal-800/60 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
                    <span className="text-xs font-black uppercase tracking-wider text-teal-300">
                      Encuentro Mensual en Vivo
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-400/20 text-teal-200">
                    Hotmart (En Vivo)
                  </span>
                </div>

                {/* Doctor profile snippet */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 p-0.5 shadow-md shrink-0">
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-teal-300">
                      <Stethoscope className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white leading-tight">
                      Pediatra Aldo Claros
                    </h3>
                    <p className="text-xs text-teal-200 font-medium">
                      Médico Pediatra • Fundador del Club Pediátrico
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                      <span>🩺 Orientación médica confiable para tu hogar</span>
                    </div>
                  </div>
                </div>

                {/* Next Live Preview Card */}
                <div className="p-4 rounded-2xl bg-teal-900/60 border border-teal-700/60 space-y-2">
                  <div className="text-[11px] font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-teal-400" />
                    Sesión en Directo para Miembros:
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Encuentro Educativo en Directo con el Pediatra Aldo Claros
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" /> 4° Sábado de cada mes
                    </span>
                    <span className="font-bold text-teal-200">7:30 PM (Hora Perú / Lima)</span>
                  </div>
                </div>

                {/* 3 Pill highlight */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="font-extrabold text-teal-300">👨‍⚕️ Dr. Aldo</div>
                    <div className="text-[10px] text-slate-400">Pediatra</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="font-extrabold text-teal-300">🎥 4° Sábado</div>
                    <div className="text-[10px] text-slate-400">7:30 PM</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="font-extrabold text-teal-300">🔴 Hotmart</div>
                    <div className="text-[10px] text-slate-400">En Vivo</div>
                  </div>
                </div>

                <div className="text-[11px] text-center text-teal-200/90 border-t border-teal-800/40 pt-3">
                  *Transmitido en vivo por Hotmart. ¡Las clases quedarán grabadas en la plataforma de Hotmart para los que se suscriben!
                </div>
              </div>
            </div>

          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. NUEVA SECCIÓN: "ESTARÉ CONTIGO CADA MES" */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-teal-50/80 via-white to-slate-50 rounded-3xl p-8 sm:p-12 border-2 border-teal-200/80 shadow-xl shadow-teal-900/5 relative overflow-hidden">
            
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700 text-white text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-teal-200 text-teal-200" />
                Estaré contigo cada mes
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                &ldquo;No estarás solo frente a tus dudas como padre.&rdquo;
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
                <p>
                  &ldquo;Una de las principales razones por las que creé este Club es porque sé que muchas veces los padres tienen dudas sobre la salud y el desarrollo de sus hijos y no saben dónde encontrar información confiable.&rdquo;
                </p>
                <p className="font-semibold text-slate-800">
                  &ldquo;Por eso, además de las herramientas digitales, tendremos una reunión educativa en directo cada mes.&rdquo;
                </p>
                <p>
                  &ldquo;Será un espacio para aprender, resolver dudas generales y conversar sobre los temas que más preocupan a los padres.&rdquo;
                </p>
              </div>

              {/* 3 Visual Highlights mandated by instructions */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="bg-white p-5 rounded-2xl border border-teal-200 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl">
                    👨‍⚕️
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">
                    PEDIATRA ALDO CLAROS
                  </div>
                  <div className="text-xs text-slate-500">
                    Acompañamiento médico profesional
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-teal-200 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl">
                    🎥
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">
                    1 REUNIÓN EN DIRECTO CADA MES
                  </div>
                  <div className="text-xs text-slate-500">
                    Espacio educativo en vivo
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-teal-200 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl">
                    👨‍👩‍👧
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">
                    EXCLUSIVA PARA MIEMBROS
                  </div>
                  <div className="text-xs text-slate-500">
                    Comunidad privada de padres
                  </div>
                </div>

              </div>

              {/* Section 2 CTA button */}
              <div className="pt-4 text-center">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider transition-all shadow-lg border-2 border-amber-500/50 cursor-pointer inline-flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>¡Quiero unirme al Club! (15 soles/ mes)</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECCIÓN "¿QUÉ RECIBES?" (4 GRANDES BENEFICIOS) */}
      {/* ========================================================================= */}
      <section id="que-recibes" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-700" />
              La Oferta del Club en Detalle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              ¿Qué recibes como miembro?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Una membresía integral pensada para darte tranquilidad, conocimiento y respaldo en cada etapa del crecimiento de tu hijo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Beneficio 1 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                  🌡️
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Beneficio 01
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  1. MINI APPS PEDIÁTRICAS
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Herramientas interactivas para diferentes situaciones de la infancia: cálculo de dosis según peso exacto, monitor de desarrollo, calculadora de sueño y semáforo de alarma.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-teal-700 flex items-center gap-1">
                Consultables desde tu celular 📱
              </div>
            </div>

            {/* Beneficio 2 (Anteriormente 3) */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                  🆕
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Beneficio 02
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  2. NUEVAS HERRAMIENTAS
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  El Club continuará creciendo con nuevos recursos digitales, calculadoras adicionales y materiales prácticos incorporados periódicamente sin pagos extras.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-amber-700 flex items-center gap-1">
                El Club sigue creciendo ✨
              </div>
            </div>

            {/* Beneficio 3 (Anteriormente 4) */}
            <div className="bg-gradient-to-b from-teal-900 to-slate-900 text-white rounded-3xl p-7 shadow-xl hover:shadow-2xl border border-teal-700/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-400 text-teal-950 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                  🎥
                </div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
                  Beneficio 03 • El Componente Humano
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  3. REUNIÓN MENSUAL EN DIRECTO
                </h3>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  Una reunión educativa virtual cada mes por la plataforma de Hotmart con el Pediatra Aldo Claros para los miembros del Club. Presentación del tema del mes, pautas prácticas y resolución de preguntas en vivo. Además, todas las clases quedarán grabadas en la plataforma de Hotmart para los que se suscriben.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-teal-800 text-xs font-bold text-teal-300 flex items-center gap-1">
                Encuentro en vivo + Clases grabadas en Hotmart 👨‍⚕️
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DETALLE DE LA REUNIÓN MENSUAL (SECCIÓN DEDICADA INTERACTIVA) */}
      {/* ========================================================================= */}
      <LiveMeetingSection onJoinClick={handleOpenJoin} />

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE MINI APPS SHOWCASE */}
      {/* ========================================================================= */}
      <section id="mini-apps" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              Siempre Contigo en tu Celular
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Explora las Mini Apps Pediátricas
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Diseñadas por un pediatra para ser intuitivas, seguras y rápidas de usar cuando más lo necesitas.
            </p>
          </div>

          <MiniAppsInteractiveDemo onJoinClick={handleOpenJoin} />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECCIÓN DE VALOR (COMPARACIÓN VISUAL MATEMÁTICA / FORMULA) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400">
              Ecuación de Valor Insuperable
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              ¿QUÉ OBTIENES?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Todo lo que necesitas para cuidar y orientar la salud de tu hijo reunido en un solo lugar.
            </p>
          </div>

          {/* Visual Formula Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Box 1 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 text-center space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto text-xl font-bold">
                📱
              </div>
              <h3 className="font-black text-lg text-white">MINI APPS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Para consultar desde tu celular en cualquier momento de duda.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 text-center space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-xl font-bold">
                ✨
              </div>
              <h3 className="font-black text-lg text-white">NUEVAS HERRAMIENTAS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                El Club sigue creciendo mes a mes con nuevos recursos prácticos.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 text-center space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto text-xl font-bold">
                🎥
              </div>
              <h3 className="font-black text-lg text-teal-300">REUNIÓN EN DIRECTO</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Un encuentro educativo conmigo cada mes por Hotmart (clases grabadas para suscriptores).
              </p>
            </div>

          </div>

          {/* Big Equality Result */}
          <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-r from-teal-500 to-emerald-400 p-1 rounded-3xl shadow-2xl">
            <div className="bg-slate-950 rounded-[22px] p-6 sm:p-8 text-center space-y-4">
              <div className="text-2xl font-black text-teal-400">=</div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                CLUB PEDIATRA ALDO CLAROS
              </h3>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                15 soles/ mes
              </div>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
                Acceso completo e ilimitado a todas las mini apps digitales + encuentro educativo mensual en vivo (las clases quedan grabadas en Hotmart para suscriptores).
              </p>
              <div className="pt-2">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20 cursor-pointer inline-flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>¡QUIERO UNIRME AL CLUB!</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. NUEVA SECCIÓN EMOCIONAL */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-teal-50/40 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Acompañamiento en Cada Etapa
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            &ldquo;Porque criar a un hijo viene con muchas preguntas.&rdquo;
          </h2>

          <div className="text-lg sm:text-xl text-teal-900 font-semibold italic">
            &ldquo;Fiebre, alimentación, sueño, desarrollo, conducta, tos, diarrea, crecimiento...&rdquo;
          </div>

          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              Cada etapa trae nuevas dudas.
            </p>
            <p>
              Quiero que tengas un lugar donde puedas aprender, consultar herramientas y encontrarte conmigo una vez al mes para conversar sobre los temas que más te preocupan.
            </p>
          </div>

          {/* Two Key Highlighting Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
            
            <div className="p-6 rounded-2xl bg-white border border-teal-200/90 shadow-md space-y-2">
              <div className="text-teal-700 font-black text-lg">💡 Certeza y calma</div>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                &ldquo;No quiero que tengas que buscar respuestas diferentes cada vez que tengas una duda.&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-teal-200/90 shadow-md space-y-2">
              <div className="text-teal-700 font-black text-lg">🛡️ Preparación continua</div>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                &ldquo;Quiero ayudarte a estar mejor preparado para acompañar a tu hijo.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. MODIFICAR LA OFERTA (CHECKLIST COMPLETO & MEMBRESÍA $3.90 USD) */}
      {/* ========================================================================= */}
      <section id="oferta" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-b from-white via-teal-50/30 to-emerald-50/20 rounded-3xl p-8 sm:p-12 border-2 border-teal-500 shadow-2xl space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-teal-700">
                Membresía Completa de Padres
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                CLUB PEDIATRA ALDO CLAROS
              </h2>
              <div className="text-3xl sm:text-4xl font-black text-teal-800">
                TODO POR 15 SOLES/ MES
              </div>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Tu membresía incluye acceso total e inmediato:
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {CLUB_CHECKLIST_ITEMS.map((item, index) => (
                <div 
                  key={index}
                  className={`p-3.5 rounded-2xl border flex items-start gap-3 transition-all ${
                    item.includes('1 reunión educativa EN DIRECTO')
                      ? 'bg-teal-700 text-white border-teal-800 font-bold shadow-md sm:col-span-2'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    item.includes('1 reunión educativa EN DIRECTO')
                      ? 'bg-teal-400 text-teal-950 font-black'
                      : 'bg-teal-100 text-teal-800'
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6 text-center space-y-3">
              <a
                id="oferta-cta-btn"
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-lg sm:text-xl uppercase tracking-wider transition-all shadow-xl shadow-amber-400/30 hover:shadow-amber-400/40 border-2 border-amber-500/50 flex items-center justify-center gap-3 cursor-pointer group hover:scale-[1.01]"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>¡QUIERO ENTRAR AL CLUB!</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-xs text-slate-500 font-medium">
                🔒 15 soles/ mes • Pago seguro con Tarjeta, Yape, Plin o PayPal • Sin contratos de permanencia
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PREGUNTAS FRECUENTES (FAQ) */}
      {/* ========================================================================= */}
      <section id="preguntas-frecuentes" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700">
              Resuelve tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Preguntas Frecuentes sobre el Club
            </h2>
            <p className="text-slate-600 text-base">
              Todo lo que necesitas saber sobre las reuniones mensuales, las mini apps y la membresía.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_LIST.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:bg-slate-50/80 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-teal-700 shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CTA FINAL */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/20 text-teal-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            Tu tranquilidad como padre comienza hoy
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Únete hoy al Club Pediatra Aldo Claros
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Por solo <strong>15 soles/ mes</strong> tendrás acceso a las herramientas disponibles dentro del Club, nuevos recursos y una reunión educativa mensual en directo.
          </p>

          {/* Highlight Badge Box */}
          <div className="inline-block bg-slate-800/80 border border-teal-500/40 rounded-2xl p-6 max-w-xl mx-auto shadow-2xl text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400">
              15 soles/ mes
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              Mini apps + herramientas + nuevos contenidos + reunión mensual en directo (clases grabadas en Hotmart)
            </div>
          </div>

          {/* High contrast final CTA button */}
          <div className="pt-2">
            <a
              id="cta-final-btn"
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-lg sm:text-xl uppercase tracking-wider transition-all shadow-2xl shadow-amber-400/30 border-2 border-amber-500/50 cursor-pointer inline-flex items-center justify-center gap-3 hover:scale-[1.02]"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>¡QUIERO UNIRME AL CLUB!</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div className="text-xs text-slate-400 max-w-md mx-auto pt-2">
            Contenido educativo. No sustituye una consulta médica profesional.
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-extrabold text-base">Club Pediatra Aldo Claros</div>
                <div className="text-slate-400 text-xs">Mini apps pediátricas & reunión mensual en directo</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
              <a href="#reunion-mensual" className="hover:text-teal-400 transition-colors">Reunión en Directo</a>
              <span>•</span>
              <a href="#mini-apps" className="hover:text-teal-400 transition-colors">Mini Apps</a>
              <span>•</span>
              <a href="#oferta" className="hover:text-teal-400 transition-colors">Membresía 14 soles/ mes</a>
              <span>•</span>
              <a 
                href={HOTMART_CHECKOUT_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
              >
                Unirse al Club
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} Club Pediatra Aldo Claros. Todos los derechos reservados.
            </div>
            <div className="text-center sm:text-right">
              Plataforma educativa pediátrica creada con amor para las familias.
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* JOIN CLUB MODAL / CHECKOUT SIMULATOR */}
      {/* ========================================================================= */}
      <JoinClubModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}
