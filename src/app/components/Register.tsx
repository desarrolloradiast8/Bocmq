// src/app/Register.tsx
import { useState } from "react";
import { ArrowLeft, Facebook } from "lucide-react"; 
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { registerUser } from "@/app/utils/auth";
import Swal from "sweetalert2";

interface RegisterProps {
  onBack?: () => void;
  onSwitchToLogin: () => void;
  logoImage: string;
  onComplete: () => void; // <--- AGREGADO: Esto evita errores de TypeScript
}

export function Register({ onBack, onSwitchToLogin, logoImage, onComplete }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    if (!acceptTerms) {
      Swal.fire("Aviso", "Debes aceptar los términos y condiciones", "info");
      return;
    }

    setLoading(true);
    try {
      // 1. Llamamos a la API
      const token = await registerUser(email, name, password);

      // 2. Guardamos el token
      localStorage.setItem("token", token);

      // 3. Notificamos éxito
      await Swal.fire({
        title: "¡Bienvenido!",
        text: "Tu cuenta ha sido creada con éxito.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });

      // 4. Ejecutamos la navegación automática
      onComplete(); 

    } catch (error: any) {
      Swal.fire("Error", error.message || "No se pudo crear la cuenta", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    // Aquí iría tu lógica de login social
    Swal.fire("Próximamente", "El registro con Facebook estará disponible pronto", "info");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      {onBack && (
        <button
          onClick={onBack}
          disabled={loading}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors text-sm sm:text-base z-10"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Volver
        </button>
      )}

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LADO IZQUIERDO - Logo y Texto (Desktop) */}
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
          <div className="lg:hidden text-center mb-8">
            <img src={logoImage} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
              Bolivia en un clic
            </h2>
          </div>

          <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-sm">
            <h2 className="text-center text-base sm:text-lg font-bold text-gray-900 mb-6">
              Regístrate en Bolivia en un clic
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Nombre y apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
              />

              <Input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />

              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />

              <Input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                required
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded"
                  required
                />
                <label htmlFor="acceptTerms" className="text-gray-700 text-sm">
                  Acepto los <a href="#" className="text-orange-600 font-bold hover:underline">términos y condiciones</a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Registrando..." : "Unirme"}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-500">O</span></div>
              </div>

              <Button
                type="button"
                onClick={handleFacebookLogin}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Continuar con Facebook
              </Button>
            </form>
          </div>

          <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center mt-4 shadow-sm">
            <p className="text-sm text-gray-700">
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
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