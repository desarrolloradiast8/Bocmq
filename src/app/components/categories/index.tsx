import { useState } from "react";
import { CategoriesMain } from "@/app/components/categories/CategoriesMain";
import { Categories as CategoriesOriginal } from "@/app/components/categories/Categories";
import { NewCategoryView } from "@/app/components/categories/NewCategoryView";

interface CategoriesProps {
  onBack: () => void;
  onCategorySelect?: (category: string) => void;
  selectedCity?: string;
  onViewBusiness?: (businessId: number) => void;
}

type ViewType = "main" | "all-categories" | "new-category";

export function Categories({ onBack, onCategorySelect, selectedCity, onViewBusiness }: CategoriesProps) {
  const [currentView, setCurrentView] = useState<ViewType>("main");
  const [selectedNewCategory, setSelectedNewCategory] = useState<string>("");

  // Mostrar pantalla principal con todas las cards
  if (currentView === "main") {
    return (
      <CategoriesMain
        onBack={onBack}
        onViewCategories={() => setCurrentView("all-categories")}
        onSelectCategory={(categoryId) => {
          setSelectedNewCategory(categoryId);
          setCurrentView("new-category");
        }}
      />
    );
  }

  // Mostrar todas las categorías originales (80+)
  if (currentView === "all-categories") {
    return (
      <CategoriesOriginal
        onBack={() => setCurrentView("main")}
        onCategorySelect={onCategorySelect}
      />
    );
  }

  // Mostrar nueva categoría con subcategorías
  if (currentView === "new-category") {
    return (
      <NewCategoryView
        categoryId={selectedNewCategory}
        onBack={() => setCurrentView("main")}
        selectedCity={selectedCity}
        onViewBusiness={onViewBusiness}
      />
    );
  }

  return null;
}