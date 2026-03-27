import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SharedLeadForm from "./SharedLeadForm";

interface LeadModalProps {
  delay?: number;
}

const LeadModal = ({ delay = 3000 }: LeadModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
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

            <SharedLeadForm source="Modal Pop-up" buttonText="Enquire Now" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;