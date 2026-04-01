import { useState } from "react";
import { ArrowLeft, Gift, CreditCard, X } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

interface PaymentConfigScreenProps {
  onBack: () => void;
  selectedPlan: "premium" | "super-business";
}

export function PaymentConfigScreen({ onBack, selectedPlan }: PaymentConfigScreenProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wantsFiscalReceipt, setWantsFiscalReceipt] = useState<boolean>(false);
  const [hasFiscalData, setHasFiscalData] = useState<boolean>(false); // Nuevo estado para saber si se guardaron datos fiscales
  const [businessName, setBusinessName] = useState("");
  const [nit, setNit] = useState("");
  const [showGiftCodeForm, setShowGiftCodeForm] = useState(false);
  const [giftCode, setGiftCode] = useState("");
  const [showGiftCodeModal, setShowGiftCodeModal] = useState(false);

  const planDetails = {
    premium: {
      name: "Premium Anual (18 meses)",
      price: 599,
      profiles: 4
    },
    "super-business": {
      name: "Súper Business Anual (18 meses)",
      price: 999,
      profiles: 11
    }
  };

  const currentPlan = planDetails[selectedPlan];

  // Gift code screen
  if (showGiftCodeForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => setShowGiftCodeForm(false)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-white font-bold text-lg">Código de regalo</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          <Card className="p-6 md:p-8 rounded-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-5">Configura tu código de regalo</h2>

            <div className="space-y-5">
              <div>
                <label className="block mb-2 font-medium text-gray-900 text-sm">
                  Ingresa tu código
                </label>
                <Input
                  placeholder="Código de regalo"
                  value={giftCode}
                  onChange={(e) => setGiftCode(e.target.value)}
                  className="rounded-xl p-3"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-xs md:text-sm text-gray-600 mb-2">Plan seleccionado:</p>
                <p className="font-bold text-base md:text-lg">{currentPlan.name}</p>
                <p className="text-xl md:text-2xl font-bold text-orange-600">Bs {currentPlan.price}</p>
              </div>

              <Button
                onClick={() => {
                  setShowGiftCodeForm(false);
                  // Redirect to payment gateway
                  alert("Redirigiendo a pasarela de pago...");
                }}
                className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold"
              >
                Canjear código de regalo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Main payment config screen
  return (
    <div className="pb-8">
      {/* Fiscal Receipt Modal */}
      {wantsFiscalReceipt && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative">
            {/* Close button */}
            <button
              onClick={() => setWantsFiscalReceipt(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h3 className="text-xl font-bold mb-5 text-gray-900">
              Datos para facturación
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-900 text-sm">
                  Nombre / Razón Social
                </label>
                <Input
                  placeholder="Ingrese nombre o razón social"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="rounded-xl p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-900 text-sm">
                  CI / NIT
                </label>
                <Input
                  placeholder="Ingrese CI o NIT"
                  value={nit}
                  onChange={(e) => setNit(e.target.value)}
                  className="rounded-xl p-3"
                />
              </div>

              <Button
                onClick={() => {
                  // Save fiscal data logic here
                  if (businessName.trim() && nit.trim()) {
                    setHasFiscalData(true);
                  }
                  setWantsFiscalReceipt(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold"
              >
                Guardar datos
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Gift Code Modal */}
      {showGiftCodeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative">
            {/* Close button */}
            <button
              onClick={() => setShowGiftCodeModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h3 className="text-xl font-bold mb-5 text-gray-900">
              Código de regalo
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-900 text-sm">
                  Ingresa tu código
                </label>
                <Input
                  placeholder="Código de regalo"
                  value={giftCode}
                  onChange={(e) => setGiftCode(e.target.value)}
                  className="rounded-xl p-3"
                />
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border-2 border-orange-200">
                <p className="text-xs md:text-sm text-gray-600 mb-2">Plan seleccionado:</p>
                <p className="font-bold text-base md:text-lg">{currentPlan.name}</p>
                <p className="text-xl md:text-2xl font-bold text-orange-600">Bs {currentPlan.price}</p>
              </div>

              <Button
                onClick={() => {
                  setShowGiftCodeModal(false);
                  // Redirect to payment gateway
                  alert("Redirigiendo a pasarela de pago...");
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold"
              >
                Canjear código de regalo
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header - Compacto y Blanco */}
      <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-semibold text-sm">Configurar pago</h1>
        </div>
      </div>

      <Card className="p-5 rounded-2xl">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-orange-600" />
          <h2 className="text-base font-bold">
            Configura tus datos para pago con tarjeta de crédito o débito
          </h2>
        </div>

        <p className="text-xs text-orange-800 mb-4 bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl border-2 border-orange-200">
          Tu membresía comienza en cuanto se realiza el pago
        </p>

        <div className="space-y-4">
          <h3 className="font-bold text-sm">Ingresa tus datos</h3>

          <div>
            <label className="block mb-2 font-medium text-gray-900 text-xs">
              Correo electrónico
            </label>
            <Input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl p-2.5 text-sm"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-900 text-xs">
              Teléfono
            </label>
            <Input
              type="tel"
              placeholder="+591 12345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl p-2.5 text-sm"
            />
          </div>

          {/* Fiscal Receipt Question */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border-2 border-orange-200">
            <label className="block mb-3 font-medium text-gray-900 text-sm md:text-base">
              ¿Deseas factura con crédito fiscal? (Opcional)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setWantsFiscalReceipt(true)}
                className={`p-2 rounded-xl font-semibold text-xs transition-all ${
                  hasFiscalData
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-2 border-orange-600"
                    : "bg-white border-2 border-orange-300 text-orange-600 hover:border-orange-400"
                }`}
              >
                Sí, quiero factura
              </button>
              <button
                onClick={() => {
                  setWantsFiscalReceipt(false);
                  setHasFiscalData(false);
                  setBusinessName("");
                  setNit("");
                }}
                className={`p-2 rounded-xl font-semibold text-xs transition-all ${
                  !hasFiscalData
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-2 border-orange-600"
                    : "bg-white border-2 border-orange-300 text-orange-600 hover:border-orange-400"
                }`}
              >
                No necesito factura
              </button>
            </div>
          </div>

          {/* Plan Summary */}
          <div className="bg-white p-3 rounded-xl border border-gray-200">
            <h3 className="font-bold text-sm mb-2">Plan seleccionado</h3>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Plan:</span>
                <span className="font-semibold">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Perfiles:</span>
                <span className="font-semibold">{currentPlan.profiles} sucursales digitales</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-orange-600">Bs {currentPlan.price}</span>
              </div>
            </div>
          </div>

          {/* Gift Code Button */}
          <button
            onClick={() => setShowGiftCodeModal(true)}
            className="w-full p-3 md:p-4 rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-2 text-orange-600 font-semibold text-sm md:text-base"
          >
            <Gift className="w-4 h-4 md:w-5 md:h-5" />
            Código de regalo
          </button>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button
              onClick={() => {
                alert("Redirigiendo a pasarela de pago...");
              }}
              className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-sm"
            >
              Continuar al pago
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}