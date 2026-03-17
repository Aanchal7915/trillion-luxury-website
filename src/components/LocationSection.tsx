import { motion } from "framer-motion";
import { MapPin, Car, Building, TreePine, TrendingUp } from "lucide-react";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const highlights = [
  { icon: Car, text: "Excellent connectivity to NH-48 & SPR" },
  { icon: Building, text: "Close to Golf Course Extension Road" },
  { icon: MapPin, text: "Near major business hubs & IT corridors" },
  { icon: TreePine, text: "Premium residential neighbourhood" },
  { icon: TrendingUp, text: "Fast growing real estate corridor" },
];

const LocationSection = () => (
  <section id="location" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={luxuryTransition}
        className="mb-16"
      >
        <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Location</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
          Prime Location – Sector 48,<br />Sohna Road
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...luxuryTransition, delay: i * 0.1 }}
              className="flex items-center gap-4 luxury-border-l py-3"
            >
              <h.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/80 text-sm">{h.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={luxuryTransition}
          className="glass-card overflow-hidden min-h-[300px] flex items-center justify-center"
        >
          <iframe
            title="The Trillion Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.5!2d77.03!3d28.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzM2LjAiTiA3N8KwMDEnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full min-h-[300px] border-0 opacity-70"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
