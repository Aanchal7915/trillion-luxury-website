import { motion } from "framer-motion";
import SharedLeadForm from "./SharedLeadForm";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const HeroLeadForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...luxuryTransition, delay: 0.9 }}
      className="glass-card p-8 md:p-10 w-full max-w-md border border-white/10 relative overflow-hidden bg-black/40 shadow-2xl backdrop-blur-3xl lg:translate-y-8"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-[60px]" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 blur-[40px]" />
      
      <div className="relative z-10">
        <h3 className="font-serif text-3xl md:text-3xl text-foreground mb-1 uppercase tracking-tight leading-tight">
          ENQUIRE NOW
        </h3>
        <p className="text-accent text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">
          PRE-LAUNCH EXCLUSIVE ACCESS
        </p>

        <SharedLeadForm source="Hero Form" buttonText="REQUEST ACCESS" />
        
        <div className="flex items-center justify-center gap-2 mt-6 opacity-40">
          <div className="h-[1px] w-6 bg-white" />
          <p className="text-[10px] text-white uppercase tracking-[.2em] whitespace-nowrap">
            STRICTLY CONFIDENTIAL
          </p>
          <div className="h-[1px] w-6 bg-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroLeadForm;