import { ArrowLeft, Grid3x3 } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Categories } from "@/app/components/categories/Categories";

interface CategoriesScreenProps {
  onBack: () => void;
  onCategorySelect: (category: string) => void;
  selectedCity?: string;
  onViewBusiness?: (businessId: number) => void;
  initialCategoryId?: string | null;
}

export function CategoriesScreen({ onBack, onCategorySelect, selectedCity, onViewBusiness, initialCategoryId = null }: CategoriesScreenProps) {
  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <Categories
          onBack={onBack}
          onCategorySelect={onCategorySelect}
          selectedCity={selectedCity}
          onViewBusiness={onViewBusiness}
          initialCategoryId={initialCategoryId}
        />
      </div>
    </div>
  );
}