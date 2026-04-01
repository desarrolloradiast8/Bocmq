import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  title: string;
  description: string;
  visitDate: string;
  image?: string;
}

interface AllReviewsScreenProps {
  reviews: Review[];
  onBack: () => void;
}

export const AllReviewsScreen: React.FC<AllReviewsScreenProps> = ({ reviews, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-20 border-b">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-800" />
            </button>
            <h2 className="font-semibold text-base">Todas las recomendaciones</h2>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <Card key={review.id} className="rounded-2xl p-3">
              <div className="flex gap-3">
                {/* Left side - Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <img 
                      src={review.userAvatar} 
                      alt={review.userName} 
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs">{review.userName}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full ${i < review.rating ? 'bg-orange-500' : 'bg-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xs mb-1">{review.title}</h3>
                  <p className="text-gray-700 text-xs mb-1 leading-tight">{review.description}</p>
                  <p className="text-gray-500 text-[10px]">Fecha de la visita: {review.visitDate}</p>
                </div>
                
                {/* Right side - Image (if exists) */}
                {review.image && (
                  <img 
                    src={review.image} 
                    alt="Review" 
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0" 
                  />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};