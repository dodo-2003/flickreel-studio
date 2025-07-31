import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  image: string;
  year?: string;
  rating?: string;
  genres?: string[];
}

const MovieCard = ({ title, image, year, rating, genres }: MovieCardProps) => {
  return (
    <div className="group relative cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Movie Poster */}
      <div className="relative rounded-lg overflow-hidden shadow-card">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Controls */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="space-y-3">
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 p-2">
                <Play className="h-4 w-4 fill-current" />
              </Button>
              <Button variant="outline" size="sm" className="border-muted bg-background/20 backdrop-blur-sm p-2">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-muted bg-background/20 backdrop-blur-sm p-2">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-muted bg-background/20 backdrop-blur-sm p-2 ml-auto">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Movie Info */}
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground text-sm truncate">{title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {year && <span>{year}</span>}
                {rating && <span className="bg-muted px-1 rounded text-xs">{rating}</span>}
              </div>
              {genres && (
                <div className="flex flex-wrap gap-1">
                  {genres.slice(0, 3).map((genre, index) => (
                    <span key={index} className="text-xs text-muted-foreground">
                      {genre}{index < Math.min(genres.length, 3) - 1 ? " • " : ""}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;