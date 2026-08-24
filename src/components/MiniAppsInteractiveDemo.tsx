import React, { useState } from 'react';
import { 
  Thermometer, 
  Apple, 
  TrendingUp, 
  AlertTriangle, 
  Moon, 
  CheckCircle2, 
  Info, 
  HelpCircle,
  Sparkles,
  ShieldAlert,
  Clock,
  HeartHandshake
} from 'lucide-react';

export const MiniAppsInteractiveDemo: React.FC<{ onJoinClick: () => void }> = ({ onJoinClick }) => {
  const [activeTab, setActiveTab] = useState<'fever' | 'nutrition' | 'milestones' | 'sleep' | 'alarm'>('fever');

  // State for Fever Calculator
  const [weightKg, setWeightKg] = useState<number>(10);
  const [temperature, setTemperature] = useState<number>(38.2);
  const [feverMed, setFeverMed] = useState<'paracetamol' | 'ibuprofen'>('paracetamol');

  // State for Nutrition
  const [nutritionAge, setNutritionAge] = useState<number>(7);
  const [foodSearch, setFoodSearch] = useState<string>('');

  // State for Milestones
  const [milestoneMonth, setMilestoneMonth] = useState<number>(9);

  // State for Sleep
  const [sleepAgeMonths, setSleepAgeMonths] = useState<number>(8);

  // Fever calculations (orientative clinical guidelines)
  // Paracetamol drops: ~10-15 mg/kg per dose. Common syrup (120mg/5ml) -> approx 0.4 - 0.6 ml/kg/dose or 2-3 drops/kg for 100mg/ml drops.
  // Ibuprofen syrup (100mg/5ml): ~5-10 mg/kg per dose -> (weight * 0.25 - 0.5 ml)
  const paracetamolDrops = Math.round(weightKg * 2); // approx 2 drops/kg (100mg/ml solution)
  const paracetamolSyrupMl = ((weightKg * 15) / 24).toFixed(1); // 120mg/5ml = 24mg/ml
  const ibuprofenSyrupMl = ((weightKg * 10) / 20).toFixed(1); // 100mg/5ml = 20mg/ml

  const isFever = temperature >= 38.0;
  const isHighFever = temperature >= 39.0;
  const isSubfebrile = temperature >= 37.5 && temperature < 38.0;

  // Nutrition foods data
  const foodsList = [
    {
      name: 'Aguacate / Palta',
      stage: 'Desde 6 meses',
      texture: 'Gajo blando que se deshace entre los dedos o chafado',
      allergen: false,
      benefit: 'Grasas saludables y aporte calórico natural',
      type: 'Fruta'
    },
    {
      name: 'Huevo entero (Yema y Clara)',
      stage: 'Desde 6 meses',
      texture: 'Bien cocido en tortilla francesa o huevo duro en cuartos',
      allergen: true,
      benefit: 'Proteína de alto valor biológico y hierro',
      type: 'Alérgeno'
    },
    {
      name: 'Plátano / Banana',
      stage: 'Desde 6 meses',
      texture: 'En tiras longitudinales maduras o aplastado con tenedor',
      allergen: false,
      benefit: 'Potasio, energía fácil y textura suave',
      type: 'Fruta'
    },
    {
      name: 'Pescado blanco / azul',
      stage: 'Desde 6 meses (evitar especies grandes con alto mercurio)',
      texture: 'Desmenuzado sin ninguna espina o en hamburguesitas caseras',
      allergen: true,
      benefit: 'Omega 3, DHA para el cerebro y neurodesarrollo',
      type: 'Alérgeno'
    },
    {
      name: 'Zanahoria',
      stage: 'Desde 6 meses',
      texture: '¡NUNCA cruda en rodajas (riesgo de atragantamiento)! Siempre cocida al vapor al dente blando.',
      allergen: false,
      benefit: 'Betacarotenos y vitamina A',
      type: 'Verdura'
    },
    {
      name: 'Miel de abeja',
      stage: '🚫 PROHIBIDO antes de los 12 meses',
      texture: 'Peligro de botulismo del lactante',
      allergen: false,
      benefit: 'Contraindicado en menores de 1 año',
      type: 'Prohibido'
    },
    {
      name: 'Frutos secos enteros',
      stage: '🚫 PROHIBIDO enteros hasta los 4-5 años (riesgo asfixia)',
      texture: 'Solo en mantequilla 100% untada finita o molidos',
      allergen: true,
      benefit: 'Excelente aporte cuando están bien preparados',
      type: 'Prohibido'
    }
  ];

  const filteredFoods = foodsList.filter(f => 
    f.name.toLowerCase().includes(foodSearch.toLowerCase()) || 
    f.type.toLowerCase().includes(foodSearch.toLowerCase())
  );

  // Milestones data
  const milestonesData: Record<number, { motor: string[]; speech: string[]; social: string[]; warning: string }> = {
    3: {
      motor: ['Sostiene la cabeza erguida al estar boca abajo', 'Abre y cierra las manos espontáneamente'],
      speech: ['Emite gorjeos y sonidos vocálicos (agú)', 'Gira la cabeza hacia las voces de mamá o papá'],
      social: ['Sonrisa social en respuesta a caras y voces', 'Fija la mirada en rostros cercanos'],
      warning: 'No sonríe ante estímulos o no sostiene la cabeza a los 3 meses.'
    },
    6: {
      motor: ['Se da vuelta en ambas direcciones (giros)', 'Se sienta con apoyo momentáneo', 'Pasa objetos de una mano a otra'],
      speech: ['Balbucea cadenas de consonantes (ba-ba, ma-ma sin intención)', 'Responde a su propio nombre'],
      social: ['Reconoce caras familiares y muestra curiosidad', 'Disfruta mirarse al espejo'],
      warning: 'No intenta alcanzar objetos o rigidez muscular evidente.'
    },
    9: {
      motor: ['Se sienta sin apoyo con buen equilibrio', 'Comienza gateo o arrastre', 'Pinza digital gruesa (pulgar e índice)'],
      speech: ['Balbuceo variado con entonación', 'Entiende la palabra "no" por el tono'],
      social: ['Ansiedad de separación frente a desconocidos (esperable)', 'Juega al "escondite" o cucú-tras'],
      warning: 'No se sienta solo o no sostiene el peso en sus piernas al ser apoyado.'
    },
    12: {
      motor: ['Se pone de pie apoyándose en muebles', 'Da pasos laterales o primeros pasos', 'Pinza fina precisa'],
      speech: ['Dice sus primeras 1-3 palabras con significado (mamá, papá, agua)', 'Señala lo que desea'],
      social: ['Imita gestos como decir adiós con la mano', 'Muestra afecto y busca aprobación'],
      warning: 'No señala con el dedo, no balbucea ni responde cuando se le llama.'
    },
    18: {
      motor: ['Camina de forma independiente y segura', 'Sube escalones con ayuda', 'Construye torres de 2-3 cubos'],
      speech: ['Vocabulario de 10 a 20 palabras', 'Señala partes de su cuerpo cuando se le pregunta'],
      social: ['Juego simbólico inicial (dar de comer a un muñeco)', 'Comienza a mostrar independencia'],
      warning: 'No camina solo o no tiene al menos 6 palabras claras a los 18 meses.'
    },
    24: {
      motor: ['Corre con fluidez, patea una pelota', 'Sube y baja escaleras peldaño a peldaño'],
      speech: ['Frases de 2 palabras (ej: "más leche", "vamos allá")', 'Comprende órdenes de 2 pasos'],
      social: ['Juega junto a otros niños (juego en paralelo)', 'Expresa emociones más complejas (berrinches naturales)'],
      warning: 'No une dos palabras o no imita acciones sencillas.'
    }
  };

  const currentMilestone = milestonesData[milestoneMonth] || milestonesData[9];

  // Sleep windows data
  const getSleepInfo = (months: number) => {
    if (months <= 3) return { totalHours: '14 - 17 hrs', naps: '4 a 5 siestas', wakeWindow: '60 - 90 min', tip: 'El ritmo circadiano aún está madurando. Mucha luz natural de día y calma de noche.' };
    if (months <= 6) return { totalHours: '12 - 15 hrs', naps: '3 siestas', wakeWindow: '2 - 2.5 hrs', tip: 'Etapa de consolidación de siestas y posible regresión de los 4 meses.' };
    if (months <= 12) return { totalHours: '12 - 14 hrs', naps: '2 siestas (mañana y tarde)', wakeWindow: '3 - 3.5 hrs', tip: 'Rutina nocturna consistente de 20-30 min antes de acostarlo.' };
    if (months <= 18) return { totalHours: '11 - 14 hrs', naps: '1 a 2 siestas (transición hacia 1)', wakeWindow: '4 - 5 hrs', tip: 'La siesta del mediodía se vuelve la más importante.' };
    return { totalHours: '11 - 13 hrs', naps: '1 siesta de 1.5 - 2.5 hrs', wakeWindow: '5 - 6 hrs', tip: 'Evitar pantallas al menos 2 horas antes de dormir para no inhibir la melatonina.' };
  };

  const currentSleep = getSleepInfo(sleepAgeMonths);

  return (
    <div id="mini-apps-demo" className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-100 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              Vista Previa Interactiva del Club
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Herramientas y Mini Apps Pediátricas
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
              Prueba algunas de las calculadoras y guías que tendrás siempre a mano en tu celular por solo S/10 al mes.
            </p>
          </div>
          <button
            onClick={onJoinClick}
            className="self-start md:self-center px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-teal-950 font-bold text-sm transition-all shadow-md hover:shadow-teal-400/20 cursor-pointer whitespace-nowrap"
          >
            Acceder al Club Completo →
          </button>
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-6 pt-2 border-t border-teal-700/50">
          <button
            id="tab-fever"
            onClick={() => setActiveTab('fever')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'fever'
                ? 'bg-white text-teal-900 shadow-md'
                : 'bg-teal-800/60 text-teal-100 hover:bg-teal-700/60'
            }`}
          >
            <Thermometer className="w-4 h-4 text-rose-500" />
            Calculadora de Fiebre & Dosis
          </button>

          <button
            id="tab-nutrition"
            onClick={() => setActiveTab('nutrition')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'nutrition'
                ? 'bg-white text-teal-900 shadow-md'
                : 'bg-teal-800/60 text-teal-100 hover:bg-teal-700/60'
            }`}
          >
            <Apple className="w-4 h-4 text-emerald-500" />
            Alimentación 6–24m
          </button>

          <button
            id="tab-alarm"
            onClick={() => setActiveTab('alarm')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'alarm'
                ? 'bg-white text-teal-900 shadow-md'
                : 'bg-teal-800/60 text-teal-100 hover:bg-teal-700/60'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Semáforo de Alarma
          </button>

          <button
            id="tab-milestones"
            onClick={() => setActiveTab('milestones')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'milestones'
                ? 'bg-white text-teal-900 shadow-md'
                : 'bg-teal-800/60 text-teal-100 hover:bg-teal-700/60'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-sky-500" />
            Hitos de Desarrollo
          </button>

          <button
            id="tab-sleep"
            onClick={() => setActiveTab('sleep')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'sleep'
                ? 'bg-white text-teal-900 shadow-md'
                : 'bg-teal-800/60 text-teal-100 hover:bg-teal-700/60'
            }`}
          >
            <Moon className="w-4 h-4 text-indigo-400" />
            Sueño y Siestas
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-6 sm:p-8 bg-slate-50/50">
        {/* 1. FEVER & DOSE CALCULATOR */}
        {activeTab === 'fever' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Controls */}
              <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-rose-500" />
                    Parámetros de tu hijo/a
                  </h4>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    Calculadora Orientativa
                  </span>
                </div>

                {/* Weight slider */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-slate-600">Peso actual del bebé/niño:</span>
                    <span className="font-bold text-teal-700 text-base">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="25"
                    step="0.5"
                    value={weightKg}
                    onChange={(e) => setWeightKg(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>4 kg (Lactante)</span>
                    <span>15 kg</span>
                    <span>25 kg (Niño)</span>
                  </div>
                </div>

                {/* Temperature slider */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5 font-medium">
                    <span className="text-slate-600">Temperatura axilar:</span>
                    <span className={`font-bold text-base ${isHighFever ? 'text-rose-600' : isFever ? 'text-amber-600' : isSubfebrile ? 'text-yellow-600' : 'text-emerald-600'}`}>
                      {temperature.toFixed(1)} °C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="36.0"
                    max="40.5"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>36.0°C Normal</span>
                    <span>38.0°C Fiebre</span>
                    <span>39.0°C+ Elevada</span>
                  </div>
                </div>

                {/* Medication choice */}
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Medicamento a consultar:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFeverMed('paracetamol')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                        feverMed === 'paracetamol'
                          ? 'border-teal-600 bg-teal-50/50 text-teal-900 ring-2 ring-teal-500/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-sm text-slate-900">Paracetamol</div>
                      <div className="text-[11px] text-slate-500">Gotas (100mg/ml) o Jarabe</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeverMed('ibuprofen')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                        feverMed === 'ibuprofen'
                          ? 'border-teal-600 bg-teal-50/50 text-teal-900 ring-2 ring-teal-500/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">Ibuprofeno</div>
                      <div className="text-[11px] text-slate-500">Jarabe (100mg/5ml)</div>
                    </button>
                  </div>
                  {feverMed === 'ibuprofen' && weightKg < 6 && (
                    <p className="text-[11px] text-amber-600 mt-2 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      El ibuprofeno suele reservarse para mayores de 6 meses y más de 6-7 kg.
                    </p>
                  )}
                </div>
              </div>

              {/* Results Box */}
              <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estado Térmico</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isHighFever 
                        ? 'bg-rose-100 text-rose-800' 
                        : isFever 
                        ? 'bg-amber-100 text-amber-800' 
                        : isSubfebrile 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {isHighFever ? '🚨 Fiebre Elevada (≥39°C)' : isFever ? '🌡️ Fiebre (≥38°C)' : isSubfebrile ? '🟡 Febrícula (37.5-37.9°C)' : '✅ Temperatura Normal'}
                    </span>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-teal-50/70 border border-teal-100 space-y-3">
                    <div className="text-xs text-teal-800 font-semibold uppercase tracking-wider">
                      Dosis Orientativa calculada para {weightKg} kg:
                    </div>
                    {feverMed === 'paracetamol' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg border border-teal-100">
                          <div className="text-[11px] text-slate-500 font-medium">Gotas (100 mg / ml):</div>
                          <div className="text-xl font-extrabold text-teal-800 mt-0.5">
                            {paracetamolDrops} gotas
                          </div>
                          <div className="text-[10px] text-slate-400">Cada 6 a 8 horas según molestia</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-teal-100">
                          <div className="text-[11px] text-slate-500 font-medium">Jarabe (120 mg / 5 ml):</div>
                          <div className="text-xl font-extrabold text-teal-800 mt-0.5">
                            {paracetamolSyrupMl} ml
                          </div>
                          <div className="text-[10px] text-slate-400">Cada 6 a 8 horas según molestia</div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white p-3 rounded-lg border border-teal-100">
                        <div className="text-[11px] text-slate-500 font-medium">Jarabe Ibuprofeno (100 mg / 5 ml):</div>
                        <div className="text-xl font-extrabold text-teal-800 mt-0.5">
                          {ibuprofenSyrupMl} ml
                        </div>
                        <div className="text-[10px] text-slate-400">Cada 8 horas con alimentos o leche</div>
                      </div>
                    )}
                  </div>

                  {/* Doctor's practical rule */}
                  <div className="mt-4 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold">Consejo del Dr. Aldo Claros:</strong> Tratamos el malestar del niño, no el termómetro. Si el niño juega y está animado, hidrátalo y mantén ropa fresca sin sobremedicar.
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                  ⚠️ Información orientativa y educativa. Confirma siempre la concentración exacta del frasco de tu país con tu pediatra.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. NUTRITION & BLW EXPLORER */}
        {activeTab === 'nutrition' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-700">Filtrar por edad de inicio:</span>
                <div className="flex gap-1.5">
                  {[6, 8, 12].map(age => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setNutritionAge(age)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        nutritionAge === age
                          ? 'bg-teal-700 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {age === 12 ? '12+ meses' : `${age} meses`}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="text"
                placeholder="Buscar alimento (ej. Huevo, Aguacate, Miel...)"
                value={foodSearch}
                onChange={(e) => setFoodSearch(e.target.value)}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 bg-slate-50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFoods.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl border transition-all ${
                    item.type === 'Prohibido' 
                      ? 'bg-rose-50/50 border-rose-200' 
                      : item.type === 'Alérgeno'
                      ? 'bg-amber-50/50 border-amber-200'
                      : 'bg-white border-slate-200/80 hover:border-teal-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="font-bold text-slate-800 text-sm">{item.name}</h5>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${
                      item.type === 'Prohibido'
                        ? 'bg-rose-100 text-rose-800'
                        : item.type === 'Alérgeno'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-teal-100 text-teal-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-teal-700">{item.stage}</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-700">Forma y textura:</strong> {item.texture}
                  </p>
                  <div className="mt-2 text-[11px] text-slate-500 bg-slate-50/80 p-2 rounded-lg">
                    ✨ {item.benefit}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-900">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Accede a la guía de alimentación complementaria y todas las mini apps con tu membresía del Club.</span>
              </div>
              <button onClick={onJoinClick} className="font-bold text-teal-700 underline shrink-0 cursor-pointer">
                Ver todo en el Club →
              </button>
            </div>
          </div>
        )}

        {/* 3. ALARM SIGNS TRAFFIC LIGHT */}
        {activeTab === 'alarm' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-2">
              <h4 className="text-lg font-bold text-slate-900">
                Semáforo de Síntomas Pediátricos
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Aprende a diferenciar qué situaciones requieren observación en casa y cuáles ameritan atención médica inmediata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Green */}
              <div className="bg-emerald-50/60 border-2 border-emerald-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Verde: Manejo en Casa
                </div>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Fiebre que cede bien con medicación y el niño sonríe o juega.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mocos claros y tos suave sin dificultad para respirar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Toma líquidos con regularidad y moja sus pañales habituales.</span>
                  </li>
                </ul>
              </div>

              {/* Yellow */}
              <div className="bg-amber-50/60 border-2 border-amber-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm uppercase tracking-wide">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500"></div>
                  Amarillo: Consulta Pediátrica
                </div>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Fiebre de más de 48-72 horas sin causa aparente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Vómitos frecuentes o deposiciones líquidas persistentes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Dolor de oído intenso o queja al tocar la oreja.</span>
                  </li>
                </ul>
              </div>

              {/* Red */}
              <div className="bg-rose-50/60 border-2 border-rose-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wide">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600"></div>
                  Rojo: Urgencia Inmediata
                </div>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Dificultad para respirar (hunde las costillas o aletea la nariz).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Bebé menor de 3 meses con temperatura de 38°C o más.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Somnolencia extrema, decaimiento severo que no despierta o convulsión.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. MILESTONES CHECKER */}
        {activeTab === 'milestones' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Selecciona la edad de tu bebé:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[3, 6, 9, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMilestoneMonth(m)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      milestoneMonth === m
                        ? 'bg-teal-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {m} meses
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Motor */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-teal-600" />
                  Desarrollo Motor
                </div>
                <ul className="text-xs text-slate-700 space-y-2">
                  {currentMilestone.motor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speech */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-sky-600" />
                  Lenguaje & Comunicación
                </div>
                <ul className="text-xs text-slate-700 space-y-2">
                  {currentMilestone.speech.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-indigo-600" />
                  Social & Emocional
                </div>
                <ul className="text-xs text-slate-700 space-y-2">
                  {currentMilestone.social.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Signo de alerta para comentar con el pediatra ({milestoneMonth} meses):</strong>{' '}
                {currentMilestone.warning}
              </div>
            </div>
          </div>
        )}

        {/* 5. SLEEP & WAKE WINDOWS */}
        {activeTab === 'sleep' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Edad de tu bebé:
                </label>
                <span className="font-extrabold text-teal-800 text-base">{sleepAgeMonths} meses</span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                value={sleepAgeMonths}
                onChange={(e) => setSleepAgeMonths(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 mes recién nacido</span>
                <span>6 meses</span>
                <span>12 meses (1 año)</span>
                <span>24 meses (2 años)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 text-center">
                <Clock className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <div className="text-xs font-semibold text-slate-500">Sueño Total en 24h</div>
                <div className="text-xl font-bold text-slate-900 mt-1">{currentSleep.totalHours}</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 text-center">
                <Moon className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="text-xs font-semibold text-slate-500">Siestas Recomendadas</div>
                <div className="text-xl font-bold text-slate-900 mt-1">{currentSleep.naps}</div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 text-center">
                <Sparkles className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <div className="text-xs font-semibold text-slate-500">Ventana de Vigilia Máxima</div>
                <div className="text-xl font-bold text-slate-900 mt-1">{currentSleep.wakeWindow}</div>
              </div>
            </div>

            <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-950 flex items-start gap-3">
              <Moon className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong>Pauta de descanso ({sleepAgeMonths} meses):</strong> {currentSleep.tip}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-100/80 p-4 border-t border-slate-200 text-center text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-medium">
          🔒 Acceso ilimitado a todas las herramientas actuales y futuras incluidas en la membresía.
        </span>
        <button
          onClick={onJoinClick}
          className="text-teal-800 hover:text-teal-950 font-bold underline cursor-pointer"
        >
          Unirse al Club por S/10 al mes →
        </button>
      </div>
    </div>
  );
};
