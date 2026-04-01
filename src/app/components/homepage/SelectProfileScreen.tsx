import { Star, MapPin } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface Profile {
  id: number;
  name: string;
  photo: string;
  rating: number;
  category: string;
  city: string;
}

interface SelectProfileScreenProps {
  onBack: () => void;
  onSelectProfile: (profileId: number) => void;
}

const mockProfiles: Profile[] = [
  {
    id: 1,
    name: "Mi Negocio Principal",
    photo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0b3JlfGVufDF8fHx8MTc2ODkxNTk0NXww&ixlib=rb-4.1.0&q=80&w=400",
    rating: 4.8,
    category: "Emprendimientos",
    city: "La Paz",
  },
  {
    id: 2,
    name: "Tienda Online",
    photo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wJTIwc3RvcmV8ZW58MXx8fHwxNzY4OTE1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
    rating: 4.5,
    category: "Emprendimientos",
    city: "Santa Cruz",
  },
];

export function SelectProfileScreen({ onBack, onSelectProfile }: SelectProfileScreenProps) {
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
          <h1 className="text-base font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">Elige tu perfil</h1>
          <div></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-3">
        <div className="text-left">
          <h2 className="text-base font-bold text-gray-900">Tus perfiles</h2>
          <p className="text-xs text-gray-600 mt-0.5">
            Elige un perfil para crear un anuncio
          </p>
          <hr className="mt-3 border-gray-200" />
        </div>

        {/* Profiles List - Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mockProfiles.map((profile) => (
            <Card
              key={profile.id}
              onClick={() => onSelectProfile(profile.id)}
              className="p-4 rounded-2xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {/* Profile Photo */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                {/* Profile Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-base text-gray-900 mb-1.5">
                    {profile.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center"
                      >
                        <Star className="w-2.5 h-2.5 fill-white text-white" />
                      </div>
                    ))}
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                      {profile.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {profile.city}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}