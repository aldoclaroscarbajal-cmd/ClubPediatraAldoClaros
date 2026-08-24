import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Video, 
  Smartphone, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  MessageSquare,
  Lock,
  ArrowRight
} from 'lucide-react';
import { CLUB_CHECKLIST_ITEMS } from '../data/clubData';

interface JoinClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinClubModal: React.FC<JoinClubModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'plan' | 'payment' | 'success'>('plan');
  const [paymentMethod, setPaymentMethod] = useState<'yape' | 'plin' | 'card' | 'whatsapp'>('yape');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  if (!isOpen) return null;

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('plan');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            Acceso Inmediato al Club
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Club Pediatra Aldo Claros
          </h3>
          <p className="text-teal-100 text-xs sm:text-sm mt-1">
            Mini apps + Herramientas prácticas + Nuevos recursos + 1 Reunión en directo cada mes
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {step === 'plan' && (
            <div className="space-y-6">
              {/* Billing toggle */}
              <div className="flex justify-center">
                <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      billingCycle === 'monthly'
                        ? 'bg-white text-teal-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Plan Mensual (S/10 / mes)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle('annual')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      billingCycle === 'annual'
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Plan Anual (S/99 / año) <span className="text-[11px] font-extrabold text-amber-300">2 meses gratis</span>
                  </button>
                </div>
              </div>

              {/* Price card */}
              <div className="bg-gradient-to-b from-teal-50/70 to-emerald-50/40 p-6 rounded-2xl border-2 border-teal-500/40 text-center space-y-2">
                <div className="text-xs font-black uppercase tracking-widest text-teal-700">
                  Membresía Completa de Padres
                </div>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">
                    {billingCycle === 'monthly' ? 'S/10' : 'S/99'}
                  </span>
                  <span className="text-sm font-bold text-slate-500">
                    {billingCycle === 'monthly' ? '/ al mes' : '/ al año'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Sin permanencia obligatoria. Cancela en cualquier momento con un clic.
                </p>
              </div>

              {/* Summary Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Tu membresía incluye:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Mini apps de salud y dosis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Guía alimentación 6–24m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>1 reunión EN DIRECTO cada mes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Semáforo de signos de alarma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Monitor de desarrollo infantil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Nuevas herramientas continuas</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep('payment')}
                className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-base transition-all shadow-lg hover:shadow-teal-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                Continuar al Pago ({billingCycle === 'monthly' ? 'S/10' : 'S/99'})
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 'payment' && (
            <form onSubmit={handleProcessPayment} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg">
                  Datos de Registro y Forma de Pago
                </h4>
                <button
                  type="button"
                  onClick={() => setStep('plan')}
                  className="text-xs text-teal-700 font-bold hover:underline cursor-pointer"
                >
                  ← Cambiar Plan
                </button>
              </div>

              {/* Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Nombre completo:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María Elena Sánchez"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Correo electrónico:</label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp / Teléfono:</label>
                <input
                  type="tel"
                  required
                  placeholder="+51 987 654 321"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Selecciona método de pago:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('yape')}
                    className={`p-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      paymentMethod === 'yape'
                        ? 'border-purple-600 bg-purple-50 text-purple-950 ring-2 ring-purple-500/30'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-purple-700 font-extrabold text-sm">Yape</div>
                    <div className="text-[10px] text-slate-500">QR o Número</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('plin')}
                    className={`p-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      paymentMethod === 'plin'
                        ? 'border-sky-600 bg-sky-50 text-sky-950 ring-2 ring-sky-500/30'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-sky-600 font-extrabold text-sm">Plin</div>
                    <div className="text-[10px] text-slate-500">Instantáneo</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-teal-600 bg-teal-50 text-teal-950 ring-2 ring-teal-500/30'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-teal-700 font-extrabold text-sm">Tarjeta</div>
                    <div className="text-[10px] text-slate-500">Débito / Crédito</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      paymentMethod === 'whatsapp'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-emerald-700 font-extrabold text-sm">WhatsApp</div>
                    <div className="text-[10px] text-slate-500">Asistencia BCP</div>
                  </button>
                </div>
              </div>

              {/* Payment Details box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                {paymentMethod === 'yape' && (
                  <div className="space-y-1 text-slate-700">
                    <div className="font-bold text-purple-900 flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-purple-700" />
                      Pago por Yape (Monto: {billingCycle === 'monthly' ? 'S/10.00' : 'S/99.00'}):
                    </div>
                    <p>Yapear al número oficial del Club: <strong>998 631 300</strong> (Titular: Pediatra Aldo Claros)</p>
                    <p className="text-[11px] text-slate-500">El acceso se activará en tu correo de forma inmediata.</p>
                  </div>
                )}

                {paymentMethod === 'plin' && (
                  <div className="space-y-1 text-slate-700">
                    <div className="font-bold text-sky-900 flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-sky-700" />
                      Pago por Plin (Monto: {billingCycle === 'monthly' ? 'S/10.00' : 'S/99.00'}):
                    </div>
                    <p>Transferir por Plin al número: <strong>998 631 300</strong></p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-2 text-slate-700">
                    <div className="font-bold text-teal-900 flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-teal-700" />
                      Pasarela Segura (Monto: {billingCycle === 'monthly' ? 'S/10.00' : 'S/99.00'}):
                    </div>
                    <input
                      type="text"
                      placeholder="Número de tarjeta (0000 0000 0000 0000)"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs"
                      defaultValue="4557 8901 2345 6789"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" placeholder="MM/AA" className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs" defaultValue="12/28" />
                      <input type="text" placeholder="CVV" className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs" defaultValue="890" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'whatsapp' && (
                  <div className="space-y-1 text-slate-700">
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-emerald-700" />
                      Asistencia Personalizada por WhatsApp:
                    </div>
                    <p>Te enviaremos los datos de transferencia bancaria BCP / Interbank y confirmaremos tu membresía por chat.</p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-base transition-all shadow-lg hover:shadow-teal-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                Confirmar y Entrar al Club
              </button>

              <p className="text-center text-[11px] text-slate-400">
                🔒 Transacción encriptada. Garantía de satisfacción de 7 días.
              </p>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-black text-slate-900">
                ¡Bienvenido/a al Club Pediatra Aldo Claros!
              </h4>

              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Tu membresía ha sido activada exitosamente. Ya tienes acceso a las mini apps pediátricas, guías prácticas y el enlace para la próxima <strong>reunión mensual en directo</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-left text-xs text-teal-950 space-y-2 max-w-md mx-auto">
                <div className="font-bold text-sm text-teal-900">Credenciales de Acceso:</div>
                <div>👤 <strong>Titular:</strong> {parentName || 'Familia Miembro'}</div>
                <div>✉️ <strong>Correo:</strong> {parentEmail || 'tu@correo.com'}</div>
                <div>🎥 <strong>Próximo Directo:</strong> Sábado 21 de Septiembre, 7:30 PM (Enlace privado de YouTube enviado a tu correo/WhatsApp)</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm transition-all cursor-pointer"
                >
                  Empezar a Usar las Mini Apps
                </button>
                <a
                  href="https://wa.me/51998631300?text=Hola%20Dr.%20Aldo%20Claros,%20acabo%20de%20unirme%20al%20Club%20Pedi%C3%A1trico!"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Escribir al WhatsApp del Club
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-50 p-4 border-t border-slate-100 text-center text-[11px] text-slate-500">
          Contenido educativo y preventivo. No sustituye una consulta médica presencial.
        </div>
      </div>
    </div>
  );
};
