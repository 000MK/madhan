import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Athena AI",
    location: "",
    description: "Built backend services using FastAPI, developed NLP and OCR pipelines for document processing, and optimized application performance for production workloads.",
  },
  {
    role: "AI Research Intern",
    company: "SRM Research Lab",
    location: "",
    description: "Conducted research on deep learning models for medical imaging and multi-agent reinforcement learning for traffic optimization.",
  },
  {
    role: "Backend Developer",
    company: "Episode Technology",
    location: "",
    description: "Worked on Pingle hyperlocal booking app, building backend services using PHP & Node.js with multi-tenant architecture.",
  },
  {
    role: "Full Stack Developer",
    company: "Indtechsoft Solutions",
    location: "",
    description: "Developed ERP and CRM web applications including Global Hearing Aid billing and inventory module, delivering full-stack solutions for business clients.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">03. EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="font-mono text-primary text-sm mt-1">
                  {exp.company}{exp.location && ` · ${exp.location}`}
                </p>
                <p className="text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
