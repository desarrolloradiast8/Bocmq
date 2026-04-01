import { X, Edit, ChevronRight, LogOut, Flag, Plus, Minus, Menu } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (destination: string) => void;
  onLogout: () => void;
  isPermanent?: boolean;
  onShowCategoriesMegaMenu?: (show: boolean) => void;
  onShowPromocionesMegaMenu?: (show: boolean) => void;
  onShowPublicarDropdown?: (show: boolean) => void;
  currentScreen?: string;
}

export function SidebarMenu({ 
  isOpen, 
  onClose, 
  onNavigate, 
  onLogout, 
  isPermanent = false,
  onShowCategoriesMegaMenu,
  onShowPromocionesMegaMenu,
  onShowPublicarDropdown,
  currentScreen = "home"
}: SidebarMenuProps) {
  const [isCuentaExpanded, setIsCuentaExpanded] = useState(true);
  const [isInfoCuentaExpanded, setIsInfoCuentaExpanded] = useState(true);
  const [isSoporteExpanded, setIsSoporteExpanded] = useState(true);
  const [isAcercaDeExpanded, setIsAcercaDeExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!isOpen) return null;

  const MenuItem = ({ label, onClick, screenId }: { label: string; onClick: () => void; screenId?: string }) => {
    const isActive = screenId && currentScreen === screenId;
    
    return (
      <button
        onClick={onClick}
        className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between group ${
          isActive 
            ? 'bg-gradient-to-r from-orange-500 to-red-600' 
            : 'hover:bg-orange-50'
        }`}
      >
        <span className={`text-sm ${isActive ? 'text-white font-semibold' : 'text-gray-700 group-hover:text-orange-600'}`}>{label}</span>
        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-orange-600'}`} />
      </button>
    );
  };

  const handleMenuItemClick = (callback: () => void) => {
    callback();
    if (!isPermanent) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop - Only for overlay mode */}
      {!isPermanent && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <div className={`transition-all duration-300 ${
        isPermanent 
          ? `fixed top-[84px] left-0 h-[calc(100%-84px)] ${isCollapsed ? 'w-16' : 'w-64'} bg-white z-30 overflow-y-auto scrollbar-hide border-r border-gray-200 rounded-tr-2xl`
          : 'fixed top-0 left-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto scrollbar-hide'
      }`}>
        {/* Header - Only for mobile (X button) */}
        {!isPermanent && (
          <div className="p-4 flex justify-end border-b border-gray-100">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}

        {/* Menu Content */}
        <div className={`${isPermanent ? 'pt-4' : 'pt-2'} ${isCollapsed ? 'p-2' : 'p-6'} space-y-6`}>
          {/* Collapsed view - Only toggle button */}
          {isCollapsed && isPermanent ? (
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsCollapsed(false)}
                className="p-3 hover:bg-orange-50 rounded-xl transition-colors border border-gray-200"
              >
                <Menu className="w-5 h-5 text-orange-600" />
              </button>
            </div>
          ) : (
            <>
              {/* User Info - White button style */}
              <button
                onClick={() => handleMenuItemClick(() => onNavigate("user-profile"))}
                className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center gap-3 border border-gray-200 group ${
                  currentScreen === 'user-profile' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 border-transparent' 
                    : 'hover:bg-orange-50'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Mzc0ODU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className={`font-bold text-sm ${currentScreen === 'user-profile' ? 'text-white' : 'text-gray-900'}`}>María González</h3>
                  <p className={`text-xs ${currentScreen === 'user-profile' ? 'text-white/80' : 'text-gray-600'}`}>@mariagonzalez</p>
                </div>
                <ChevronRight className={`w-4 h-4 ${currentScreen === 'user-profile' ? 'text-white' : 'text-gray-400 group-hover:text-orange-600'}`} />
              </button>

              {/* Navigation Buttons Section */}
              <div>
                <div className="flex items-center justify-between px-4 mb-3">
                  <button
                    onClick={() => handleMenuItemClick(() => onNavigate('home'))}
                    className={`hover:bg-orange-50 rounded-lg transition-colors py-2 flex-1 text-left ${
                      currentScreen === 'home' ? 'bg-orange-50' : ''
                    }`}
                  >
                    <h3 className={`text-sm font-bold uppercase tracking-wide cursor-pointer ${
                      currentScreen === 'home' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      INICIO
                    </h3>
                  </button>
                  {isPermanent && (
                    <button
                      onClick={() => setIsCollapsed(true)}
                      className="p-1.5 hover:bg-orange-50 rounded-lg transition-colors ml-2"
                      title="Ocultar menú"
                    >
                      <Menu className="w-4 h-4 text-orange-600" />
                    </button>
                  )}
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleMenuItemClick(() => onNavigate('categories'))}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 group ${
                      currentScreen === 'categories' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600' 
                        : 'hover:bg-orange-50'
                    }`}
                  >
                    <svg className={`w-4 h-4 ${currentScreen === 'categories' ? 'text-white' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className={`text-sm ${currentScreen === 'categories' ? 'text-white font-semibold' : 'text-gray-700 group-hover:text-orange-600'}`}>Categorías</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick(() => onNavigate('marketplace'))}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 group ${
                      currentScreen === 'marketplace' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600' 
                        : 'hover:bg-orange-50'
                    }`}
                  >
                    <svg className={`w-4 h-4 ${currentScreen === 'marketplace' ? 'text-white' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className={`text-sm ${currentScreen === 'marketplace' ? 'text-white font-semibold' : 'text-gray-700 group-hover:text-orange-600'}`}>Promociones</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick(() => onNavigate('events'))}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 group ${
                      currentScreen === 'events' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600' 
                        : 'hover:bg-orange-50'
                    }`}
                  >
                    <svg className={`w-4 h-4 ${currentScreen === 'events' ? 'text-white' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className={`text-sm ${currentScreen === 'events' ? 'text-white font-semibold' : 'text-gray-700 group-hover:text-orange-600'}`}>Eventos</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick(() => onNavigate('lobby'))}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center gap-2 group ${
                      currentScreen === 'lobby' 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600' 
                        : 'hover:bg-orange-50'
                    }`}
                  >
                    <svg className={`w-4 h-4 ${currentScreen === 'lobby' ? 'text-white' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className={`text-sm ${currentScreen === 'lobby' ? 'text-white font-semibold' : 'text-gray-700 group-hover:text-orange-600'}`}>Bec Business</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick(() => window.open('https://boliviaenunclic.com', '_blank'))}
                    className="w-full text-left px-3 py-2 hover:bg-orange-50 rounded-xl transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="text-sm text-gray-700 group-hover:text-orange-600">Noticias</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick(() => window.open('https://kumyy.com', '_blank'))}
                    className="w-full text-left px-3 py-2 hover:bg-orange-50 rounded-xl transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm text-gray-700 group-hover:text-orange-600">Kumyy</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      if (onShowPublicarDropdown && isPermanent) {
                        onShowPublicarDropdown(true);
                      }
                      if (!isPermanent) {
                        onClose();
                      }
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-orange-50 rounded-xl transition-colors flex items-center gap-2 group bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-sm">Publicar</span>
                  </button>
                </div>
              </div>

              {/* Cuenta Section */}
              <div>
                <button 
                  onClick={() => setIsCuentaExpanded(!isCuentaExpanded)}
                  className="w-full flex items-center justify-between px-4 mb-3 hover:bg-orange-50 rounded-lg transition-colors py-2"
                >
                  <h3 className="text-sm font-bold text-gray-700">
                    Cuenta
                  </h3>
                  {isCuentaExpanded ? (
                    <Minus className="w-4 h-4 text-red-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-red-600" />
                  )}
                </button>
                {isCuentaExpanded && (
                  <div className="space-y-1">
                    <MenuItem
                      label="Mis perfiles comerciales"
                      onClick={() => handleMenuItemClick(() => onNavigate("business-profiles"))}
                      screenId="business-profiles"
                    />
                    <MenuItem
                      label="Mis favoritos"
                      onClick={() => handleMenuItemClick(() => onNavigate("favorites"))}
                      screenId="favorites"
                    />
                    <MenuItem
                      label="Déjanos ayudarte a exportar"
                      onClick={() => handleMenuItemClick(() => onNavigate("export-help"))}
                      screenId="export-help"
                    />
                    <MenuItem
                      label="¿Buscas inversor para tu proyecto?"
                      onClick={() => handleMenuItemClick(() => window.open("https://wa.me/59178787878?text=Hola,%20busco%20un%20inversor%20para%20mi%20proyecto", "_blank"))}
                    />
                    <MenuItem
                      label="¿Buscas dónde invertir?"
                      onClick={() => handleMenuItemClick(() => window.open("https://wa.me/59178787878?text=Hola,%20busco%20oportunidades%20de%20inversión", "_blank"))}
                    />
                  </div>
                )}
              </div>

              {/* Información de tu cuenta Section */}
              <div>
                <button 
                  onClick={() => setIsInfoCuentaExpanded(!isInfoCuentaExpanded)}
                  className="w-full flex items-center justify-between px-4 mb-3 hover:bg-orange-50 rounded-lg transition-colors py-2"
                >
                  <h3 className="text-sm font-bold text-gray-700 text-left">
                    Información de tu cuenta
                  </h3>
                  {isInfoCuentaExpanded ? (
                    <Minus className="w-4 h-4 text-red-600 flex-shrink-0 ml-2" />
                  ) : (
                    <Plus className="w-4 h-4 text-red-600 flex-shrink-0 ml-2" />
                  )}
                </button>
                {isInfoCuentaExpanded && (
                  <div className="space-y-1">
                    <MenuItem
                      label="GRATIS (anual)"
                      onClick={() => handleMenuItemClick(() => onNavigate("account-info"))}
                      screenId="account-info"
                    />
                    <MenuItem
                      label="Cambiar de cuenta"
                      onClick={() => handleMenuItemClick(() => onNavigate("change-account"))}
                      screenId="change-account"
                    />
                    <MenuItem
                      label="Información de facturación"
                      onClick={() => handleMenuItemClick(() => onNavigate("billing-history"))}
                      screenId="billing-history"
                    />
                    <MenuItem
                      label="Solicita verificación"
                      onClick={() => handleMenuItemClick(() => onNavigate("verification-intro"))}
                      screenId="verification-intro"
                    />
                  </div>
                )}
              </div>

              {/* Soporte Section */}
              <div>
                <button 
                  onClick={() => setIsSoporteExpanded(!isSoporteExpanded)}
                  className="w-full flex items-center justify-between px-4 mb-3 hover:bg-orange-50 rounded-lg transition-colors py-2"
                >
                  <h3 className="text-sm font-bold text-gray-700">
                    Soporte
                  </h3>
                  {isSoporteExpanded ? (
                    <Minus className="w-4 h-4 text-red-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-red-600" />
                  )}
                </button>
                {isSoporteExpanded && (
                  <div className="space-y-1">
                    <MenuItem
                      label="Atención al cliente"
                      onClick={() => handleMenuItemClick(() => window.open("https://wa.me/59178787878?text=Hola,%20necesito%20atención%20al%20cliente", "_blank"))}
                    />
                    <MenuItem
                      label="¿Te gustaría destacar tu negocio o servicio?"
                      onClick={() => handleMenuItemClick(() => window.open("https://wa.me/59178787878?text=Hola,%20me%20gustaría%20destacar%20mi%20negocio%20o%20servicio", "_blank"))}
                    />
                    <MenuItem
                      label="Multiplica tus ganancias con nosotros"
                      onClick={() => handleMenuItemClick(() => window.open("https://boliviaenunclic.com", "_blank"))}
                    />
                    <MenuItem
                      label="Beneficios para anunciantes"
                      onClick={() => handleMenuItemClick(() => window.open("https://boliviaenunclic.com", "_blank"))}
                    />
                    <MenuItem
                      label="Beneficios para usuarios"
                      onClick={() => handleMenuItemClick(() => window.open("https://boliviaenunclic.com", "_blank"))}
                    />
                  </div>
                )}
              </div>

              {/* Acerca de Section */}
              <div>
                <button 
                  onClick={() => setIsAcercaDeExpanded(!isAcercaDeExpanded)}
                  className="w-full flex items-center justify-between px-4 mb-3 hover:bg-orange-50 rounded-lg transition-colors py-2"
                >
                  <h3 className="text-sm font-bold text-gray-700">
                    Acerca de
                  </h3>
                  {isAcercaDeExpanded ? (
                    <Minus className="w-4 h-4 text-red-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-red-600" />
                  )}
                </button>
                {isAcercaDeExpanded && (
                  <div className="space-y-1">
                    <MenuItem
                      label="¿Cómo funciona Bolivia en un clic?"
                      onClick={() => handleMenuItemClick(() => onNavigate("how-it-works"))}
                      screenId="how-it-works"
                    />
                    <MenuItem
                      label="Videos y tutoriales"
                      onClick={() => handleMenuItemClick(() => window.open("https://www.youtube.com/@boliviaenunclic", "_blank"))}
                    />
                    <MenuItem
                      label="Preguntas frecuentes"
                      onClick={() => handleMenuItemClick(() => window.open("https://boliviaenunclic.com", "_blank"))}
                    />
                    <MenuItem
                      label="Términos y condiciones"
                      onClick={() => handleMenuItemClick(() => window.open("https://boliviaenunclic.com", "_blank"))}
                    />
                  </div>
                )}
              </div>

              {/* Logout Button */}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-2xl font-semibold"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Cerrar Sesión
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}