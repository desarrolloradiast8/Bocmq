import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface ExportHelpScreenProps {
  onBack: () => void;
}

export function ExportHelpScreen({ onBack }: ExportHelpScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    idCard: "",
    email: "",
    business: "",
    address: "",
    businessTime: "",
    branches: "",
    website: "",
    facebook: "",
    instagram: "",
    familiarWithExport: "",
    wantToExport: "",
    exportDestination: "",
    needsToExport: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    alert("Formulario enviado. Nos pondremos en contacto contigo pronto.");
    onBack();
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-bold text-lg">Ayuda para exportar</h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-2xl mb-4 border-2 border-orange-200">
        <p className="text-sm text-gray-700 leading-relaxed">
          Llena el siguiente formulario y se comunicará contigo una persona que te asesorará 
          y guiará para que puedas hacerlo.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-3xl shadow-sm space-y-5">
        {/* Nombre y Apellido */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre y apellido
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Ingresa tu nombre completo"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Ciudad en la que vives */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ciudad en la que vives
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Ingresa tu ciudad"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+591 XXXXXXXX"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Carnet de identidad */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Carnet de identidad
          </label>
          <input
            type="text"
            value={formData.idCard}
            onChange={(e) => handleChange("idCard", e.target.value)}
            placeholder="Ingresa tu número de carnet"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Correo electrónico */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="correo@ejemplo.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Empresa o servicios que brindas */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Empresa o servicios que brindas
          </label>
          <input
            type="text"
            value={formData.business}
            onChange={(e) => handleChange("business", e.target.value)}
            placeholder="Describe tu empresa o servicios"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Dirección
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Ingresa tu dirección"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* ¿Cuánto tiempo que abriste tu empresa? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ¿Cuánto tiempo que abriste tu empresa o que ofreces los servicios que brindas?
          </label>
          <input
            type="text"
            value={formData.businessTime}
            onChange={(e) => handleChange("businessTime", e.target.value)}
            placeholder="Ejemplo: 2 años, 6 meses"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* ¿Cuentas con sucursales? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ¿Cuentas con sucursales? Si tu respuesta es positiva, menciona cuántas y dónde están
          </label>
          <textarea
            value={formData.branches}
            onChange={(e) => handleChange("branches", e.target.value)}
            placeholder="Ejemplo: Sí, 3 sucursales en Santa Cruz, La Paz y Cochabamba"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
          />
        </div>

        {/* Página web */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Página web
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleChange("website", e.target.value)}
            placeholder="https://www.ejemplo.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Nombre de la fanpage de Facebook */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre de la fanpage de Facebook
          </label>
          <input
            type="text"
            value={formData.facebook}
            onChange={(e) => handleChange("facebook", e.target.value)}
            placeholder="Ejemplo: MiNegocioBolivia"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* Nombre de la cuenta de Instagram */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre de la cuenta de Instagram
          </label>
          <input
            type="text"
            value={formData.instagram}
            onChange={(e) => handleChange("instagram", e.target.value)}
            placeholder="Ejemplo: @minegociobolivia"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* ¿Estás familiarizado con la exportación? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ¿Estás familiarizado con la exportación?
          </label>
          <textarea
            value={formData.familiarWithExport}
            onChange={(e) => handleChange("familiarWithExport", e.target.value)}
            placeholder="Describe tu experiencia con exportación"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
          />
        </div>

        {/* ¿Te gustaría exportar tus productos o servicios? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ¿Te gustaría exportar tus productos o servicios?
          </label>
          <textarea
            value={formData.wantToExport}
            onChange={(e) => handleChange("wantToExport", e.target.value)}
            placeholder="Explica tu interés en exportar"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
          />
        </div>

        {/* Si los exportaras, ¿a dónde te gustaría hacerlo? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Si los exportaras, ¿a dónde te gustaría hacerlo?
          </label>
          <textarea
            value={formData.exportDestination}
            onChange={(e) => handleChange("exportDestination", e.target.value)}
            placeholder="Ejemplo: Argentina, Brasil, Perú, etc."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
          />
        </div>

        {/* ¿Qué necesitas para poder exportar tus productos o servicios? */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ¿Qué necesitas para poder exportar tus productos o servicios?
          </label>
          <textarea
            value={formData.needsToExport}
            onChange={(e) => handleChange("needsToExport", e.target.value)}
            placeholder="Describe qué necesitas: asesoría, financiamiento, contactos, etc."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 text-center text-orange-600 hover:text-orange-700 font-bold text-lg mt-6 transition-colors"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}