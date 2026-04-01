import { useState } from "react";
import { ArrowLeft, Camera, MapPin, Clock } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface EditBusinessInfoScreenProps {
  onBack: () => void;
  onSelectCategory: () => void;
  onEditAddress: () => void;
  onEditHours: () => void;
}

export function EditBusinessInfoScreen({ 
  onBack, 
  onSelectCategory, 
  onEditAddress,
  onEditHours 
}: EditBusinessInfoScreenProps) {
  const [logo, setLogo] = useState("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop");
  const [businessName, setBusinessName] = useState("Mi Negocio Principal");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Tecnología");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("Santa Cruz, Bolivia");
  const [hours, setHours] = useState("Lunes a Viernes, 09:00 - 18:00");

  const handleSave = () => {
    alert("Información guardada");
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
          <h1 className="text-gray-900 font-bold text-sm">Editar información</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 object-cover rounded-3xl"
            />
            <button
              onClick={() => alert("Cambiar foto")}
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            >
              <Camera className="w-6 h-6 text-white" />
            </button>
          </div>
          <button
            onClick={() => alert("Cambiar foto")}
            className="mt-3 text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            Cambiar foto de perfil o logo
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Business Name */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Nombre de tu negocio o servicio
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Ingresa el nombre"
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Describe tu negocio o servicio
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Cuéntanos sobre tu negocio..."
              rows={4}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Elige una categoría según tu negocio o servicio
            </label>
            <Card 
              onClick={onSelectCategory}
              className="p-4 rounded-2xl hover:bg-orange-50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">{category || "Seleccionar categoría"}</span>
                <span className="text-gray-400">→</span>
              </div>
            </Card>
          </div>

          {/* Phone and Website - Same Line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Número de teléfono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+591 XXXXXXXX"
                className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Sitio web <span className="text-gray-500 font-normal">(opcional)</span>
              </label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://www.ejemplo.com"
                className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Ubicación
            </label>
            <Card 
              onClick={onEditAddress}
              className="p-4 rounded-2xl hover:bg-orange-50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="text-gray-900 flex-1">{location || "Agregar ubicación"}</span>
                <span className="text-gray-400">→</span>
              </div>
            </Card>
          </div>

          {/* Hours */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Horarios de atención
            </label>
            <Card 
              onClick={onEditHours}
              className="p-4 rounded-2xl hover:bg-orange-50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-gray-900 flex-1">{hours || "Agregar horarios"}</span>
                <span className="text-gray-400">→</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full mt-8 py-6 text-center text-orange-600 hover:text-orange-700 font-bold text-lg transition-colors"
        >
          Guardar
        </button>
      </div>
    </div>
  );
}