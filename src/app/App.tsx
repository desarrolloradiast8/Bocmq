import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

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
 * Estos componentes ayudan a mantener la lógica de navegación separada del mapa de rutas.
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
function LoginPageWrapper({ mode, onBackToLanding }: { mode: "login" | "register", onBackToLanding: () => void }) {
  const navigate = useNavigate();
  return (
    <Login 
      initialMode={mode} 
      onBack={() => {
        onBackToLanding();
        navigate("/");
      }} 
      onLogin={() => {
        if (mode === "register") {
          navigate("/select-interests");
        } else {
          navigate("/home");
        }
      }} 
    />
  );
}

// Maneja la selección de intereses
function SelectInterestsWrapper({ setSelectedInterests }: any) {
  const navigate = useNavigate();
  return (
    <SelectInterests onComplete={(interests: string[]) => {
      setSelectedInterests(interests);
      navigate("/business-or-visitor");
    }} />
  );
}

// Maneja la decisión entre Negocio o Visitante
function BusinessOrVisitorWrapper() {
  const navigate = useNavigate();
  return (
    <BusinessOrVisitor 
      onRegisterBusiness={() => navigate("/onboarding")}
      onEnterAsVisitor={() => navigate("/home")}
    />
  );
}

// Maneja el onboarding final de negocio
function OnboardingWrapper() {
  const navigate = useNavigate();
  const handleFinish = () => navigate("/home");
  return (
    <CreateBusinessOnboarding 
      onComplete={handleFinish} 
      onSkip={handleFinish} 
    />
  );
}

/**
 * COMPONENTE PRINCIPAL APP
 */
export default function App() {
  // Estados para persistir datos entre rutas durante el flujo de usuario
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [pendingAction, setPendingAction] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const baseName = import.meta.env.BASE_URL;
  // Función para resetear estados al volver al inicio
  const handleResetNavigation = () => {
    setSelectedCity("");
    setPendingAction("");
    setSelectedInterests([]);
  };

  return (
    <FavoritesProvider>
      <Router basename={baseName}>
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
            element={<SelectInterestsWrapper setSelectedInterests={setSelectedInterests} />} 
          />
          <Route 
            path="/business-or-visitor" 
            element={<BusinessOrVisitorWrapper />} 
          />
          <Route 
            path="/onboarding" 
            element={<OnboardingWrapper />} 
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

          {/* Redirección por defecto si la ruta no existe */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}