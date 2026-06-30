import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-b from-primary/10 to-background border border-primary/20 relative overflow-hidden"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">reliable.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light relative z-10">
            Interested in AI safety, clinical ML applications, or robust engineering? My inbox is always open for research collaborations and technical discussions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10 mb-12">
            <a href="mailto:ansonanto53@gmail.com" data-testid="link-mailto">
              <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Mail className="w-5 h-5" />
                Say Hello
              </Button>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground px-6 py-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Boston, MA</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 relative z-10">
            <a 
              href="https://www.linkedin.com/in/ansonanto/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all shadow-sm"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://scholar.google.com/citations?user=XGstDVoAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-emerald-400 hover:bg-emerald-400/10 transition-all shadow-sm"
              data-testid="link-scholar-footer"
            >
              <GraduationCap className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/ansonanto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/40 hover:bg-white/5 transition-all shadow-sm"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
