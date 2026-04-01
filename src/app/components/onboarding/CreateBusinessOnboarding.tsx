import { useState } from "react";
import { X, ChevronRight, Building2, MapPin, Phone, Image, Check, ShoppingBag, Briefcase, Upload, Video, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

interface CreateBusinessOnboardingProps {
  onComplete: () => void;
  onSkip?: () => void;
}

export function CreateBusinessOnboarding({ onComplete, onSkip }: CreateBusinessOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  // Form states
  const [profileType, setProfileType] = useState<"productos" | "servicios" | "">("");
  const [businessName, setBusinessName] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessCity, setBusinessCity] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessWhatsapp, setBusinessWhatsapp] = useState("");
  const [businessFacebook, setBusinessFacebook] = useState("");
  const [businessInstagram, setBusinessInstagram] = useState("");
  const [businessVideoUrl, setBusinessVideoUrl] = useState("");

  const categories = [
    "Restaurantes", "Tecnología", "Moda", "Salud", "Belleza", "Educación",
    "Deportes", "Hogar y Decoración", "Mascotas", "Vehículos", "Construcción",
    "Gastronomía", "Entretenimiento", "Turismo", "Finanzas", "Servicios Profesionales"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      onComplete();
    }
  };

  const handleProfileTypeSelect = (type: "productos" | "servicios") => {
    setProfileType(type);
    handleNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border-2 border-orange-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold text-white">Crea tu perfil</h1>
              <p className="text-white/90 text-xs">Paso {currentStep} de {totalSteps}</p>
            </div>
            <button
              onClick={handleSkip}
              className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Step 1: Tipo de perfil - Productos o Servicios */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-fade-in">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  ¿El perfil ofrece productos o servicios?
                </h2>
                <p className="text-sm text-gray-600 max-w-xl mx-auto">
                  En función de la opción que selecciones mostraremos las categorías que mejor se acoplan a tu negocio o a tus servicios
                </p>
              </div>

              <div className="space-y-3">
                {/* Botón Para Productos */}
                <button
                  onClick={() => handleProfileTypeSelect("productos")}
                  className="w-full bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg rounded-xl p-4 text-left transition-all shadow-md group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Para productos</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Ideal para tiendas, negocios, organizaciones, marcas, mostrar productos y facilitar las compras en línea
                      </p>
                    </div>
                  </div>
                </button>

                {/* Botón Para Servicios */}
                <button
                  onClick={() => handleProfileTypeSelect("servicios")}
                  className="w-full bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg rounded-xl p-4 text-left transition-all shadow-md group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Para servicios</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Ideal para ayudar a las personas a encontrar tus servicios y ponerse en contacto contigo
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Nombre del negocio/servicio */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  ¿Qué nombre deseas que tenga tu perfil de negocio o servicio?
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                  El nombre debe ser el de tu negocio, organización, institución, asociación o tu nombre. ¡Si brindas algún tipo de servicio independiente o profesional!
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-4">
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Ej: Restaurante El Sabor Paceño"
                  className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors font-medium shadow-sm"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  disabled={!businessName.trim()}
                  className="text-orange-500 hover:text-orange-600 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Categoría */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  ¿Qué categoría describe mejor a tu negocio o servicio?
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Elige la categoría que mejor describa lo que haces
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-4 max-h-80 overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-2 gap-2.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setBusinessCategory(category)}
                      className={`p-3 rounded-lg border-2 transition-all font-semibold text-xs sm:text-sm transform hover:scale-105 ${
                        businessCategory === category
                          ? "bg-gradient-to-br from-orange-500 to-red-600 border-orange-500 text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-900 hover:border-orange-300 shadow-sm hover:shadow-md"
                      }`}
                    >
                      {businessCategory === category && (
                        <Check className="w-4 h-4 inline-block mr-1" />
                      )}
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  disabled={!businessCategory}
                  className="text-orange-500 hover:text-orange-600 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Ubicación */}
          {currentStep === 4 && (
            <div className="space-y-5 animate-fade-in">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ubicación</h2>
                <p className="text-gray-600 text-xs sm:text-sm">¿Dónde se encuentra tu negocio?</p>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    Ciudad
                  </label>
                  <select
                    value={businessCity}
                    onChange={(e) => setBusinessCity(e.target.value)}
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  >
                    <option value="">Selecciona una ciudad</option>
                    <option value="La Paz">La Paz</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Cochabamba">Cochabamba</option>
                    <option value="Sucre">Sucre</option>
                    <option value="Tarija">Tarija</option>
                    <option value="Oruro">Oruro</option>
                    <option value="Potosí">Potosí</option>
                    <option value="Beni">Beni</option>
                    <option value="Pando">Pando</option>
                  </select>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    Dirección completa
                  </label>
                  <input
                    type="text"
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    placeholder="Ej: Calle 21 de Calacoto, Zona Sur"
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">
                  📍 Ubicación en el mapa
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Busca tu negocio en el mapa y marca la ubicación exacta
                </p>
                <div className="rounded-xl overflow-hidden border-2 border-orange-300 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122235.87073677078!2d-68.24965268593748!3d-16.489688999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2062cad42d8d%3A0x614c6f7f519b8c11!2sLa%20Paz%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1234567890123!5m2!1ses!2sbo"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="text-orange-500 hover:text-orange-600 font-bold text-lg transition-colors cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Contacto y Redes Sociales */}
          {currentStep === 5 && (
            <div className="space-y-5 animate-fade-in">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Contacto y Redes Sociales</h2>
                <p className="text-gray-600 text-xs sm:text-sm">¿Cómo pueden contactarte?</p>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-orange-600" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={businessPhone}
                    onChange={(e) => setBusinessPhone(e.target.value)}
                    placeholder="+591 70123456"
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  />
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 text-orange-600" />
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={businessWhatsapp}
                    onChange={(e) => setBusinessWhatsapp(e.target.value)}
                    placeholder="+591 70123456"
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  />
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-orange-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    placeholder="contacto@tunegocio.com"
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  />
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Facebook className="w-3.5 h-3.5 text-orange-600" />
                    Facebook (opcional)
                  </label>
                  <input
                    type="url"
                    value={businessFacebook}
                    onChange={(e) => setBusinessFacebook(e.target.value)}
                    placeholder="https://facebook.com/tunegocio"
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  />
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-3.5">
                  <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-orange-600" />
                    Instagram (opcional)
                  </label>
                  <input
                    type="url"
                    value={businessInstagram}
                    onChange={(e) => setBusinessInstagram(e.target.value)}
                    placeholder="https://instagram.com/tunegocio"
                    className="w-full px-3 py-2.5 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="text-orange-500 hover:text-orange-600 font-bold text-lg transition-colors cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Foto de perfil o logo */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Foto de perfil o logo</h2>
                <p className="text-gray-600 text-xs sm:text-sm">Agrega una imagen que represente tu negocio</p>
              </div>

              <div className="border-2 border-dashed border-orange-300 rounded-xl p-10 text-center hover:border-orange-500 transition-all cursor-pointer bg-gradient-to-br from-orange-50 to-white group hover:shadow-md">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-gray-900 font-bold mb-1.5">Haz clic para subir una imagen</p>
                <p className="text-xs text-gray-500">PNG, JPG o GIF (máx. 5MB)</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-3">
                <p className="text-xs text-orange-900">
                  Una imagen de alta calidad ayuda a que tu negocio se vea más profesional y genera más confianza
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="text-orange-500 hover:text-orange-600 font-bold text-lg transition-colors cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Video de presentación */}
          {currentStep === 7 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Video de presentación</h2>
                <p className="text-gray-600 text-xs sm:text-sm">Comparte un video sobre tu negocio</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-4">
                <label className="block text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-purple-600" />
                  Link del video (YouTube, Vimeo, etc.)
                </label>
                <input
                  type="url"
                  value={businessVideoUrl}
                  onChange={(e) => setBusinessVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-3 py-2.5 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors bg-white font-medium shadow-sm text-sm"
                />
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-3">
                <p className="text-xs text-orange-900">
                  Un video ayuda a los clientes a conocer mejor tu negocio y genera más confianza
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="text-orange-500 hover:text-orange-600 font-bold text-lg transition-colors cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 8: ¡Completado! */}
          {currentStep === 8 && (
            <div className="space-y-6 animate-fade-in text-center py-6">
              <div className="relative">
                {/* Confetti effect background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="text-7xl">🎉</div>
                </div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-bounce-slow">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-3">
                    ¡Has completado todo!
                  </h2>

                  <p className="text-base text-gray-900 font-semibold mb-6">
                    Tu perfil de negocio está listo para empezar
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-left">
                    <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-900 font-medium">Perfil creado exitosamente</p>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-left">
                    <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-900 font-medium">Información completada</p>
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-left">
                    <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-900 font-medium">Listo para comenzar a vender</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600 text-sm">
                  Ahora puedes conectar con miles de clientes potenciales
                </p>
                <p className="text-sm text-gray-900 font-semibold">
                  ¡Bienvenido a Bolivia en un clic! 🚀
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={onComplete}
                  className="text-orange-500 hover:text-orange-600 font-bold text-base transition-colors cursor-pointer inline-block"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Navigation - Solo mostrar en pasos intermedios */}
        {currentStep > 1 && currentStep < 8 && (
          <div className="px-8 py-5 bg-gradient-to-br from-gray-50 to-white border-t-2 border-gray-100">
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-orange-600 font-semibold transition-colors flex items-center gap-2 group"
            >
              <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span>Atrás</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        /* Hide scrollbar */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}