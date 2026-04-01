import { useState } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface EditAddressScreenProps {
  onBack: () => void;
  onSave: (address: any) => void;
}

export function EditAddressScreen({ onBack, onSave }: EditAddressScreenProps) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [mapLocation, setMapLocation] = useState("");

  const handleSave = () => {
    onSave({ address, city, mapLocation });
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
          <h1 className="text-white font-bold text-xl">Registra tu dirección</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Card className="p-6 rounded-3xl mb-6">
          <p className="text-gray-700 leading-relaxed">
            Por lo general las personas buscan negocios que están cerca o en su ciudad. 
            Puedes agregar solo la ciudad si no tienes una ubicación física.
          </p>
        </Card>

        {/* Address Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Dirección <span className="text-gray-500 font-normal">(opcional)</span>
            </label>
            <input
              type="text"
              placeholder="Calle, número, barrio, etc."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Ciudad
            </label>
            <input
              type="text"
              placeholder="Ubicación física o área de servicio"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Agregar ubicación en el mapa <span className="text-gray-500 font-normal">(opcional)</span>
            </label>
            <Card 
              onClick={() => alert("Abrir Google Maps")}
              className="p-4 rounded-2xl hover:bg-orange-50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 text-orange-600">
                <MapPin className="w-6 h-6" />
                <span className="font-medium">Seleccionar ubicación en el mapa</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full mt-6 py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-lg"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
