import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Part-Time Software Engineer (Python)",
    company: "Integrate System Co, Ltd",
    location: "Taoyuan, Taiwan",
    period: "Jul 2025 — Jan 2026",
    description: "Developed PyQt desktop applications with interactive GUIs, built and maintained Python Flask backend services and APIs, and managed databases to ensure reliable application performance.",
  },
  {
    role: "Software Engineer, Lead Backend Engineer",
    company: "Episode Technology",
    location: "Coimbatore, India",
    period: "Nov 2023 — Aug 2024",
    description: "Built and maintained backend services for the Pingle app using Node.js and CodeIgniter. Developed APIs for bookings, payments, and notifications, managed AWS deployment and scaling, and implemented a WhatsApp bot for automated user communication.",
  },
  {
    role: "Software Developer",
    company: "Indtechsoft Solutions",
    location: "Coimbatore, India",
    period: "Mar 2023 — Oct 2023",
    description: "Developed ERP and CRM applications using CodeIgniter. Built backend logic and database structures for business workflows, and improved usability through user-friendly interfaces.",
  },
  {
    role: "Web Development Intern",
    company: "Nearstall India",
    location: "",
    period: "Dec 2019 — Jan 2021",
    description: "Learned and developed websites and web applications, contributing to client projects and gaining hands-on experience in full web development workflows.",
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
                <p className="font-mono text-muted-foreground text-xs mt-1">{exp.period}</p>
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
