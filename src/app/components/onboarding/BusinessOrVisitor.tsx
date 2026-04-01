import { Building2, User } from "lucide-react";

interface BusinessOrVisitorProps {
  onRegisterBusiness: () => void;
  onEnterAsVisitor: () => void;
}

export function BusinessOrVisitor({ onRegisterBusiness, onEnterAsVisitor }: BusinessOrVisitorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2 leading-tight px-4">
            Conecta con personas que necesitan lo que ofreces
          </h1>
          <p className="text-xs sm:text-sm text-gray-900">
            Registra tu actividad comercial o empresa GRATIS en un perfil comercial
          </p>
        </div>

        {/* Image */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-orange-100 overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwaGFwcHklMjBzdG9yZXxlbnwxfHx8fDE3Mzc0MjkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Negocio exitoso"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Register Business Button */}
          <button
            onClick={onRegisterBusiness}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-bold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] py-3 px-4 text-sm sm:text-base flex items-center justify-center gap-2 group"
          >
            <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Registra tu actividad comercial</span>
          </button>

          {/* Enter as Visitor Button */}
          <button
            onClick={onEnterAsVisitor}
            className="flex-1 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-md hover:shadow-lg py-3 px-4 text-sm sm:text-base flex items-center justify-center gap-2 group"
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Entrar como visitante</span>
          </button>
        </div>

        {/* Info text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Puedes cambiar esta configuración en cualquier momento desde tu perfil. 
            <span className="text-orange-600 font-semibold"> ¡Es completamente gratis!</span>
          </p>
        </div>
      </div>
    </div>
  );
}