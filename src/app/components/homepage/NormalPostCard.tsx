import { Heart, Share2, Bookmark, MapPin, Star } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { useFavorites } from "@/app/components/homepage/FavoritesContext";
import { FaWhatsapp } from "react-icons/fa";

interface NormalPostCardProps {
  post: {
    id: number;
    business: string;
    category: string;
    city: string;
    profileImage: string;
    image: string;
    description: string;
    rating: number;
    phone: string;
  };
  onPostClick: (postId: number) => void;
}

export function NormalPostCard({ post, onPostClick }: NormalPostCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = post.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(post.id);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.business,
        text: post.description,
      });
    }
  };

  return (
    <Card 
      className="overflow-hidden rounded-3xl bg-white hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onPostClick(post.id)}
    >
      <div className="p-6">
        {/* Header: Profile Image, Location, Rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            {/* Profile Image */}
            <img
              src={post.profileImage}
              alt={post.business}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900">{post.business}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{post.city}</span>
              </div>
            </div>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-full">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-900">{post.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {post.description}
        </p>

        {/* Main Image */}
        <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden mb-4">
          <img
            src={post.image}
            alt={post.business}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </Button>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Favorite */}
            <button
              onClick={handleFavoriteClick}
              className="p-2.5 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-xl transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite(post.id)
                    ? "fill-red-500 text-red-500"
                    : "text-red-400"
                }`}
              />
            </button>

            {/* Share */}
            <button
              onClick={handleShareClick}
              className="p-2.5 bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-xl transition-colors"
            >
              <Share2 className="w-5 h-5 text-orange-600" />
            </button>

            {/* Bookmark/Save */}
            <button
              onClick={handleFavoriteClick}
              className="p-2.5 bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 rounded-xl transition-colors"
            >
              <Bookmark
                className={`w-5 h-5 ${
                  isFavorite(post.id)
                    ? "fill-orange-600 text-orange-600"
                    : "text-orange-500"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}