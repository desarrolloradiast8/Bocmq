import { ArrowLeft, Calendar, MapPin, Clock, Heart, Bookmark } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface EventDetailProps {
  eventId: number;
  onBack: () => void;
}

const mockEvent = {
  id: 1,
  title: "Eventrid",
  category: "Eventos digitales",
  startDate: "01 jun. 2020",
  endDate: "05 sep. 2020",
  location: "Calle potosi, Montero",
  startTime: "09:06",
  endTime: "18:09",
  description: "Realiza tus eventos 100% online con ⭐Eventrid Live⭐. Nuestra plataforma permite generar ingresos organizando conciertos, seminarios, obras de teatro, conversatorios, charlas, conferencias y lo que imagines que pueda ser entregado al público por Internet. Los espectadores compran su entrada en línea de manera rápida y segura, y disfrutan de tu transmisión desde cualquier dispositivo.",
  image: "https://images.unsplash.com/photo-1669670617524-5f08060c8dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmNlcnQlMjBwYXJ0eXxlbnwxfHx8fDE3Njg4NDE3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

export function EventDetail({ eventId, onBack }: EventDetailProps) {
  const handleCalendarClick = () => {
    alert("Calendario - Agregar a mi calendario");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <Card className="rounded-3xl overflow-hidden border-2 border-gray-100">
              <img
                src={mockEvent.image}
                alt={mockEvent.title}
                className="w-full h-96 object-cover"
              />
            </Card>

            {/* Description */}
            <Card className="p-8 rounded-3xl border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {mockEvent.description}
              </p>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-6 rounded-2xl text-lg font-semibold shadow-lg">
                Me interesa
              </Button>
              <Button className="px-8 py-6 bg-gray-100 hover:bg-gray-200 rounded-2xl shadow-lg">
                <Heart className="w-6 h-6 text-gray-600" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info Card */}
            <Card className="p-6 rounded-3xl border-2 border-orange-200 bg-white sticky top-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">{mockEvent.title}</h1>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="font-semibold text-gray-900">
                      {mockEvent.startDate} - {mockEvent.endDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold text-gray-900">{mockEvent.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Horario</p>
                    <p className="font-semibold text-gray-900">
                      {mockEvent.startTime} - {mockEvent.endTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  onClick={handleCalendarClick}
                  className="w-full bg-orange-100 text-orange-700 hover:bg-orange-200 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Agregar al calendario
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
