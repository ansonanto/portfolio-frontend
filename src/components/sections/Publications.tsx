import { motion } from "framer-motion";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";

const publications = [
  {
    title: "Plant Disease Detection Using GLCM Feature Extractor and Voting Classification Approach",
    venue: "Materials Today: Proceedings, Vol. 58, pp. 407–415",
    year: "2022",
    citations: "55",
    link: "https://scholar.google.com/citations?user=XGstDVoAAAAJ"
  },
  {
    title: "Retrieval-Enhanced Mental Health Assessment: Capturing Self-State Dynamics from Social Media Using In-Context Learning",
    venue: "10th Workshop on Computational Linguistics and Clinical Psychology (CLPsych) @ ACL",
    year: "2025",
    citations: "3",
    link: "https://aclanthology.org/people/a/anson-antony/"
  },
  {
    title: "Docr-Captcha: OCR Classifier Based Deep Learning Technique for Captcha Recognition",
    venue: "19th OITS International Conference on Information Technology (OCIT)",
    year: "2021",
    citations: "6",
    link: "https://scholar.google.com/citations?user=XGstDVoAAAAJ"
  },
  {
    title: "Smart IoT Based Indoor Farming Analysis and Monitoring Using Fuzzy Logic Expert Systems",
    venue: "5th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)",
    year: "2021",
    citations: "6",
    link: "https://scholar.google.com/citations?user=XGstDVoAAAAJ"
  },
  {
    title: "Roux-lette at 'Discharge Me!': Reducing EHR Chart Burden with a Simple, Scalable, Clinician-Driven AI Approach",
    venue: "23rd Workshop on Biomedical Natural Language Processing (BioNLP) @ ACL",
    year: "2024",
    citations: "New",
    link: "https://aclanthology.org/people/a/anson-antony/"
  },
  {
    title: "Lightweight LLM Adaptation for Medical Summarisation: Roux-lette at PerAnsSumm Shared Task",
    venue: "2nd Workshop on Patient-Oriented Language Processing (CL4Health) @ NAACL",
    year: "2025",
    citations: "New",
    link: "https://aclanthology.org/people/a/anson-antony/"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Academic research and contributions to the field of AI safety and applied machine learning.
            </p>
          </div>
          
          <a 
            href="https://scholar.google.com/citations?user=XGstDVoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group shrink-0"
            data-testid="link-scholar-header"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-medium">Google Scholar</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 flex flex-wrap items-center justify-around gap-6 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">7+</div>
            <div className="text-sm font-medium text-primary uppercase tracking-wider">Publications</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">77</div>
            <div className="text-sm font-medium text-accent uppercase tracking-wider">Citations</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">8+</div>
            <div className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Years of Research</div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block p-6 md:p-8 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/30 hover:bg-card/60 transition-all"
              data-testid={`link-publication-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      {pub.venue}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      {pub.year}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-white">{pub.citations}</div>
                    <div className="text-xs text-muted-foreground">Citations</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
