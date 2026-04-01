import { useState, useRef } from "react";
import { ArrowLeft, Upload, ShieldCheck, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface VerificationRequestScreenProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function VerificationRequestScreen({ onBack, onSubmit }: VerificationRequestScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    documentType: "",
    documentFile: null as File | null
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, documentFile: file }));
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({ ...prev, documentFile: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = () => {
    alert("Solicitud de verificación enviada. Nos pondremos en contacto contigo pronto.");
    onSubmit();
  };

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
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-600" />
            <h1 className="text-gray-900 font-semibold text-sm">Solicitar verificación</h1>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl mb-4 border-2 border-orange-200">
        <p className="text-gray-700 leading-snug text-center text-xs">
          Los perfiles certificados mostrarán un icono celeste certificado por <strong>Bolivia en un clic</strong>, 
          dando más confianza a los usuarios.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="space-y-5">
          {/* Nombre y Apellido */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Nombre y apellido
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Ingresa tu nombre completo"
              className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none text-gray-900 text-sm"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Teléfono
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+591 XXXXXXXX"
              className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none text-gray-900 text-sm"
            />
          </div>

          {/* Tipo de documento */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Tipo de documento
            </label>
            <select
              value={formData.documentType}
              onChange={(e) => handleChange("documentType", e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none text-gray-900 bg-white text-sm"
            >
              <option value="">Selecciona un tipo</option>
              <option value="carnet">Carnet de identidad</option>
              <option value="impuestos">Declaración de impuestos</option>
              <option value="servicios">Factura de servicios públicos</option>
              <option value="estatus">Estatus de la sociedad</option>
            </select>
          </div>

          {/* Adjuntar foto del documento */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Adjuntar documento
            </label>
            
            {!formData.documentFile ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-all"
              >
                <Upload className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <p className="text-gray-700 font-medium mb-1 text-sm">
                  Haz clic para cargar un archivo
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG o PDF (máx. 10MB)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Upload className="w-7 h-7 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{formData.documentFile.name}</p>
                    <p className="text-xs text-gray-600">
                      {(formData.documentFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            )}
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3">
            <p className="text-xs text-yellow-800">
              <strong>Nota:</strong> Asegúrate de que el documento sea legible. El proceso toma de 2 a 5 días hábiles.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-sm shadow-md"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}