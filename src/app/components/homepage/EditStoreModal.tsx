import { useState } from 'react';
import { X, MoreVertical, Plus, Calendar, Tag, ArrowLeft, Phone, Bookmark, Heart, Share2 } from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

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

interface EditStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeLogo: string;
  storeName: string;
}

export function EditStoreModal({ isOpen, onClose, storeLogo, storeName }: EditStoreModalProps) {
  const [activeTab, setActiveTab] = useState<'products' | 'offers'>('products');
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Mock products data
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      title: 'Reloj Inteligente Premium',
      price: 350,
      description: 'Reloj de última generación con todas las funciones',
      isOnSale: false,
      isAvailable: true,
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      title: 'Auriculares Bluetooth',
      price: 150,
      description: 'Audio de alta calidad',
      isOnSale: true,
      salePrice: 120,
      saleStartDate: '2026-01-20',
      saleEndDate: '2026-02-05',
      category: 'Electrónica',
      isAvailable: true,
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
      title: 'Cámara Profesional',
      price: 800,
      description: 'Cámara DSLR profesional',
      isOnSale: true,
      salePrice: 650,
      saleStartDate: '2026-01-25',
      saleEndDate: '2026-02-02',
      category: 'Fotografía',
      isAvailable: true,
    },
  ]);

  const categories = [
    'Electrónica',
    'Ropa y Moda',
    'Alimentos',
    'Hogar',
    'Deportes',
    'Salud y Belleza',
    'Juguetes',
    'Libros',
    'Automotriz',
    'Tecnología',
    'Servicios',
    'Fotografía',
  ];

  const handleDeleteProduct = (productId: string) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      setProducts(products.filter((p) => p.id !== productId));
      setShowMenu(null);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowProductForm(true);
    setShowMenu(null);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const calculateDaysRemaining = (endDate: string) => {
    const today = new Date('2026-01-28');
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const onSaleProducts = products.filter((p) => p.isOnSale);
  const regularProducts = products.filter((p) => !p.isOnSale);

  if (!isOpen) return null;

  if (viewingProduct) {
    return (
      <ProductDetailModal
        product={viewingProduct}
        onClose={() => setViewingProduct(null)}
        storeLogo={storeLogo}
        storeName={storeName}
        allProducts={products}
        onShowAllProducts={() => {
          setShowAllProducts(true);
          setViewingProduct(null);
        }}
      />
    );
  }

  if (showProductForm) {
    return <ProductForm
      storeLogo={storeLogo}
      storeName={storeName}
      product={editingProduct}
      onClose={() => setShowProductForm(false)}
      onSave={(product) => {
        if (editingProduct) {
          setProducts(products.map((p) => (p.id === product.id ? product : p)));
        } else {
          setProducts([...products, { ...product, id: Date.now().toString() }]);
        }
        setShowProductForm(false);
      }}
      categories={categories}
      isFromOffersTab={activeTab === 'offers'}
    />;
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex">
      {/* Modal Content - Margen ajustado para no chocar con sidebar */}
      <div className="flex-1 ml-0 sm:ml-52 md:ml-56 lg:ml-60 xl:ml-64 mt-16 sm:mt-20 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden flex flex-col rounded-tl-2xl shadow-2xl">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-2 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-lg transition-all flex items-center gap-1 shadow-md hover:shadow-lg text-xs"
              >
                <ArrowLeft className="w-3 h-3" />
                Volver
              </button>
              <div className="flex items-center gap-1.5">
                <img
                  src={storeLogo}
                  alt={storeName}
                  className="w-6 h-6 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h2 className="text-xs font-bold text-gray-800">{storeName}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs - FILTROS */}
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-2 py-2">
            <div className="flex items-center justify-between">
              {/* Filtros centrados */}
              <div className="flex gap-3 sm:gap-4 justify-center flex-1">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`py-1.5 px-2 transition-all text-xs relative ${
                    activeTab === 'products'
                      ? 'text-orange-600 font-bold'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  Productos
                  {activeTab === 'products' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('offers')}
                  className={`py-1.5 px-2 transition-all text-xs relative ${
                    activeTab === 'offers'
                      ? 'text-orange-600 font-bold'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  Ofertas
                  {activeTab === 'offers' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                  )}
                </button>
              </div>
              
              {/* Botón Agregar */}
              <button
                onClick={handleAddProduct}
                className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-xs font-bold rounded-lg flex items-center gap-0.5 shadow-md hover:shadow-lg transition-all"
              >
                <Plus className="w-3 h-3" />
                +
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-2 py-2">
            {/* Products Grid */}
            {activeTab === 'products' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {regularProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-orange-300"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-32 sm:h-40 object-cover cursor-pointer"
                        onClick={() => setViewingProduct(product)}
                      />
                      <div className="absolute top-1 right-1">
                        <div className="relative">
                          <button
                            onClick={() =>
                              setShowMenu(showMenu === product.id ? null : product.id)
                            }
                            className="bg-white/95 rounded-full p-1 shadow-md hover:bg-white transition-all"
                          >
                            <MoreVertical className="w-4 h-4 text-gray-700" />
                          </button>
                          {showMenu === product.id && (
                            <>
                              <div
                                className="fixed inset-0 z-10"
                                onClick={() => setShowMenu(null)}
                              />
                              <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-1 w-32 z-20">
                                <button
                                  onClick={() => handleEditProduct(product)}
                                  className="w-full px-3 py-1.5 text-left text-xs font-semibold hover:bg-orange-50 text-gray-700 transition-colors flex items-center gap-1.5"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                  Editar
                                </button>
                                <button
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="w-full px-3 py-1.5 text-left text-xs font-semibold hover:bg-red-50 text-red-600 transition-colors flex items-center gap-1.5"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Borrar
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-2 leading-tight">{product.title}</h3>
                      <p className="text-orange-600 font-bold text-sm">Bs. {product.price}</p>
                      {!product.isAvailable && (
                        <div className="mt-1 text-xs text-gray-500">No disponible</div>
                      )}
                    </div>
                  </div>
                ))}
                {regularProducts.length === 0 && (
                  <div className="col-span-full text-center py-10">
                    <div className="inline-block p-3 bg-gray-100 rounded-full mb-2">
                      <Plus className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">No tienes productos</h3>
                    <p className="text-xs text-gray-500">Agrega productos para tu tienda</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {onSaleProducts.map((product) => {
                  const daysRemaining = product.saleEndDate
                    ? calculateDaysRemaining(product.saleEndDate)
                    : 0;

                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-orange-200 hover:border-orange-400"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-32 sm:h-40 object-cover cursor-pointer"
                          onClick={() => setViewingProduct(product)}
                        />
                        <div className="absolute top-1 right-1">
                          <div className="relative">
                            <button
                              onClick={() =>
                                setShowMenu(showMenu === product.id ? null : product.id)
                              }
                              className="bg-white/95 rounded-full p-1 shadow-md hover:bg-white transition-all"
                            >
                              <MoreVertical className="w-4 h-4 text-gray-700" />
                            </button>
                            {showMenu === product.id && (
                              <>
                                <div
                                  className="fixed inset-0 z-10"
                                  onClick={() => setShowMenu(null)}
                                />
                                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-1 w-32 z-20">
                                  <button
                                    onClick={() => handleEditProduct(product)}
                                    className="w-full px-3 py-1.5 text-left text-xs font-semibold hover:bg-orange-50 text-gray-700 transition-colors flex items-center gap-1.5"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Editar
                                  </button>
                                  <button
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="w-full px-3 py-1.5 text-left text-xs font-semibold hover:bg-red-50 text-red-600 transition-colors flex items-center gap-1.5"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Borrar
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="absolute top-1 left-1 bg-red-600 text-white px-1.5 py-0.5 rounded text-xs font-bold shadow-md flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {daysRemaining}d
                        </div>
                      </div>
                      <div className="p-2">
                        <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-2 leading-tight">{product.title}</h3>
                        <div className="flex items-baseline gap-1">
                          <p className="text-orange-600 font-bold text-sm">
                            Bs. {product.salePrice}
                          </p>
                          <p className="text-gray-400 line-through text-xs">
                            {product.price}
                          </p>
                        </div>
                        <div className="mt-0.5 text-xs text-green-600 font-semibold">
                          -{((product.price - (product.salePrice || 0)) / product.price * 100).toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  );
                })}
                {onSaleProducts.length === 0 && (
                  <div className="col-span-full text-center py-10">
                    <div className="inline-block p-3 bg-orange-100 rounded-full mb-2">
                      <Tag className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">No tienes ofertas</h3>
                    <p className="text-xs text-gray-500">Agrega ofertas para tu tienda</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProductFormProps {
  storeLogo: string;
  storeName: string;
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
  categories: string[];
  isFromOffersTab: boolean;
}

function ProductForm({
  storeLogo,
  storeName,
  product,
  onClose,
  onSave,
  categories,
  isFromOffersTab,
}: ProductFormProps) {
  const [formData, setFormData] = useState<Product>(
    product || {
      id: '',
      image: '',
      title: '',
      price: 0,
      description: '',
      isOnSale: isFromOffersTab,
      salePrice: 0,
      saleStartDate: '',
      saleEndDate: '',
      category: '',
      isAvailable: true,
    }
  );

  const [selectedImages, setSelectedImages] = useState<string[]>(
    product?.image ? [product.image] : []
  );

  const handleAddImage = () => {
    // Simular selección de imagen
    const mockImages = [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
    ];
    const randomImage = mockImages[Math.floor(Math.random() * mockImages.length)];
    setSelectedImages([...selectedImages, randomImage]);
    if (selectedImages.length === 0) {
      setFormData({ ...formData, image: randomImage });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productToSave = {
      ...formData,
      image: selectedImages[0] || formData.image,
    };
    onSave(productToSave);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex">
      {/* Modal Content - Margen ajustado para no chocar con sidebar */}
      <div className="flex-1 ml-0 sm:ml-52 md:ml-56 lg:ml-60 xl:ml-64 mt-16 sm:mt-20 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-y-auto rounded-tl-2xl shadow-2xl flex flex-col">
        {/* Header - BOTÓN VOLVER ATRÁS */}
        <div className="bg-white shadow-md border-b-2 border-gray-200">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 py-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          <form onSubmit={handleSubmit}>
            <div className="max-w-3xl mx-auto px-3 sm:px-4 py-4">
              {/* Store Info Section - COMPACTA Y ESTÉTICA */}
              <div className="mb-4 bg-white rounded-xl p-3 shadow-sm border border-gray-200 flex items-center gap-3">
                <img
                  src={storeLogo}
                  alt={storeName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-500 shadow-sm"
                />
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium">Tu perfil</p>
                  <h2 className="text-gray-800 text-base font-bold">{storeName}</h2>
                </div>
              </div>

              {/* Images Section */}
              <div className="mb-3 bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-800 text-sm mb-2">Fotos del producto</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-2">
                  {selectedImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img src={img} alt={`Producto ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== index))}
                        className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="aspect-square rounded-lg border-2 border-dashed border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 flex flex-col items-center justify-center gap-1 transition-all transform hover:scale-105"
                  >
                    <Plus className="w-5 h-5 text-orange-500" />
                    <span className="text-xs text-orange-600 font-bold">Añadir</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Agrega más fotos para ilustrar tu producto mejor
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                {/* Title and Price - EN LA MISMA LÍNEA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Title - Izquierda */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                    <label className="block text-xs font-bold text-gray-800 mb-2">
                      Título de lo que deseas ofrecer
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-gray-800 transition-colors text-sm"
                      placeholder="Ej: Reloj Inteligente Premium"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Producto, servicio, descuento o promoción</p>
                  </div>

                  {/* Price - Derecha */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                    <label className="block text-xs font-bold text-gray-800 mb-2">Precio</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm">Bs.</span>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                        className="w-full pl-12 pr-3 py-2 border border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-gray-800 font-bold transition-colors text-sm"
                        placeholder="0"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* On Sale Toggle - FUERA DE LA CARD, ARRIBA */}
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.isOnSale}
                      onChange={(e) =>
                        setFormData({ ...formData, isOnSale: e.target.checked })
                      }
                      className="w-5 h-5 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Este producto está en oferta</span>
                      <span className="text-xs text-gray-500 ml-2">(Activa descuentos)</span>
                    </div>
                    <Tag className={`w-5 h-5 transition-colors ${formData.isOnSale ? 'text-orange-500' : 'text-gray-300'}`} />
                  </label>
                </div>

                {/* Sale Fields (conditional) */}
                {formData.isOnSale && (
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 shadow-sm border border-orange-300">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-5 h-5 text-orange-600" />
                      <h3 className="font-bold text-gray-800">Detalles de la oferta</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Precio en oferta
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-600 font-bold text-sm">Bs.</span>
                          <input
                            type="number"
                            value={formData.salePrice}
                            onChange={(e) =>
                              setFormData({ ...formData, salePrice: Number(e.target.value) })
                            }
                            className="w-full pl-12 pr-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white font-bold text-orange-600"
                            placeholder="0"
                            required={formData.isOnSale}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">
                            Fecha de inicio
                          </label>
                          <input
                            type="date"
                            value={formData.saleStartDate}
                            onChange={(e) =>
                              setFormData({ ...formData, saleStartDate: e.target.value })
                            }
                            className="w-full px-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white text-sm"
                            required={formData.isOnSale}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">
                            Fecha de finalización
                          </label>
                          <input
                            type="date"
                            value={formData.saleEndDate}
                            onChange={(e) =>
                              setFormData({ ...formData, saleEndDate: e.target.value })
                            }
                            className="w-full px-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white text-sm"
                            required={formData.isOnSale}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Selecciona una categoría
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3 py-2.5 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none bg-white text-sm"
                          required={formData.isOnSale}
                        >
                          <option value="">Selecciona una categoría</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Agrega una descripción
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none text-gray-800 transition-colors"
                    rows={4}
                    placeholder="Describe tu producto o servicio de manera detallada..."
                  />
                </div>

                {/* Availability Toggle */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={formData.isAvailable}
                    onChange={(e) =>
                      setFormData({ ...formData, isAvailable: e.target.checked })
                    }
                    className="w-5 h-5 text-green-500 border-2 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-gray-800 block">Producto disponible</span>
                    <span className="text-xs text-gray-500">Los clientes podrán ver y comprar este producto</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${formData.isAvailable ? 'bg-green-500' : 'bg-gray-300'}`} />
                </div>

                {/* Save Button */}
                <button
                  type="submit"
                  className="w-full py-3 text-orange-600 hover:text-orange-700 font-bold text-sm transition-all text-center"
                >
                  Guardar producto
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}