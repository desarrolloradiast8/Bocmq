import { useState } from "react";
import { ArrowLeft, Check, Rocket, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface PricingPlansScreenProps {
  onBack: () => void;
  onSelectPlan: (plan: "premium" | "super-business") => void;
}

export function PricingPlansScreen({ onBack, onSelectPlan }: PricingPlansScreenProps) {
  const [selectedPlan, setSelectedPlan] = useState<"premium" | "super-business" | null>(null);

  return (
    <div className="pb-8">
      {/* Header - Compacto y Blanco */}
      <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-semibold text-sm">Planes Premium</h1>
        </div>
      </div>

      <div className="space-y-4">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Elige el plan perfecto para ti
          </h2>
          <p className="text-sm text-gray-600">Impulsa tu negocio con nuestros planes diseñados para el éxito</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-3 md:gap-4">{/* Premium Plan */}
          <Card className="w-full rounded-2xl overflow-hidden border border-orange-300 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-4 md:p-5 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold mb-0.5">Premium Anual</h2>
                    <p className="text-xs md:text-sm opacity-90">18 meses de beneficios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 space-y-2 md:space-y-3">
              {/* Price Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-xl border border-orange-200">
                <p className="text-center text-gray-700 mb-1 font-medium text-xs">12 meses + 6 meses gratis</p>
                <p className="text-center text-2xl md:text-3xl font-bold text-orange-600">Bs 599</p>
                <p className="text-center text-gray-600 text-xs">Inversión anual</p>
              </div>

              {/* Sucursales Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl border border-blue-200">
                <p className="text-center text-base md:text-lg font-bold text-blue-700">4 sucursales digitales</p>
                <p className="text-center text-xs text-blue-600">Expanda tu presencia</p>
              </div>

              {/* Features Card - Simplified */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Perfiles</span>
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Ciudades visibles</span>
                  <span className="text-xl font-bold text-orange-600 ml-2">4</span>
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Categorías visibles</span>
                  <span className="text-xl font-bold text-orange-600 ml-2">4</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Artículos en tienda</span>
                  <span className="text-sm font-bold text-green-600">Ilimitado</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Compra por WhatsApp</span>
                  <Check className="w-4 h-4 text-green-600" />
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Posteos en Feed</span>
                  <Check className="w-4 h-4 text-green-600 ml-2" />
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Descuentos en Marketplace</span>
                  <Check className="w-4 h-4 text-green-600 ml-2" />
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Publicación de eventos</span>
                  <Check className="w-4 h-4 text-green-600" />
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Redes sociales</span>
                  <div className="flex gap-0.5 ml-2">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                      <Instagram className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                      <Twitter className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-gray-700 font-medium flex-1">Métricas de usuarios</span>
                  <Check className="w-4 h-4 text-green-600 ml-2" />
                </div>
              </div>

              <Button
                onClick={() => onSelectPlan("premium")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-sm shadow-lg"
              >
                Empieza ya
              </Button>
            </div>
          </Card>

          {/* Super Business Plan */}
          <Card className="w-full rounded-2xl overflow-hidden border border-red-400 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-4 md:p-5 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold mb-0.5">Súper Business Anual</h2>
                    <p className="text-xs md:text-sm opacity-90">18 meses de beneficios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 space-y-2 md:space-y-3">
              {/* Price Card */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-xl border border-red-200">
                <p className="text-center text-gray-700 mb-1 font-medium text-xs">12 meses + 6 meses gratis</p>
                <p className="text-center text-2xl md:text-3xl font-bold text-red-600">Bs 999</p>
                <p className="text-center text-gray-600 text-xs">Inversión anual</p>
              </div>

              {/* Sucursales Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-xl border border-purple-200">
                <p className="text-center text-base md:text-lg font-bold text-purple-700">11 sucursales digitales</p>
                <p className="text-center text-xs text-purple-600">Presencia nacional completa</p>
              </div>

              {/* Features Card - Simplified */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Perfiles</span>
                  <span className="text-xl font-bold text-red-600">11</span>
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Ciudades visibles</span>
                  <span className="text-xl font-bold text-red-600 ml-2">11</span>
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Categorías visibles</span>
                  <span className="text-xl font-bold text-red-600 ml-2">11</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Artículos en tienda</span>
                  <span className="text-sm font-bold text-green-600">Ilimitado</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Compra por WhatsApp</span>
                  <Check className="w-4 h-4 text-green-600" />
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Posteos VIP en Feed</span>
                  <Check className="w-4 h-4 text-green-600 ml-2" />
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium flex-1">Descuentos en Marketplace</span>
                  <Check className="w-4 h-4 text-green-600 ml-2" />
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Publicación de eventos</span>
                  <Check className="w-4 h-4 text-green-600" />
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Redes sociales</span>
                  <div className="flex gap-0.5 ml-2">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
                      <Instagram className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                      <Twitter className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-gray-700 font-medium flex-1">Métricas de usuarios</span>
                  <Check className="w-4 h-4 text-green-600 ml-2" />
                </div>
              </div>

              <Button
                onClick={() => onSelectPlan("super-business")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold text-sm shadow-lg"
              >
                Empieza ya
              </Button>
            </div>
          </Card>
        </div>

        {/* Info Note */}
        <div className="mt-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-xl p-4 shadow-sm">
            <p className="text-blue-900 text-center text-xs md:text-sm leading-relaxed">
              <strong>💡 Información importante:</strong> Todos nuestros planes incluyen 18 meses de beneficios (12 meses + 6 meses gratis). ¡Aprovecha esta increíble oferta!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}