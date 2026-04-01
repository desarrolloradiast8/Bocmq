import { Card } from "@/app/components/ui/card";
import { FileText, Link } from "lucide-react";

interface CreateOptionsScreenProps {
  onClose: () => void;
  onSelectOption: (option: 'announcement' | 'link') => void;
}

export function CreateOptionsScreen({ onClose, onSelectOption }: CreateOptionsScreenProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Crear</h2>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelectOption('announcement')}
            className="w-full p-6 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 hover:border-orange-400 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-900">Anuncio</h3>
                <p className="text-sm text-gray-600">Crea un anuncio con fotos</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectOption('link')}
            className="w-full p-6 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 hover:border-orange-400 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Link className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-900">Enlace</h3>
                <p className="text-sm text-gray-600">Comparte un enlace externo</p>
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          Cancelar
        </button>
      </Card>
    </div>
  );
}
