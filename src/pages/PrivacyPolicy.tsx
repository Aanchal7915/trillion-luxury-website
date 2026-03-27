import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12 lg:p-20 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-black mb-10 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
        
        <div className="space-y-10 text-neutral-800">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and enquire about The Trillion. We are committed to ensuring that your privacy is protected.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">2. Information We Collect</h2>
            <p className="mb-4">
              When you submit an enquiry through our lead forms, we collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Configuration Interest (e.g., 3 BHK, 4 BHK)</li>
              <li>Any message or specific requirements you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">3. How We Use This Information</h2>
            <p className="mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide you with the project details and pricing as requested.</li>
              <li>To contact you for scheduling site visits or answering your queries.</li>
              <li>To improve our services and better understand user requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">4. Data Security</h2>
            <p>
              We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">5. Sharing Your Information</h2>
            <p>
              We do not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. Your data is used exclusively for communication regarding The Trillion by Experion.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request removal of your data, you can contact our investment advisor directly at +91 9560002261.
            </p>
          </section>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-neutral-200">
          <p className="text-neutral-500 text-xs">
            Last Updated: March 2026 | The Trillion by Experion
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
