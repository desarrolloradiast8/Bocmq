import { useState } from "react";
import { ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface PromotionalBoxScreenProps {
  onBack: () => void;
  onSave?: (promotionText: string) => void;
  initialValue?: string;
}

export function PromotionalBoxScreen({ onBack, onSave, initialValue = "" }: PromotionalBoxScreenProps) {
  const [promotion, setPromotion] = useState(initialValue);

  const handleSave = () => {
    if (onSave) {
      onSave(promotion);
    }
    alert("Promoción guardada");
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-20 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <h1 className="text-gray-900 font-bold text-sm">Casilla promocional en perfil</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Info Card */}
        <Card className="p-6 rounded-3xl mb-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Trae descuentos y promociones para captar a diario a tus clientes. 
                Puedes cambiarla todos los días si así lo deseas.
              </p>
              <p className="text-sm text-gray-600">
                En nuestro menú encontrarás algunos consejos para tener mayor éxito y 
                conocer la normativa boliviana de la AJ.
              </p>
            </div>
          </div>
        </Card>

        {/* Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Empieza con tu primer descuento o promoción
          </h2>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ingresa tu descuento o promoción
            </label>
            <textarea
              value={promotion}
              onChange={(e) => setPromotion(e.target.value)}
              placeholder="Ejemplo: ¡50% de descuento en todos nuestros productos! Válido hasta fin de mes."
              rows={5}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">
              Máximo 500 caracteres
            </p>
          </div>

          {/* Preview */}
          {promotion && (
            <Card className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600">
              <div className="flex items-center gap-3 mb-2">
                <Tag className="w-5 h-5 text-white" />
                <span className="text-white font-bold">PROMOCIÓN ESPECIAL</span>
              </div>
              <p className="text-white">{promotion}</p>
            </Card>
          )}
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}