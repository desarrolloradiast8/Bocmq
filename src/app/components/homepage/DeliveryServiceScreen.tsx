import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface DeliveryServiceScreenProps {
  onBack: () => void;
}

export function DeliveryServiceScreen({ onBack }: DeliveryServiceScreenProps) {
  const [hasDelivery, setHasDelivery] = useState(false);

  const handleSave = () => {
    alert(`Servicio a domicilio: ${hasDelivery ? "Sí" : "No"}`);
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-bold text-xl">Servicio a domicilio</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-gray-700 mb-6 text-lg">
          Actualizar tu disponibilidad para brindar servicio a domicilio.
        </p>

        {/* Toggle Button */}
        <div className="bg-white p-6 rounded-3xl shadow-sm mb-6">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-900 font-semibold text-lg">
              Cuento con servicio y/o entrega a domicilio
            </span>
            <div className="relative">
              <input
                type="checkbox"
                checked={hasDelivery}
                onChange={(e) => setHasDelivery(e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => setHasDelivery(!hasDelivery)}
                className={`w-14 h-8 rounded-full transition-colors ${
                  hasDelivery ? "bg-gradient-to-r from-orange-500 to-red-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform mt-1 ${
                    hasDelivery ? "translate-x-7 ml-1" : "translate-x-1"
                  }`}
                />
              </div>
            </div>
          </label>
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-lg"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
