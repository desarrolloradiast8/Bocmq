import React, { useEffect, useState } from 'react';
import { Heart, Share2, MoreHorizontal, Bookmark, ExternalLink, User, ChevronDown, ChevronLeft, ChevronRight, Handshake, Globe, House } from 'lucide-react';

const HomeFeed = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState<any>(null);
  const [showLimitDropdown, setShowLimitDropdown] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchPosts = async (page: number, currentLimit: number) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/posts?limit=${currentLimit}&page=${page}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const result = await response.json();
      setPosts(result.data);
      setPagination(result.pagination);
      // Hacer scroll al inicio suavemente al cambiar de página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error cargando posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage, limit);
  }, [currentPage, limit]);

  return (
    <div className="max-w-4xl mx-auto pb-20 px-4">
      
      {/* SECCIÓN: CREAR PUBLICACIÓN */}
      <div className="bg-white border border-gray-200 rounded-3xl p-3 overflow-hidden mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="María González" className="w-full h-full object-cover" />
          </div>
          <span className="text-gray-400 text-sm">¿Qué deseas publicar hoy?</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['Oferta', 'Evento', 'Anuncio', 'Enlace'].map((tipo) => (
            <button key={tipo} className="flex items-center justify-center gap-1.5 px-2 py-2 border-2 border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all group">
              <span className="text-xs font-medium text-gray-700 group-hover:text-white">{tipo}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SELECTOR DE MOSTRAR CANTIDAD */}
      <div className="flex items-center justify-end flex-wrap gap-2 mb-3">
        <div className="relative">
          <button 
            onClick={() => setShowLimitDropdown(!showLimitDropdown)}
            className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
          >
            <span className="text-xs text-gray-600">Mostrar: {limit}</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          {showLimitDropdown && (
            <div className="absolute right-0 mt-1 w-24 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1">
              {[10, 20, 50, 100].map((num) => (
                <button 
                  key={num}
                  onClick={() => { setLimit(num); setCurrentPage(1); setShowLimitDropdown(false); }}
                  className="block w-full text-left px-4 py-2 text-xs hover:bg-orange-50 text-gray-700"
                >
                  {num}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FEED DE POSTS */}
      <div className="space-y-6">
        {loading ? (
          <div className="py-20 text-center text-gray-500">Cargando contenido...</div>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    {post.user?.thumbnail_image_url ? (
                      <img src={post.user.thumbnail_image_url} className="w-full h-full object-cover" />
                    ) : <User className="p-2 text-gray-400" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{post.user?.full_name || 'Usuario'}</h3>
                    <p className="text-xs text-gray-500">{post.domain}</p>
                  </div>
                </div>
                <MoreHorizontal className="text-gray-400 cursor-pointer" />
              </div>

              {post.images?.[0] && (
                <div className="aspect-video bg-gray-50 overflow-hidden">
                  <img src={post.images[0].big_image_url} className="w-full h-full object-cover" alt={post.title} />
                </div>
              )}

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-bold text-lg leading-tight">{post.title}</h2>
                  <a href={post.link} target="_blank" rel="noreferrer" className="p-2 bg-blue-50 rounded-full text-blue-600">
                    <ExternalLink size={16}/>
                  </a>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1.5 text-gray-500"><Heart size={20} /> <span className="text-xs font-bold">{post.count_favorites}</span></button>
                    <button className="flex items-center gap-1.5 text-gray-500"><Share2 size={20} /></button>
                  </div>
                  <Bookmark size={20} className="text-gray-400" />
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* PAGINACIÓN NUMÉRICA */}
      {pagination && !loading && (
        <div className="flex items-center justify-center gap-2 mt-10 mb-12">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="p-2 rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1">
            {[...Array(pagination.total_pages)].map((_, i) => {
              const pageNum = i + 1;
              if (pageNum === 1 || pageNum === pagination.total_pages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg border font-medium text-sm transition-all ${
                      currentPage === pageNum 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 border-transparent text-white' 
                      : 'border-gray-200 text-gray-600 hover:border-orange-500'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }
              if (pageNum === currentPage - 2 || pageNum === currentPage + 2) return <span key={pageNum} className="px-1 text-gray-400">...</span>;
              return null;
            })}
          </div>
          <button 
            disabled={currentPage === pagination.total_pages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="p-2 rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* --- NUEVA SECCIÓN DE CATEGORÍAS/NAVEGACIÓN --- */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[
          { label: "Bec Business", icon: <Handshake className="w-8 h-8 text-orange-600" /> },
          { label: "Categorías", icon: (
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          )},
          { label: "Eventos", icon: (
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          )},
          { label: "Promociones", icon: (
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          )},
          { label: "Noticias", icon: <Globe className="w-8 h-8 text-orange-600" /> },
          { label: "Kumyy", icon: <House className="w-8 h-8 text-red-600" /> }
        ].map((card, idx) => (
          <div key={idx} className="bg-white flex flex-col gap-6 p-6 rounded-3xl border-2 border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{card.label}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HomeFeed };