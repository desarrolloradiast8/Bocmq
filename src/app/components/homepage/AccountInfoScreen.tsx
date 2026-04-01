import { useState } from "react";
import { ArrowLeft, Calendar, CreditCard, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface AccountInfoScreenProps {
  onBack: () => void;
  onViewPendingPayment: (paymentId: number) => void;
}

interface PendingPayment {
  id: number;
  planName: string;
  dueDate: string;
  period: string;
  amount: number;
}

export function AccountInfoScreen({ onBack, onViewPendingPayment }: AccountInfoScreenProps) {
  const [currentPlan] = useState({
    name: "GRATIS",
    dueDate: "12 de jul. 2022",
    period: "Anual",
    value: "Bs. 0",
    startDate: "12 de jul. 2021",
    status: "Activo",
    renewalType: "Automático"
  });

  const [pendingPayments] = useState<PendingPayment[]>([
    {
      id: 1,
      planName: "Premium",
      dueDate: "15 de Diciembre, 2025",
      period: "Anual",
      amount: 500
    },
    {
      id: 2,
      planName: "Super Business",
      dueDate: "01 de Noviembre, 2025",
      period: "Anual",
      amount: 1200
    }
  ]);

  return (
    <div className="bg-gray-50 min-h-screen pb-8">      
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {/* Título de la sección con botón volver */}
        <div className="mb-6 bg-white p-4 rounded-2xl shadow-sm">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 mb-3 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Mi cuenta</h1>
          <p className="text-gray-600 text-sm">Información de tu cuenta - Gestiona tu plan, pagos y configuración</p>
        </div>

        {/* Current Plan - Destacado */}
        <Card className="p-5 rounded-2xl shadow-lg border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Plan actual</h2>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">{currentPlan.status}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="text-gray-600 text-xs block mb-1">Tipo de plan</span>
                <span className="text-lg font-bold text-orange-600">{currentPlan.name}</span>
              </div>
              
              <div>
                <span className="text-gray-600 text-xs block mb-1">Valor mensual</span>
                <span className="text-lg font-bold text-green-600">{currentPlan.value}</span>
              </div>
              
              <div>
                <span className="text-gray-600 text-xs block mb-1">Período</span>
                <span className="text-sm font-semibold text-gray-900">{currentPlan.period}</span>
              </div>
              
              <div>
                <span className="text-gray-600 text-xs block mb-1">Vencimiento</span>
                <span className="text-sm font-semibold text-gray-900">{currentPlan.dueDate}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <span className="text-gray-600 text-xs block mb-1">Fecha de inicio</span>
                <span className="text-sm font-semibold text-gray-900">{currentPlan.startDate}</span>
              </div>
              
              <div>
                <span className="text-gray-600 text-xs block mb-1">Renovación</span>
                <span className="text-sm font-semibold text-gray-900">{currentPlan.renewalType}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Pending Payments */}
        {pendingPayments.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-bold text-gray-900">Pendientes de pago</h2>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                {pendingPayments.length}
              </span>
            </div>

            <div className="space-y-3">
              {pendingPayments.map(payment => (
                <Card
                  key={payment.id}
                  className="p-5 rounded-2xl shadow-md border-2 border-red-200 hover:border-red-400 transition-all hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base text-gray-900 mb-1">Plan {payment.planName}</h3>
                        <p className="text-sm text-gray-600 mb-2">Período: {payment.period}</p>
                        
                        <div className="bg-red-50 p-2.5 rounded-lg inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-red-600" />
                          <span className="text-xs font-medium text-gray-700">Vence:</span>
                          <span className="text-xs font-bold text-red-600">{payment.dueDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                      <p className="text-2xl font-bold text-red-600">Bs. {payment.amount}</p>
                      <Button
                        onClick={() => onViewPendingPayment(payment.id)}
                        className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all"
                      >
                        Pagar ahora
                      </Button>
                    </div>
                  </div>

                  {/* Payment Warning */}
                  <div className="mt-4 bg-red-100 border-l-4 border-red-500 p-3 rounded-lg">
                    <p className="text-xs text-red-800">
                      <strong>Importante:</strong> Este pago está pendiente. Completa el pago antes de la fecha de vencimiento para mantener activos los beneficios de tu plan.
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Pending Payments */}
        {pendingPayments.length === 0 && (
          <Card className="p-6 rounded-2xl text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">¡Todo al día!</h3>
            <p className="text-sm text-gray-600 mb-4">No tienes pagos pendientes. Tu cuenta está activa y al corriente.</p>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <p className="text-xs text-green-800">
                Continúa disfrutando de todos los beneficios de tu plan <strong>{currentPlan.name}</strong> hasta el <strong>{currentPlan.dueDate}</strong>.
              </p>
            </div>
          </Card>
        )}

        {/* Payment Methods Info */}
        <Card className="p-5 rounded-2xl shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-orange-600" />
            Métodos de pago aceptados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-xs font-semibold text-gray-700">Tarjeta de crédito</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-xs font-semibold text-gray-700">Tarjeta de débito</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-xs font-semibold text-gray-700">Transferencia</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-xs font-semibold text-gray-700">QR</p>
            </div>
          </div>
        </Card>

        {/* Upgrade Plan CTA */}
        <Card className="p-5 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2">Mejora tu plan y crece más rápido</h3>
              <p className="text-sm text-white/90 mb-4">
                Accede a funciones avanzadas, mayor visibilidad y herramientas exclusivas para impulsar tu negocio.
              </p>
              <Button
                onClick={() => window.open("https://wa.me/59178787878?text=Hola,%20quiero%20mejorar%20mi%20plan", "_blank")}
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-6 py-2 rounded-xl shadow-md transition-all"
              >
                Ver planes Premium
              </Button>
            </div>
          </div>
        </Card>

        {/* Account Info Details */}
        <Card className="p-5 rounded-2xl shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Detalles de la cuenta</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-700">ID de cuenta</span>
              <span className="text-sm font-bold text-gray-900">#BOL-2026-001</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-700">Fecha de registro</span>
              <span className="text-sm font-bold text-gray-900">21 de Enero, 2026</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-700">Tipo de renovación</span>
              <span className="text-sm font-bold text-gray-900">{currentPlan.renewalType}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-700">Estado de verificación</span>
              <span className="text-sm font-bold text-orange-600">Pendiente</span>
            </div>
          </div>
        </Card>

        {/* Help Section */}
        <Card className="p-5 rounded-2xl shadow-sm border-2 border-blue-200 bg-blue-50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">¿Necesitas ayuda con tu cuenta?</h3>
              <p className="text-xs text-gray-700 mb-3">
                Nuestro equipo está disponible para resolver cualquier duda sobre tu plan, pagos o beneficios.
              </p>
              <Button
                onClick={() => window.open("https://wa.me/59178787878?text=Hola,%20necesito%20ayuda%20con%20mi%20cuenta", "_blank")}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg font-semibold"
              >
                Contactar soporte
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
