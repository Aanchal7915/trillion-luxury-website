import { useState } from "react";
import { motion } from "framer-motion";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const HeroLeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "3 BHK",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setStatus("sending");
    
    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbz_-prQ8qS6YBScaQcYsVlY-UxjQ-JSbs_QG3WOPxpllH70tljk5m3ptR6fRdZeEWozPg/exec";
      
      const params = new URLSearchParams();
      params.append("Date", new Date().toLocaleString());
      params.append("Name", formData.name);
      params.append("Phone", formData.phone);
      params.append("Email", formData.email);
      params.append("Interest", formData.interest);
      params.append("Message", "Hero Section Quick Enquiry");
      params.append("Source", "Hero Form");

      await fetch(`${scriptURL}?${params.toString()}`, { 
        method: 'GET',
        mode: 'no-cors'
      });
      
      setStatus("sent");
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("sent");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-6 md:p-8 text-center border-accent/40"
      >
        <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center mx-auto mb-4">
          <span className="text-accent text-xl">✓</span>
        </div>
        <h3 className="font-serif text-xl text-foreground mb-2">Request Shared</h3>
        <p className="text-muted-foreground text-xs mb-6">
          Our advisor will contact you shortly.
        </p>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={`https://wa.me/919560002261?text=${encodeURIComponent("I want to get details about the Trillion project.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest w-full flex items-center justify-center gap-2"
        >
          WhatsApp Now
        </motion.a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...luxuryTransition, delay: 0.9 }}
      className="glass-card p-10 md:p-12 w-full max-w-md border border-white/10 relative overflow-hidden bg-black/40 shadow-2xl backdrop-blur-3xl lg:translate-y-8"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-[60px]" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 blur-[40px]" />
      
      <div className="relative z-10">
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2 uppercase tracking-tight leading-tight">
          ENQUIRE NOW
        </h3>
        <p className="text-accent text-[11px] uppercase tracking-[0.3em] mb-10 font-medium">
          PRE-LAUNCH EXCLUSIVE ACCESS
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group relative">
            <input
              name="name"
              type="text"
              placeholder="YOUR FULL NAME"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-all uppercase tracking-widest"
            />
          </div>
          <div className="group relative">
            <input
              name="phone"
              type="tel"
              placeholder="PHONE NUMBER"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-all uppercase tracking-widest"
            />
          </div>
          <div className="relative pt-2">
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors appearance-none uppercase tracking-widest cursor-pointer"
            >
              <option value="3 BHK" className="bg-neutral-900">3 BHK SUITES</option>
              <option value="4 BHK" className="bg-neutral-900">4 BHK RESIDENCES</option>
              <option value="Investment" className="bg-neutral-900">INVESTMENT ENQUIRY</option>
            </select>
            <div className="absolute right-0 bottom-4 pointer-events-none text-accent text-[10px]">
              ▼
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#cdaa6d" }}
            whileTap={{ scale: 0.98 }}
            disabled={status === "sending"}
            className="w-full bg-accent py-5 text-black font-black uppercase text-[11px] tracking-[0.4em] mt-8 shadow-[0_10px_30px_rgba(205,170,109,0.3)] transition-all"
          >
            {status === "sending" ? "INITIATING..." : "REQUEST ACCESS"}
          </motion.button>
          
          <div className="flex items-center justify-center gap-2 mt-6 opacity-40">
            <div className="h-[1px] w-6 bg-white" />
            <p className="text-[10px] text-white uppercase tracking-[.2em] whitespace-nowrap">
              STRICTLY CONFIDENTIAL
            </p>
            <div className="h-[1px] w-6 bg-white" />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default HeroLeadForm;