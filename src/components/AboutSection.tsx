import { Cpu, Zap, Lightbulb, Target } from "lucide-react";
import { FC } from "react";

interface HighlightItem {
  icon: FC<{ className?: string }>;
  label: string;
}

export const AboutSection: FC = () => {
  const highlights: HighlightItem[] = [
    { icon: Cpu, label: "Embedded Systems" },
    { icon: Zap, label: "IoT Solutions" },
    { icon: Lightbulb, label: "Automation" },
    { icon: Target, label: "Control Systems" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="card-gradient rounded-2xl p-8 border border-border mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A passionate Electronics and Instrumentation Engineering student driven to apply AI, 
            embedded systems, and automation technologies to solve practical industrial challenges. 
            Interested in IoT, control systems, instrumentation, and intelligent monitoring. 
            Seeking opportunities to contribute technical expertise and learn from real-world industrial problems.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="card-gradient rounded-xl p-6 border border-border text-center transition-all hover:border-primary/50 hover:glow-subtle"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* My Story */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            My <span className="text-gradient">Story</span>
          </h3>

          <div className="card-gradient rounded-2xl p-8 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              From my school days at SBOA CBSE, I was always curious about how electronic systems sense, 
              respond, and automate real-world tasks. This curiosity grew stronger during my engineering 
              journey at Kongu Engineering College, where I explored sensors, microcontrollers, automation 
              tools, and IoT systems. My inplant trainings at Agni Steels and Embien Technologies allowed me 
              to experience industrial workflows, PCB design, embedded development, and process instrumentation 
              closely. Working on projects like Smart Pot, Potato Chip Quality Monitoring, and Accident Detection 
              Systems helped me understand practical engineering, real-time data handling, and intelligent 
              monitoring solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              As I gained more exposure, I realized that modern engineering requires strong integration of 
              hardware and software. This motivated me to build skills in Python, Java, C, and React, enabling 
              me to develop complete end-to-end systems. I enjoy building solutions where electronics, automation, 
              and software work together seamlessly. My goal is to apply my skills in instrumentation, IoT, 
              automation, and embedded systems to create meaningful, real-world innovations. I am actively preparing 
              for placements and internships where I can grow further while contributing to impactful engineering work.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
