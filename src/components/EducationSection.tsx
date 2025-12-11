import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Electronics & Instrumentation Engineering",
    institution: "Kongu Engineering College",
    period: "2023 – 2027",
    grade: "CGPA: 7.85",
    current: true,
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "SBOA CBSE School, Madurai",
    period: "2022 – 2023",
    grade: "63.4%",
    current: false,
  },
  {
    degree: "SSLC (Secondary School)",
    institution: "SBOA CBSE School, Madurai",
    period: "2020 – 2021",
    grade: "70.4%",
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex items-start pt-6">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    edu.current ? 'bg-primary border-primary glow-primary' : 'bg-card border-border'
                  }`} />
                </div>

                {/* Card */}
                <div className={`flex-1 card-gradient rounded-2xl p-6 border transition-all hover:border-primary/50 ${
                  edu.current ? 'border-primary/30' : 'border-border'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      </div>
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
