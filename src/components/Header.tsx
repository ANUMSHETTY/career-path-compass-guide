
import { Button } from "@/components/ui/button";
import { MapIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-compass-blue">
          <MapIcon className="h-6 w-6" />
          <span className="font-bold text-xl">Career Path Compass</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-compass-blue transition-colors">
            Home
          </Link>
          <Link to="/assessment" className="text-gray-600 hover:text-compass-blue transition-colors">
            Assessment
          </Link>
          <Link to="/roadmap" className="text-gray-600 hover:text-compass-blue transition-colors">
            Roadmap
          </Link>
          <Link to="/resources" className="text-gray-600 hover:text-compass-blue transition-colors">
            Resources
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-compass-blue hover:bg-compass-dark-blue text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
