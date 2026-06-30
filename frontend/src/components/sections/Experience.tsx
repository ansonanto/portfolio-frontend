import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────
interface Exp {
  role: string;
  company: string;
  companyUrl?: string;
  description?: string;
  location?: string;
  period: string;
  startYear: number;
  side: "industry" | "research";
}

const allExperiences: Exp[] = [
  // ── Industry ──────────────────────────────────────────────────────────
  {
    role: "VP of Artificial Intelligence",
    company: "Maia", companyUrl: "https://usemaia.com/",
    period: "Mar 2026–Present", startYear: 2026, side: "industry",
    description: "Leading AI product strategy and engineering",
  },
  {
    role: "Founding Machine Learning Engineer",
    company: "Maia", companyUrl: "https://usemaia.com/",
    period: "Nov 2025–Mar 2026", startYear: 2025, side: "industry",
    description: "Built ML infrastructure from the ground up",
  },
  {
    role: "Senior Machine Learning Engineer",
    company: "Optime.health", companyUrl: "https://www.optime.health/",
    period: "Apr–Nov 2025", startYear: 2025, side: "industry",
  },
  {
    role: "Lead Machine Learning Engineer",
    company: "Ainu Health", companyUrl: "https://alnuhealth.com/",
    period: "Mar–Aug 2025", startYear: 2025, side: "industry",
    location: "Cambridge MA (Hybrid)",
  },
  {
    role: "Machine Learning Engineer",
    company: "A.I. Enterprises",
    period: "Feb 2021–Aug 2022", startYear: 2021, side: "industry",
    description: "Geospatial modeling, stock forecasting with ARIMA/LSTM, quality control with CNNs, anomaly detection",
  },
  {
    role: "Software Engineer",
    company: "Yardi", companyUrl: "https://www.yardi.com/",
    period: "Jul 2020–Feb 2021", startYear: 2020, side: "industry",
    description: "30% increase in user adoption, VendorCafe feature, team of 10",
  },
  {
    role: "Software Engineer Trainee",
    company: "Yardi", companyUrl: "https://www.yardi.com/",
    period: "Jul 2019–Jul 2020", startYear: 2019, side: "industry",
  },
  {
    role: "Intern",
    company: "Tata Consultancy Services",
    period: "Feb–Aug 2019", startYear: 2019, side: "industry",
  },
  {
    role: "Project Intern",
    company: "Zansar Technologies",
    period: "Feb–Jun 2018", startYear: 2018, side: "industry",
  },

  // ── Research / Academic ───────────────────────────────────────────────
  {
    role: "Research Engineer",
    company: "Meronym Labs, Northeastern University", companyUrl: "https://meronymlabs.com/",
    period: "Jan 2026–Present", startYear: 2026, side: "research",
    description: "AI safety evaluation for health/public health domains",
  },
  {
    role: "Machine Learning Researcher",
    company: "Institute for Experiential AI, Northeastern University", companyUrl: "https://ai.northeastern.edu/",
    period: "Feb–Aug 2025", startYear: 2025, side: "research",
  },
  {
    role: "Data Scientist",
    company: "Institute for Experiential AI, Northeastern University", companyUrl: "https://ai.northeastern.edu/",
    period: "Jan–Dec 2024", startYear: 2024, side: "research",
    location: "Portland ME",
  },
  {
    role: "Graduate Research Assistant",
    company: "Khoury College of Computer Sciences",
    period: "Oct 2023–Jan 2024", startYear: 2023, side: "research",
    description: "Evaluating alternative pre-processing pipelines for object detection",
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Khoury College",
    period: "Jan 2023–Jan 2024", startYear: 2023, side: "research",
    description: "CS 4550 & CS 9610, 320 students",
  },
  {
    role: "Research Assistant",
    company: "JSPMS's Rajarshi Shahu College of Engineering, Pune",
    period: "Jun 2016–May 2019", startYear: 2016, side: "research",
    description: "Brain-computer interface and machine learning research",
  },
];

// Sorted unique years, most recent first
const YEARS = [...new Set(allExperiences.map(e => e.startYear))].sort((a, b) => b - a);

// ─── Sub-components ────────────────────────────────────────────────────────
function ExpCard({ exp, index, isBlue }: { exp: Exp; index: number; isBlue: boolean }) {
  const accent = isBlue ? "border-blue-500/25 hover:border-blue-400/50" : "border-violet-500/25 hover:border-violet-400/50";
  const bar    = isBlue ? "bg-blue-500/40" : "bg-violet-500/40";
  const period = isBlue ? "text-blue-400/80" : "text-violet-400/80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`relative group rounded-xl border bg-background/50 backdrop-blur-sm p-4 transition-all duration-200 ${accent} hover:bg-background/70`}
    >
      {/* left accent bar */}
      <div className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full ${bar}`} />

      <span className={`text-[10px] font-mono tracking-wide ${period}`}>{exp.period}</span>

      <h3 className="text-sm font-display font-semibold text-white mt-0.5 leading-snug">
        {exp.role}
      </h3>

      <div className="mt-0.5 text-xs text-white/60 flex items-center gap-1 flex-wrap">
        {exp.companyUrl ? (
          <a
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
          >
            {exp.company}
            <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-100 text-primary flex-shrink-0" />
          </a>
        ) : (
          <span>{exp.company}</span>
        )}
        {exp.location && <span className="text-muted-foreground">· {exp.location}</span>}
      </div>

      {exp.description && (
        <p className="mt-1.5 text-[10px] text-muted-foreground font-light leading-relaxed">
          {exp.description}
        </p>
      )}
    </motion.div>
  );
}

function YearRow({ year, index }: { year: number; index: number }) {
  const industry = allExperiences.filter(e => e.startYear === year && e.side === "industry");
  const research = allExperiences.filter(e => e.startYear === year && e.side === "research");

  return (
    <div>
      {/* Year divider spanning both columns */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.03 }}
        className="flex items-center gap-3 mb-4 mt-2"
      >
        <div className="flex-1 h-px bg-white/6" />
        <span className="text-[11px] font-mono text-white/20 tracking-widest select-none">{year}</span>
        <div className="flex-1 h-px bg-white/6" />
      </motion.div>

      {/* Two-column row */}
      <div className="grid grid-cols-2 gap-4 mb-1">
        {/* Industry side */}
        <div className="space-y-3">
          {industry.map((exp, i) => (
            <ExpCard key={i} exp={exp} index={i} isBlue={true} />
          ))}
          {industry.length === 0 && <div className="h-1" />}
        </div>

        {/* Research side */}
        <div className="space-y-3">
          {research.map((exp, i) => (
            <ExpCard key={i} exp={exp} index={i} isBlue={false} />
          ))}
          {research.length === 0 && <div className="h-1" />}
        </div>
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────
export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground">
            A trajectory focused on applying rigorous science to real-world engineering problems.
          </p>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">Industry</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">Research &amp; Academic</span>
          </div>
        </div>

        {/* Year rows */}
        <div>
          {YEARS.map((year, i) => (
            <YearRow key={year} year={year} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
