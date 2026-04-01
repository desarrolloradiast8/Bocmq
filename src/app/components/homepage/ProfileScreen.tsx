import { useState } from "react";
import { 
  ArrowLeft, 
  Camera, 
  Edit, 
  ChevronRight,
  User,
  Heart,
  TrendingUp,
  DollarSign,
  Briefcase,
  CreditCard,
  Users,
  ShieldCheck,
  HelpCircle,
  Star,
  FileText,
  MessageCircle,
  Youtube,
  LogOut
} from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { AccountInfoScreen } from "@/app/components/homepage/AccountInfoScreen";

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
}

interface ProfileDetailScreenProps {
  title: string;
  onBack: () => void;
}

function ProfileDetailScreen({ title, onBack }: ProfileDetailScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Card className="p-6 rounded-3xl">
          <p className="text-gray-600">Contenido de {title}</p>
        </Card>
      </div>
    </div>
  );
}

export function ProfileScreen({ onBack, onLogout }: ProfileScreenProps) {
  const [activeDetailScreen, setActiveDetailScreen] = useState<string | null>(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState<number | null>(null);

  // Mostrar AccountInfoScreen cuando se selecciona "Plan y Pagos" o "account-info"
  if (activeDetailScreen === "Plan y Pagos" || activeDetailScreen === "account-info") {
    return (
      <AccountInfoScreen
        onBack={() => setActiveDetailScreen(null)}
        onViewPendingPayment={(paymentId) => {
          setSelectedPaymentId(paymentId);
          setActiveDetailScreen("Payment Pending Detail");
        }}
      />
    );
  }

  if (activeDetailScreen) {
    return (
      <ProfileDetailScreen
        title={activeDetailScreen}
        onBack={() => setActiveDetailScreen(null)}
      />
    );
  }

  const MenuItem = ({ icon: Icon, label, badge, onClick }: any) => (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full p-4 hover:bg-gray-50 rounded-2xl transition-colors group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
          <Icon className="w-5 h-5 text-orange-600" />
        </div>
        <span className="font-medium text-gray-900 text-sm">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            {badge}
          </span>
        )}
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="mb-4 p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-orange-600" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera className="w-4 h-4 text-orange-600" />
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">Flavia Lozada</h1>
              <p className="text-white/90 text-sm">flavia.lozada@email.com</p>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-xl transition-colors">
              <Edit className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Cuentas Section */}
        <Card className="p-6 rounded-3xl shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Cuentas</h2>
          <div className="space-y-2">
            <MenuItem
              icon={Briefcase}
              label="Mis Perfiles Comerciales"
              onClick={() => setActiveDetailScreen("Mis Perfiles Comerciales")}
            />
            <MenuItem
              icon={Heart}
              label="Mis Favoritos"
              onClick={() => setActiveDetailScreen("Mis Favoritos")}
            />
            <MenuItem
              icon={TrendingUp}
              label="Déjanos ayudarte a exportar"
              onClick={() => setActiveDetailScreen("Ayuda para Exportar")}
            />
            <MenuItem
              icon={DollarSign}
              label="¿Buscas inversor para tu proyecto?"
              onClick={() => window.open("https://wa.me/59178787878?text=Hola,%20busco%20un%20inversor%20para%20mi%20proyecto", "_blank")}
            />
            <MenuItem
              icon={DollarSign}
              label="¿Buscas dónde invertir?"
              onClick={() => window.open("https://wa.me/59178787878?text=Hola,%20busco%20oportunidades%20de%20inversión", "_blank")}
            />
          </div>
        </Card>

        {/* Información de tu cuenta Section */}
        <Card className="p-6 rounded-3xl shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Información de tu cuenta</h2>
          <div className="space-y-2">
            <MenuItem
              icon={Star}
              label="GRATIS (anual)"
              badge="Activo"
              onClick={() => setActiveDetailScreen("Plan y Pagos")}
            />
            <MenuItem
              icon={Users}
              label="Cambiar de cuenta"
              onClick={() => setActiveDetailScreen("Cambiar de Cuenta")}
            />
            <MenuItem
              icon={CreditCard}
              label="Información de facturación"
              onClick={() => setActiveDetailScreen("Información de Facturación")}
            />
            <MenuItem
              icon={ShieldCheck}
              label="Solicita verificación"
              onClick={() => setActiveDetailScreen("Solicitar Verificación")}
            />
          </div>
        </Card>

        {/* Soporte Section */}
        <Card className="p-6 rounded-3xl shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Soporte</h2>
          <div className="space-y-2">
            <MenuItem
              icon={MessageCircle}
              label="Atención al cliente"
              onClick={() => setActiveDetailScreen("Atención al Cliente")}
            />
            <MenuItem
              icon={Star}
              label="¿Te gustaría destacar tu negocio o tus servicios?"
              onClick={() => setActiveDetailScreen("Destacar Negocio")}
            />
            <MenuItem
              icon={TrendingUp}
              label="Multiplica tus ganancias con nosotros"
              onClick={() => setActiveDetailScreen("Multiplicar Ganancias")}
            />
            <MenuItem
              icon={Briefcase}
              label="Beneficios para anunciantes"
              onClick={() => setActiveDetailScreen("Beneficios Anunciantes")}
            />
            <MenuItem
              icon={User}
              label="Beneficios para usuarios"
              onClick={() => setActiveDetailScreen("Beneficios Usuarios")}
            />
          </div>
        </Card>

        {/* Acerca de Section */}
        <Card className="p-6 rounded-3xl shadow-sm">
          <h2 className="text-lg font-bold text-red-600 mb-4">Acerca de</h2>
          <div className="space-y-2">
            <MenuItem
              icon={HelpCircle}
              label="¿Cómo funciona Bolivia en un clic?"
              onClick={() => setActiveDetailScreen("Cómo Funciona")}
            />
            <MenuItem
              icon={Youtube}
              label="Videos y tutoriales"
              onClick={() => setActiveDetailScreen("Videos y Tutoriales")}
            />
            <MenuItem
              icon={HelpCircle}
              label="Preguntas frecuentes"
              onClick={() => setActiveDetailScreen("Preguntas Frecuentes")}
            />
            <MenuItem
              icon={FileText}
              label="Términos y condiciones"
              onClick={() => setActiveDetailScreen("Términos y Condiciones")}
            />
          </div>
        </Card>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-2xl text-lg font-semibold"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Cerrar Sesión
        </Button>

        {/* App Version */}
        <p className="text-center text-sm text-gray-500 pb-8">
          Bolivia en un clic v1.0.0
        </p>
      </div>
    </div>
  );
}