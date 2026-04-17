const API_URL = `${import.meta.env.VITE_API_URL}/api`;
export const logoutUser = async () => {
    const token = localStorage.getItem("token");
    const logout_url = `${API_URL}/logout`;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    if (token) {
        try {
            await fetch(logout_url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.error("Error al cerrar sesión en servidor:", error);
        }
    }
};



export const loginUser = async (email: string, password: string) => {
    const login_url = `${API_URL}/login`;
    const payload = new URLSearchParams();
    payload.append("email", email);
    payload.append("password", password);

    const response = await fetch(login_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
    });

    const result = await response.json();

    if (!response.ok || result.data?.type !== "Bearer") {
        throw new Error(result.message || "Credenciales incorrectas");
    }

    // Retornamos solo el token o los datos que necesites
    return result.data.access;
};
export const loginSocial = async (email: string, provider: string, userId: string) => {
    const payload = new URLSearchParams();
    const social_login_url = `${API_URL}/social-login`;
    payload.append("email", email);
    payload.append("provider", provider);
    payload.append("provider_user_id", userId);

    const response = await fetch(social_login_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
    });

    const resp = await response.json();

    if (!response.ok || !resp.data?.access) {
        throw new Error("Error en la autenticación social");
    }

    return resp.data.access;
};
export const registerUser = async (email: string, full_name: string, password: string) => {
    const payload = new URLSearchParams();
    payload.append("email", email);
    payload.append("full_name", full_name);
    payload.append("password", password);

    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
        },
        body: payload,
    });

    const resp = await response.json();

    if (!response.ok || !resp.data?.access) {
        throw new Error(resp.message || "Error en el registro");
    }

    return resp.data.access; // Retornamos el token
};

// Registro Social (Facebook/Google)
export const registerSocial = async (full_name: string, userId: string, provider: string) => {
    const payload = new URLSearchParams();
    payload.append("full_name", full_name);
    payload.append("provider_user_id", userId);
    payload.append("provider", provider);

    const response = await fetch(`${API_URL}/social_register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json", // Crucial para evitar redirecciones
        },
        body: payload,
    });

    const resp = await response.json();

    if (!response.ok) {
        throw new Error(resp.message || "Error al registrar cuenta social");
    }

    // Retornamos el token (ajusta la ruta según tu JSON: resp.data.access)
    return resp.data?.access || resp.access;
};