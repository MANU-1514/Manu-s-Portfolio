import {
  Code2,
  Gauge,
  Wrench,
  Users,
  MessageSquare,
  Crown,
  Clock,
  Cpu,
  Zap,
  Factory,
  Sun,
} from "lucide-react";

const programmingSkills = ["C", "Python", "Java"];

const instrumentationSkills = [
  "PLC",
  "SCADA",
  "SP3D",
  "Instrumentation Fundamentals",
];

const cadTools = ["AutoCAD", "EPlan"];

const otherTools = ["Proteus", "Keil", "IoT Development Tools"];

const softSkills = [
  { name: "Teamwork", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Leadership", icon: Crown },
  { name: "Time Management", icon: Clock },
];

const interests = [
  { name: "Control Systems", icon: Gauge },
  { name: "Internet of Things", icon: Cpu },
  { name: "Industrial Automation", icon: Factory },
  { name: "Renewable Energy", icon: Sun },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Programming */}
          <div className="card-gradient rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {programmingSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Instrumentation */}
          <div className="card-gradient rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Gauge className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Instrumentation Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {instrumentationSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CAD Tools */}
          <div className="card-gradient rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Electrical CAD Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cadTools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Tools */}
          <div className="card-gradient rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Other Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {otherTools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Soft <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="card-gradient rounded-xl p-6 border border-border text-center transition-all hover:border-primary/50 hover:glow-subtle"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Areas of Interest */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Areas of <span className="text-gradient">Interest</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.name}
                  className="card-gradient rounded-xl p-6 border border-border text-center transition-all hover:border-primary/50 hover:glow-subtle group"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-sm">{interest.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
