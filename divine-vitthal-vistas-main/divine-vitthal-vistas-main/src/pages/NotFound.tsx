import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-display font-bold text-gradient mb-4">404</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
        <p className="text-2xl font-display font-semibold mb-4">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back to the temple.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all"
        >
          <a href="/">
            <HomeIcon className="mr-2 h-5 w-5" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

