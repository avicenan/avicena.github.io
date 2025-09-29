import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo } from "../data/personal";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get to know me better - my journey, experience, and what drives me in the world of technology.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-muted rounded-full flex items-center justify-center">
                  <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover object-top rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{personalInfo.bio}</p>
              <p className="text-muted-foreground leading-relaxed">{personalInfo.longBio}</p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Born in {personalInfo.birthYear}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{personalInfo.experience}</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{personalInfo.education}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View My Work
              </Button>
              {personalInfo.resumeUrl && (
                <Button variant="outline" onClick={() => window.open(personalInfo.resumeUrl, "_blank")}>
                  Download Resume
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
