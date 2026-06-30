import { Linkedin, Github, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-white font-display font-medium text-lg">Anson Antony</p>
          <p className="text-muted-foreground text-sm mt-1">VP of Artificial Intelligence · Research Engineer</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ansonanto/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/ansonanto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=XGstDVoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-emerald-400 hover:bg-emerald-400/10 transition-all"
            aria-label="Google Scholar"
          >
            <GraduationCap className="w-4 h-4" />
          </a>
        </div>

        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Anson Antony. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
