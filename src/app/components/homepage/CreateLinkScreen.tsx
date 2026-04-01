import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface CreateLinkScreenProps {
  onBack: () => void;
  profileName: string;
  profilePhoto: string;
  onPublish: (link: { comment: string; url: string }) => void;
}

export function CreateLinkScreen({ 
  onBack, 
  profileName, 
  profilePhoto,
  onPublish 
}: CreateLinkScreenProps) {
  const [url, setUrl] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePublish = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      onPublish({
        comment: "",
        url,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Volver</span>
          </button>
          <h1 className="text-base font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">Crear enlace</h1>
          
          <button
            onClick={handlePublish}
            className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
          >
            Publicar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Profile Info */}
        <Card className="p-6 rounded-3xl border-2 border-gray-100">
          <div className="flex items-center gap-4">
            <img
              src={profilePhoto}
              alt={profileName}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">{profileName}</h3>
              <p className="text-sm text-gray-600">Tu perfil</p>
            </div>
          </div>
        </Card>

        {/* Comment and Link */}
        <Card className="p-6 rounded-3xl border-2 border-gray-100">
          {/* URL */}
          <div>
            <label className="block mb-3">
              <span className="font-semibold text-gray-900">
                Agrega un enlace a artículos, noticias o videos
              </span>
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://ejemplo.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none"
            />
            <p className="text-sm text-gray-600 mt-2">
              ¿A qué sitio web quieres que redirijan las personas cuando hagan clic en el enlace?
            </p>
          </div>
        </Card>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Enlace publicado!</h3>
            <p className="text-gray-600 mb-6">Tu enlace ha sido publicado exitosamente.</p>
          </div>
        </div>
      )}
    </div>
  );
}