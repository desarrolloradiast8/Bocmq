import { useState, useRef, useEffect } from "react";
import { MapPin, Search, X, ChevronLeft, ChevronRight, Flag, Heart, Settings } from "lucide-react";
import { SidebarMenu } from "@/app/components/homepage/SidebarMenu";
import { HomeFeed } from "@/app/components/homepage/HomeFeed";
import { RightSidebar } from "@/app/components/homepage/RightSidebar";
import { CreateEventScreen } from "@/app/components/homepage/CreateEventScreen";
import { PromocionesScreen } from "@/app/components/homepage/PromocionesScreen";
import { CategoriesScreen } from "@/app/components/homepage/CategoriesScreen";
import { CategoryDetailScreen } from "@/app/components/homepage/CategoryDetailScreen";
import { PostDetailScreen } from "@/app/components/homepage/PostDetailScreen";
import { BusinessProfileScreen } from "@/app/components/homepage/BusinessProfileScreen";
import { StoreProfileScreen } from "@/app/components/homepage/StoreProfileScreen";
import { FavoritesScreen } from "@/app/components/homepage/FavoritesScreen";
import { MarketplaceScreen } from "@/app/components/homepage/MarketplaceScreen";
import { UserProfileScreen } from "@/app/components/homepage/UserProfileScreen";
import { BusinessProfilesScreen } from "@/app/components/homepage/BusinessProfilesScreen";
import { EditBusinessScreen } from "@/app/components/homepage/EditBusinessScreen";
import { EditBusinessInfoScreen } from "@/app/components/homepage/EditBusinessInfoScreen";
import { SelectCategoryScreen } from "@/app/components/homepage/SelectCategoryScreen";
import { EditAddressScreen } from "@/app/components/homepage/EditAddressScreen";
import { EditHoursScreen } from "@/app/components/homepage/EditHoursScreen";
import { GalleryPhotosScreen } from "@/app/components/homepage/GalleryPhotosScreen";
import { ContactSocialScreen } from "@/app/components/homepage/ContactSocialScreen";
import { SpecialLinksScreen } from "@/app/components/homepage/SpecialLinksScreen";
import { PresentationVideoScreen } from "@/app/components/homepage/PresentationVideoScreen";
import { PromotionalBoxScreen } from "@/app/components/homepage/PromotionalBoxScreen";
import { PricingPlansScreen } from "@/app/components/homepage/PricingPlansScreen";
import { PaymentConfigScreen } from "@/app/components/homepage/PaymentConfigScreen";
import { ExportHelpScreen } from "@/app/components/homepage/ExportHelpScreen";
import { AccountInfoScreen } from "@/app/components/homepage/AccountInfoScreen";
import { PaymentPendingDetailScreen } from "@/app/components/homepage/PaymentPendingDetailScreen";
import { ChangeAccountScreen } from "@/app/components/homepage/ChangeAccountScreen";
import { BillingHistoryScreen } from "@/app/components/homepage/BillingHistoryScreen";
import { VerificationIntroScreen } from "@/app/components/homepage/VerificationIntroScreen";
import { VerificationRequestScreen } from "@/app/components/homepage/VerificationRequestScreen";
import { HowItWorksScreen } from "@/app/components/homepage/HowItWorksScreen";
import { SearchResultsScreen } from "@/app/components/homepage/SearchResultsScreen";
import { CitySearchScreen } from "@/app/components/homepage/CitySearchScreen";
import { AllReviewsScreen } from "@/app/components/homepage/AllReviewsScreen";
import { CategoriesMegaMenu } from "@/app/components/homepage/CategoriesMegaMenu";
import { CategoriesMegaMenuDropdown } from "@/app/components/homepage/CategoriesMegaMenuDropdown";
import { PromocionesMegaMenuDropdown } from "@/app/components/homepage/PromocionesMegaMenuDropdown";
import { EventosMegaMenuDropdown } from "@/app/components/homepage/EventosMegaMenuDropdown";
import { PublicarDropdown } from "@/app/components/homepage/PublicarDropdown";
import { HeroCarousel } from "@/app/components/homepage/HeroCarousel";
import { Footer } from "@/app/components/homepage/Footer";
import { Events } from "@/app/components/events/Events";
import { Lobby } from "@/app/components/lobby/Lobby";
import logoImage from "figma:asset/4d28fa4a001bb83b2b561464528ad83edbfa5830.png";

