import { useState } from "react";
import { ArrowLeft, Upload, Calendar as CalendarIcon, Check, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Calendar } from "@/app/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { SeleccionarCategoriaScreen } from "@/app/components/homepage/SeleccionarCategoriaScreen";

interface CrearProductoScreenProps {
  onBack: () => void;
  onSuccess: () => void;
}

// Mock data del perfil del usuario
const userProfile = {
  name: "Juan Pérez",
  photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
};

export function CrearProductoScreen({ onBack, onSuccess }: CrearProductoScreenProps) {
  const [images, setImages] = useState<string[]>([]);
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [enOferta, setEnOferta] = useState(false);
  const [precioOferta, setPrecioOferta] = useState("");
  const [fechaInicio, setFechaInicio] = useState<Date>();
  const [fechaFin, setFechaFin] = useState<Date>();
  const [categoria, setCategoria] = useState("");
  const [disponible, setDisponible] = useState(true);
  const [showCategoryScreen, setShowCategoryScreen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showOfertaModal, setShowOfertaModal] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const handleSubmit = () => {
    // Aquí se enviaría la información al servidor
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      onSuccess();
    }, 2000);
  };

  const handleSelectCategory = (cat: string) => {
    setCategoria(cat);
    setShowCategoryScreen(false);
  };

  if (showCategoryScreen) {
    return (
      <SeleccionarCategoriaScreen
        onBack={() => setShowCategoryScreen(false)}
        onSelectCategory={handleSelectCategory}
      />
    );
  }

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
            Crear producto/servicio
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {/* Profile Info */}
        <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
          <img
            src={userProfile.photo}
            alt={userProfile.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-orange-100"
          />
          <div>
            <p className="text-xs font-semibold text-gray-900">{userProfile.name}</p>
            <p className="text-xs text-gray-500">Tu perfil</p>
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-1.5">
          <label className="block">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="border-3 border-dashed border-gray-300 rounded-2xl p-6 hover:border-orange-500 transition-colors cursor-pointer bg-white">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                  <Upload className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">+Añadir fotos</p>
              </div>
            </div>
          </label>
          <p className="text-xs text-gray-500 leading-tight">
            Agrega más fotos para poder ilustrar tu producto, servicio, descuento o promoción de la mejor manera
          </p>
          {/* Preview Images */}
          {images.length > 0 && (
            <div className="grid grid-cols-4 gap-2 pt-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-20 object-cover rounded-xl border-2 border-gray-200"
                />
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <Label htmlFor="titulo" className="text-sm font-semibold text-gray-900">
            Título de lo que deseas ofrecer (producto, servicio, descuento o promoción)
          </Label>
          <Input
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escribe el título..."
            className="rounded-2xl border-2 border-gray-200 focus:border-orange-500 py-5"
          />
        </div>

        {/* Price */}
        <div className="space-y-1.5">
          <Label htmlFor="precio" className="text-sm font-semibold text-gray-900">
            Precio
          </Label>
          <Input
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Bs 0.00"
            className="rounded-2xl border-2 border-gray-200 focus:border-orange-500 py-5"
          />
        </div>

        {/* Offer Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Este producto está en oferta</span>
          <button
            onClick={() => {
              setEnOferta(!enOferta);
              if (!enOferta) {
                setShowOfertaModal(true);
              }
            }}
            className={`relative w-12 h-7 rounded-full transition-colors ${
              enOferta ? "bg-gradient-to-r from-orange-500 to-red-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                enOferta ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

        {/* Muestra resumen si ya se configuró la oferta */}
        {enOferta && precioOferta && (
          <div className="p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">Precio oferta: {precioOferta}</p>
                {fechaInicio && <p className="text-xs text-gray-600">Inicio: {format(fechaInicio, "PPP", { locale: es })}</p>}
                {fechaFin && <p className="text-xs text-gray-600">Fin: {format(fechaFin, "PPP", { locale: es })}</p>}
              </div>
              <button
                onClick={() => setShowOfertaModal(true)}
                className="text-orange-600 hover:text-orange-700 text-sm font-semibold"
              >
                Editar
              </button>
            </div>
          </div>
        )}

        {/* Category */}
        <div className="space-y-1.5">
          <Label className="text-sm font-semibold text-gray-900">Categoría</Label>
          <button
            onClick={() => setShowCategoryScreen(true)}
            className="w-full text-left px-4 py-5 text-sm bg-white border-2 border-gray-200 hover:border-orange-500 rounded-2xl transition-colors"
          >
            <span className={categoria ? "text-gray-900" : "text-gray-400"}>
              {categoria || "Seleccione una categoría"}
            </span>
          </button>
        </div>

        {/* Available Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Disponible</span>
          <button
            onClick={() => setDisponible(!disponible)}
            className={`relative w-12 h-7 rounded-full transition-colors ${
              disponible ? "bg-gradient-to-r from-orange-500 to-red-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                disponible ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!titulo || !precio || !categoria}
          className="w-full py-3 text-center text-base font-bold text-orange-600 hover:text-orange-700 disabled:opacity-50 transition-colors"
        >
          Guardar
        </button>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-3 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">¡Éxito!</h3>
            <p className="text-base text-gray-700">
              Haz publicado un producto
            </p>
          </div>
        </div>
      )}

      {/* Oferta Modal */}
      {showOfertaModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Configurar oferta</h3>
              <button
                onClick={() => setShowOfertaModal(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Offer Price */}
              <div className="space-y-1.5">
                <Label htmlFor="precioOferta" className="text-sm font-semibold text-gray-900">
                  Precio oferta
                </Label>
                <Input
                  id="precioOferta"
                  value={precioOferta}
                  onChange={(e) => setPrecioOferta(e.target.value)}
                  placeholder="Bs 0.00"
                  className="rounded-2xl border-2 border-gray-200 focus:border-orange-500 py-5 bg-white"
                />
              </div>

              {/* Start Date */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-gray-900">Fecha de inicio</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-sm rounded-2xl border-2 border-gray-200 hover:border-orange-500 py-5 bg-white"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-orange-600" />
                      {fechaInicio ? format(fechaInicio, "PPP", { locale: es }) : "Selecciona una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white rounded-2xl border-2 border-gray-200" align="start">
                    <Calendar
                      mode="single"
                      selected={fechaInicio}
                      onSelect={setFechaInicio}
                      locale={es}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* End Date */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-gray-900">Fecha de finalización</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-sm rounded-2xl border-2 border-gray-200 hover:border-orange-500 py-5 bg-white"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-orange-600" />
                      {fechaFin ? format(fechaFin, "PPP", { locale: es }) : "Selecciona una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white rounded-2xl border-2 border-gray-200" align="start">
                    <Calendar
                      mode="single"
                      selected={fechaFin}
                      onSelect={setFechaFin}
                      locale={es}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowOfertaModal(false)}
                  className="flex-1 py-3 text-center text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowOfertaModal(false)}
                  className="flex-1 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-2xl transition-colors"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}