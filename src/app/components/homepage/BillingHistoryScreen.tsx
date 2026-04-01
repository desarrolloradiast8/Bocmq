import { ArrowLeft, Calendar, CreditCard, AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/app/components/ui/card";

interface BillingHistoryScreenProps {
  onBack: () => void;
  onViewPendingPayment: (paymentId: number) => void;
}

interface BillingItem {
  id: number;
  date: string;
  price: number;
  plan: string;
  paymentDate: string;
  status: "paid" | "pending";
}

export function BillingHistoryScreen({ onBack, onViewPendingPayment }: BillingHistoryScreenProps) {
  const billingHistory: BillingItem[] = [
    {
      id: 1,
      date: "15 de Diciembre, 2025",
      price: 500,
      plan: "Premium",
      paymentDate: "15 de Diciembre, 2025",
      status: "pending"
    },
    {
      id: 2,
      date: "01 de Noviembre, 2025",
      price: 1200,
      plan: "Super Business",
      paymentDate: "01 de Noviembre, 2025",
      status: "pending"
    },
    {
      id: 3,
      date: "21 de Enero, 2025",
      price: 500,
      plan: "Premium",
      paymentDate: "21 de Enero, 2025",
      status: "paid"
    },
    {
      id: 4,
      date: "15 de Octubre, 2024",
      price: 1200,
      plan: "Super Business",
      paymentDate: "15 de Octubre, 2024",
      status: "paid"
    }
  ];

  return (
    <div className="pb-8">
      {/* Header - Compacto y Blanco */}
      <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-800" />
          </button>
          <h1 className="text-gray-900 font-semibold text-sm">Historial de facturación</h1>
        </div>
      </div>

      <div className="space-y-3">
        {/* Billing History List */}
        <div className="space-y-3">
          {billingHistory.map((item) => (
            <Card
              key={item.id}
              onClick={() => {
                if (item.status === "pending") {
                  onViewPendingPayment(item.id);
                }
              }}
              className={`p-4 rounded-2xl shadow-sm border transition-all ${
                item.status === "pending"
                  ? "border-orange-300 hover:border-orange-500 cursor-pointer hover:shadow-lg bg-orange-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.status === "pending" 
                    ? "bg-orange-100" 
                    : "bg-green-100"
                }`}>
                  {item.status === "pending" ? (
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-sm text-gray-900">Plan {item.plan}</h3>
                    {item.status === "pending" && (
                      <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">
                        Pendiente
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-gray-600 mb-0.5">Fecha</p>
                      <p className="font-semibold text-gray-900 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        {item.date}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 mb-0.5">Precio</p>
                      <p className={`text-base font-bold ${
                        item.status === "pending" ? "text-orange-600" : "text-green-600"
                      }`}>
                        Bs. {item.price}
                      </p>
                    </div>
                    
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-gray-600 mb-0.5">
                        {item.status === "pending" ? "Vencimiento" : "Pago realizado"}
                      </p>
                      <p className="font-semibold text-gray-900">{item.paymentDate}</p>
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                {item.status === "paid" && (
                  <div className="hidden sm:block">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {billingHistory.length === 0 && (
          <Card className="p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Sin historial</h3>
            <p className="text-sm text-gray-600">Aún no tienes ningún registro de facturación</p>
          </Card>
        )}
      </div>
    </div>
  );
}