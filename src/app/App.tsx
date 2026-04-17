import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Imports de tus componentes
import { LandingPage } from "@/app/components/LandingPage";
import { Login } from "@/app/components/Login";
import { Homepage } from "@/app/components/Homepage";
import { FavoritesProvider } from "@/app/components/homepage/FavoritesContext";
import { SelectInterests } from "@/app/components/onboarding/SelectInterests";
import { BusinessOrVisitor } from "@/app/components/onboarding/BusinessOrVisitor";
import { CreateBusinessOnboarding } from "@/app/components/onboarding/CreateBusinessOnboarding";
import { ProtectedRoute } from "./components/ProtectedRoute";

/**
 * COMPONENTES WRAPPER
 */

// Maneja la navegación desde la Landing Page
function LandingPageWrapper({ setSelectedCity, setPendingAction }: any) {
  const navigate = useNavigate();
  return (
    <LandingPage
      onLoginClick={() => navigate("/login")}
      onRegisterClick={() => navigate("/register")}
      onCityClick={(city: string) => {
        setSelectedCity(city);
        navigate("/login");
      }}
      onActionClick={(action: any) => {
        setPendingAction(action);
        navigate("/login");
      }}
    />
  );
}

// Maneja el flujo de Login y Registro
function LoginPageWrapper({
  mode,
  onBackToLanding,
}: {
  mode: "login" | "register";
  onBackToLanding: () => void;
}) {
  const navigate = useNavigate();
  return (
    <Login
      initialMode={mode}
      onBack={onBackToLanding}
      onLogin={() => {
        // Si viene de registro, lo mandamos a intereses, si no, al home
        if (mode === "register") {
          navigate("/select-interests");
        } else {
          navigate("/home");
        }
      }}
    />
  );
}

/**
 * COMPONENTE DE RUTAS (Aquí es donde vive el navigate)
 */
function AppRoutes({
  selectedCity,
  setSelectedCity,
  pendingAction,
  setPendingAction,
  setSelectedInterests,
}: any) {
  const navigate = useNavigate();

  // Función para resetear estados al volver al inicio
  const handleResetNavigation = () => {
    setSelectedCity("");
    setPendingAction("");
    setSelectedInterests([]);
    navigate("/", { replace: true });
  };

  return (
    <Routes>
      {/* Ruta Inicial: Landing Page */}
      <Route
        path="/"
        element={
          <LandingPageWrapper
            setSelectedCity={setSelectedCity}
            setPendingAction={setPendingAction}
          />
        }
      />

      {/* Rutas de Autenticación */}
      <Route
        path="/login"
        element={
          <LoginPageWrapper
            mode="login"
            onBackToLanding={handleResetNavigation}
          />
        }
      />
      <Route
        path="/register"
        element={
          <LoginPageWrapper
            mode="register"
            onBackToLanding={handleResetNavigation}
          />
        }
      />

      {/* Rutas de Onboarding */}
      <Route
        path="/select-interests"
        element={
          <SelectInterests
            onComplete={(interests: string[]) => {
              setSelectedInterests(interests);
              navigate("/business-or-visitor");
            }}
          />
        }
      />
      <Route
        path="/business-or-visitor"
        element={
          <BusinessOrVisitor
            onRegisterBusiness={() => navigate("/onboarding")}
            onEnterAsVisitor={() => navigate("/home")}
          />
        }
      />
      <Route
        path="/onboarding"
        element={
          <CreateBusinessOnboarding
            onComplete={() => navigate("/home")}
            onSkip={() => navigate("/home")}
          />
        }
      />

      {/* Ruta Principal de la Aplicación (Feed) */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Homepage
              initialCityFilter={selectedCity}
              initialAction={pendingAction}
            />
          </ProtectedRoute>
        }
      />

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/**
 * COMPONENTE PRINCIPAL APP
 */
export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [pendingAction, setPendingAction] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const baseName = import.meta.env.BASE_URL;

  return (
    <FavoritesProvider>
      <Router basename={baseName}>
        <AppRoutes
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          pendingAction={pendingAction}
          setPendingAction={setPendingAction}
          setSelectedInterests={setSelectedInterests}
        />
      </Router>
    </FavoritesProvider>
  );
}