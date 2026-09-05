import React, { useState } from 'react';
import { 
  Video, 
  Presentation, 
  BookOpenCheck, 
  MessageCircleQuestion, 
  Sparkles, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldAlert, 
  Users, 
  Radio, 
  Lock
} from 'lucide-react';
import { MEETING_PARTS, UPCOMING_MEETINGS, HOTMART_CHECKOUT_URL } from '../data/clubData';

export const LiveMeetingSection: React.FC<{ onJoinClick: () => void }> = ({ onJoinClick }) => {
  const [questionText, setQuestionText] = useState('');
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 1000);
  };

  const getPartIcon = (iconName: string) => {
    switch (iconName) {
      case 'Presentation':
        return <Presentation className="w-6 h-6 text-teal-600" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-sky-600" />;
      case 'MessageCircleQuestion':
        return <MessageCircleQuestion className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      default:
        return <Video className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="reunion-mensual" className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-950/5 to-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
            1 Reunión Educativa en Directo Cada Mes
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cada mes nos encontramos en directo
          </h2>

          <p className="text-lg sm:text-xl text-teal-950/80 font-medium italic">
            &ldquo;Como miembro del Club Pediatra Aldo Claros, tendrás acceso a una reunión educativa mensual en directo conmigo.&rdquo;
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Una vez al mes realizaré una reunión virtual exclusiva para los padres suscritos al Club. Un espacio cálido para abordar temas de salud infantil, alimentación, crecimiento, sueño, conducta, crianza, prevención y signos de alarma.
          </p>
        </div>

        {/* 3 Parts Breakdown */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Estructura de la Sesión
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              ¿Qué pasa en la reunión mensual?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEETING_PARTS.map((part) => (
              <div
                key={part.partNumber}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg shadow-slate-100/60 hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getPartIcon(part.icon)}
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      0{part.partNumber}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {part.title}
                  </h4>
                  <p className="text-xs font-bold text-teal-700 mt-0.5">
                    {part.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {part.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Incluye:
                  </div>
                  <ul className="space-y-1.5">
                    {part.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Meetings Schedule + Pre-Question Box */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Upcoming sessions schedule */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-teal-700 uppercase tracking-wider">
                  Próxima Fecha Programada
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  Calendario de Encuentro en Directo
                </h4>
              </div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              {UPCOMING_MEETINGS.map((meet) => (
                <div 
                  key={meet.id}
                  className="p-5 sm:p-6 rounded-2xl border bg-gradient-to-r from-teal-50/60 via-white to-teal-50/20 border-teal-300 ring-1 ring-teal-200 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-teal-700 text-white">
                      {meet.month}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-600 font-bold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" />
                        {meet.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        {meet.time}
                      </span>
                    </div>
                  </div>

                  <h5 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {meet.topic}
                  </h5>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {meet.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200/60">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {meet.tags.map((t, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-teal-800 flex items-center gap-1.5 bg-teal-100/60 px-2.5 py-1 rounded-lg">
                      <Lock className="w-3.5 h-3.5 text-teal-700" /> En directo por Hotmart
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 text-xs text-teal-950 flex items-center gap-2">
              <span className="text-teal-700 font-bold text-sm">✨</span>
              <span><strong>En vivo y grabadas:</strong> Transmitida en directo por Hotmart y <strong>todas las clases quedarán grabadas en la plataforma de Hotmart</strong> disponibles para los que se suscriben.</span>
            </div>
          </div>

          {/* Parents Interactive Question Submission Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-2">
                <MessageCircleQuestion className="w-3.5 h-3.5 text-teal-300" />
                Buzón de Preguntas
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                ¿Qué te gustaría que hablemos en el próximo directo?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                Los miembros del Club pueden enviar sus inquietudes previas para que el Pediatra Aldo Claros las incluya en la sesión mensual.
              </p>
            </div>

            {submitted ? (
              <div className="bg-teal-800/60 border border-teal-500/40 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-teal-400 text-teal-950 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-lg text-white">¡Pregunta registrada con éxito!</h5>
                <p className="text-xs text-teal-100">
                  El Dr. Aldo Claros revisará esta inquietud para abordarla en la próxima reunión mensual en directo.
                </p>
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  ¡Quiero unirme al Club! (14 soles/ mes) →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Tu nombre (o mamá/papá de...):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carolina, mamá de Santiago"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Edad de tu hijo/a:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 7 meses / 2 años"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Tu duda o tema que te preocupa:
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Ej. ¿Cómo manejar los mocos cuando no dejan dormir al bebé? o ¿Cuándo iniciar el agua en alimentación complementaria?"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar pregunta para el Dr. Aldo Claros
                </button>
              </form>
            )}

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <Users className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Espacio exclusivo para la comunidad del Club Pediatra Aldo Claros.</span>
            </div>
          </div>
        </div>

        {/* Clear Medical Educational Disclaimer Box */}
        <div className="mt-12 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong className="font-bold">Aclaración Médica Importante:</strong> Las reuniones virtuales y contenidos del Club tienen finalidad estrictamente educativa y de orientación general para padres y familias. No constituyen consultas médicas individuales, diagnóstico ni tratamiento, ni sustituyen una consulta pediátrica presencial.
          </div>
        </div>

      </div>
    </section>
  );
};
