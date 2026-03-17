import { motion } from "framer-motion";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const PricingSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={luxuryTransition}
          className="mb-16"
        >
          <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Pricing</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            Price Details
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={luxuryTransition}
            className="glass-card p-8 md:p-10"
          >
            <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">Starting From</span>
            <p className="font-serif text-4xl md:text-5xl text-foreground mt-2 tracking-tight">₹6.71 Crore*</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>Base Rate: <span className="text-foreground">₹24,000/sq ft</span> + PLC + GST</p>
              <p>All inclusive with PLC approx ₹700 + GST</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...luxuryTransition, delay: 0.15 }}
            className="oxblood-card p-8 md:p-10"
          >
            <span className="text-accent text-xs tracking-[0.2em] uppercase">Special Offer Price</span>
            <p className="font-serif text-4xl md:text-5xl gold-gradient-text mt-2 tracking-tight">₹23,300/sq ft</p>
            <p className="text-foreground/70 text-sm mt-2">+ PLC + GST</p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("lead-form")}
                className="gold-gradient px-8 py-4 text-accent-foreground font-bold uppercase text-xs tracking-[0.15em] w-full"
              >
                Get Detailed Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
