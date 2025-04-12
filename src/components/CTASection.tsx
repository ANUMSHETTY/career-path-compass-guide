
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ready to Find Your Path?
              </h2>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl">
                Take our career assessment now and get your personalized roadmap to success. No more guesswork in your career development.
              </p>
              <Link to="/assessment">
                <Button className="bg-compass-blue hover:bg-compass-dark-blue text-white text-lg py-6 px-8">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <MapPin className="h-32 w-32 text-compass-blue opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
