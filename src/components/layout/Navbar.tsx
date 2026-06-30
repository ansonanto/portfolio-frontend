import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Github } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Books", href: "#blog" },
  { label: "Press", href: "#press" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="text-xl font-display font-bold tracking-tight text-white hover:text-primary transition-colors"
            data-testid="link-home"
          >
            AA<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-white"
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/blog"
              className="text-sm tracking-wide text-muted-foreground hover:text-white transition-colors"
              data-testid="link-blog"
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ansonanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-9 h-9 rounded-full bg-white/5 border border-white/10 items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ansonanto"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-9 h-9 rounded-full bg-white/5 border border-white/10 items-center justify-center text-muted-foreground hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              data-testid="link-contact"
            >
              Get in Touch
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              data-testid="btn-mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                  data-testid={`mobile-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="mt-2 px-4 py-3 rounded-xl text-base font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20"
                data-testid="mobile-link-contact"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
