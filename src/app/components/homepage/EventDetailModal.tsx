import { ArrowLeft, Heart, Share2, Bookmark, MessageCircle, Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";

interface EventDetailModalProps {
  event: any;
  store: any;
  onBack: () => void;
}

export function EventDetailModal({ event, store, onBack }: EventDetailModalProps) {
  const [showSponsorForm, setShowSponsorForm] = useState(false);
  const [showProviderForm, setShowProviderForm] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Sponsor form
  if (showSponsorForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSponsorForm(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-white font-bold text-xl">Propuesta de auspiciador</h2>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Card className="p-6 rounded-3xl">
            <p className="mb-6 text-gray-700">
              Si deseas ser auspiciador del evento, te pedimos llenes el siguiente formulario:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Empresa</label>
                <Input placeholder="Nombre de la empresa" className="rounded-2xl" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Servicios que ofrece</label>
                <Input placeholder="Servicios que ofrece" className="rounded-2xl" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Describe tu propuesta</label>
                <textarea
                  placeholder="Describe tu propuesta"
                  className="w-full p-3 border-2 border-gray-200 rounded-2xl resize-none"
                  rows={4}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Correo electrónico</label>
                <Input placeholder="Correo electrónico" type="email" className="rounded-2xl" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Teléfono</label>
                <Input placeholder="Teléfono" className="rounded-2xl" />
              </div>

              <Button className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold">
                Enviar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Provider form
  if (showProviderForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowProviderForm(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-white font-bold text-xl">Proveedor de servicio</h2>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Card className="p-6 rounded-3xl">
            <p className="mb-6 text-gray-700">
              Si deseas ser proveedor del evento, te pedimos llenes el siguiente formulario:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Nombre de empresa</label>
                <Input placeholder="Nombre de empresa" className="rounded-2xl" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Servicios que ofrece</label>
                <Input placeholder="Servicios que ofrece" className="rounded-2xl" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Describe tu propuesta</label>
                <textarea
                  placeholder="Describe tu propuesta"
                  className="w-full p-3 border-2 border-gray-200 rounded-2xl resize-none"
                  rows={4}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Correo electrónico</label>
                <Input placeholder="Correo electrónico" type="email" className="rounded-2xl" />
              </div>

              <div>
                <label className="block mb-2 font-medium">Teléfono</label>
                <Input placeholder="Teléfono" className="rounded-2xl" />
              </div>

              <Button className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold">
                Enviar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Event detail
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <Card className="rounded-3xl overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-80 object-cover" />
          
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">{event.title}</h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Fecha</p>
                  <p className="font-semibold">{event.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Hora</p>
                  <p className="font-semibold">{event.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Ubicación</p>
                  <p className="font-semibold">{event.location}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${store.phone.replace(/\+/g, '')}?text=Hola, tengo consultas sobre el evento: ${event.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold"
            >
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </a>

            <div className="grid grid-cols-4 gap-4">
              <a href={`tel:${store.phone}`} className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-xs text-blue-600 font-medium">Teléfono</span>
              </a>
              <a href={`mailto:${store.email}`} className="flex flex-col items-center gap-2 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors">
                <Mail className="w-6 h-6 text-orange-600" />
                <span className="text-xs text-orange-600 font-medium">Correo</span>
              </a>
              <a href={store.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-xs text-blue-600 font-medium">Facebook</span>
              </a>
              <a href={store.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors">
                <Instagram className="w-6 h-6 text-pink-600" />
                <span className="text-xs text-pink-600 font-medium">Instagram</span>
              </a>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setShowSponsorForm(true)}
                className="w-full py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold"
              >
                Propuesta de participación como auspiciador
              </Button>

              <Button
                onClick={() => setShowProviderForm(true)}
                variant="outline"
                className="w-full py-6 rounded-2xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold"
              >
                Proveedores interesados en ofrecer sus servicios para el evento
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button
                onClick={() => setIsSaved(!isSaved)}
                variant="outline"
                className={`rounded-2xl ${isSaved ? 'bg-orange-50 border-orange-500 text-orange-600' : ''}`}
              >
                <Bookmark className={`w-5 h-5 mr-2 ${isSaved ? 'fill-orange-600' : ''}`} />
                Me interesa
              </Button>
              <Button
                onClick={() => setIsFavorite(!isFavorite)}
                variant="outline"
                className="rounded-2xl"
              >
                <Heart className={`w-5 h-5 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                Favorito
              </Button>
              <Button variant="outline" className="rounded-2xl">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}