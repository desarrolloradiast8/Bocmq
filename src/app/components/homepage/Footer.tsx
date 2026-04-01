export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* SOBRE NOSOTROS */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Sobre nosotros</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Como funciona Bolivia en un Clic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Únete
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Registra tu negocio o servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Prensa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Recomendaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* ALIADOS PARA POTENCIARTE */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Aliados para potenciarte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Currier a nivel nacional
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cámaras de comercio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Pasarelas de pago
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Otras empresas
                </a>
              </li>
            </ul>
          </div>

          {/* AYUDA */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Destaca tu empresa o servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cómo impulsar mis recomendaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cómo publicar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cómo crear mi tienda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cómo potenciar mi negocio o mis servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  ¿Qué es un perfil comercial?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cómo viralizar mi negocio o servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Cómo generar recomendaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Tutorial de registro
                </a>
              </li>
            </ul>
          </div>

          {/* EXPERIENCIAS */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Experiencias</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Viajes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Gastronomía
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Hospedaje
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Turismo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Museos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                  Lugares emblemáticos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © 2026 Bolivia en un clic. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}