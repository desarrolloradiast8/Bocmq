import { useState, useEffect } from "react";
import { ArrowLeft, Facebook } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Swal from "sweetalert2";
import logoImage from "figma:asset/5bd1390b600814efd35c7824f6d4aa947cc9bd64.png";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { loginUser, loginSocial } from "@/app/utils/auth";
import { Register } from "@/app/components/Register";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
  onBack?: () => void;
  initialMode?: "login" | "register";
}

export function Login({ onLogin, onBack, initialMode = "login" }: LoginProps) {
  const navigate = useNavigate();
  
  // Estados de la vista
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  
  // Estados del formulario
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sincronizar el estado interno si la ruta cambia (ej. de /login a /register)
  useEffect(() => {
    setIsLogin(initialMode === "login");
  }, [initialMode]);

  const goToRegister = () => {
    setIsLogin(false);
    navigate("/register");
  };

  const goToLogin = () => {
    setIsLogin(true);
    setShowForgotPassword(false);
    navigate("/login");
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await loginUser(email, password);
      localStorage.setItem("token", token);
      
      // Ejecuta la navegación definida en App.tsx (hacia /home)
      onLogin();
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: "El correo electrónico o la contraseña son incorrectos",
        icon: "error",
        confirmButtonColor: "#FB9E23",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLoginReal = async (email: string, userId: string) => {
    setLoading(true);
    try {
      const token = await loginSocial(email, "facebook", userId);
      localStorage.setItem("token", token);
      onLogin();
    } catch (error) {
      Swal.fire("Error", "No se pudo validar con el servidor", "error");
    } finally {
      setLoading(false);
    }
  };

  // --- RENDERIZADO DE VISTA DE REGISTRO ---
  if (!isLogin) {
    return (
      <Register 
        logoImage={logoImage} 
        onBack={onBack}
        onSwitchToLogin={goToLogin}
        onComplete={onLogin} // <--- Crucial: Ahora siempre se pasa la función
      />
    );
  }

  // --- RENDERIZADO DE RECUPERAR CONTRASEÑA ---
  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
        <button onClick={goToLogin} className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5" /> Volver
        </button>

        <div className="max-w-md w-full bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
          <h2 className="text-center text-lg font-bold text-gray-900 mb-4">Olvidé mi contraseña</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Ingresa tu correo y te enviaremos las instrucciones.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Correo enviado"); setShowForgotPassword(false); }} className="space-y-4">
            <Input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold">
              Enviar instrucciones
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDERIZADO DE LOGIN (VISTA PRINCIPAL) ---
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>
      )}

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LADO IZQUIERDO - Desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center px-8">
          <img src={logoImage} alt="Logo" className="w-32 h-32 mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
            Bolivia en un clic
          </h1>
          <p className="text-2xl text-gray-700 font-medium max-w-md leading-relaxed">
            El comercio de todo Bolivia en la palma de tu mano
          </p>
        </div>

        {/* LADO DERECHO - Formulario */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="lg:hidden text-center mb-8">
            <img src={logoImage} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
              Bolivia en un clic
            </h2>
          </div>

          <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
            <h2 className="text-center text-base sm:text-lg font-bold text-gray-900 mb-6">
              Iniciar sesión
            </h2>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
              >
                {loading ? "Cargando..." : "Iniciar Sesión"}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">O</span>
                </div>
              </div>

              <FacebookLogin
                appId="1486168372912261"
                onSuccess={(res) => res.email && handleFacebookLoginReal(res.email, res.id)}
                onFail={() => Swal.fire("Error", "Error al conectar con Facebook", "error")}
                render={({ onClick }) => (
                  <Button
                    type="button"
                    onClick={onClick}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                    Continuar con Facebook
                  </Button>
                )}
              />

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

          <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center mt-4 shadow-sm">
            <p className="text-sm text-gray-700">
              ¿No tienes una cuenta?{" "}
              <button
                type="button"
                onClick={goToRegister}
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