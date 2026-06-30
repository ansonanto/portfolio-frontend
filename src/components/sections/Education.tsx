import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "Northeastern University",
    department: "Khoury College of Computer Sciences",
    schoolUrl: "https://www.khoury.northeastern.edu/",
    period: "2022–2024",
    location: "Boston, MA",
    highlights: [
      "Institute for Experiential AI",
      "Graduate Research & Teaching Assistant",
      "Focus: AI Safety, NLP, Healthcare AI",
    ],
  },
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    school: "Savitribai Phule Pune University",
    department: "",
    schoolUrl: "https://www.unipune.ac.in/",
    period: "2015–2019",
    location: "Pune, India",
    highlights: [
      "Research Assistant: Brain-Computer Interface & ML",
      "Patent filings in BCI and machine learning",
      "Featured in Pune Mirror for research innovations",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Academic foundations that shaped an interdisciplinary approach to AI.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl border border-white/8 bg-background/50 backdrop-blur-sm p-8 hover:border-primary/30 hover:bg-background/70 transition-all duration-300"
            >
              {/* gradient corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/8 to-transparent rounded-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono text-muted-foreground tracking-wide">
                    {edu.period} · {edu.location}
                  </span>

                  <h3 className="text-lg font-display font-semibold text-white mt-1 leading-snug">
                    {edu.degree}
                  </h3>

                  <a
                    href={edu.schoolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1 text-sm text-primary/80 hover:text-primary transition-colors group/link"
                  >
                    {edu.school}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>

                  {edu.department && <p className="text-xs text-muted-foreground mt-0.5">{edu.department}</p>}
                </div>
              </div>

              {/* highlights */}
              <ul className="mt-6 space-y-2">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-primary/60 mt-2" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
