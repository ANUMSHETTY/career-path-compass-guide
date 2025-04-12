
import { Link } from "react-router-dom";
import { MapIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MapIcon className="h-6 w-6 text-compass-light-blue" />
              <span className="font-bold text-xl">Career Path Compass</span>
            </div>
            <p className="text-slate-300 mb-4">
              Your personalized GPS for navigating the tech career landscape.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-slate-300 hover:text-white transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-slate-300 hover:text-white transition-colors">
                  Roadmap Builder
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-300 hover:text-white transition-colors">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Career Paths</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/paths/data-analysis" className="text-slate-300 hover:text-white transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/paths/software-development" className="text-slate-300 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/paths/ux-ui-design" className="text-slate-300 hover:text-white transition-colors">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link to="/paths/cybersecurity" className="text-slate-300 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">
                <span>Email: </span>
                <a href="mailto:support@careerpathcompass.com" className="hover:text-white transition-colors">
                  support@careerpathcompass.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-slate-300 text-sm">
                &copy; {new Date().getFullYear()} Career Path Compass. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
