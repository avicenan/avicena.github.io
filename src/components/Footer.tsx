import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Avicena Naufaldo</h3>
            <p className="text-muted-foreground">Full Stack Developer passionate about creating amazing digital experiences.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button
                onClick={() => {
                  const element = document.querySelector("#home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <button onClick={() => window.open("https://github.com/yourusername", "_blank")} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open("https://instagram.com/avicenanaufaldo/", "_blank")}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Avicena Naufaldo.</p>
        </div>
      </div>
    </footer>
  );
}
