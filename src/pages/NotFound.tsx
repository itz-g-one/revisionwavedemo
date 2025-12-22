import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background section-padding">
      <div className="text-center animate-fade-in-up">
        <div className="text-9xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
