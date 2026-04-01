import { ArrowLeft, ChevronRight } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface EditBusinessScreenProps {
  onBack: () => void;
  onEditInfo: () => void;
  onGalleryPhotos: () => void;
  onContactSocial: () => void;
  onSpecialLinks: () => void;
  onPresentationVideo: () => void;
  onBusinessProposals: () => void;
  onPromotionalBox: () => void;
}

export function EditBusinessScreen({ 
  onBack, 
  onEditInfo,
  onGalleryPhotos,
  onContactSocial,
  onSpecialLinks,
  onPresentationVideo,
  onBusinessProposals,
  onPromotionalBox
}: EditBusinessScreenProps) {
  const businessData = {
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    name: "Mi Negocio Principal",
    category: "Tecnología",
    location: "Santa Cruz, Bolivia"
  };

  const editOptions = [
    {
      title: "Información",
      description: "Edita o agrega detalles de nombre, descripción y otra información del perfil",
      onClick: onEditInfo
    },
    {
      title: "Galería y fotos",
      description: "Diferenciate con un logotipo y múltiples fotos",
      onClick: onGalleryPhotos
    },
    {
      title: "Contactos y redes sociales",
      description: "Agrega correo electrónico y redes sociales",
      onClick: onContactSocial
    },
    {
      title: "Enlaces especiales",
      description: "Agrega enlaces a páginas web, e-commerce y otros",
      onClick: onSpecialLinks
    },
    {
      title: "Video de presentación",
      description: "Ayuda a tus usuarios a comprender mejor lo que ofreces",
      onClick: onPresentationVideo
    },
    {
      title: "Propuestas en negocios",
      description: "Recibe propuestas de otros negocios",
      onClick: onBusinessProposals
    },
    {
      title: "Casilla de oferta o promoción especial",
      description: "Agrega una oferta o promoción que atraiga al tipo de usuarios que desees captar",
      onClick: onPromotionalBox
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-bold text-sm">Editar negocio o servicio</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Business Info Card */}
        <Card className="p-6 rounded-3xl mb-6">
          <div className="flex items-center gap-4">
            <img
              src={businessData.logo}
              alt={businessData.name}
              className="w-20 h-20 object-cover rounded-2xl"
            />
            <div>
              <h2 className="font-bold text-xl text-gray-900">{businessData.name}</h2>
              <p className="text-orange-600 font-medium">{businessData.category}</p>
              <p className="text-gray-600 text-sm">{businessData.location}</p>
            </div>
          </div>
        </Card>

        {/* Edit Options */}
        <div className="space-y-3">
          {editOptions.map((option, index) => (
            <Card
              key={index}
              onClick={option.onClick}
              className="p-4 rounded-2xl hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}