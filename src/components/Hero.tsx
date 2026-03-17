import { motion } from "framer-motion";
import heroImage from "@/assets/hero-tower.jpg";
import HeroLeadForm from "@/components/HeroLeadForm";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen lg:h-svh w-full flex items-center pt-20 pb-12 px-4 md:px-6 overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] as const }}
        src={heroImage}
        alt="The Trillion luxury tower at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:bg-gradient-to-b md:from-transparent md:to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-start lg:items-center">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...luxuryTransition, delay: 0.3 }}
            className="mb-3 inline-flex items-center"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-accent/50" />
                <span className="text-white text-xs md:text-xl uppercase tracking-[0.1em] font-bold whitespace-nowrap">
                  Divine Days Offer · 20:80 Payment Plan
                </span>
              </div>
              <div className="bg-black/20 backdrop-blur-[2px] border-l-2 border-accent px-3 py-1 flex items-center gap-2 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  Sector 48, Gurugram
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...luxuryTransition, delay: 0.5 }}
            className="font-serif text-5xl md:text-8xl lg:text-[10rem] mb-4 leading-[0.8] tracking-tighter uppercase text-foreground"
          >
            THE<br />
            <span className="bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
              TRILLION
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...luxuryTransition, delay: 0.7 }}
            className="max-w-md"
          >
            <p className="text-lg md:text-2xl text-foreground font-serif italic mb-1">
              "It's Everything You Seek"
            </p>
            <p className="text-[10px] md:text-base text-foreground/70 uppercase tracking-widest font-light mb-4">
              3 & 4 BHK Ultra Luxury Residences
            </p>


          </motion.div>
        </div>

        <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end mt-0 lg:mt-0">
          <div className="w-full max-w-md lg:translate-y-4">
            <HeroLeadForm />
            
            <div className="flex flex-wrap gap-3 mt-6 w-full justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("lead-form")}
                className="gold-gradient px-6 py-3.5 text-accent-foreground font-bold uppercase text-[9px] md:text-xs tracking-[0.2em] shadow-2xl shadow-accent/20 flex-1"
              >
                Book Site Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("pricing")}
                className="border border-white/20 backdrop-blur-md px-6 py-3.5 text-white uppercase text-[9px] md:text-xs tracking-[0.2em] hover:bg-white/10 transition-all flex-1"
              >
                Get Price Sheet
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
