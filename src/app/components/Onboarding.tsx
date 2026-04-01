import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingData = [
  {
    title: "Bienvenido a la App",
    description: "Este es el primer paso de tu experiencia. Aquí puedes editar el texto que desees mostrar a tus usuarios.",
  },
  {
    title: "Descubre Funciones Increíbles",
    description: "En esta segunda pantalla puedes explicar las características principales de tu aplicación.",
  },
  {
    title: "Conecta con Personas",
    description: "Tercera pantalla para mostrar cómo los usuarios pueden interactuar y compartir contenido.",
  },
  {
    title: "Personaliza tu Experiencia",
    description: "Cuarta pantalla donde puedes hablar sobre la personalización y preferencias del usuario.",
  },
  {
    title: "Comienza Ahora",
    description: "Última pantalla antes de comenzar. Invita a tus usuarios a iniciar su viaje contigo.",
  },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const currentData = onboardingData[currentStep];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-6 h-6" />
        <span className="sr-only">Saltar intro</span>
      </button>

      {/* Content */}
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icon placeholder */}
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
          <div className="text-6xl text-white font-bold">{currentStep + 1}</div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">{currentData.title}</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed">
          {currentData.description}
        </p>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 pt-4">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? "w-8 bg-gradient-to-r from-orange-500 to-red-500"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 rounded-2xl text-lg font-semibold shadow-lg shadow-orange-200"
        >
          {currentStep === onboardingData.length - 1 ? "Comenzar" : "Siguiente"}
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
