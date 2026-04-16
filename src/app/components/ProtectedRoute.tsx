import { Navigate } from "react-router-dom";

// Este componente verifica si hay un token en el almacenamiento
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token'); // O donde guardes el 'access'

  if (!token) {
    // Si no hay token, lo mandamos al login
    return <Navigate to="/login" replace />;
  }

  // Si hay token, dejamos que vea la página
  return children;
};