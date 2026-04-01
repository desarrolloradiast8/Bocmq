import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
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

interface OrderCheckoutScreenProps {
  cartItems: CartItem[];
  storePhone: string;
  storeName: string;
  onBack: () => void;
}

export const OrderCheckoutScreen: React.FC<OrderCheckoutScreenProps> = ({
  cartItems,
  storePhone,
  storeName,
  onBack
}) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    comment: "",
    deliveryType: "delivery" // "delivery" or "pickup"
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleSubmit = () => {
    // Validate form
    if (!formData.name || !formData.city) {
      alert("Por favor completa los campos obligatorios");
      return;
    }

    if (formData.deliveryType === "delivery" && !formData.address) {
      alert("Por favor ingresa una dirección de entrega");
      return;
    }

    // Build WhatsApp message
    let message = `¡Hola ${storeName}! Quiero hacer un pedido:\\n\\n`;
    message += `*DETALLE DEL PEDIDO:*\\n`;
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.product.name} - Bs ${item.product.price * item.quantity}\\n`;
    });
    message += `\\n*Subtotal: Bs ${subtotal.toFixed(2)}*\\n\\n`;
    message += `*MIS DATOS:*\\n`;
    message += `Nombre: ${formData.name}\\n`;
    message += `Ciudad: ${formData.city}\\n`;
    if (formData.deliveryType === "delivery") {
      message += `Dirección: ${formData.address}\\n`;
      message += `Tipo de entrega: Envío a domicilio\\n`;
    } else {
      message += `Tipo de entrega: Paso a retirar\\n`;
    }
    if (formData.comment) {
      message += `Comentarios: ${formData.comment}\\n`;
    }
    message += `\\n¡Gracias!`;

    // Open WhatsApp
    window.open(`https://wa.me/${storePhone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
        {/* Order Detail */}
        <Card className="rounded-2xl overflow-hidden mb-4">
          <div className="p-4">
            <h3 className="font-bold text-base mb-3">Detalle del pedido</h3>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-semibold text-gray-900">
                    Bs {(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-red-600">Bs {subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Customer Data Form */}
        <Card className="rounded-2xl overflow-hidden mb-4">
          <div className="p-4">
            <h3 className="font-bold text-base mb-4">Completa tus datos</h3>
            
            <div className="space-y-3">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-3 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Ciudad *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="Ej: Cochabamba"
                  className="w-full px-3 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Delivery Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Tipo de entrega *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, deliveryType: "pickup"})}
                    className={`py-2.5 px-3 text-sm rounded-xl border-2 transition-all font-semibold ${
                      formData.deliveryType === "pickup"
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Paso a retirar
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, deliveryType: "delivery"})}
                    className={`py-2.5 px-3 text-sm rounded-xl border-2 transition-all font-semibold ${
                      formData.deliveryType === "delivery"
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Envío a domicilio
                  </button>
                </div>
              </div>

              {/* Address - Only shown for delivery */}
              {formData.deliveryType === "delivery" && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Ej: Av. Heroínas #1234"
                    className="w-full px-3 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              )}

              {/* Comment */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Comentario adicional sobre su pedido
                </label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  placeholder="Ej: Sin cebolla, por favor"
                  rows={3}
                  className="w-full px-3 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 text-center text-orange-600 hover:text-orange-700 font-semibold text-base flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Continuar con WhatsApp
        </button>
      </div>
    </div>
  );
};

// Add MessageCircle icon component inline if not imported
const MessageCircle: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);