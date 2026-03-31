import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">01. ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              I'm a software engineer and AI enthusiast currently pursuing my M.S. in Artificial Intelligence 
              at Northeastern University, Boston. I hold a B.Tech in Computer Science from SRM Institute 
              of Science and Technology, where I built a strong foundation in software development 
              and problem-solving.
            </p>
            <p>
              My professional journey includes building production systems at <span className="text-foreground font-medium">Athena AI</span>, where I worked 
              on NLP pipelines, OCR systems, and backend services using FastAPI. I also gained research 
              experience as an <span className="text-foreground font-medium">AI Research Intern at SRM Research Lab</span>, exploring deep learning 
              approaches for medical imaging and traffic optimization.
            </p>
            <p>
              I'm driven by the challenge of building intelligent systems that solve real-world problems — 
              from multi-agent reinforcement learning to brain tumor detection using CNNs. This blend of 
              industry experience and academic research gives me a practical, results-oriented approach to AI engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
