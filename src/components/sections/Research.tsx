import { motion, type Variants } from "framer-motion";
import { Brain, Activity, Eye, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    title: "Multimodal Learning & LLMs",
    description: "Researching large language models and multimodal systems, from lightweight adaptation techniques for specialized domains to retrieval-augmented generation for real-world clinical tasks.",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]",
    link: "https://scholar.google.com/citations?user=XGstDVoAAAAJ",
    linkLabel: "View publications",
  },
  {
    title: "Healthcare AI",
    description: "Building and evaluating ML systems for clinical and public health applications, including EHR summarisation, mental health assessment from social media, and patient-oriented NLP.",
    icon: Activity,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]",
    link: "https://aclanthology.org/people/a/anson-antony/",
    linkLabel: "View related research",
  },
  {
    title: "Computer Vision",
    description: "Applying deep learning and classical feature extraction (GLCM, OCR) to visual recognition tasks, from plant disease detection to CAPTCHA classification and beyond.",
    icon: Eye,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]",
    link: "https://scholar.google.com/citations?user=XGstDVoAAAAJ",
    linkLabel: "View related work",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export function Research() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Research Focus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Concentrating on the critical intersection of model performance, systemic safety, and real-world deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className={`group relative p-8 rounded-3xl bg-card/40 backdrop-blur-md border ${pillar.border} hover:bg-card/60 transition-all duration-500 ${pillar.glow} flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light flex-grow">
                  {pillar.description}
                </p>
                <a
                  href={pillar.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${pillar.color} opacity-70 hover:opacity-100 transition-opacity`}
                  data-testid={`link-research-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {pillar.linkLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
