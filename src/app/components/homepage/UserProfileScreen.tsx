import { useState } from "react";
import { ArrowLeft, Share2, Edit, Globe, MapPin, Phone, BarChart3, ShoppingCart, Youtube, Mail, Linkedin, Download, Facebook, Instagram, Twitter, Tag, BookOpen, Menu, MessageCircle } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

interface UserProfileScreenProps {
  onBack: () => void;
}

// Mock user data
const getUserData = () => {
  return {
    name: "María González",
    username: "@mariagonzalez",
    email: "maria.gonzalez@email.com",
    bannerImage: "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzM3NDg1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Mzc0ODU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Mzc0ODU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "",
    city: "",
    website: "",
    whatsapp: "",
    posts: [],
    recommendations: []
  };
};

export function UserProfileScreen({ onBack }: UserProfileScreenProps) {
  const [user, setUser] = useState(getUserData());
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [activeTab, setActiveTab] = useState<"publicaciones" | "recomendaciones">("publicaciones");
  
  // Edit profile form states
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editUsername, setEditUsername] = useState(user.username);
  const [editCity, setEditCity] = useState(user.city);
  const [editWebsite, setEditWebsite] = useState(user.website);
  const [editWhatsapp, setEditWhatsapp] = useState(user.whatsapp);
  const [editDescription, setEditDescription] = useState(user.description);

  // Create post form states
  const [postComment, setPostComment] = useState("");
  const [postLink, setPostLink] = useState("");

  const handleSaveProfile = () => {
    setUser({
      ...user,
      name: editName,
      email: editEmail,
      username: editUsername,
      city: editCity,
      website: editWebsite,
      whatsapp: editWhatsapp,
      description: editDescription
    });
    setShowEditProfile(false);
  };

  // Create post screen
  if (showCreatePost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCreatePost(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-white font-bold text-xl">Crear enlace</h2>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Card className="p-6 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <img src={user.logo} alt={user.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-sm text-gray-600">Tu perfil</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <textarea
                  placeholder="Agrega un comentario y un enlace a artículos, noticias o videos"
                  value={postComment}
                  onChange={(e) => setPostComment(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl resize-none"
                  rows={4}
                />
              </div>

              <div>
                <Input
                  placeholder="https://ejemplo.com"
                  value={postLink}
                  onChange={(e) => setPostLink(e.target.value)}
                  className="rounded-2xl"
                />
                <p className="text-xs text-gray-900 mt-2">
                  ¿A qué sitio web quieres que redirijan las personas cuando hagan clic en el enlace?
                </p>
              </div>

              <Button 
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold"
                onClick={() => {
                  // Handle post creation
                  setShowCreatePost(false);
                  setPostComment("");
                  setPostLink("");
                }}
              >
                Publicar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Edit profile screen
  if (showEditProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowEditProfile(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-white font-bold text-xl">Editar perfil</h2>
              </div>
              <Button
                onClick={handleSaveProfile}
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold rounded-2xl"
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <Card className="p-6 rounded-3xl">
            <div className="mb-6">
              <div className="h-32 bg-cover bg-center rounded-t-3xl" style={{ backgroundImage: `url(${user.bannerImage})` }} />
              <div className="flex items-center gap-4 -mt-12 ml-6">
                <img src={user.profilePhoto} alt={user.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Nombre y apellido</label>
                <Input
                  placeholder="Nombre y apellido"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="rounded-2xl"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Correo electrónico</label>
                <Input
                  placeholder="Correo electrónico"
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="rounded-2xl"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Nombre de usuario</label>
                <Input
                  placeholder="@usuario"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  className="rounded-2xl"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Agrega tu ciudad actual</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Ciudad"
                    value={editCity}
                    onChange={(e) => setEditCity(e.target.value)}
                    className="rounded-2xl pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Agrega tu sitio web</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="www.ejemplo.com"
                    value={editWebsite}
                    onChange={(e) => setEditWebsite(e.target.value)}
                    className="rounded-2xl pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Agrega tu WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="+591 12345678"
                    value={editWhatsapp}
                    onChange={(e) => setEditWhatsapp(e.target.value)}
                    className="rounded-2xl pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Escribe algunos detalles sobre ti</label>
                <textarea
                  placeholder="Detalles sobre ti"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-2xl resize-none"
                  rows={4}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Statistics screen
  if (showStatistics) {
    const StatRow = ({ icon: Icon, label, count }: { icon: any; label: string; count: number }) => (
      <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <Icon className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-gray-700">{label}</span>
        </div>
        <span className="font-semibold text-gray-900">{count}</span>
      </div>
    );

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowStatistics(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-white font-bold text-xl">Estadísticas</h2>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
          {/* Intro Message */}
          <Card className="p-6 rounded-3xl bg-gradient-to-r from-orange-50 to-red-50">
            <p className="text-center text-gray-900 font-medium">
              Conoce cómo interactúan tus clientes en tu perfil comercial
            </p>
          </Card>

          {/* Total Recommendations Card */}
          <Card className="p-6 rounded-3xl">
            <div className="text-center space-y-2 pb-4 border-b border-gray-200">
              <p className="text-5xl font-bold text-gray-900">1</p>
              <p className="text-gray-600">Total recomendaciones</p>
              <p className="text-sm text-gray-500">Duración total</p>
            </div>
          </Card>

          {/* Highlighted Stats Title */}
          <div className="pt-2">
            <h3 className="text-lg font-bold text-gray-900">Estadísticas destacadas de tu perfil</h3>
          </div>

          {/* Profile Views */}
          <Card className="p-6 rounded-3xl">
            <p className="text-gray-700 text-center">
              Tu perfil tuvo <span className="font-bold text-orange-600">120</span> visitas
            </p>
          </Card>

          {/* Interaction Statistics Card */}
          <Card className="p-6 rounded-3xl">
            <div className="space-y-1">
              <StatRow icon={ShoppingCart} label="Clicks en comercio electrónico" count={45} />
              <StatRow icon={Youtube} label="Clicks en YouTube" count={32} />
              <StatRow icon={MessageCircle} label="Clicks en WhatsApp" count={78} />
              <StatRow icon={Mail} label="Clicks en correo electrónico" count={23} />
              <StatRow icon={Linkedin} label="Clicks en LinkedIn" count={15} />
              <StatRow icon={Globe} label="Clicks en página web" count={56} />
              <StatRow icon={Download} label="Clicks en descarga de aplicaciones" count={12} />
              <StatRow icon={Facebook} label="Clicks en Facebook" count={34} />
              <StatRow icon={Instagram} label="Clicks en Instagram" count={89} />
              <StatRow icon={Twitter} label="Clicks en Twitter" count={21} />
              <StatRow icon={Tag} label="Clicks en páginas de ofertas" count={67} />
              <StatRow icon={BookOpen} label="Clicks en catálogo" count={43} />
              <StatRow icon={Menu} label="Clicks en menú" count={38} />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Main profile view
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button className="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <Share2 className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Banner and Profile Photo */}
        <Card className="rounded-3xl overflow-hidden border-2 border-gray-100 mb-6">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${user.bannerImage})` }} />
          
          <div className="p-6">
            <div className="flex items-start gap-4 -mt-20 mb-4">
              <img src={user.profilePhoto} alt={user.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" />
              <div className="mt-16">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.username}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <Button
                onClick={() => setShowStatistics(true)}
                variant="outline"
                className="py-4 rounded-2xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Estadísticas
              </Button>
              <Button
                onClick={() => setShowCreatePost(true)}
                className="py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold"
              >
                Publicar
              </Button>
              <Button
                onClick={() => setShowEditProfile(true)}
                variant="outline"
                className="py-4 rounded-2xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold"
              >
                <Edit className="w-5 h-5 mr-2" />
                Editar perfil
              </Button>
            </div>

            {/* User info */}
            <div className="space-y-2 mb-6">
              <p className="text-gray-700">{user.email}</p>
              {user.description && <p className="text-gray-700">{user.description}</p>}
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="bg-white rounded-t-3xl border-b-2 border-gray-200 overflow-x-auto">
          <div className="flex">
            {["publicaciones", "recomendaciones"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 px-6 py-4 font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === tab
                    ? "text-orange-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-3xl p-6 min-h-[400px]">
          {activeTab === "publicaciones" && (
            <div>
              {user.posts.length > 0 ? (
                <div className="space-y-4">
                  {/* Posts will go here */}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg className="w-24 h-24 text-gray-300 mb-4" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="35" r="15" />
                    <path d="M30 55 Q30 45 40 45 L60 45 Q70 45 70 55 L75 75 Q75 80 70 80 L30 80 Q25 80 25 75 Z" />
                  </svg>
                  <p className="text-gray-600">Aún no existen datos para mostrar</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "recomendaciones" && (
            <div>
              {user.recommendations.length > 0 ? (
                <div className="space-y-4">
                  {/* Recommendations will go here */}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg className="w-24 h-24 text-gray-300 mb-4" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="35" r="15" />
                    <path d="M30 55 Q30 45 40 45 L60 45 Q70 45 70 55 L75 75 Q75 80 70 80 L30 80 Q25 80 25 75 Z" />
                  </svg>
                  <p className="text-gray-600">Aún no existen datos para mostrar</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}