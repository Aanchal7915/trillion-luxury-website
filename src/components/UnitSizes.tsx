import { motion } from "framer-motion";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const units = [
  {
    type: "3 BHK",
    configs: [
      { total: "2842 sq ft", carpet: "1535 sq ft", balcony: "478 sq ft" },
      { total: "2917 sq ft", carpet: "1535 sq ft", balcony: "529 sq ft" },
    ],
  },
  {
    type: "4 BHK",
    configs: [
      { total: "3529 sq ft", carpet: "1906 sq ft", balcony: "540 sq ft" },
      { total: "3601 sq ft", carpet: "1906 sq ft", balcony: "591 sq ft" },
    ],
  },
];

const UnitSizes = () => (
  <section id="units" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={luxuryTransition}
        className="mb-16"
      >
        <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Configurations</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
          Available Unit Configurations
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {units.map((unit, i) => (
          <motion.div
            key={unit.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...luxuryTransition, delay: i * 0.15 }}
            className="glass-card p-8"
          >
            <h3 className="font-serif text-3xl text-accent mb-6">{unit.type}</h3>
            <div className="space-y-4">
              {unit.configs.map((c) => (
                <div key={c.total} className="border-l border-accent/30 pl-4 py-2">
                  <p className="text-foreground font-sans tabular-nums text-lg font-medium">{c.total}</p>
                  <p className="text-muted-foreground text-sm">
                    Carpet: {c.carpet} · Balcony: {c.balcony}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UnitSizes;
