import { motion } from "framer-motion";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const steps = [
  { label: "Booking", value: "5%", sub: "On Agreement" },
  { label: "Within 30 Days", value: "5%", sub: "Post Booking" },
  { label: "Within 120 Days", value: "10%", sub: "Post Booking" },
  { label: "Total till OC", value: "20%", sub: "Only", highlight: true },
  { label: "On Receipt of OC", value: "70%", sub: "Occupancy Certificate" },
  { label: "On Possession", value: "10%", sub: "Final Payment" },
];

const PaymentPlan = () => (
  <section id="payment-plan" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={luxuryTransition}
        className="mb-16"
      >
        <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Payment Structure</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
          20:80 EasyPay Payment Plan
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...luxuryTransition, delay: i * 0.1 }}
            className={`border-t-2 ${step.highlight ? "border-accent" : "border-accent/30"} pt-6 pb-4`}
          >
            <span className={`font-sans tabular-nums text-3xl md:text-4xl font-bold ${step.highlight ? "gold-gradient-text" : "text-foreground"}`}>
              {step.value}
            </span>
            <p className="text-foreground text-sm font-medium mt-2">{step.label}</p>
            <p className="text-muted-foreground text-xs mt-1">{step.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...luxuryTransition, delay: 0.6 }}
        className="mt-12 flex flex-wrap gap-6"
      >
        {["Investor Friendly Structure", "Ultra Low Entry", "High Appreciation Potential"].map((tag) => (
          <span key={tag} className="border border-accent/30 text-accent px-4 py-2 text-xs tracking-[0.15em] uppercase">
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PaymentPlan;
