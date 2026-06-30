import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";

const mentions = [
  {
    outlet: "DevCuration",
    year: "2026",
    headline: "Maia Raises $1.2M Seed to Fix Orthopaedic Billing's Hidden Revenue Problem",
    url: "https://devcuration.com/articles/maia-raises-12m-seed-to-fix-orthopaedic-billings-hidden-revenue-problem",
    summary: "Maia, where Anson serves as VP of Artificial Intelligence, announced a $1.2M seed round to tackle hidden revenue loss in orthopaedic billing through AI-powered automation.",
  },
  {
    outlet: "Yahoo Finance",
    year: "2026",
    headline: "Maia Closes Seed Round to Accelerate AI-Driven Orthopaedic Billing",
    url: "https://finance.yahoo.com/healthcare/articles/maia-closes-seed-round-accelerate-203300377.html",
    summary: "Yahoo Finance covers Maia's seed round close, highlighting the company's mission to recover hidden revenue for orthopaedic practices using AI, led by the team Anson helped build.",
  },
  {
    outlet: "Pune Mirror",
    year: "2018",
    headline: "Innovations Aid Young Minds Secure Patents",
    url: "https://punemirror.com/news/innovations-aid-young-minds-secure-patents/",
    summary: "Featured for research innovations at JSPMS's Rajarshi Shahu College of Engineering, leading to patent filings in brain-computer interface and machine learning.",
  },
];

export function Press() {
  return (
    <section id="press" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Press &amp; Mentions</h2>
          <p className="text-lg text-muted-foreground">Coverage and recognition in the press.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mentions.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative flex flex-col gap-4 rounded-xl border border-white/8 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/40 hover:bg-card/70 transition-all duration-300"
            >
              {/* outlet badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Newspaper className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-white/80">{item.outlet}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground tabular-nums">{item.year}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* headline */}
              <h3 className="text-base font-display font-semibold text-white leading-snug group-hover:text-primary transition-colors">
                {item.headline}
              </h3>

              {/* summary */}
              <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">
                {item.summary}
              </p>

              {/* read more */}
              <span className="text-xs text-primary/70 group-hover:text-primary transition-colors font-medium">
                Read article →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
