import { ChevronDown, Download, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Avatar */}
      <div className="mb-8 relative inline-block">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-1 glow-subtle">
          <img
              src="placeholder.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
              />
    </div>
</div>


        {/* Name & Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
          <span className="text-foreground">Manu Sriram</span>{" "}
          <span className="text-gradient">D V</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Electronics & Instrumentation Engineering
        </p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <MapPin className="w-4 h-4" />
          <span>Kongu Engineering College</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:glow-primary hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold transition-all hover:bg-secondary hover:border-primary/50"
          >
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            className="px-8 py-3 rounded-lg border border-primary/50 bg-primary/10 text-primary font-semibold transition-all hover:bg-primary/20 hover:border-primary flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>

   
    </section>
  );
};
