import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LeadModalProps {
  delay?: number;
}

const LeadModal = ({ delay = 3000 }: LeadModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setStatus("sending");
    
    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbz_-prQ8qS6YBScaQcYsVlY-UxjQ-JSbs_QG3WOPxpllH70tljk5m3ptR6fRdZeEWozPg/exec";
      
      const params = new URLSearchParams();
      // FIX: Match the headers in the Google Sheet screenshot exactly
      params.append("Date", new Date().toLocaleString());
      params.append("Name", formData.name);
      params.append("Phone", formData.phone);
      params.append("Email", formData.email);
      params.append("source", "Modal Pop-up");

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-card p-6 md:p-10 my-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-2">Exclusivity Awaits</span>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
                Register Your Interest
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Join the elite circle at The Trillion, Gurugram.
              </p>
            </div>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-serif">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Success</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Our investment advisor will contact you shortly.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/919560002261?text=${encodeURIComponent("I want to get details about the Trillion project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-none font-bold uppercase text-xs tracking-[0.15em] w-full flex items-center justify-center gap-2"
                >
                  Message on WhatsApp
                </motion.a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/30 pb-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/30 pb-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/30 pb-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="gold-gradient px-8 py-4 text-accent-foreground font-bold uppercase text-xs tracking-[0.15em] w-full mt-4"
                >
                  {status === "sending" ? "Processing..." : "Enquire Now"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;