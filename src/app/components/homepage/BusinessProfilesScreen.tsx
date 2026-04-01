import { useState } from "react";
import { ArrowLeft, AlertCircle, Plus, MoreVertical, MapPin, Star } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { EditBusinessScreen } from "@/app/components/homepage/EditBusinessScreen";
import { EditBusinessInfoScreen } from "@/app/components/homepage/EditBusinessInfoScreen";
import { SelectCategoryScreen } from "@/app/components/homepage/SelectCategoryScreen";
import { EditAddressScreen } from "@/app/components/homepage/EditAddressScreen";
import { EditHoursScreen } from "@/app/components/homepage/EditHoursScreen";
import { GalleryPhotosScreen } from "@/app/components/homepage/GalleryPhotosScreen";
import { ContactSocialScreen } from "@/app/components/homepage/ContactSocialScreen";
import { SpecialLinksScreen } from "@/app/components/homepage/SpecialLinksScreen";
import { PresentationVideoScreen } from "@/app/components/homepage/PresentationVideoScreen";
import { PromotionalBoxScreen } from "@/app/components/homepage/PromotionalBoxScreen";

interface BusinessProfilesScreenProps {
  onBack: () => void;
  onChangePlan: () => void;
  onViewProfile: (profileId: number) => void;
}

type EditScreen = 
  | "list" 
  | "edit-business" 
  | "edit-info" 
  | "select-category" 
  | "edit-address" 
  | "edit-hours"
  | "gallery-photos"
  | "contact-social"
  | "special-links"
  | "presentation-video"
  | "promotional-box";

