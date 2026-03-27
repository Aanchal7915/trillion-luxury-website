import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, MessageSquare } from "lucide-react";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

  const getHeadingText = () => {
    if (type === "register") return "Thank You For Registering";
    if (type === "enquiry") return "Thank You For Your Enquiry";
    return "Thank You";
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={luxuryTransition}
        className="max-w-2xl w-full text-center relative z-10"
      >
        {/* "Logo" */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...luxuryTransition, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-foreground uppercase">
            THE TRILLION
          </h1>
          <div className="h-px w-24 bg-accent/30 mx-auto mt-4" />
        </motion.div>

        <div className="glass-card p-8 md:p-16 border border-white/10 backdrop-blur-xl bg-white/[0.02] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
            className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-8 bg-accent/5"
          >
            <CheckCircle2 className="text-accent w-10 h-10" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...luxuryTransition, delay: 0.5 }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-6"
          >
            {getHeadingText()}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...luxuryTransition, delay: 0.6 }}
            className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed"
          >
            Our investment advisor will contact you shortly to share details about <span className="text-accent font-serif">The Trillion</span>.
          </motion.p>

          <div className="flex flex-col gap-6">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...luxuryTransition, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/919560002261?text=${encodeURIComponent("I want to get details about the Trillion project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:bg-[#20ba5a] transition-all"
            >
              <MessageSquare size={20} />
              Contact on WhatsApp
            </motion.a>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...luxuryTransition, delay: 0.8 }}
              className="py-6 border-t border-white/5"
            >
              <p className="text-accent/60 uppercase tracking-[0.3em] text-[10px] mb-3 font-semibold">Talk To Our Advisor</p>
              <a 
                href="tel:+919560002261" 
                className="text-2xl md:text-3xl font-serif italic text-accent hover:text-white transition-all duration-300 tabular-nums inline-block tracking-[0.1em]"
              >
                +91 9560002261
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-accent text-xs uppercase tracking-[0.3em] transition-colors mt-8 inline-block"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-accent/40 text-[10px] uppercase tracking-[0.5em] mt-16"
        >
          EXPERION – FDI REAL ESTATE DEVELOPER
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
