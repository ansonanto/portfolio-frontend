import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";

const SCHOLAR = "https://scholar.google.com/citations?user=XGstDVoAAAAJ";
const ACL = "https://aclanthology.org/people/a/anson-antony/";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
};

// Authored papers (books excluded). Sorted newest-first.
const publications: Publication[] = [
  {
    title: "One Year Later… The Harms Persist, But So Do We!",
    authors: "AM Schoene, C Canca, GV Kumar, A Antony",
    venue: "arXiv preprint arXiv:2606.23884",
    year: "2026",
    link: SCHOLAR,
  },
  {
    title:
      "Retrieval-Enhanced Mental Health Assessment: Capturing Self-State Dynamics from Social Media Using In-Context Learning",
    authors: "A Antony, A Schoene",
    venue:
      "Proc. 10th Workshop on Computational Linguistics and Clinical Psychology (CLPsych) @ ACL",
    year: "2025",
    link: ACL,
  },
  {
    title:
      "Lightweight LLM Adaptation for Medical Summarisation: Roux-lette at PerAnsSumm Shared Task",
    authors: "A Antony, P Vickers, S Wendelken",
    venue:
      "Proc. 2nd Workshop on Patient-Oriented Language Processing (CL4Health) @ NAACL",
    year: "2025",
    link: ACL,
  },
  {
    title:
      "Roux-lette at “Discharge Me!”: Reducing EHR Chart Burden with a Simple, Scalable, Clinician-Driven AI Approach",
    authors:
      "S Wendelken, A Antony, R Korutla, B Pachipala, D Mahajan, J Shanahan, et al.",
    venue:
      "Proc. 23rd Workshop on Biomedical Natural Language Processing (BioNLP) @ ACL",
    year: "2024",
    link: ACL,
  },
  {
    title:
      "Plant Disease Detection Using GLCM Feature Extractor and Voting Classification Approach",
    authors: "A Mathew, A Antony, Y Mahadeshwar, T Khan, A Kulkarni",
    venue: "Materials Today: Proceedings, Vol. 58, pp. 407–415",
    year: "2022",
    link: SCHOLAR,
  },
  {
    title: "Novel Approach to Phishing Detection Using ML and Visual Similarity",
    authors: "P Sanghavi, A Kunchapu, A Kulkarni, D Solani, A Antony",
    venue: "Machine Learning and Autonomous Systems (ICMLAS), pp. 117–131",
    year: "2022",
    link: SCHOLAR,
  },
  {
    title:
      "A Review on Efficient EEG Pattern Recognition Using Machine Learning and Deep Learning Methods",
    authors: "A Antony, A Bhattacharjee, S Thakur, S Bharadwaj, S Sonawane, et al.",
    venue: "AIP Conference Proceedings, Vol. 2555",
    year: "2022",
    link: SCHOLAR,
  },
  {
    title: "Stroke Prediction System Using Machine Learning Algorithm",
    authors: "S Purohit, A Chahar, AR Banda, A Antony, AS Suryawanshi, C Vanwari",
    venue: "Mobile Computing and Sustainable Informatics (ICMCSI), pp. 33–41",
    year: "2022",
    link: SCHOLAR,
  },
  {
    title:
      "Docr-Captcha: OCR Classifier Based Deep Learning Technique for Captcha Recognition",
    authors: "A Mathew, A Kulkarni, A Antony, S Bharadwaj, S Bhalerao",
    venue: "19th OITS International Conference on Information Technology (OCIT)",
    year: "2021",
    link: SCHOLAR,
  },
  {
    title:
      "Smart IoT Based Indoor Farming Analysis and Monitoring Using Fuzzy Logic Expert Systems",
    authors: "S Bharadwaj, A Antony, S Bhalerao, A Kulkarni, R Eswara, et al.",
    venue: "5th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)",
    year: "2021",
    link: SCHOLAR,
  },
  {
    title:
      "Design, Simulation and Assessment of EEG-Based Expert System for Classification and Detection of Epileptic Seizure",
    authors: "A Antony, S Bharadwaj, S Sonawane, N Chidipothu, Y Kothari, H Shivade",
    venue: "5th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)",
    year: "2021",
    link: SCHOLAR,
  },
  {
    title: "Brain Image Visualization",
    authors: "A Antony, S Bhirud, A Raj, N Bhise",
    venue: "International Conference on Image Processing and Capsule Networks (ICIPCV), pp. 730–734",
    year: "2020",
    link: SCHOLAR,
  },
];

// Render the author string with "Antony" bolded (handles "A Antony" / "A Anson").
function Authors({ value }: { value: string }) {
  const parts = value.split(/(,\s*)/);
  return (
    <>
      {parts.map((part, i) => {
        const isMe = /\bA\s*Antony\b|\bA\s*Anson\b/.test(part);
        return isMe ? (
          <span key={i} className="text-white/90 font-medium">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

export function Publications() {
  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => Number(b) - Number(a)),
    [],
  );
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? publications : publications.filter((p) => p.year === active);

  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                Publications
              </h2>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
                {publications.length} publications
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Peer-reviewed research across clinical NLP, healthcare AI, and applied machine learning.
            </p>
          </div>

          <a
            href={SCHOLAR}
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

        {/* Year filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {["All", ...years].map((y) => (
            <button
              key={y}
              onClick={() => setActive(y)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                active === y
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "text-muted-foreground border border-transparent hover:text-white hover:bg-white/5"
              }`}
            >
              {y}
            </button>
          ))}
        </motion.div>

        {/* Publication list */}
        <div className="divide-y divide-white/8 border-t border-white/8">
          {filtered.map((pub, index) => (
            <motion.a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
              className="group flex items-start gap-4 py-5 hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors"
              data-testid={`link-publication-${index}`}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-primary/90 group-hover:text-primary transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  <Authors value={pub.authors} />
                  <span className="mx-1.5 text-white/30">·</span>
                  <span className="font-semibold text-white/70 tabular-nums">{pub.year}</span>
                  <span className="mx-1.5 text-white/30">·</span>
                  <span className="italic">{pub.venue}</span>
                </p>
              </div>
              <ExternalLink className="w-4 h-4 mt-1 shrink-0 text-white/20 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
