import { FileText, Link } from "lucide-react";

interface PublicarDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateAnnouncement: () => void;
  onCreateLink: () => void;
  position?: { top?: string; left?: string; right?: string };
}

export function PublicarDropdown({ 
  isOpen, 
  onClose, 
  onCreateAnnouncement, 
  onCreateLink,
  position
}: PublicarDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 p-4 z-50 animate-in slide-in-from-top-2 duration-200 min-w-[280px]"
        style={{
          top: position?.top,
          left: position?.left,
          right: position?.right
        }}
      >
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-sm font-bold text-gray-900 leading-tight">
            Publica la noticia que desees de tu actividad comercial
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          {/* Crear Anuncio Button */}
          <button
            onClick={() => {
              onCreateAnnouncement();
              onClose();
            }}
            className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg font-semibold shadow-md transition-all hover:scale-105 group"
          >
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-xs">Crear Anuncio</span>
          </button>

          {/* Crear Enlace Button */}
          <button
            onClick={() => {
              onCreateLink();
              onClose();
            }}
            className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-lg font-semibold shadow-md transition-all hover:scale-105 group"
          >
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Link className="w-4 h-4" />
            </div>
            <span className="text-xs">Crear Enlace</span>
          </button>
        </div>
      </div>
    </>
  );
}