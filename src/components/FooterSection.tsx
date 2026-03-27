import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="border-t border-accent/10 py-12 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-1">THE TRILLION</h3>
          <p className="text-muted-foreground text-sm">Sector 48, Gurugram</p>
          <p className="text-accent text-xs mt-2">Experion – FDI Real Estate Developer</p>
        </div>
        <div className="text-sm text-muted-foreground max-w-md">
          <p className="mb-2 text-xs leading-relaxed">
            RERA Disclaimer: This project is registered under RERA. All details are as per the information provided by the developer and are subject to regulatory approvals.
          </p>
          <p className="text-xs leading-relaxed">
            Prices and offers subject to change. Terms and conditions apply. The content is for information purposes only and does not constitute an offer.
          </p>
        </div>
      </div>
      <div className="border-t border-accent/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} The Trillion by Experion. All rights reserved.
        </p>
        <Link 
          to="/privacy-policy" 
          className="text-muted-foreground hover:text-accent text-[10px] uppercase tracking-widest transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default FooterSection;
