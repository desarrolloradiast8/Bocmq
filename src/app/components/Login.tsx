import { useState } from "react";
import { ArrowLeft, Facebook } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import logoImage from "figma:asset/5bd1390b600814efd35c7824f6d4aa947cc9bd64.png";

interface LoginProps {
  onLogin: () => void;
  onBack?: () => void;
  initialMode?: "login" | "register";
}

export function Login({ onLogin, onBack, initialMode = "login" }: LoginProps) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showForgotPassword) {
      alert("Se ha enviado un correo de recuperación a " + email);
      setShowForgotPassword(false);
      return;
    }
    if (email && password) {
      onLogin();
    }
  };

  const handleFacebookLogin = () => {
    // Simular login con Facebook
    alert("Iniciando sesión con Facebook...");
    onLogin();
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors text-sm sm:text-base z-10"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Volver
          </button>
        )}

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LADO IZQUIERDO - Logo, Título y Texto (solo desktop) */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center px-8">
            <img 
              src={logoImage} 
              alt="Bolivia en un clic" 
              className="w-32 h-32 mb-6 animate-pulse" 
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
              Bolivia en un clic
            </h1>
            <p className="text-2xl text-gray-700 font-medium max-w-md leading-relaxed">
              El comercio de todo Bolivia en la palma de tu mano
            </p>
          </div>

          {/* LADO DERECHO - Formulario */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Logo mobile */}
            <div className="lg:hidden text-center mb-8">
              <img 
                src={logoImage} 
                alt="Bolivia en un clic" 
                className="w-20 h-20 mx-auto mb-4" 
              />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
                Bolivia en un clic
              </h2>
              <p className="text-base text-gray-700 font-medium">
                El comercio de todo Bolivia en la palma de tu mano
              </p>
            </div>

            {/* Card con formulario */}
            <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
              {/* Título del formulario */}
              <h2 className="text-center text-base sm:text-lg font-bold text-gray-900 mb-4">
                Olvidé mi contraseña
              </h2>
              <p className="text-center text-sm text-gray-600 mb-6">
                Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
                >
                  Enviar instrucciones
                </Button>

                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="text-sm text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    Volver al inicio de sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isLogin) {
    // Registro - ESTILO INSTAGRAM (DOS COLUMNAS)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors text-sm sm:text-base z-10"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Volver
          </button>
        )}

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LADO IZQUIERDO - Logo, Título y Texto (solo desktop) */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center px-8">
            <img 
              src={logoImage} 
              alt="Bolivia en un clic" 
              className="w-32 h-32 mb-6 animate-pulse" 
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
              Bolivia en un clic
            </h1>
            <p className="text-2xl text-gray-700 font-medium max-w-md leading-relaxed">
              El comercio de todo Bolivia en la palma de tu mano
            </p>
          </div>

          {/* LADO DERECHO - Formulario */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Logo mobile */}
            <div className="lg:hidden text-center mb-8">
              <img 
                src={logoImage} 
                alt="Bolivia en un clic" 
                className="w-20 h-20 mx-auto mb-4" 
              />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
                Bolivia en un clic
              </h2>
              <p className="text-base text-gray-700 font-medium">
                El comercio de todo Bolivia en la palma de tu mano
              </p>
            </div>

            {/* Card con formulario */}
            <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
              {/* Título del formulario */}
              <h2 className="text-center text-base sm:text-lg font-bold text-gray-900 mb-6">
                Regístrate en Bolivia en un clic
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre y apellido"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    placeholder="Crea una contraseña segura"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 flex-shrink-0"
                    required
                  />
                  <label htmlFor="acceptTerms" className="text-gray-700 text-sm">
                    Acepto los <a href="#" className="text-orange-600 font-bold hover:underline">términos y condiciones</a>
                  </label>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-all"
                  >
                    Unirme
                  </Button>
                </div>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">O</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Button
                    type="button"
                    onClick={handleFacebookLogin}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                    Continuar con Facebook
                  </Button>

                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-all"
                  >
                    Continuar con Email
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-500 leading-relaxed mt-4">
                  Al unirte estás aceptando los términos y condiciones de los servicios de Bolivia en un clic
                </p>
              </form>
            </div>

            {/* Login */}
            <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center mt-4 shadow-sm">
              <p className="text-sm text-gray-700">
                ¿Ya tienes una cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-orange-600 font-bold hover:text-orange-700"
                >
                  Inicia sesión
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Login - ESTILO INSTAGRAM (DOS COLUMNAS)
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors text-sm sm:text-base z-10"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Volver
        </button>
      )}

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LADO IZQUIERDO - Logo, Título y Texto */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center px-8">
          <img 
            src={logoImage} 
            alt="Bolivia en un clic" 
            className="w-32 h-32 mb-6 animate-pulse" 
          />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
            Bolivia en un clic
          </h1>
          <p className="text-2xl text-gray-700 font-medium max-w-md leading-relaxed">
            El comercio de todo Bolivia en la palma de tu mano
          </p>
        </div>

        {/* LADO DERECHO - Formulario */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Logo mobile */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src={logoImage} 
              alt="Bolivia en un clic" 
              className="w-20 h-20 mx-auto mb-4" 
            />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
              Bolivia en un clic
            </h2>
            <p className="text-base text-gray-700 font-medium">
              El comercio de todo Bolivia en la palma de tu mano
            </p>
          </div>

          {/* Card con formulario */}
          <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
            {/* Título del formulario */}
            <h2 className="text-center text-base sm:text-lg font-bold text-gray-900 mb-6">
              Iniciar sesión en Bolivia en un clic
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                  required
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-orange-500 text-sm bg-gray-50"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
              >
                Iniciar Sesión
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">O</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleFacebookLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Facebook className="w-5 h-5" />
                Continuar con Facebook
              </Button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-orange-600 hover:text-orange-700 font-semibold"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </form>
          </div>

          {/* Registro */}
          <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center mt-4 shadow-sm">
            <p className="text-sm text-gray-700">
              ¿No tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-orange-600 font-bold hover:text-orange-700"
              >
                Regístrate
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}