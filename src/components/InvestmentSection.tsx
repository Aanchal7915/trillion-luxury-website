import { motion } from "framer-motion";
import { TrendingUp, Building2, MapPin, Shield, Route, Gem } from "lucide-react";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const points = [
  { icon: TrendingUp, title: "Ultra Low Entry Investment", desc: "Only 20% payment till Occupancy Certificate — making premium real estate accessible." },
  { icon: Building2, title: "70% Payable on OC", desc: "Pay 70% only on receipt of Occupancy Certificate. 10% on possession." },
  { icon: MapPin, title: "Sohna Road, Sector 48", desc: "Located in one of Gurgaon's fastest appreciating corridors with strong capital growth." },
  { icon: Shield, title: "Reputed Developer Experion", desc: "FDI-backed real estate developer with a proven track record of delivering excellence." },
  { icon: Route, title: "Expressway Connectivity", desc: "Direct access to major expressways and Golf Course Extension Road." },
  { icon: Gem, title: "Luxury High-Rise Living", desc: "World-class amenities, architectural brilliance, and an unmatched lifestyle." },
];

const InvestmentSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="investment" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={luxuryTransition}
          className="mb-16"
        >
          <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Investment</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-tight">
            Why This Is A Powerful<br />Investment Opportunity
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...luxuryTransition, delay: i * 0.1 }}
              className="luxury-border-l py-4"
            >
              <point.icon className="w-5 h-5 text-accent mb-3" />
              <h4 className="text-accent font-serif text-xl md:text-2xl mb-2">{point.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollTo("contact")}
          className="gold-gradient px-8 py-4 text-accent-foreground font-bold uppercase text-xs tracking-[0.15em]"
        >
          Speak to Investment Advisor
        </motion.button>
      </div>
    </section>
  );
};

export default InvestmentSection;
