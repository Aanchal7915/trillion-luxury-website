import { motion } from "framer-motion";
import SharedLeadForm from "./SharedLeadForm";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const LeadForm = () => {

  return (
    <section id="lead-form" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={luxuryTransition}
          >
            <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Enquire</span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
              Enquire Now
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Gurugram's skyline is evolving. Secure your position with Experion's most ambitious residential undertaking to date.
            </p>
            <div className="mt-8 space-y-4">
              <div className="luxury-border-l py-2">
                <p className="text-accent font-serif text-xl">₹6.71 Cr* Entry Point</p>
                <p className="text-muted-foreground text-sm">20% Commitment till OC</p>
              </div>
              <div className="luxury-border-l py-2">
                <p className="text-accent font-serif text-xl">Divine Days Offer</p>
                <p className="text-muted-foreground text-sm">Valid 10th – 31st March</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...luxuryTransition, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <SharedLeadForm source="Main Lead Form" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
