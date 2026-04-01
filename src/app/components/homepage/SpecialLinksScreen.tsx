import { useState } from "react";
import { ArrowLeft, ShoppingCart, Tag, Menu as MenuIcon, Package, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { DeliveryServiceScreen } from "@/app/components/homepage/DeliveryServiceScreen";

interface SpecialLinksScreenProps {
  onBack: () => void;
}

export function SpecialLinksScreen({ onBack }: SpecialLinksScreenProps) {
  const [playStore, setPlayStore] = useState("");
  const [offers, setOffers] = useState("");
  const [ecommerce, setEcommerce] = useState("");
  const [menu, setMenu] = useState("");
  const [catalog, setCatalog] = useState("");
  const [hasDelivery, setHasDelivery] = useState(false);

  const handleSave = () => {
    alert("Enlaces especiales guardados");
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-20 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <h1 className="text-gray-900 font-bold text-sm">Botones</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-gray-700 mb-6">
          Agrega enlaces a las páginas externas de tu negocio a continuación.
        </p>

        <div className="space-y-5">
          {/* Play Store */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
              </div>
              <label className="font-semibold text-gray-900">Enlaza tu aplicación</label>
            </div>
            <input
              type="url"
              value={playStore}
              onChange={(e) => setPlayStore(e.target.value)}
              placeholder="https://play.google.com/store/apps/..."
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Offers Link */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <label className="font-semibold text-gray-900">Enlace a tus páginas de ofertas</label>
            </div>
            <input
              type="url"
              value={offers}
              onChange={(e) => setOffers(e.target.value)}
              placeholder="https://www.ejemplo.com/ofertas"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* E-commerce Link */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <label className="font-semibold text-gray-900">Enlace a tu e-commerce</label>
            </div>
            <input
              type="url"
              value={ecommerce}
              onChange={(e) => setEcommerce(e.target.value)}
              placeholder="https://www.ejemplo.com/tienda"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Menu Link */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                <MenuIcon className="w-5 h-5 text-white" />
              </div>
              <label className="font-semibold text-gray-900">Enlace a tu menú</label>
            </div>
            <input
              type="url"
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
              placeholder="https://www.ejemplo.com/menu"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Catalog Link */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <label className="font-semibold text-gray-900">Enlace a tu catálogo de productos</label>
            </div>
            <input
              type="url"
              value={catalog}
              onChange={(e) => setCatalog(e.target.value)}
              placeholder="https://www.ejemplo.com/catalogo"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
            />
          </div>

          {/* Delivery Service */}
          <div>
            <button
              onClick={() => setHasDelivery(!hasDelivery)}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                hasDelivery 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 hover:border-orange-500 hover:bg-orange-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Cuenta con servicio a domicilio?</span>
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                  hasDelivery ? 'bg-orange-600' : 'bg-gray-200'
                }`}>
                  {hasDelivery && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            className="text-orange-600 hover:text-orange-700 font-semibold text-base transition-colors"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}