import { Leaf, Cpu, Car, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Pot",
    subtitle: "IoT-based Plant Monitoring System",
    description:
      "Automated water management using soil moisture sensors and microcontrollers to maintain healthy plant growth. Integrates real-time monitoring with automated irrigation controls.",
    icon: Leaf,
    tags: ["IoT", "Arduino", "Sensors", "Automation"],
  },
  {
    title: "Potato Chip Quality Monitoring",
    subtitle: "Enhancement System",
    description:
      "Designed using MOS gas sensors (MQ-135, CCS811, BME688) with Arduino to detect volatile compounds and apply machine learning concepts for freshness monitoring.",
    icon: Cpu,
    tags: ["Machine Learning", "Gas Sensors", "Arduino", "Quality Control"],
  },
  {
    title: "Accident Detection & Prevention",
    subtitle: "IoT Safety System",
    description:
      "IoT-enabled system using sensors to detect vehicle collisions and automatically send emergency alerts. Focused on reducing road fatalities through real-time response.",
    icon: Car,
    tags: ["IoT", "Safety", "Real-time Alerts", "Sensors"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group card-gradient rounded-2xl border border-border overflow-hidden transition-all hover:border-primary/50 hover:glow-subtle"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
