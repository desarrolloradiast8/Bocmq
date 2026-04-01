import { ArrowLeft, Check, Rocket, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface ChangeAccountScreenProps {
  onBack: () => void;
  onSelectPlan: (plan: "premium" | "super-business") => void;
}

export function ChangeAccountScreen({ onBack, onSelectPlan }: ChangeAccountScreenProps) {
  return (
    <div className="pb-8">
      {/* Header - Compacto */}
      <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-semibold text-sm">Cambiar de cuenta</h1>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Elige el plan perfecto para ti</h2>
        <p className="text-base text-gray-600">Impulsa tu negocio con nuestros planes diseñados para el éxito</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Premium Plan */}
        <Card className="rounded-2xl overflow-hidden border-2 border-orange-300 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 text-white relative overflow-hidden">
            {/* Rocket Icon */}
            <div className="absolute top-2 right-2 opacity-20">
              <Rocket className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Premium Anual</h2>
                  <p className="text-xs opacity-90">18 meses de beneficios</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl border-2 border-orange-200 shadow-sm">
              <p className="text-center text-gray-700 text-xs font-medium">12 meses + 6 meses gratis</p>
              <p className="text-center text-3xl font-bold text-orange-600">Bs 599</p>
              <p className="text-center text-gray-600 text-xs mt-1">Inversión anual</p>
            </div>

            {/* Sucursales Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl border-2 border-blue-200 shadow-sm">
              <p className="text-center text-lg font-bold text-blue-700">4 sucursales digitales</p>
              <p className="text-center text-xs text-blue-600 mt-1">Expande tu presencia</p>
            </div>

            {/* Features Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-sm font-medium">Perfiles</span>
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Número de ciudades donde podrás registrar tu perfil o donde podrás ser visible
                </span>
                <span className="text-xl font-bold text-orange-600 ml-2">4</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Categorías y subcategorías donde tu perfil será visible
                </span>
                <span className="text-xl font-bold text-orange-600 ml-2">4</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Número de artículos visibles en tu tienda
                </span>
                <span className="text-sm font-bold text-green-600 ml-2">Ilimitado</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Recepción de compra por WhatsApp</span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Publicación ilimitada de posteos en sección de noticias (Feed)
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Publicación ilimitada de descuentos en Marketplace
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Publicación de eventos</span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Enlaces a redes sociales</span>
                <div className="flex gap-1 ml-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                    <Twitter className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center">
                    <Linkedin className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <Youtube className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">Enlaces especiales</span>
                <div className="flex flex-col gap-0.5 text-[10px] text-right ml-2">
                  <span className="text-orange-600 font-medium">Página web</span>
                  <span className="text-orange-600 font-medium">E-commerce</span>
                  <span className="text-orange-600 font-medium">Catálogo</span>
                  <span className="text-orange-600 font-medium">Página de ofertas</span>
                  <span className="text-orange-600 font-medium">Descarga de app</span>
                </div>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Acceso a formulario de propuestas de negocio
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Recepción de recomendaciones</span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              </div>

              <div className="flex items-start justify-between">
                <span className="text-gray-700 text-xs flex-1">
                  Métricas del comportamiento de los usuarios en tu perfil
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>
            </div>

            <Button
              onClick={() => onSelectPlan("premium")}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
            >
              Seleccionar Premium
            </Button>
          </div>
        </Card>

        {/* Super Business Plan */}
        <Card className="rounded-2xl overflow-hidden border-2 border-red-400 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 text-white relative overflow-hidden">
            {/* Rocket Icon */}
            <div className="absolute top-2 right-2 opacity-20">
              <Rocket className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Súper Business Anual</h2>
                  <p className="text-xs opacity-90">18 meses de beneficios</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-xl border-2 border-red-200 shadow-sm">
              <p className="text-center text-gray-700 text-xs font-medium">12 meses + 6 meses gratis</p>
              <p className="text-center text-3xl font-bold text-red-600">Bs 999</p>
              <p className="text-center text-gray-600 text-xs mt-1">Inversión anual</p>
            </div>

            {/* Sucursales Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-xl border-2 border-purple-200 shadow-sm">
              <p className="text-center text-lg font-bold text-purple-700">11 sucursales digitales</p>
              <p className="text-center text-xs text-purple-600 mt-1">Presencia nacional completa</p>
            </div>

            {/* Features Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-sm font-medium">Perfiles</span>
                <span className="text-xl font-bold text-red-600">11</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Número de ciudades donde podrás registrar tu perfil o donde podrás ser visible
                </span>
                <span className="text-xl font-bold text-red-600 ml-2">11</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Categorías y subcategorías donde tu perfil será visible
                </span>
                <span className="text-xl font-bold text-red-600 ml-2">11</span>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Número de artículos visibles en tu tienda
                </span>
                <span className="text-sm font-bold text-green-600 ml-2">Ilimitado</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Recepción de compra por WhatsApp</span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Publicación ilimitada de posteos en sección de noticias VIP (Feed)
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Publicación ilimitada de descuentos en Marketplace
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Publicación de eventos</span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Enlaces a redes sociales</span>
                <div className="flex gap-1 ml-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                    <Twitter className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center">
                    <Linkedin className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <Youtube className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">Enlaces especiales</span>
                <div className="flex flex-col gap-0.5 text-[10px] text-right ml-2">
                  <span className="text-red-600 font-medium">Página web</span>
                  <span className="text-red-600 font-medium">E-commerce</span>
                  <span className="text-red-600 font-medium">Catálogo</span>
                  <span className="text-red-600 font-medium">Página de ofertas</span>
                  <span className="text-red-600 font-medium">Descarga de app</span>
                </div>
              </div>

              <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs flex-1">
                  Acceso a formulario de propuestas de negocio
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-700 text-xs">Recepción de recomendaciones</span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              </div>

              <div className="flex items-start justify-between">
                <span className="text-gray-700 text-xs flex-1">
                  Métricas del comportamiento de los usuarios en tu perfil
                </span>
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>
            </div>

            <Button
              onClick={() => onSelectPlan("super-business")}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
            >
              Seleccionar Super Business
            </Button>
          </div>
        </Card>
      </div>

      {/* Info Note */}
      <div className="mt-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-5 shadow-lg">
          <p className="text-blue-900 text-center text-sm leading-relaxed">
            <strong>💡 Nota importante:</strong> Al cambiar de plan, tus beneficios actuales se mantendrán hasta que realices el pago del nuevo plan seleccionado.
          </p>
        </div>
      </div>
    </div>
  );
}