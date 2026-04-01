import { useState } from "react";
import { Plus, Calendar as CalendarIcon, Check, ArrowLeft, Tag, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface CreateEventScreenProps {
  onBack: () => void;
  profileName: string;
  profilePhoto: string;
  onPublish: (event: any) => void;
}

const categories = [
  "Restaurantes",
  "Tecnología",
  "Moda",
  "Belleza",
  "Hogar",
  "Deportes",
  "Salud",
  "Educación",
  "Entretenimiento",
  "Servicios"
];

export function CreateEventScreen({ 
  onBack, 
  profileName, 
  profilePhoto,
  onPublish 
}: CreateEventScreenProps) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isOnOffer, setIsOnOffer] = useState(false);
  const [offerPrice, setOfferPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddImage = () => {
    const mockImages = [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
    ];
    const randomImage = mockImages[Math.floor(Math.random() * mockImages.length)];
    setSelectedImages([...selectedImages, randomImage]);
  };

  const handleSave = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      onPublish({
        selectedImages,
        title,
        price,
        isOnOffer,
        offerPrice,
        startDate,
        endDate,
        category,
        description,
        isAvailable
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-24">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20 pt-6">
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Botón Volver - FUERA DE LA CARD */}
            <button
              type="button"
              onClick={onBack}
              className="mb-4 px-4 py-2 text-gray-800 hover:text-orange-600 text-sm font-medium transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>

            {/* Store Info Section - COMPACTA Y ESTÉTICA */}
            <div className="mb-6 bg-white rounded-2xl p-4 shadow-md border border-gray-200 flex items-center gap-4">
              <img
                src={profilePhoto}
                alt={profileName}
                className="w-14 h-14 rounded-full object-cover border-2 border-orange-500 shadow-sm"
              />
              <div className="flex-1">
                <p className="text-gray-500 text-xs font-medium mb-0.5">Tu perfil</p>
                <h2 className="text-gray-800 text-lg font-bold">{profileName}</h2>
              </div>
            </div>

            {/* Images Section */}
            <div className="mb-4 bg-white rounded-xl p-3 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 text-sm mb-3">Fotos del evento</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-3">
                {selectedImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img src={img} alt={`Evento ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== index))}
                      className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="aspect-square rounded-lg border-2 border-dashed border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 flex flex-col items-center justify-center gap-1 transition-all transform hover:scale-105"
                >
                  <Plus className="w-6 h-6 text-orange-500" />
                  <span className="text-xs text-orange-600 font-bold">Añadir</span>
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center italic">
                Agrega más fotos para ilustrar tu evento mejor
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Title and Price - EN LA MISMA LÍNEA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title - Izquierda */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Título de lo que deseas ofrecer
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-gray-800 transition-colors"
                    placeholder="Ej: Concierto en vivo"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1.5">Producto, servicio, descuento o promoción</p>
                </div>

                {/* Price - Derecha */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <label className="block text-sm font-bold text-gray-800 mb-2">Precio</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">Bs.</span>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full pl-14 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-gray-800 font-bold transition-colors"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* On Sale Toggle - FUERA DE LA CARD, ARRIBA */}
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isOnOffer}
                      onChange={(e) => setIsOnOffer(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center justify-center transition-all">
                      {isOnOffer && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 text-sm">Este producto está en oferta</span>
                    <span className="text-xs text-gray-500 ml-2">(Activa descuentos)</span>
                  </div>
                  <Tag className={`w-5 h-5 transition-colors ${isOnOffer ? 'text-orange-500' : 'text-gray-300'}`} />
                </label>
              </div>

              {/* Sale Fields (conditional) */}
              {isOnOffer && (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-orange-600" />
                    <h3 className="font-bold text-gray-800">Detalles de la oferta</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Precio en oferta
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-600 font-bold text-sm">Bs.</span>
                        <input
                          type="number"
                          value={offerPrice}
                          onChange={(e) => setOfferPrice(e.target.value)}
                          className="w-full pl-12 pr-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white font-bold text-orange-600"
                          placeholder="0"
                          required={isOnOffer}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Fecha de inicio
                        </label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full px-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white text-sm"
                          required={isOnOffer}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Fecha de finalización
                        </label>
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full px-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white text-sm"
                          required={isOnOffer}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Selecciona una categoría
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white text-sm"
                        required={isOnOffer}
                      >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Agrega una descripción
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none text-gray-800 transition-colors"
                  rows={4}
                  placeholder="Describe tu evento de manera detallada..."
                />
              </div>

              {/* Availability Toggle */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center justify-center transition-all cursor-pointer">
                    {isAvailable && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-800 block">Producto disponible</span>
                  <span className="text-xs text-gray-500">Los clientes podrán ver y comprar este producto</span>
                </div>
                <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-orange-500' : 'bg-gray-300'}`} />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                className="w-full py-3 text-orange-600 hover:text-orange-700 font-bold text-sm transition-all text-center"
              >
                Guardar evento
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Evento publicado!</h3>
            <p className="text-gray-600 mb-6">Tu evento ha sido publicado exitosamente.</p>
          </div>
        </div>
      )}
    </div>
  );
}