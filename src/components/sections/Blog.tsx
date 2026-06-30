import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const books = [
  {
    title: "Next-Generation Computational Oncology: Language Models and Quantum Algorithms",
    category: "Computational Biology",
    year: "2026",
    publisher: "Geh Press",
    excerpt: "Applying large language models and quantum computing methods to oncology, bridging cutting-edge AI with cancer research and clinical translation.",
    color: "from-blue-500/20 to-violet-500/20",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
  },
  {
    title: "From Imaging to Insight: Advanced Computer Vision in Life Sciences",
    category: "Computer Vision",
    year: "2026",
    publisher: "Geh Press",
    excerpt: "State-of-the-art computer vision architectures and their applications across medical imaging, genomics visualization, and biological data analysis.",
    color: "from-violet-500/20 to-pink-500/20",
    accentColor: "text-violet-400",
    bgAccent: "bg-violet-500/10",
  },
  {
    title: "Multimodal Intelligence in Medicine: Integrating Text, Imaging, and Genomics",
    category: "Multimodal AI",
    year: "2026",
    publisher: "Geh Press",
    excerpt: "Multimodal AI systems that fuse clinical text, medical imaging, and genomic data for diagnosis, prognosis, and treatment planning.",
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
  },
  {
    title: "Large Language Models in Biotechnology: Computational Foundations and Biological Discovery",
    category: "LLMs & Biotech",
    year: "2026",
    publisher: "Geh Press",
    excerpt: "The computational underpinnings of LLMs and their transformative potential in drug discovery, protein engineering, and biological knowledge extraction.",
    color: "from-emerald-500/20 to-cyan-500/20",
    accentColor: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
  },
  {
    title: "Architectures of Intelligent Medicine: AI Systems in Modern Healthcare",
    category: "Healthcare AI",
    year: "2026",
    publisher: "Geh Press",
    excerpt: "Design and deployment of AI systems in clinical settings, from EHR analysis and clinical decision support to safety evaluation and responsible deployment.",
    color: "from-orange-500/20 to-rose-500/20",
    accentColor: "text-orange-400",
    bgAccent: "bg-orange-500/10",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Books</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Authored works spanning AI in healthcare, computational biology, multimodal intelligence, and responsible AI deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col h-full bg-background rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${book.color}`} />
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`p-2 rounded-xl ${book.bgAccent}`}>
                    <BookOpen className={`w-4 h-4 ${book.accentColor}`} />
                  </span>
                  <span className={`text-xs font-medium tracking-wide ${book.accentColor}`}>
                    {book.category}
                  </span>
                </div>

                <h3 className="text-base font-display font-semibold text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                  {book.title}
                </h3>

                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                  {book.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
                  <div className="text-xs text-muted-foreground font-mono">
                    <span>{book.publisher}</span>
                    <span className="mx-1.5 opacity-40">·</span>
                    <span>{book.year}</span>
                  </div>
                  <a
                    href="https://scholar.google.com/citations?user=XGstDVoAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium ${book.accentColor} opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    Scholar
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
