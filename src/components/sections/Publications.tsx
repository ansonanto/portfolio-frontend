import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";

const SCHOLAR = "https://scholar.google.com/citations?user=XGstDVoAAAAJ";

const publications = [
  {
    title: "One Year Later… The Harms Persist, But So Do We!",
    venue: "arXiv preprint",
    year: "2026",
    link: SCHOLAR
  },
  {
    title: "Retrieval-Enhanced Mental Health Assessment: Capturing Self-State Dynamics from Social Media Using In-Context Learning",
    venue: "10th Workshop on Computational Linguistics and Clinical Psychology (CLPsych) @ ACL",
    year: "2025",
    link: "https://aclanthology.org/people/a/anson-antony/"
  },
  {
    title: "Lightweight LLM Adaptation for Medical Summarisation: Roux-lette at PerAnsSumm Shared Task",
    venue: "2nd Workshop on Patient-Oriented Language Processing (CL4Health) @ NAACL",
    year: "2025",
    link: "https://aclanthology.org/people/a/anson-antony/"
  },
  {
    title: "Roux-lette at 'Discharge Me!': Reducing EHR Chart Burden with a Simple, Scalable, Clinician-Driven AI Approach",
    venue: "23rd Workshop on Biomedical Natural Language Processing (BioNLP) @ ACL",
    year: "2024",
    link: "https://aclanthology.org/people/a/anson-antony/"
  },
  {
    title: "Plant Disease Detection Using GLCM Feature Extractor and Voting Classification Approach",
    venue: "Materials Today: Proceedings, Vol. 58, pp. 407–415",
    year: "2022",
    link: SCHOLAR
  },
  {
    title: "Novel Approach to Phishing Detection Using ML and Visual Similarity",
    venue: "Machine Learning and Autonomous Systems (Springer)",
    year: "2022",
    link: SCHOLAR
  },
  {
    title: "A Review on Efficient EEG Pattern Recognition Using Machine Learning and Deep Learning Methods",
    venue: "AIP Conference Proceedings, Vol. 2555",
    year: "2022",
    link: SCHOLAR
  },
  {
    title: "Stroke Prediction System Using Machine Learning Algorithm",
    venue: "Mobile Computing and Sustainable Informatics (Springer)",
    year: "2022",
    link: SCHOLAR
  },
  {
    title: "Docr-Captcha: OCR Classifier Based Deep Learning Technique for Captcha Recognition",
    venue: "19th OITS International Conference on Information Technology (OCIT)",
    year: "2021",
    link: SCHOLAR
  },
  {
    title: "Smart IoT Based Indoor Farming Analysis and Monitoring Using Fuzzy Logic Expert Systems",
    venue: "5th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)",
    year: "2021",
    link: SCHOLAR
  },
  {
    title: "Design, Simulation and Assessment of EEG-Based Expert System for Classification and Detection of Epileptic Seizure",
    venue: "5th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)",
    year: "2021",
    link: SCHOLAR
  },
  {
    title: "Brain Image Visualization",
    venue: "International Conference on Image Processing and Capsule Networks (ICIPCV)",
    year: "2020",
    link: SCHOLAR
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
            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">12</div>
            <div className="text-sm font-medium text-primary uppercase tracking-wider">Publications</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div>
            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">8+</div>
            <div className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Years of Research</div>
          </div>
        </motion.div>

        <div className="rounded-2xl border border-white/5 bg-card/20 divide-y divide-white/5 overflow-hidden">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex items-center gap-4 px-5 py-4 md:px-6 hover:bg-card/60 transition-colors"
              data-testid={`link-publication-${index}`}
            >
              {/* year badge */}
              <span className="hidden sm:flex shrink-0 w-12 flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-primary tabular-nums">{pub.year}</span>
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-medium text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground truncate">
                  <span className="sm:hidden text-primary font-medium">{pub.year} · </span>
                  {pub.venue}
                </p>
              </div>

              <ExternalLink className="w-4 h-4 shrink-0 text-white/30 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
