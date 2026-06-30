import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Load Testing Framework",
    description: "Stress-testing LLM APIs and ML inference pipelines at scale to ensure reliability under extreme clinical conditions.",
    tags: ["Python", "Locust", "PyTorch", "FastAPI"],
    link: "https://www.linkedin.com/in/ansonantony/",
  },
  {
    title: "PathwayLab Management System",
    description: "Clinical pathway management platform for healthcare research workflows, standardizing data collection and evaluation.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://www.linkedin.com/in/ansonantony/",
  },
  {
    title: "Healthcare AI Safety Evaluator",
    description: "Automated evaluation suite for testing AI model behavior in edge-case clinical scenarios and identifying failure modes.",
    tags: ["Python", "HuggingFace", "Pytest", "AWS"],
    link: "https://www.linkedin.com/in/ansonantony/",
  },
  {
    title: "Geospatial ML Pipeline",
    description: "End-to-end pipeline for geographic anomaly detection and predictive modeling in public health supply chains.",
    tags: ["Python", "QGIS", "TensorFlow", "AWS SageMaker"],
    link: "https://www.linkedin.com/in/ansonantony/",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Selected Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Engineering robust systems and infrastructure to support AI evaluation and deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-card/40 border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FolderGit2 className="w-6 h-6 text-primary" />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground group-hover:text-white transition-colors"
                  data-testid={`link-project-${index}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/70 group-hover:border-primary/20 group-hover:text-primary/90 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
