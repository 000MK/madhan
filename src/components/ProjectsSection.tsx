import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Monitor, Gamepad2, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Multi-Agent RL Traffic Optimization",
    icon: Brain,
    tags: ["PPO", "SAC", "Multi-Agent", "PyTorch"],
    description: "Multi-agent reinforcement learning system for optimizing traffic signal control across intersections, using cooperative agents to minimize congestion and improve throughput.",
  },
  {
    title: "Brain Tumor Detection",
    icon: Brain,
    tags: ["CNN", "TensorFlow", "Medical Imaging"],
    description: "Deep learning-based brain tumor classification system using convolutional neural networks on MRI scans, achieving high accuracy in tumor type identification.",
  },
  {
    title: "Pingle — Hyperlocal Business Engine",
    icon: BarChart3,
    tags: ["Node.js", "PHP", "CodeIgniter", "Multi-tenant"],
    description: "Lead Backend Developer. Implemented a multi-tenant booking system for discovering and scheduling services (Salons, Labs, Clinics) based on real-time proximity with automated confirmation notifications.",
  },
  {
    title: "Global Hearing Aid",
    icon: Monitor,
    tags: ["PHP", "CodeIgniter", "Full Stack"],
    description: "Full Stack Developer. Developed a specialized billing and inventory module for a multi-location hearing aid manufacturer with automated stock allocation and dynamic invoice generation.",
  },
  {
    title: "NLP Document Processing Pipeline",
    icon: BarChart3,
    tags: ["FastAPI", "NLP", "OCR", "Python"],
    description: "Built an end-to-end document processing pipeline at Athena AI using NLP and OCR technologies for automated text extraction, classification, and data structuring.",
  },
  {
    title: "Unity Game — SDG 14",
    icon: Gamepad2,
    tags: ["Unity", "C#", "Game Dev"],
    description: "SDG 14: Life Below Water themed educational game built with Unity and C#, raising awareness about marine ecosystem conservation.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">04. PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group card-gradient border border-border rounded-xl p-6 hover:border-primary/30 hover:glow-border transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-primary font-mono text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
