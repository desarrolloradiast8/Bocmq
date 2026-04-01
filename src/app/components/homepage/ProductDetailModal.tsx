import { ArrowLeft, Phone, Bookmark, Heart, Share2 } from 'lucide-react';

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  isOnSale: boolean;
  salePrice?: number;
  saleStartDate?: string;
  saleEndDate?: string;
  category?: string;
  isAvailable: boolean;
}

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  storeLogo: string;
  storeName: string;
  allProducts: Product[];
  onShowAllProducts: () => void;
}

export function ProductDetailModal({
  product,
  onClose,
  storeLogo,
  storeName,
  allProducts,
  onShowAllProducts,
}: ProductDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex">
      {/* Modal Content - Margen ajustado para no chocar con sidebar */}
      <div className="flex-1 ml-0 sm:ml-52 md:ml-56 lg:ml-60 xl:ml-64 mt-16 sm:mt-20 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-y-auto rounded-tl-2xl shadow-2xl">
        <div className="max-w-4xl mx-auto w-full px-3 py-6">
          {/* BOTÓN VOLVER ATRÁS */}
          <button
            type="button"
            onClick={onClose}
            className="mb-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg font-bold transition-all shadow-md text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver
          </button>

          {/* Main Content - FOTO IZQUIERDA, INFO DERECHA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* FOTO DEL PRODUCTO - IZQUIERDA */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[350px] object-cover"
              />
            </div>

            {/* INFORMACIÓN DEL PRODUCTO - DERECHA */}
            <div className="space-y-4">
              {/* Nombre del producto */}
              <div>
                <h1 className="text-xl font-bold text-gray-800 mb-1">{product.title}</h1>
              </div>

              {/* Precio */}
              <div className="flex items-baseline gap-2">
                {product.isOnSale && product.salePrice ? (
                  <>
                    <p className="text-2xl font-bold text-orange-600">Bs. {product.salePrice}</p>
                    <p className="text-lg text-gray-400 line-through">Bs. {product.price}</p>
                  </>
                ) : (
                  <p className="text-2xl font-bold text-orange-600">Bs. {product.price}</p>
                )}
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">Descripción</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Icono de llamar */}
              <div>
                <button className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all shadow-md">
                  <Phone className="w-5 h-5" />
                </button>
              </div>

              {/* Logo de perfil, nombre del negocio, categoría */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={storeLogo}
                    alt={storeName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-sm"
                  />
                  <div className="flex-1">
                    <h2 className="text-base font-bold text-gray-800">{storeName}</h2>
                    {product.category && (
                      <p className="text-xs text-gray-500">Categoría: {product.category}</p>
                    )}
                  </div>
                </div>

                {/* Más productos de esta tienda */}
                <button
                  onClick={onShowAllProducts}
                  className="text-orange-600 hover:text-orange-700 font-bold text-xs transition-all"
                >
                  Más productos de esta tienda →
                </button>
              </div>

              {/* Botones: Me interesa, Favoritos, Compartir */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                <button className="flex items-center gap-1.5 text-gray-800 hover:text-orange-600 transition-colors font-medium text-sm">
                  <Bookmark className="w-4 h-4" />
                  <span>Me interesa</span>
                </button>
                <div className="h-5 w-px bg-gray-300"></div>
                <button className="flex items-center gap-1.5 text-gray-800 hover:text-orange-600 transition-colors font-medium text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Favoritos</span>
                </button>
                <div className="h-5 w-px bg-gray-300"></div>
                <button className="flex items-center gap-1.5 text-gray-800 hover:text-orange-600 transition-colors font-medium text-sm">
                  <Share2 className="w-4 h-4" />
                  <span>Compartir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}