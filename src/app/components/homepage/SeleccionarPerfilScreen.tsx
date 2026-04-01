import { ArrowLeft, MapPin, Briefcase } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface SeleccionarPerfilScreenProps {
  onBack: () => void;
  onSelectProfile: () => void;
}

// Mock data del perfil del usuario
const userProfile = {
  name: "Juan Pérez",
  photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  category: "Emprendimientos",
  location: "Santa Cruz, Bolivia"
};

export function SeleccionarPerfilScreen({ onBack, onSelectProfile }: SeleccionarPerfilScreenProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-base font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Elige un perfil...
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {/* Title Section */}
        <div className="space-y-1">
          <h2 className="text-base font-bold text-gray-900">
            Tus perfiles
          </h2>
          <p className="text-xs text-gray-600">
            Elige un perfil para crear un producto / servicio...
          </p>
        </div>

        {/* Profile Card */}
        <Card
          onClick={onSelectProfile}
          className="rounded-xl overflow-hidden border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="p-3">
            <div className="flex items-start gap-2.5">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img
                  src={userProfile.photo}
                  alt={userProfile.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 space-y-1.5">
                {/* Name */}
                <h3 className="text-sm font-bold text-gray-900">
                  {userProfile.name}
                </h3>

                {/* Category */}
                <div className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-orange-600" />
                  <span className="text-xs font-medium text-gray-700">
                    {userProfile.category}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-xs text-gray-600">
                    {userProfile.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Helper Text */}
        <p className="text-center text-xs text-gray-500 pt-2">
          Selecciona tu perfil para continuar con la publicación
        </p>
      </div>
    </div>
  );
}