// Datos de publicaciones para sugerencias de búsqueda
const mockPublications = [
  { business: "Restaurante El Sabor Paceño", category: "Restaurantes", city: "La Paz" },
  { business: "Tech Store Bolivia", category: "Tecnología", city: "Santa Cruz" },
  { business: "Boutique Moda & Estilo", category: "Moda", city: "Cochabamba" },
  { business: "Gimnasio Fitness Pro", category: "Deportes", city: "La Paz" },
  { business: "Spa Belleza Total", category: "Belleza", city: "Santa Cruz" },
  { business: "Librería Cultural", category: "Educación", city: "Sucre" },
  { business: "Cafetería Aroma", category: "Cafeterías", city: "Cochabamba" },
  { business: "Constructora Bolivia", category: "Construcción", city: "La Paz" },
  { business: "Veterinaria Mascotas Felices", category: "Veterinarias", city: "Santa Cruz" },
  { business: "Peluquería Estilo Único", category: "Belleza", city: "Tarija" },
  { business: "Academia de Idiomas Global", category: "Educación", city: "Cochabamba" },
  { business: "Ferretería El Constructor", category: "Ferreterías", city: "Oruro" },
];

type Screen =
  | "home"
  | "create-event"
  | "marketplace"
  | "categories"
  | "category-detail"
  | "post-detail"
  | "business-profile"
  | "store-profile"
  | "favorites"
  | "events"
  | "lobby"
  | "user-profile"
  | "business-profiles"
  | "edit-business"
  | "edit-info"
  | "select-category"
  | "edit-address"
  | "edit-hours"
  | "gallery-photos"
  | "contact-social"
  | "special-links"
  | "presentation-video"
  | "promotional-box"
  | "pricing-plans"
  | "payment-config"
  | "export-help"
  | "account-info"
  | "payment-pending-detail"
  | "change-account"
  | "billing-history"
  | "verification-intro"
  | "verification-request"
  | "how-it-works"
  | "detail-page"
  | "search-results"
  | "all-reviews";

interface HomepageProps {
  initialCityFilter?: string;
  initialAction?: string;
}

