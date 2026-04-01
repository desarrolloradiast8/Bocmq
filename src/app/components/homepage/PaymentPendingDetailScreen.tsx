import { ArrowLeft, Calendar, CreditCard, FileText } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface PaymentPendingDetailScreenProps {
  paymentId: number;
  onBack: () => void;
  onPayNow: () => void;
}

export function PaymentPendingDetailScreen({ 
  paymentId, 
  onBack, 
  onPayNow 
}: PaymentPendingDetailScreenProps) {
  // Mock data - en producción vendría de props o estado
  const paymentDetails = {
    1: {
      planName: "Premium",
      dueDate: "15 de Diciembre, 2025",
      period: "Anual",
      amount: 500
    },
    2: {
      planName: "Super Business",
      dueDate: "01 de Noviembre, 2025",
      period: "Anual",
      amount: 1200
    }
  };

  const payment = paymentDetails[paymentId as keyof typeof paymentDetails];

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
          <h1 className="text-gray-900 font-semibold text-sm">Detalle de pago pendiente</h1>
        </div>
      </div>

      {/* Payment Detail Card */}
      <Card className="p-4 rounded-2xl shadow-sm border-2 border-red-200">
        {/* Alert Banner */}
        <div className="bg-red-100 border-2 border-red-300 rounded-xl p-2.5 mb-3 flex items-center gap-2">
          <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <p className="text-red-700 font-semibold text-xs">
            Tienes un pago pendiente. Por favor, realiza el pago para continuar disfrutando de los beneficios.
          </p>
        </div>

        {/* Payment Info */}
        <div className="space-y-3">
          <div className="text-center pb-3 border-b-2 border-gray-200">
            <h2 className="text-base font-bold text-gray-900 mb-0.5">Plan {payment.planName}</h2>
            <p className="text-gray-600 text-xs">Información del pago pendiente</p>
          </div>

          {/* Details Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl">
              <p className="text-xs text-gray-600 mb-1 font-medium">Nombre del plan</p>
              <p className="text-sm font-bold text-orange-600">Plan {payment.planName}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl">
              <p className="text-xs text-gray-600 mb-1 font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Vencimiento
              </p>
              <p className="text-xs font-bold text-gray-900">{payment.dueDate}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl">
              <p className="text-xs text-gray-600 mb-1 font-medium">Período</p>
              <p className="text-sm font-bold text-gray-900">{payment.period}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border-2 border-green-200">
              <p className="text-xs text-gray-600 mb-1 font-medium flex items-center gap-1">
                <CreditCard className="w-3 h-3" />
                Valor total
              </p>
              <p className="text-lg font-bold text-green-600">Bs. {payment.amount}</p>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={onPayNow}
            className="w-full py-2 text-center text-orange-600 hover:text-orange-700 font-bold text-sm mt-3 transition-colors flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            Realizar pago
          </button>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-3 mt-2">
            <p className="text-xs text-orange-800">
              <strong>Nota:</strong> Al realizar el pago, se activarán inmediatamente todos los beneficios del plan {payment.planName}.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}