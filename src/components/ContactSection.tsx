import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={luxuryTransition}
        className="mb-12"
      >
        <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Contact</span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground">
          Speak With Your Advisor
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...luxuryTransition, delay: 0.15 }}
        className="glass-card p-8 md:p-10 max-w-2xl"
      >
        <h3 className="font-serif text-2xl text-accent mb-1">Aman Sharma</h3>
        <p className="text-muted-foreground text-sm mb-6">Investment Advisor</p>
        <p className="text-foreground font-sans tabular-nums text-lg mb-8">+91 9560002261</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+919560002261"
            className="gold-gradient px-6 py-3 text-accent-foreground font-bold uppercase text-xs tracking-[0.15em] flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call Advisor
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/919560002261?text=${encodeURIComponent("Hi, I'm interested in The Trillion, Sector 48. Please share details.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/40 px-6 py-3 text-foreground uppercase text-xs tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg> WhatsApp ROI
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-accent/40 px-6 py-3 text-foreground uppercase text-xs tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-accent/10 transition-colors"
          >
            <Calendar className="w-4 h-4" /> Schedule Site Visit
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
