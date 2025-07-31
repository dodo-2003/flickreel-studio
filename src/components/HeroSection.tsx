import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            The Dark Knight
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, 
            Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-3 text-lg"
            >
              <Play className="h-6 w-6 mr-2 fill-current" />
              Play
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-muted/70 text-foreground hover:bg-muted/90 font-semibold px-8 py-3 text-lg backdrop-blur-sm"
            >
              <Info className="h-6 w-6 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;