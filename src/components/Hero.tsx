import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo } from "../data/personal";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">{personalInfo.name}</h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary">{personalInfo.title}</h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, innovative solutions, and turning ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToContact} className="group">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            {personalInfo.resumeUrl && (
              <Button variant="outline" size="lg" className="group" onClick={() => window.open(personalInfo.resumeUrl, "_blank")}>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <button
              onClick={() => {
                const element = document.querySelector("#about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
