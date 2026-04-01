import { useState } from "react";
import { Plus, Calendar as CalendarIcon, Check } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface CreateAnnouncementScreenProps {
  onBack: () => void;
  profileName: string;
  profilePhoto: string;
  onPublish: (announcement: { description: string; photos: string[]; scheduledDate: string }) => void;
}

export function CreateAnnouncementScreen({ 
  onBack, 
  profileName, 
  profilePhoto,
  onPublish 
}: CreateAnnouncementScreenProps) {
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("Publicar hoy");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePublish = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      onPublish({
        description,
        photos,
        scheduledDate,
      });
    }, 2000);
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newDate);
    
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    setScheduledDate(`${day} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`);
    setShowCalendar(false);
  };

  const previousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const { firstDay, daysInMonth } = getDaysInMonth(selectedDate);
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

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
          <h1 className="text-base font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">Crear anuncio</h1>
          
          <button
            onClick={handlePublish}
            className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
          >
            Publicar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        {/* Profile Info */}
        <Card className="p-4 rounded-2xl border-2 border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={profilePhoto}
              alt={profileName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-base text-gray-900">{profileName}</h3>
              <p className="text-xs text-gray-600">Tu perfil</p>
            </div>
          </div>
        </Card>

        {/* Description and Photos - Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Description */}
          <Card className="p-4 rounded-2xl border-2 border-gray-100">
            <label className="block mb-2">
              <span className="font-semibold text-gray-900 text-sm">Describe tu anuncio</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Escribe aquí la descripción de tu anuncio..."
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none resize-none text-sm"
              rows={5}
            />
          </Card>

          {/* Photos */}
          <Card className="p-4 rounded-2xl border-2 border-gray-100">
            <button className="w-full p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all group">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-1">+ Añadir fotos</h3>
              </div>
            </button>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Agrega más fotos para poder ilustrar tu anuncio de la mejor manera. Usa fotografías con poco a nada de texto, para que sea más llamativo y capte la atención de los usuarios.
            </p>
          </Card>
        </div>

        {/* Schedule */}
        <Card className="p-4 rounded-2xl border-2 border-gray-100">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">Programar anuncio</h3>
          </div>
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-orange-400 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-gray-700">{scheduledDate}</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showCalendar && (
            <div className="mt-3 p-3 bg-white border-2 border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={previousMonth}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="font-bold text-base text-gray-900">{monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h3>
                <button
                  onClick={nextMonth}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-xs text-gray-600 font-bold">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {[...Array(firstDay)].map((_, index) => (
                  <div key={index} className="text-center text-xs text-gray-300">
                    &nbsp;
                  </div>
                ))}
                {[...Array(daysInMonth)].map((_, index) => (
                  <div key={index} className="text-center text-xs text-gray-700 cursor-pointer hover:bg-gray-100 rounded-full">
                    <button
                      onClick={() => handleDateSelect(index + 1)}
                      className="w-7 h-7"
                    >
                      {index + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Anuncio publicado!</h3>
            <p className="text-gray-600 mb-6">Tu anuncio ha sido publicado exitosamente.</p>
          </div>
        </div>
      )}
    </div>
  );
}