export function Homepage({ initialCityFilter = "", initialAction = "" }: HomepageProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [detailPageTitle, setDetailPageTitle] = useState("");
  const [selectedPostId, setSelectedPostId] = useState<number>(1);
  const [selectedBusinessId, setSelectedBusinessId] = useState<number>(1);
  const [selectedCity, setSelectedCity] = useState<string>(initialCityFilter); // Inicializa con el filtro de ciudad
  const [selectedPlan, setSelectedPlan] = useState<"premium" | "super-business">("premium");
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>(["home"]); // Navigation history stack
  const [selectedPaymentId, setSelectedPaymentId] = useState<number>(1);
  const [selectedStoreReviews, setSelectedStoreReviews] = useState<any[]>([]);
  const [showCitySearch, setShowCitySearch] = useState(false);
  const [showProductSearch, setShowProductSearch] = useState(false);
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [showCategoriesMegaMenu, setShowCategoriesMegaMenu] = useState(false);
  const [showPromocionesMegaMenu, setShowPromocionesMegaMenu] = useState(false);
  const [showEventosMegaMenu, setShowEventosMegaMenu] = useState(false);
  const [showPublicarDropdown, setShowPublicarDropdown] = useState(false);
  const [triggerCreateAnnouncement, setTriggerCreateAnnouncement] = useState(false);
  const [triggerCreateLink, setTriggerCreateLink] = useState(false);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [startEditMode, setStartEditMode] = useState(false);
  const [promotionalText, setPromotionalText] = useState<string>("");
  
  // Estados y ref para scroll de filtros móviles
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const filtersScrollRef = useRef<HTMLDivElement>(null);

  // Lista de ciudades bolivianas
  const bolivianCities = [
    { name: "Achocalla", department: "Departamento de La Paz" },
    { name: "Aiquile", department: "Departamento de Cochabamba" },
    { name: "Ardamarca", department: "Departamento de Oruro" },
    { name: "Ascención", department: "Departamento de Santa Cruz" },
    { name: "Ascención de Guarayos", department: "Departamento de Santa Cruz" },
    { name: "Bermejo", department: "Departamento de Tarija" },
    { name: "Boyuibe", department: "Departamento de Santa Cruz" },
    { name: "Buena Vista", department: "Departamento de Santa Cruz" },
    { name: "Cabezas", department: "Departamento de Santa Cruz" },
    { name: "Camargo", department: "Departamento de Chuquisaca" },
    { name: "Camiri", department: "Departamento de Santa Cruz" },
    { name: "Caracollo", department: "Departamento de Oruro" },
    { name: "Caranavi", department: "Departamento de La Paz" },
    { name: "Cercado", department: "Departamento de Tarija" },
    { name: "Charagua", department: "Departamento de Santa Cruz" },
    { name: "Cobija", department: "Departamento de Pando" },
    { name: "Cochabamba", department: "Departamento de Cochabamba" },
    { name: "Colcapirhua", department: "Departamento de Cochabamba" },
    { name: "Comarapa", department: "Departamento de Santa Cruz" },
    { name: "Concepción", department: "Departamento de Santa Cruz" },
    { name: "La Paz", department: "Departamento", isDepartment: true },
    { name: "Santa Cruz", department: "Departamento", isDepartment: true },
    { name: "Cochabamba", department: "Departamento", isDepartment: true },
    { name: "Chuquisaca", department: "Departamento", isDepartment: true },
    { name: "Tarija", department: "Departamento", isDepartment: true },
    { name: "Oruro", department: "Departamento", isDepartment: true },
    { name: "Potosí", department: "Departamento", isDepartment: true },
    { name: "Beni", department: "Departamento", isDepartment: true },
    { name: "Pando", department: "Departamento", isDepartment: true },
  ];

  // Filter cities based on search query
  const filteredCities = bolivianCities.filter((city) => {
    // Si no hay búsqueda, solo mostrar ciudades (no departamentos)
    if (citySearchQuery === "") {
      return !city.isDepartment;
    }

    const searchLower = citySearchQuery.toLowerCase();
    return (
      city.name.toLowerCase().includes(searchLower) ||
      city.department.toLowerCase().includes(searchLower)
    );
  });

  // Check scroll position for mobile filters
  const checkScroll = () => {
    const container = filtersScrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  // Scroll categories left or right
  const scrollFilters = (direction: 'left' | 'right') => {
    const container = filtersScrollRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Check scroll on mount and when container resizes
  useEffect(() => {
    const container = filtersScrollRef.current;
    if (container) {
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
    }
  }, []);

  // Handle initial action from landing page
  useEffect(() => {
    if (initialAction) {
      switch (initialAction) {
        case 'crear-negocio':
          // Navigate to user profile screen (own profile) - same as clicking avatar
          setSelectedBusinessId(1);
          setIsOwnProfile(true);
          setCurrentScreen('store-profile');
          break;
        case 'promociones':
          // Navigate to marketplace (promociones screen)
          setCurrentScreen('marketplace');
          break;
        case 'anuncios':
          // Trigger create announcement in home screen
          setCurrentScreen('home');
          setTriggerCreateAnnouncement(true);
          break;
        case 'eventos':
          // Navigate to create event screen
          setCurrentScreen('create-event');
          break;
      }
    }
  }, [initialAction]);

  // Handler for creating announcement or link from the dropdown
  const handleCreateFromDropdown = (type: 'announcement' | 'link') => {
    setShowPublicarDropdown(false);
    setCurrentScreen('home');
    
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (type === 'announcement') {
      setTriggerCreateAnnouncement(true);
    } else {
      setTriggerCreateLink(true);
    }
  };

  const handleNavigate = (destination: string) => {
    if (destination === "home") {
      setCurrentScreen("home");
    } else if (destination === "create-event") {
      setCurrentScreen("create-event");
    } else if (destination === "marketplace") {
      setCurrentScreen("marketplace");
    } else if (destination === "categories") {
      setCurrentScreen("categories");
    } else if (destination === "favorites") {
      setCurrentScreen("favorites");
    } else if (destination === "events") {
      setCurrentScreen("events");
    } else if (destination === "lobby") {
      setCurrentScreen("lobby");
    } else if (destination === "user-profile") {
      // Ir al store-profile con isOwnProfile=true (mismo comportamiento que "Ver perfil" desde business-profiles)
      setSelectedBusinessId(1); // Perfil por defecto
      setIsOwnProfile(true);
      setCurrentScreen("store-profile");
    } else if (destination === "business-profiles") {
      setCurrentScreen("business-profiles");
    } else if (destination === "pricing-plans") {
      setCurrentScreen("pricing-plans");
    } else if (destination === "payment-config") {
      setCurrentScreen("payment-config");
    } else if (destination === "export-help") {
      setCurrentScreen("export-help");
    } else if (destination === "account-info") {
      setCurrentScreen("account-info");
    } else if (destination === "payment-pending-detail") {
      setCurrentScreen("payment-pending-detail");
    } else if (destination === "change-account") {
      setCurrentScreen("change-account");
    } else if (destination === "billing-history") {
      setCurrentScreen("billing-history");
    } else if (destination === "verification-intro") {
      setCurrentScreen("verification-intro");
    } else if (destination === "verification-request") {
      setCurrentScreen("verification-request");
    } else if (destination === "how-it-works") {
      setCurrentScreen("how-it-works");
    } else {
      // Handle sidebar navigation to detail pages
      setDetailPageTitle(destination);
      setCurrentScreen("detail-page");
    }
    setNavigationHistory([...navigationHistory, currentScreen]);
    
    // Scroll al inicio DESPUÉS de que React renderice la nueva pantalla
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
    setNavigationHistory(["home"]);
  };

  const handleBackToMenu = () => {
    setCurrentScreen("home");
    setIsSidebarOpen(true);
  };

  // New function to handle back navigation with history
  const handleBack = () => {
    if (navigationHistory.length > 1) {
      const previousScreen = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(navigationHistory.slice(0, -1));
      setCurrentScreen(previousScreen);
    } else {
      handleBackToHome();
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen("category-detail");
  };

  const handleViewPost = (postId: number) => {
    setSelectedPostId(postId);
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen("post-detail");
  };

  const handleViewBusiness = (businessId: number) => {
    setSelectedBusinessId(businessId);
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen("business-profile");
  };

  const handleViewStore = (storeId: number) => {
    setSelectedBusinessId(storeId);
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen("store-profile");
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const handleProductSearch = (query: string, city: string) => {
    // Navigate to search results screen
    setProductSearchQuery(query);
    setCurrentScreen("search-results");
  };

  // Define screens that should render WITHOUT header (configuration/special screens only)
  const screensWithoutHeader = [
    "create-event",
    "category-detail",
    "user-profile",
    "pricing-plans"
  ];
  
  const shouldShowHeader = !screensWithoutHeader.includes(currentScreen);

  // Render different screens without header
  if (currentScreen === "create-event") {
    return <CreateEventScreen onBack={handleBackToHome} />;
  }

  if (currentScreen === "category-detail") {
    return (
      <CategoryDetailScreen
        category={selectedCategory}
        onBack={() => setCurrentScreen("home")}
      />
    );
  }

  if (currentScreen === "user-profile") {
    return (
      <UserProfileScreen
        onBack={handleBackToMenu}
      />
    );
  }

  // Show all reviews screen
  if (currentScreen === "all-reviews") {
    return (
      <AllReviewsScreen
        reviews={selectedStoreReviews}
        onBack={() => setCurrentScreen("store-profile")}
      />
    );
  }

  // Main Homepage Layout
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Sidebar Menu - Desktop Permanent */}
      <div className="hidden lg:block">
        <SidebarMenu
          isOpen={true}
          onClose={() => {}}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          isPermanent={true}
          onShowPublicarDropdown={setShowPublicarDropdown}
          currentScreen={currentScreen}
        />
        
        {/* Publicar Dropdown for Sidebar - Desktop */}
        {showPublicarDropdown && (
          <div className="fixed left-[264px] top-[500px] z-50">
            <PublicarDropdown
              isOpen={showPublicarDropdown}
              onClose={() => setShowPublicarDropdown(false)}
              onCreateAnnouncement={() => handleCreateFromDropdown('announcement')}
              onCreateLink={() => handleCreateFromDropdown('link')}
            />
          </div>
        )}
      </div>

      {/* Sidebar Menu - Mobile/Tablet Overlay */}
      <div className="lg:hidden">
        <SidebarMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          isPermanent={false}
          onShowPublicarDropdown={setShowPublicarDropdown}
          currentScreen={currentScreen}
        />
      </div>

      {/* Main Content Wrapper - Pushes content to the right on desktop with subtle gap */}
      <div className="lg:ml-64">
        {/* Hero Carousel Background - Only on home screen and when not creating posts */}
        {currentScreen === "home" && !isCreatingPost && (
          <div className="absolute top-0 left-0 right-0 lg:left-64 z-0 h-[70vh] md:h-[75vh] lg:h-[80vh]">
            <div className="max-w-7xl mx-auto h-full">
              <HeroCarousel />
            </div>
          </div>
        )}

      {/* Header - Always visible at the top */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b bg-white border-gray-200">
        {/* Desktop/Tablet Header */}
        <div className="hidden md:block">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 lg:gap-6 justify-start">
            {/* Hamburger Menu Button - Tablet Only */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
            >
              FL
            </button>

            {/* Logo and Title */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Bolivia en un clic" 
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-sm lg:text-base font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent whitespace-nowrap">
                Bolivia en un clic
              </h1>
            </div>

            {/* Search Boxes - Responsive */}
            <div className="flex items-center gap-3 lg:gap-6 flex-1">
              {/* City Selector */}
              {selectedCity ? (
                <div className="flex items-center gap-1 w-64 lg:w-80">
                  <div className="px-3 lg:px-4 py-2 bg-orange-50 rounded-lg text-gray-900 text-xs lg:text-sm flex items-center gap-2 w-full border-2 border-orange-500">
                    <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span className="truncate">{selectedCity}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCity("")}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                    title="Quitar filtro"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              ) : (
                <div className="w-64 lg:w-80 relative">
                  <div className="relative">
                    <MapPin className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-600 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Elige tu ciudad"
                      value={citySearchQuery}
                      onChange={(e) => setCitySearchQuery(e.target.value)}
                      onFocus={() => setShowCitySearch(true)}
                      className="w-full pl-10 lg:pl-12 pr-3 lg:pr-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs lg:text-sm text-gray-700 transition-colors border-2 border-orange-500 focus:outline-none focus:bg-white"
                    />
                  </div>

                  {/* City Dropdown - Desktop/Tablet */}
                  {showCitySearch && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 p-4 lg:p-6 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="space-y-3 lg:space-y-4">
                        {/* Cities List */}
                        <div className="space-y-1 max-h-64 overflow-y-auto scrollbar-hide">
                          {filteredCities.length > 0 ? (
                            filteredCities.map((city) => (
                              <button
                                key={city.name}
                                onClick={() => {
                                  setSelectedCity(city.name);
                                  setShowCitySearch(false);
                                  setCitySearchQuery("");
                                }}
                                className="w-full p-3 rounded-xl border-2 transition-all text-left hover:shadow-md hover:border-orange-500 border-gray-200 bg-white"
                              >
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0" />
                                  <div>
                                    <p className="text-sm font-semibold text-gray-900">{city.name}</p>
                                    {!city.isDepartment && (
                                      <p className="text-xs text-gray-600">{city.department}</p>
                                    )}
                                  </div>
                                </div>
                              </button>
                            ))
                          ) : (
                            <p className="text-center text-gray-500 text-sm py-4">
                              No se encontraron ciudades
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Product Search */}
              <div className="w-64 lg:w-80 relative">
                <div className="relative">
                  <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-600 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Encuentra lo que buscas"
                    value={productSearchQuery}
                    onChange={(e) => setProductSearchQuery(e.target.value)}
                    onFocus={() => setShowProductSearch(true)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && productSearchQuery.trim()) {
                        handleProductSearch(productSearchQuery, selectedCity);
                        setShowProductSearch(false);
                      }
                    }}
                    className="w-full pl-10 lg:pl-12 pr-3 lg:pr-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs lg:text-sm text-gray-700 transition-colors border-2 border-orange-500 focus:outline-none focus:bg-white"
                  />
                </div>

                {/* Dropdown Search Suggestions - Desktop/Tablet */}
                {showProductSearch && productSearchQuery.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-orange-200 p-4 lg:p-6 z-50 animate-in slide-in-from-top-2 duration-200 max-h-96 overflow-y-auto">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 mb-3">Sugerencias</p>
                      {mockPublications
                        .filter((pub) => 
                          pub.business.toLowerCase().includes(productSearchQuery.toLowerCase()) ||
                          pub.category.toLowerCase().includes(productSearchQuery.toLowerCase())
                        )
                        .slice(0, 6)
                        .map((pub, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setProductSearchQuery(pub.business);
                              handleProductSearch(pub.business, selectedCity);
                              setShowProductSearch(false);
                            }}
                            className="w-full text-left px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors border border-gray-100 hover:border-orange-300"
                          >
                            <div className="flex items-center gap-3">
                              <Search className="w-4 h-4 text-orange-600 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate">{pub.business}</p>
                                <p className="text-xs text-gray-600">{pub.category} • {pub.city}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      {mockPublications.filter((pub) => 
                        pub.business.toLowerCase().includes(productSearchQuery.toLowerCase()) ||
                        pub.category.toLowerCase().includes(productSearchQuery.toLowerCase())
                      ).length === 0 && (
                        <p className="text-sm text-gray-500 text-center py-4">No se encontraron sugerencias</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="flex items-center gap-2">
              {/* Search Icon */}
              <button
                onClick={() => {
                  if (productSearchQuery.trim()) {
                    handleProductSearch(productSearchQuery, selectedCity);
                    setShowProductSearch(false);
                  } else {
                    setShowProductSearch(!showProductSearch);
                  }
                }}
                className="w-10 h-10 bg-gray-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all border border-gray-200 hover:border-transparent group"
                title="Buscar"
              >
                <Search className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </button>

              {/* Flag Icon (Mis Perfiles Comerciales) */}
              <button
                onClick={() => handleNavigate("business-profiles")}
                className="w-10 h-10 bg-gray-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all border border-gray-200 hover:border-transparent group"
                title="Mis Perfiles Comerciales"
              >
                <Flag className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </button>

              {/* Favorites Icon */}
              <button
                onClick={() => handleNavigate("favorites")}
                className="w-10 h-10 bg-gray-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all border border-gray-200 hover:border-transparent group"
                title="Favoritos"
              >
                <Heart className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </button>

              {/* Settings Icon */}
              <button
                onClick={() => setCurrentScreen("edit-business")}
                className="w-10 h-10 bg-gray-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all border border-gray-200 hover:border-transparent group"
                title="Editar Perfil"
              >
                <Settings className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </button>

              {/* Profile Picture */}
              <button
                onClick={() => handleNavigate("user-profile")}
                className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center overflow-hidden transition-all hover:scale-105 border border-orange-300"
                title="Mi Perfil"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3Mzc0ODU5NDV8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="María González"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          {/* Top row: Logo and Avatar */}
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src={logoImage} 
                alt="Bolivia en un clic" 
                className="w-7 h-7 object-contain"
              />
              <h1 className="text-sm font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Bolivia en un clic
              </h1>
            </div>
            
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold"
            >
              FL
            </button>
          </div>

          {/* Bottom row: Search boxes */}
          <div className="px-4 pb-3 pt-2 flex items-center gap-2 border-t border-gray-100">
            {/* City Selector - Mobile */}
            {selectedCity ? (
              <div className="flex items-center gap-1 flex-1">
                <div className="px-3 py-2 bg-orange-50 rounded-lg text-gray-900 text-xs flex items-center gap-1.5 w-full border-2 border-orange-500">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                  <span className="truncate">{selectedCity}</span>
                </div>
                <button
                  onClick={() => setSelectedCity("")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  title="Quitar filtro"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowCitySearch(true)}
                className="px-3 py-2 bg-gray-50 active:bg-gray-100 rounded-lg text-xs text-gray-700 flex items-center gap-1.5 transition-colors flex-1 border-2 border-orange-500"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                <span className="truncate">Ciudad</span>
              </button>
            )}

            {/* Product Search - Mobile */}
            <button
              onClick={() => setShowProductSearch(!showProductSearch)}
              className="px-3 py-2 bg-gray-50 active:bg-gray-100 rounded-lg text-xs text-gray-700 flex items-center gap-1.5 transition-colors flex-1 border-2 border-orange-500"
            >
              <Search className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="truncate">Buscar</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown - Full screen overlay */}
        {showProductSearch && (
          <div className="md:hidden fixed inset-0 bg-white z-50 animate-in slide-in-from-bottom duration-300">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  ¿Qué estás buscando?
                </h2>
                <button
                  onClick={() => setShowProductSearch(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Busca productos, servicios, negocios..."
                  value={productSearchQuery}
                  onChange={(e) => setProductSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && productSearchQuery.trim()) {
                      handleProductSearch(productSearchQuery, selectedCity);
                      setShowProductSearch(false);
                    }
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none text-base"
                  autoFocus
                />
              </div>

              {/* Search Button */}
              <button
                onClick={() => {
                  if (productSearchQuery.trim()) {
                    handleProductSearch(productSearchQuery, selectedCity);
                    setShowProductSearch(false);
                  }
                }}
                disabled={!productSearchQuery.trim()}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl text-base font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                <Search className="w-5 h-5 inline-block mr-2" />
                Buscar
              </button>
            </div>
          </div>
        )}

        {/* Backdrop to close dropdown when clicking outside - Desktop only */}
        {showProductSearch && (
          <div 
            className="hidden md:block fixed inset-0 z-40" 
            onClick={() => setShowProductSearch(false)}
          />
        )}
        
        {/* Backdrop to close city dropdown when clicking outside - Desktop only */}
        {showCitySearch && (
          <div 
            className="hidden md:block fixed inset-0 z-40" 
            onClick={() => {
              setShowCitySearch(false);
              setCitySearchQuery("");
            }}
          />
        )}
      </header>

      {/* Mega Menu Dropdown - Outside header for proper hover behavior */}
      {showCategoriesMegaMenu && (
        <div 
          className="fixed left-4 sm:left-6 lg:left-[336px] top-[120px] z-50"
          onMouseEnter={() => setShowCategoriesMegaMenu(true)}
          onMouseLeave={() => setShowCategoriesMegaMenu(false)}
        >
          <CategoriesMegaMenuDropdown
            isOpen={showCategoriesMegaMenu}
            onClose={() => setShowCategoriesMegaMenu(false)}
            onCategoryClick={(categoryId) => {
              setSelectedCategory(categoryId);
              setCurrentScreen("categories");
            }}
            onViewAll={() => {
              setSelectedCategory(null);
              setCurrentScreen("categories");
            }}
          />
        </div>
      )}

      {showPromocionesMegaMenu && (
        <div 
          className="fixed left-[120px] sm:left-[140px] lg:left-[460px] top-[120px] z-50"
          onMouseEnter={() => setShowPromocionesMegaMenu(true)}
          onMouseLeave={() => setShowPromocionesMegaMenu(false)}
        >
          <PromocionesMegaMenuDropdown
            isOpen={showPromocionesMegaMenu}
            onClose={() => setShowPromocionesMegaMenu(false)}
            onNavigateToPromociones={() => handleNavigate('marketplace')}
          />
        </div>
      )}

      {showEventosMegaMenu && (
        <div 
          className="fixed left-[220px] sm:left-[260px] lg:left-[600px] top-[120px] z-50"
          onMouseEnter={() => setShowEventosMegaMenu(true)}
          onMouseLeave={() => setShowEventosMegaMenu(false)}
        >
          <EventosMegaMenuDropdown
            isOpen={showEventosMegaMenu}
            onClose={() => setShowEventosMegaMenu(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <main className={`${
        currentScreen === "categories" || currentScreen === "marketplace" || currentScreen === "events" || currentScreen === "lobby"
          ? "w-full p-2 pt-[60px] md:pt-[76px] lg:pt-[76px]"
          : "max-w-7xl mx-auto px-2 py-2 pt-[64px] md:pt-[80px] lg:pt-[80px]"
      } relative z-10 bg-gray-100`}>
        {/* Layout with right sidebar for home screen */}
        {currentScreen === "home" && (
          <div className="lg:flex lg:gap-2">
            {/* Main Feed - Center Column */}
            <div className="flex-1 min-w-0">
              <HomeFeed
                onNavigate={handleNavigate}
                onViewPost={handleViewPost}
                onViewBusiness={handleViewBusiness}
                onViewStore={handleViewStore}
                onCityChange={setSelectedCity}
                selectedCity={selectedCity}
                triggerCreateAnnouncement={triggerCreateAnnouncement}
                triggerCreateLink={triggerCreateLink}
                onCreateComplete={() => {
                  setTriggerCreateAnnouncement(false);
                  setTriggerCreateLink(false);
                }}
                onCreateScreenChange={setIsCreatingPost}
              />
            </div>

            {/* Right Sidebar - Desktop only */}
            <div className="hidden lg:block">
              <RightSidebar onNavigate={handleNavigate} />
            </div>
          </div>
        )}

        {currentScreen === "marketplace" && (
          <PromocionesScreen
            onBack={handleBackToHome}
            selectedCity={selectedCity}
          />
        )}

        {currentScreen === "categories" && (
          <CategoriesScreen
            onBack={handleBackToHome}
            onCategorySelect={handleCategorySelect}
            selectedCity={selectedCity}
            onViewBusiness={handleViewBusiness}
            onViewStore={handleViewStore}
            initialCategoryId={selectedCategory}
          />
        )}

        {currentScreen === "events" && (
          <Events
            onBack={handleBackToHome}
          />
        )}

        {currentScreen === "lobby" && (
          <Lobby
            onBack={handleBackToHome}
          />
        )}

        {currentScreen === "post-detail" && (
          <PostDetailScreen
            postId={selectedPostId}
            onBack={handleBack}
            onViewBusiness={handleViewBusiness}
            promotionalText={promotionalText}
            isOwnBusiness={selectedPostId === 4}
          />
        )}

        {currentScreen === "business-profile" && (
          <BusinessProfileScreen
            businessId={selectedBusinessId}
            onBack={handleBack}
            onViewPost={handleViewPost}
          />
        )}

        {currentScreen === "business-profiles" && (
          <BusinessProfilesScreen
            onBack={handleBackToMenu}
            onChangePlan={() => {
              setNavigationHistory([...navigationHistory, currentScreen]);
              setCurrentScreen("pricing-plans");
            }}
            onViewProfile={(profileId) => {
              setSelectedBusinessId(profileId);
              setIsOwnProfile(true);
              setNavigationHistory([...navigationHistory, currentScreen]);
              setCurrentScreen("store-profile");
            }}
          />
        )}

        {currentScreen === "store-profile" && (
          <StoreProfileScreen
            businessId={selectedBusinessId}
            isOwnProfile={isOwnProfile}
            promotionalText={promotionalText}
            onBack={() => {
              // Check if we came from business-profiles
              if (navigationHistory[navigationHistory.length - 1] === "business-profiles") {
                setCurrentScreen("business-profiles");
                setNavigationHistory(navigationHistory.slice(0, -1));
                setIsOwnProfile(false);
              } else {
                handleBack();
                setIsOwnProfile(false);
              }
            }}
            onViewAllReviews={(reviews) => {
              setSelectedStoreReviews(reviews);
              setCurrentScreen("all-reviews");
            }}
          />
        )}

        {currentScreen === "favorites" && (
          <FavoritesScreen
            onBack={handleBackToMenu}
            onViewPost={handleViewPost}
            onViewStore={handleViewStore}
          />
        )}

        {currentScreen === "search-results" && (
          <SearchResultsScreen
            searchQuery={productSearchQuery}
            selectedCity={selectedCity}
            onBack={handleBackToHome}
            onViewPost={handleViewPost}
            onViewBusiness={handleViewBusiness}
          />
        )}

        {currentScreen === "detail-page" && (
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                ←
              </button>
              <h1 className="text-xl font-bold text-gray-900">{detailPageTitle}</h1>
            </div>
            <p className="text-gray-600">Contenido de {detailPageTitle}</p>
          </div>
        )}

        {currentScreen === "edit-business" && (
          <EditBusinessScreen
            onBack={handleBackToHome}
            onEditInfo={() => setCurrentScreen("edit-info")}
            onGalleryPhotos={() => setCurrentScreen("gallery-photos")}
            onContactSocial={() => setCurrentScreen("contact-social")}
            onSpecialLinks={() => setCurrentScreen("special-links")}
            onPresentationVideo={() => setCurrentScreen("presentation-video")}
            onBusinessProposals={() => {
              setNavigationHistory([...navigationHistory, currentScreen]);
              setCurrentScreen("pricing-plans");
            }}
            onPromotionalBox={() => setCurrentScreen("promotional-box")}
          />
        )}

        {currentScreen === "edit-info" && (
          <EditBusinessInfoScreen
            onBack={() => setCurrentScreen("edit-business")}
            onSelectCategory={() => setCurrentScreen("select-category")}
            onEditAddress={() => setCurrentScreen("edit-address")}
            onEditHours={() => setCurrentScreen("edit-hours")}
            onGalleryPhotos={() => setCurrentScreen("gallery-photos")}
            onContactSocial={() => setCurrentScreen("contact-social")}
            onSpecialLinks={() => setCurrentScreen("special-links")}
            onPresentationVideo={() => setCurrentScreen("presentation-video")}
            onPromotionalBox={() => setCurrentScreen("promotional-box")}
          />
        )}

        {currentScreen === "select-category" && (
          <SelectCategoryScreen
            onBack={() => setCurrentScreen("edit-info")}
            onSelectCategory={(category) => {
              console.log("Selected category:", category);
              setCurrentScreen("edit-info");
            }}
          />
        )}

        {currentScreen === "edit-address" && (
          <EditAddressScreen
            onBack={() => setCurrentScreen("edit-info")}
            onSave={(address) => {
              console.log("Saved address:", address);
              setCurrentScreen("edit-info");
            }}
          />
        )}

        {currentScreen === "edit-hours" && (
          <EditHoursScreen
            onBack={() => setCurrentScreen("edit-info")}
            onSave={(hours) => {
              console.log("Saved hours:", hours);
              setCurrentScreen("edit-info");
            }}
          />
        )}

        {currentScreen === "gallery-photos" && (
          <GalleryPhotosScreen
            onBack={() => setCurrentScreen("edit-business")}
          />
        )}

        {currentScreen === "contact-social" && (
          <ContactSocialScreen
            onBack={() => setCurrentScreen("edit-business")}
          />
        )}

        {currentScreen === "special-links" && (
          <SpecialLinksScreen
            onBack={() => setCurrentScreen("edit-business")}
          />
        )}

        {currentScreen === "presentation-video" && (
          <PresentationVideoScreen
            onBack={() => setCurrentScreen("edit-business")}
          />
        )}

        {currentScreen === "promotional-box" && (
          <PromotionalBoxScreen
            onBack={() => setCurrentScreen("edit-business")}
            onSave={(text) => setPromotionalText(text)}
            initialValue={promotionalText}
          />
        )}

        {currentScreen === "account-info" && (
          <AccountInfoScreen
            onBack={handleBackToMenu}
            onViewPendingPayment={(paymentId) => {
              setSelectedPaymentId(paymentId);
              setNavigationHistory([...navigationHistory, currentScreen]);
              setCurrentScreen("payment-pending-detail");
            }}
          />
        )}

        {currentScreen === "export-help" && (
          <ExportHelpScreen
            onBack={handleBackToMenu}
          />
        )}

        {currentScreen === "change-account" && (
          <ChangeAccountScreen
            onBack={() => {
              setCurrentScreen("home");
              setIsSidebarOpen(true);
            }}
            onSelectPlan={(plan) => {
              setSelectedPlan(plan);
              setCurrentScreen("payment-config");
            }}
          />
        )}

        {currentScreen === "pricing-plans" && (
          <PricingPlansScreen
            onBack={() => setCurrentScreen("business-profiles")}
            onSelectPlan={(plan) => {
              setSelectedPlan(plan);
              setCurrentScreen("payment-config");
            }}
          />
        )}

        {currentScreen === "payment-config" && (
          <PaymentConfigScreen
            onBack={() => setCurrentScreen("pricing-plans")}
            selectedPlan={selectedPlan}
          />
        )}

        {currentScreen === "billing-history" && (
          <BillingHistoryScreen
            onBack={handleBackToMenu}
            onViewPendingPayment={(paymentId) => {
              setSelectedPaymentId(paymentId);
              setNavigationHistory([...navigationHistory, currentScreen]);
              setCurrentScreen("payment-pending-detail");
            }}
          />
        )}

        {currentScreen === "payment-pending-detail" && (
          <PaymentPendingDetailScreen
            onBack={handleBackToMenu}
            paymentId={selectedPaymentId}
            onPayNow={() => {
              // Navigate to payment-config
              setSelectedPlan("premium"); // This would be dynamic based on payment
              setCurrentScreen("payment-config");
            }}
          />
        )}

        {currentScreen === "verification-intro" && (
          <VerificationIntroScreen
            onBack={handleBackToMenu}
            onContinue={() => {
              setNavigationHistory([...navigationHistory, currentScreen]);
              setCurrentScreen("verification-request");
            }}
          />
        )}

        {currentScreen === "verification-request" && (
          <VerificationRequestScreen
            onBack={() => {
              setCurrentScreen("verification-intro");
              if (navigationHistory.length > 0) {
                setNavigationHistory(navigationHistory.slice(0, -1));
              }
            }}
            onSubmit={handleBackToHome}
          />
        )}

        {currentScreen === "how-it-works" && (
          <HowItWorksScreen
            onBack={handleBackToMenu}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
}