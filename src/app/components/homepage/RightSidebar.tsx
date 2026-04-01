import { MapPin, Calendar, Clock } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface RightSidebarProps {
  onNavigate?: (destination: string) => void;
}

export function RightSidebar({ onNavigate }: RightSidebarProps) {
  // Mock data for featured offers
  const featuredOffers = [
    {
      id: 1,
      business: "Café del Sur",
      description: "20% de descuento en cenas",
      discount: "20% off",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      city: "Cochabamba",
    },
    {
      id: 2,
      business: "AutoXpress",
      description: "Cambios de aceite a mitad de precio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      city: "Cochabamba",
    },
  ];

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Concierto de Música Andina",
      date: "Domingo. 1 Febrero",
      location: "Demuésida",
      city: "Malstar",
      attendees: 17,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400",
    },
  ];

  // Mock data for recommended businesses
  const recommended = [
    {
      id: 1,
      name: "Solar Gym",
      city: "La Paz",
      category: "Gimnasio",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
    },
  ];

  return (
    <div className="w-80 flex-shrink-0 space-y-2 sticky top-[80px] self-start max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-hide">
      {/* Ofertas destacadas */}
      <Card className="p-4 rounded-2xl border-[0.5px] border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Ofertas destacadas</h3>
          <button
            onClick={() => onNavigate && onNavigate("marketplace")}
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            Ver todas
          </button>
        </div>

        <div className="space-y-2">
          {featuredOffers.map((offer) => (
            <div
              key={offer.id}
              className="flex gap-2 p-1.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <img
                src={offer.image}
                alt={offer.business}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-gray-900 truncate">
                  {offer.business}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                  {offer.description}
                </p>
                {offer.discount && (
                  <span className="inline-block px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-lg">
                    {offer.discount}
                  </span>
                )}
                {offer.city && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span>{offer.city} • Ver todos</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Próximos eventos */}
      <Card className="p-4 rounded-2xl border-[0.5px] border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Próximos eventos</h3>
          <button
            onClick={() => onNavigate && onNavigate("events")}
            className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
          >
            Ver todas
          </button>
        </div>

        <div className="space-y-2">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex gap-2 p-1.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-gray-900 line-clamp-2 mb-0.5">
                  {event.title}
                </h4>
                <p className="text-xs text-gray-600 mb-0.5">{event.date}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>
                    {event.location} • {event.city} · {event.attendees}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recomendados */}
      <Card className="p-4 rounded-2xl border-[0.5px] border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Recomendados</h3>
          <button className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
            Ver todos
          </button>
        </div>

        <div className="space-y-2">
          {recommended.map((business) => (
            <div
              key={business.id}
              className="flex gap-2 p-1.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors items-center"
            >
              <img
                src={business.image}
                alt={business.name}
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-gray-900 truncate">
                  {business.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>{business.city} · {business.category}</span>
                </div>
              </div>
              <button className="px-3 py-1 text-xs font-medium text-orange-600 border-[0.5px] border-orange-500 rounded-lg hover:bg-orange-50 transition-colors flex-shrink-0">
                Seguir
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Bec Business Banner */}
      <Card
        onClick={() => onNavigate && onNavigate("lobby")}
        className="p-4 rounded-2xl border-[0.5px] border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V16a2 2 0 002 2h14a2 2 0 002-2v-2.745zM21 7v5.255A23.931 23.931 0 0112 14c-3.183 0-6.22-.62-9-1.745V7a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <h3 className="font-bold text-lg text-orange-600">Bec Business</h3>
          <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Promociona tu negocio. Llega a miles de potenciales clientes en Bolivia.
        </p>
        <div className="flex justify-end">
          <button className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-lg hover:shadow-lg transition-all">
            Ver más
          </button>
        </div>
      </Card>
    </div>
  );
}