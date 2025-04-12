
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was a 2nd-year CS student feeling completely lost about how to become a data analyst. Career Path Compass gave me a crystal clear roadmap that I'm following step by step!",
    name: "Riya S.",
    title: "Computer Science Student",
    avatar: "RS"
  },
  {
    quote: "The personalized skills gap analysis showed me exactly what I needed to learn. Six months later, I landed my first software developer role!",
    name: "Michael T.",
    title: "Junior Software Developer",
    avatar: "MT"
  },
  {
    quote: "As someone switching careers into UX design, I needed structured guidance. This tool helped me organize my learning and build a portfolio that got me hired.",
    name: "Jessica L.",
    title: "UX Designer",
    avatar: "JL"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-compass-blue to-compass-dark-blue text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl opacity-90">
            Hear from students who found their way with Career Path Compass
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <Quote className="h-8 w-8 text-white/60 mb-4" />
                <p className="text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter className="border-t border-white/10 pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-white/20 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