export function BusinessProfilesScreen({ onBack, onChangePlan, onViewProfile }: BusinessProfilesScreenProps) {
  const [showLimitWarning, setShowLimitWarning] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState<number | null>(null);
  const [currentEditScreen, setCurrentEditScreen] = useState<EditScreen>("list");
  const [editingProfileId, setEditingProfileId] = useState<number | null>(null);

  // Mock data for user's business profiles
  const userProfiles = [
    {
      id: 1,
      name: "Mi Negocio Principal",
      category: "Tecnología",
      city: "Santa Cruz",
      rating: 4.8,
      reviewCount: 124,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop"
    }
  ];

  // Render Edit Business Screen
  if (currentEditScreen === "edit-business") {
    return (
      <EditBusinessScreen
        onBack={() => setCurrentEditScreen("list")}
        onEditInfo={() => setCurrentEditScreen("edit-info")}
        onGalleryPhotos={() => setCurrentEditScreen("gallery-photos")}
        onContactSocial={() => setCurrentEditScreen("contact-social")}
        onSpecialLinks={() => setCurrentEditScreen("special-links")}
        onPresentationVideo={() => setCurrentEditScreen("presentation-video")}
        onBusinessProposals={onChangePlan}
        onPromotionalBox={() => setCurrentEditScreen("promotional-box")}
      />
    );
  }

  // Render Edit Business Info Screen
  if (currentEditScreen === "edit-info") {
    return (
      <EditBusinessInfoScreen
        onBack={() => setCurrentEditScreen("edit-business")}
        onSelectCategory={() => setCurrentEditScreen("select-category")}
        onEditAddress={() => setCurrentEditScreen("edit-address")}
        onEditHours={() => setCurrentEditScreen("edit-hours")}
        onGalleryPhotos={() => setCurrentEditScreen("gallery-photos")}
        onContactSocial={() => setCurrentEditScreen("contact-social")}
        onSpecialLinks={() => setCurrentEditScreen("special-links")}
        onPresentationVideo={() => setCurrentEditScreen("presentation-video")}
        onPromotionalBox={() => setCurrentEditScreen("promotional-box")}
      />
    );
  }

  // Render Select Category Screen
  if (currentEditScreen === "select-category") {
    return (
      <SelectCategoryScreen
        onBack={() => setCurrentEditScreen("edit-info")}
        onSelectCategory={(category) => {
          console.log("Selected category:", category);
          setCurrentEditScreen("edit-info");
        }}
      />
    );
  }

  // Render Edit Address Screen
  if (currentEditScreen === "edit-address") {
    return (
      <EditAddressScreen
        onBack={() => setCurrentEditScreen("edit-info")}
        onSave={(address) => {
          console.log("Saved address:", address);
          setCurrentEditScreen("edit-info");
        }}
      />
    );
  }

  // Render Edit Hours Screen
  if (currentEditScreen === "edit-hours") {
    return (
      <EditHoursScreen
        onBack={() => setCurrentEditScreen("edit-info")}
        onSave={(hours) => {
          console.log("Saved hours:", hours);
          setCurrentEditScreen("edit-info");
        }}
      />
    );
  }

  // Render Gallery Photos Screen
  if (currentEditScreen === "gallery-photos") {
    return (
      <GalleryPhotosScreen
        onBack={() => setCurrentEditScreen("edit-business")}
      />
    );
  }

  // Render Contact Social Screen
  if (currentEditScreen === "contact-social") {
    return (
      <ContactSocialScreen
        onBack={() => setCurrentEditScreen("edit-business")}
      />
    );
  }

  // Render Special Links Screen
  if (currentEditScreen === "special-links") {
    return (
      <SpecialLinksScreen
        onBack={() => setCurrentEditScreen("edit-business")}
      />
    );
  }

  // Render Presentation Video Screen
  if (currentEditScreen === "presentation-video") {
    return (
      <PresentationVideoScreen
        onBack={() => setCurrentEditScreen("edit-business")}
      />
    );
  }

  // Render Promotional Box Screen
  if (currentEditScreen === "promotional-box") {
    return (
      <PromotionalBoxScreen
        onBack={() => setCurrentEditScreen("edit-business")}
      />
    );
  }

  // Show limit warning modal
  if (showLimitWarning) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => setShowLimitWarning(false)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-gray-800" />
            </button>
            <h1 className="text-gray-900 font-semibold text-sm">Límite de perfiles</h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Limit Warning Card */}
          <Card className="p-5 rounded-2xl border border-gray-200 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-red-600 mb-1">
                  Límite de perfiles
                </h2>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl mb-4">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Si deseas tener más perfiles comerciales (sucursales, tiendas u oficinas) en tu ciudad o en otras ciudades.
              </p>
              <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                Necesitas adquirir una cuenta premium, la cual te permite tener de 2 a 11 perfiles comerciales y te brinda la posibilidad de tener todos los beneficios de Bolivia en un clic para poder hacerte crecer ilimitadamente.
              </p>
            </div>

            <button
              onClick={onChangePlan}
              className="w-full text-center py-3 bg-gray-100 rounded-xl text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors"
            >
              Cambiar de cuenta
            </button>
          </Card>
        </div>
      </div>
    );
  }

  // Main screen with add profile button
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <h1 className="text-gray-900 font-semibold text-sm">Mis Perfiles</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4">
        {/* Add Profile Button */}
        <Card 
          onClick={() => setShowLimitWarning(true)}
          className="p-4 rounded-2xl border-2 border-dashed border-orange-400 hover:border-orange-500 hover:bg-orange-50 transition-all cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-orange-600">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <span className="font-semibold text-base">Agregar perfil</span>
            <p className="text-xs text-gray-600 text-center">
              Crea un nuevo perfil comercial para tu negocio
            </p>
          </div>
        </Card>

        {/* User Profiles List */}
        <div className="space-y-3 mt-4">
          {userProfiles.map(profile => (
            <Card key={profile.id} className="rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all relative">
              <div className="flex items-center gap-3 p-3">
                {/* Profile Image and Info - Clickeable */}
                <div 
                  onClick={() => onViewProfile(profile.id)}
                  className="flex items-center gap-3 flex-1 cursor-pointer"
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-gray-900">{profile.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-lg font-medium text-xs">
                        {profile.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {profile.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-medium text-gray-700">
                        {profile.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({profile.reviewCount} reseñas)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Three Dots Menu */}
                <div className="relative z-30">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowOptionsMenu(showOptionsMenu === profile.id ? null : profile.id);
                    }}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Options Menu */}
                  {showOptionsMenu === profile.id && (
                    <>
                      {/* Backdrop to close menu */}
                      <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setShowOptionsMenu(null)}
                      />
                      
                      <div className="absolute top-10 right-0 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-50 min-w-[180px] overflow-hidden">
                        <button
                          onClick={() => {
                            onViewProfile(profile.id);
                            setShowOptionsMenu(null);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium border-b border-gray-100"
                        >
                          Ver perfil
                        </button>
                        <button
                          onClick={() => {
                            setShowOptionsMenu(null);
                            setEditingProfileId(profile.id);
                            setCurrentEditScreen("edit-business");
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium border-b border-gray-100"
                        >
                          Editar perfil
                        </button>
                        <button
                          onClick={() => {
                            setShowOptionsMenu(null);
                            alert("Has llegado a límites de perfiles");
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium border-b border-gray-100"
                        >
                          Duplicar perfil
                        </button>
                        <button
                          onClick={() => {
                            setShowOptionsMenu(null);
                            if (confirm("¿Estás seguro de que deseas eliminar este perfil?")) {
                              alert("Perfil eliminado");
                            }
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-red-50 transition-colors text-red-600 text-sm font-medium"
                        >
                          Eliminar perfil
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}