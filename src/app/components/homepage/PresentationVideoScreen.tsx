import { useState } from "react";
import { ArrowLeft, Youtube } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface PresentationVideoScreenProps {
  onBack: () => void;
}

export function PresentationVideoScreen({ onBack }: PresentationVideoScreenProps) {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const handleSave = () => {
    alert("Video de presentación guardado");
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
          <h1 className="text-gray-900 font-bold text-sm">Video de presentación</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Ayuda a tus usuarios a comprender mejor lo que ofreces.
          </p>
          <p className="text-gray-900 font-semibold">
            ¿A qué video de YouTube quieres que se dirijan las personas cuando dan clic en este botón?
          </p>
        </div>

        {/* YouTube URL Input */}
        <div className="mb-6">
          <div className="relative">
            <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-red-600" />
            <input
              type="url"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Preview if URL is valid */}
        {youtubeUrl && (
          <div className="mb-6 bg-white p-4 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Vista previa:</p>
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
              <Youtube className="w-16 h-16 text-white opacity-50" />
            </div>
          </div>
        )}

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