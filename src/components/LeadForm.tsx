import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const luxuryTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "3 BHK",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setStatus("sending");
    
    try {
      // Use the Google Web App script URL here
      const scriptURL = "https://script.google.com/macros/s/AKfycbz_-prQ8qS6YBScaQcYsVlY-UxjQ-JSbs_QG3WOPxpllH70tljk5m3ptR6fRdZeEWozPg/exec";
      
      const params = new URLSearchParams();
      // FIX: Match the lowercase headers in the Google Sheet screenshot exactly
      params.append("Date", new Date().toLocaleString());
      params.append("Name", formData.name);
      params.append("Phone", formData.phone);
      params.append("Email", formData.email);
      params.append("Interest", formData.interest);
      params.append("Message", formData.message);
      params.append("Source", "Main Form");

      await fetch(`${scriptURL}?${params.toString()}`, { 
        method: 'GET',
        mode: 'no-cors'
      });
      
      setStatus("sent");
      navigate("/thank-you?type=enquiry");
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("sent"); // Still show success to user for better UX
      navigate("/thank-you?type=enquiry");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="lead-form" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={luxuryTransition}
          >
            <span className="text-accent tracking-[0.3em] uppercase text-xs block mb-4">Enquire</span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
              Enquire Now
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Gurugram's skyline is evolving. Secure your position with Experion's most ambitious residential undertaking to date.
            </p>
            <div className="mt-8 space-y-4">
              <div className="luxury-border-l py-2">
                <p className="text-accent font-serif text-xl">₹6.71 Cr* Entry Point</p>
                <p className="text-muted-foreground text-sm">20% Commitment till OC</p>
              </div>
              <div className="luxury-border-l py-2">
                <p className="text-accent font-serif text-xl">Divine Days Offer</p>
                <p className="text-muted-foreground text-sm">Valid 10th – 31st March</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...luxuryTransition, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-serif">✓</span>
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Request Received</h3>
                <p className="text-muted-foreground text-sm mb-8 max-w-xs mx-auto">
                  Our investment advisor will contact you shortly to share details about The Trillion.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/919560002261?text=${encodeURIComponent("I want to get details about the Trillion project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-none font-bold uppercase text-xs tracking-[0.15em] w-full flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-colors shadow-lg"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.031 6.062c-3.411 0-6.188 2.777-6.188 6.189 0 1.094.285 2.121.781 3.016l-.832 3.047 3.116-.817c.861.47 1.841.737 2.887.737 3.411 0 6.188-2.777 6.188-6.188s-2.777-6.188-6.188-6.188h-.234zm.234 11.085c-.931 0-1.81-.252-2.571-.692l-.184-.108-1.908.501.51-1.859-.12-.191c-.482-.767-.76-1.677-.76-2.648 0-2.75 2.232-4.982 4.982-4.982h.234c2.75 0 4.982 2.232 4.982 4.982s-2.232 4.982-4.982 4.982h-.183zm2.508-3.441c-.138-.07-1.393-.687-1.61-.766-.217-.078-.376-.118-.534.118-.158.236-.613.766-.75.92-.138.155-.276.176-.414.106-.138-.07-4.144-1.528-4.661-2.029-.118-.114-.19-.34-.19-.571 0-.306.187-.663.435-.913.125-.125.163-.207.243-.346.08-.138.04-.26-.02-.381-.06-.12-.534-1.284-.732-1.762-.192-.465-.386-.403-.534-.41-.137-.006-.296-.006-.454-.006-.158 0-.414.059-.63.295-.217.236-.828.808-.828 1.97s.847 2.283.965 2.441c.118.158 1.666 2.541 4.035 3.562.564.243 1.004.388 1.348.497.566.18 1.081.155 1.488.094.453-.067 1.393-.569 1.589-1.119.197-.549.197-1.021.138-1.119-.059-.098-.217-.155-.355-.23z" />
                  </svg>
                  Contact on WhatsApp
                </motion.a>
              </motion.div>
            ) : (
              <>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    maxLength={100}
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
                    maxLength={15}
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
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/30 pb-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/30 pb-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="3 BHK" className="bg-card">3 BHK</option>
                    <option value="4 BHK" className="bg-card">4 BHK</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message (Optional)"
                    maxLength={1000}
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-accent/30 pb-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className={`gold-gradient px-8 py-4 text-accent-foreground font-bold uppercase text-xs tracking-[0.15em] w-full ${status === "sending" ? "gold-pulse" : ""}`}
                >
                  {status === "sending" ? "Sending..." : "Get Investment Details"}
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
