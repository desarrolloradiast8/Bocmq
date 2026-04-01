import { useState } from "react";
import { LandingPage } from "@/app/components/LandingPage";
import { Login } from "@/app/components/Login";
import { Homepage } from "@/app/components/Homepage";
import { FavoritesProvider } from "@/app/components/homepage/FavoritesContext";
import { SelectInterests } from "@/app/components/onboarding/SelectInterests";
import { BusinessOrVisitor } from "@/app/components/onboarding/BusinessOrVisitor";
import { CreateBusinessOnboarding } from "@/app/components/onboarding/CreateBusinessOnboarding";

type AppState = "landing" | "login" | "register" | "select-interests" | "business-or-visitor" | "onboarding" | "home";

export default function App() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [pendingAction, setPendingAction] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleLoginClick = () => {
    setAppState("login");
  };

  const handleRegisterClick = () => {
    setAppState("register");
  };

  const handleBackToLanding = () => {
    setSelectedCity(""); // Reset city filter when going back to landing
    setPendingAction(""); // Reset pending action
    setSelectedInterests([]); // Reset interests
    setAppState("landing");
  };

  const handleLogin = (isRegistering: boolean = false) => {
    if (isRegistering) {
      // If user is registering (new user), show select interests first
      setAppState("select-interests");
    } else {
      // If user is logging in (existing user), go directly to home
      setAppState("home");
    }
  };

  const handleInterestsComplete = (interests: string[]) => {
    // Save selected interests
    setSelectedInterests(interests);
    // Go to business or visitor decision screen
    setAppState("business-or-visitor");
  };

  const handleRegisterBusiness = () => {
    // User wants to register their business, show onboarding
    setAppState("onboarding");
  };

  const handleEnterAsVisitor = () => {
    // User wants to enter as visitor, go directly to home
    setAppState("home");
  };

  const handleOnboardingComplete = () => {
    // After onboarding is complete, go to home
    setAppState("home");
  };

  const handleOnboardingSkip = () => {
    // If user skips onboarding, still go to home
    setAppState("home");
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setAppState("login");
  };

  const handleActionClick = (action: 'crear-negocio' | 'promociones' | 'anuncios' | 'eventos') => {
    setPendingAction(action);
    setAppState("login");
  };

  return (
    <FavoritesProvider>
      {appState === "landing" && (
        <LandingPage 
          onLoginClick={handleLoginClick} 
          onRegisterClick={handleRegisterClick}
          onCityClick={handleCityClick}
          onActionClick={handleActionClick}
        />
      )}
      {appState === "login" && (
        <Login onLogin={() => handleLogin(false)} onBack={handleBackToLanding} initialMode="login" />
      )}
      {appState === "register" && (
        <Login onLogin={() => handleLogin(true)} onBack={handleBackToLanding} initialMode="register" />
      )}
      {appState === "select-interests" && (
        <SelectInterests onComplete={handleInterestsComplete} />
      )}
      {appState === "business-or-visitor" && (
        <BusinessOrVisitor 
          onRegisterBusiness={handleRegisterBusiness}
          onEnterAsVisitor={handleEnterAsVisitor}
        />
      )}
      {appState === "onboarding" && (
        <CreateBusinessOnboarding 
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}
      {appState === "home" && (
        <Homepage 
          initialCityFilter={selectedCity} 
          initialAction={pendingAction}
        />
      )}
    </FavoritesProvider>
  );
}