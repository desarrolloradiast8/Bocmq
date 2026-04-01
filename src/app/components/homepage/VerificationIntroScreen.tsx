import { ShieldCheck } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface VerificationIntroScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

export function VerificationIntroScreen({ onContinue, onBack }: VerificationIntroScreenProps) {
  return (
    <div className="pb-8">
      <Card className="max-w-3xl w-full p-4 rounded-xl shadow-sm border border-orange-200 relative">
        {/* Close button - top right */}
        <button
          onClick={onBack}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700 text-lg font-bold"
        >
          ✕
        </button>

        {/* Header Section - Icon and Title at top */}
        <div className="flex flex-col items-center mb-4">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-3 shadow-md">
            <ShieldCheck className="w-9 h-9 text-white" />
          </div>

          {/* Title - bigger and at top */}
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Valida tu perfil comercial
          </h2>
        </div>

        {/* Content Grid - Description and Benefits */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column - Description */}
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl border border-orange-200 h-full flex items-center">
              <p className="text-gray-700 leading-snug text-center text-xs">
                Los perfiles certificados mostrarán un icono celeste certificado por <strong>Bolivia en un clic</strong>, 
                dando más confianza a los usuarios.
              </p>
            </div>
          </div>

          {/* Right Column - Benefits and Button */}
          <div className="flex flex-col justify-center">
            {/* Benefits */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-orange-100">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">
                  ✓
                </div>
                <p className="text-gray-700 font-medium text-xs">Mayor confianza de los usuarios</p>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-orange-100">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">
                  ✓
                </div>
                <p className="text-gray-700 font-medium text-xs">Insignia de verificación visible</p>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-orange-100">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-xs">
                  ✓
                </div>
                <p className="text-gray-700 font-medium text-xs">Destacarte de la competencia</p>
              </div>
            </div>

            {/* Continue Button */}
            <Button
              onClick={onContinue}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-sm shadow-md"
            >
              Continuar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}