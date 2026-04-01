import React from "react";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Store {
  logo: string;
  name: string;
  categories: string[];
}

interface OrderReviewScreenProps {
  cartItems: CartItem[];
  store: Store;
  onBack: () => void;
  onContinue: () => void;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const OrderReviewScreen: React.FC<OrderReviewScreenProps> = ({
  cartItems,
  store,
  onBack,
  onContinue,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 py-2">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-800" />
            </button>
            <h2 className="text-gray-900 font-semibold text-sm">Mi pedido</h2>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Store Info */}
        <Card className="rounded-2xl overflow-hidden mb-4">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={store.logo} 
                alt={store.name} 
                className="w-14 h-14 rounded-xl object-cover flex-shrink-0" 
              />
              <div>
                <h3 className="font-bold text-base">{store.name}</h3>
                <p className="text-xs text-gray-600">{store.categories.join(", ")}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Cart Items */}
        <div className="space-y-3 mb-4">
          {cartItems.map((item) => (
            <Card key={item.product.id} className="rounded-2xl overflow-hidden">
              <div className="p-3">
                <div className="flex gap-3">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm mb-1 line-clamp-2">{item.product.name}</h4>
                    <p className="text-red-600 font-bold text-base mb-2">Bs {item.product.price}</p>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-1.5 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>
                        <span className="font-bold text-base min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Subtotal */}
        <Card className="rounded-2xl overflow-hidden mb-4">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">Subtotal:</span>
              <span className="font-bold text-xl text-red-600">Bs {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          disabled={cartItems.length === 0}
          className="w-full py-3 text-center text-orange-600 hover:text-orange-700 font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};