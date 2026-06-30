import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          {/* Photo — left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/40 blur-lg opacity-60" />
              <div className="relative w-64 h-80 md:w-full md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Anson Antony"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio — right on desktop */}
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Bridging the gap between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                research and reality
              </span>
              .
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                Anson leads AI at Maia, architecting production systems that turn bleeding-edge research into clinical-grade products. As a Research Engineer at Meronym Labs (Northeastern University), he probes the frontier of model behavior, designing novel evaluation frameworks and pushing architectural boundaries in LLMs and multimodal systems.
              </p>
              <p>
                A graduate of Khoury College of Computer Sciences at Northeastern and alumnus of the Institute for Experiential AI, his work lives at the intersection of rigorous science and real consequence, building systems that must be right when it matters most.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
