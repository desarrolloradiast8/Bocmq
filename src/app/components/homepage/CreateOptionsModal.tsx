import { FileText, Link } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/app/components/ui/sheet";
import { useIsMobile } from "@/app/components/ui/use-mobile";
import { useEffect, useRef } from "react";

interface CreateOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption: (option: 'announcement' | 'link') => void;
}

export function CreateOptionsModal({ isOpen, onClose, onSelectOption }: CreateOptionsModalProps) {
  const isMobile = useIsMobile();
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on click outside for desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, isOpen, onClose]);

  const OptionsContent = () => (
    <div className="space-y-3">
      <button
        onClick={() => {
          onSelectOption('announcement');
          onClose();
        }}
        className="w-full p-4 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 hover:border-orange-400 rounded-xl transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-sm text-gray-900">Anuncio</h3>
            <p className="text-xs text-gray-600">Crea un anuncio con fotos</p>
          </div>
        </div>
      </button>

      <button
        onClick={() => {
          onSelectOption('link');
          onClose();
        }}
        className="w-full p-4 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 hover:border-orange-400 rounded-xl transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Link className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-sm text-gray-900">Enlace</h3>
            <p className="text-xs text-gray-600">Comparte un enlace externo</p>
          </div>
        </div>
      </button>
    </div>
  );

  const MobileOptionsContent = () => (
    <div className="space-y-4 p-6 pb-8">
      <button
        onClick={() => {
          onSelectOption('announcement');
          onClose();
        }}
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
        onClick={() => {
          onSelectOption('link');
          onClose();
        }}
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

      <button
        onClick={onClose}
        className="w-full py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors rounded-xl hover:bg-gray-100"
      >
        Cancelar
      </button>
    </div>
  );

  // Mobile: Bottom Sheet
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="bottom" className="rounded-t-3xl border-t-2 border-orange-200 max-h-[60vh]">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
              Crear Publicación
            </SheetTitle>
          </SheetHeader>
          <MobileOptionsContent />
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop: Small popover (no overlay, positioned absolutely)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4">
        <div 
          ref={popoverRef}
          className="pointer-events-auto absolute left-4 right-4 md:left-auto md:right-auto md:w-80 bg-white rounded-2xl border-2 border-orange-200 shadow-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            top: 'calc(50% - 200px)',
            left: isMobile ? '1rem' : 'calc(50% - 160px)'
          }}
        >
          <div className="mb-3">
            <h3 className="font-bold text-base bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Crear Publicación
            </h3>
          </div>
          <OptionsContent />
        </div>
      </div>
    </div>
  );
}
