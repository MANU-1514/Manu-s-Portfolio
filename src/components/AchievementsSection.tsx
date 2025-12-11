import { Trophy, Award, Medal, BadgeCheck, Clock } from "lucide-react";

const achievements = [
  {
    title: "2nd Prize – Smart Irrigation System Using IoT",
    organization: "Kongu Engineering College, Erode",
    icon: Medal,
    type: "competition",
  },
  {
    title: "2nd Prize – Smart Soil Project",
    organization: "Sri Ramakrishna College, Coimbatore",
    icon: Medal,
    type: "competition",
  },
  {
    title: "1st Prize – Accident Detection & Prevention System",
    organization: "Puducherry Technological University",
    icon: Trophy,
    type: "competition",
  },
];

const certifications = [
  {
    title: "MATLAB Fundamentals",
    issuer: "MathWorks",
    date: "Nov 2024",
    description:
      "Demonstrates ability to work with MATLAB for engineering and scientific programming including variables, functions, arrays, data visualization, mathematical modeling, and simulations.",
    relevance:
      "Proves analytical, simulation, and problem-solving abilities — useful for control systems, signal processing, and automation.",
  },
  {
    title: "Electrical CAD – EPLAN Electric P8",
    issuer: "EPLAN",
    date: "Apr 2025",
    description:
      "Skills in electrical design and documentation including circuit diagrams, panel layout design, generating bill of materials, managing symbols, components, wiring, and industrial control panel documentation.",
    relevance:
      "Companies in automation, instrumentation, electrical design, SCADA, and PLC prefer candidates who know EPLAN.",
  },
  {
    title: "AutoCAD Electrical 2024",
    issuer: "International Certification (Proficient)",
    date: "41–100 hours",
    description:
      "Proficient in using AutoCAD Electrical to design and modify electrical schematics including circuit diagrams, PLC I/O drawings, wiring diagrams, component tagging, numbering, and troubleshooting.",
    relevance:
      "Used in industries for panel design, wiring documentation, and instrumentation layouts. Proficient level adds strong credibility.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            Competition Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="card-gradient rounded-2xl p-6 border border-border transition-all hover:border-primary/50 hover:glow-subtle"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {index === 2 && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        1st Place
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.organization}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-primary" />
            Certifications
          </h3>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 border border-border transition-all hover:border-primary/50"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {cert.date && (
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {cert.date}
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.description}
                </p>
                <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs text-primary">
                    <span className="font-medium">Why it matters:</span>{" "}
                    {cert.relevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
