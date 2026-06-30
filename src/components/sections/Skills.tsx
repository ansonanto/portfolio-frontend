import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "LLMs", "Computer Vision", "NLP", "Reinforcement Learning"],
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    text: "text-blue-200"
  },
  {
    category: "Research",
    skills: ["AI Safety", "Model Evaluation", "Geospatial Modeling", "Anomaly Detection"],
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    text: "text-violet-200"
  },
  {
    category: "Engineering",
    skills: ["Python", "PyTorch", "TensorFlow", "AWS", "Docker", "React", "Node.js"],
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    text: "text-emerald-200"
  },
  {
    category: "Data",
    skills: ["SQL", "MongoDB", "Data Analysis", "Feature Engineering"],
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    text: "text-amber-200"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive stack for building, evaluating, and deploying intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${group.color} border ${group.border} backdrop-blur-sm`}
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-6">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full bg-background/50 border border-white/5 ${group.text} font-medium tracking-wide`}
                  >
                    {skill}
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
