import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";
import { trendingMovies, popularMovies, newReleases } from "@/data/movies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="space-y-12 pb-16">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular on Netflix" movies={popularMovies} />
        <MovieRow title="New Releases" movies={newReleases} />
      </main>
    </div>
  );
};

export default Index;