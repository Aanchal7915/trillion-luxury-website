import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface SharedLeadFormProps {
  source: string;
  buttonText?: string;
  className?: string;
}

const SharedLeadForm = ({ source, buttonText = "Get Investment Details", className = "" }: SharedLeadFormProps) => {
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
      const scriptURL = "https://script.google.com/macros/s/AKfycbz_-prQ8qS6YBScaQcYsVlY-UxjQ-JSbs_QG3WOPxpllH70tljk5m3ptR6fRdZeEWozPg/exec";
      
      const params = new URLSearchParams();
      params.append("Date", new Date().toLocaleString());
      params.append("Name", formData.name);
      params.append("Phone", formData.phone);
      params.append("Email", formData.email);
      params.append("Interest", formData.interest);
      params.append("Message", formData.message || `Enquiry from ${source}`);
      params.append("Source", source);

      await fetch(`${scriptURL}?${params.toString()}`, { 
        method: 'GET',
        mode: 'no-cors'
      });
      
      setStatus("sent");
      navigate("/thank-you");
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("sent"); 
      navigate("/thank-you");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
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
        {status === "sending" ? "Sending..." : buttonText}
      </motion.button>
    </form>
  );
};

export default SharedLeadForm;
