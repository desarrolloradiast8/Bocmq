import { useState } from "react";
import { ArrowLeft, Plus, X } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface GalleryPhotosScreenProps {
  onBack: () => void;
}

export function GalleryPhotosScreen({ onBack }: GalleryPhotosScreenProps) {
  const [photos, setPhotos] = useState<string[]>([]);

  const addPhoto = () => {
    const newPhoto = `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=400&h=400&fit=crop`;
    setPhotos([...photos, newPhoto]);
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    alert("Fotos guardadas");
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
          <h1 className="text-gray-900 font-bold text-sm">Galería y fotos</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            ¿Estás listo para agregar tus fotos de portada?
          </h2>
          <p className="text-sm text-gray-600">
            Coloca fotos que representen de qué trata tu negocio.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative group">
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="w-full h-40 object-cover rounded-2xl"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-2 right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}

          {/* Add Photo Button */}
          <button
            onClick={addPhoto}
            className="h-40 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-orange-500 hover:bg-orange-50 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-600 font-medium">Agregar foto</span>
          </button>
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="text-orange-600 hover:text-orange-700 font-semibold text-base"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}