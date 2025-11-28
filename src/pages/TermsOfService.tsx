import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-card">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Welcome to AIXelar. By accessing or using aixelar.io, you agree to these Terms of Service ("Terms"). If you do not agree, please discontinue using our website.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Use of the Website</h2>
                <p className="text-muted-foreground mb-2">
                  You may use this website for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Viewing information about our AI services</li>
                  <li>Contacting us through the contact form</li>
                  <li>Scheduling consultations</li>
                </ul>
                <p className="text-muted-foreground mt-4 mb-2">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Misuse the website</li>
                  <li>Attempt unauthorized access</li>
                  <li>Distribute malware, spam, or harmful content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Consultations & Services</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Submitting the contact form does not create a client relationship.</li>
                  <li>A relationship is only established when a formal proposal, agreement, or contract is signed between you and AIXelar.</li>
                  <li>AIXelar reserves the right to decline projects that fall outside our scope or capacity.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p className="text-muted-foreground mb-2">
                  All content on this website—including text, branding, images, and design—is the property of AIXelar and protected by copyright and intellectual property laws.
                </p>
                <p className="text-muted-foreground">
                  You may not reproduce or redistribute any content without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer</h2>
                <p className="text-muted-foreground mb-2">
                  AIXelar provides information "as is."
                </p>
                <p className="text-muted-foreground mb-2">
                  We do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>uninterrupted website availability</li>
                  <li>error-free content</li>
                  <li>suitability of information for any specific business</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  AI outputs depend on data, context, and third-party models. No AI-generated output should be used without review.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-2">
                  AIXelar is not liable for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>any indirect or consequential damages</li>
                  <li>loss of business, revenue, or data</li>
                  <li>issues arising from third-party tools, APIs, or hosting services</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Your use of the website and any provided materials is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
                <p className="text-muted-foreground">
                  This website may contain links to external websites. AIXelar is not responsible for the content or practices of third-party sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to the Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms at any time. By continuing to use the website, you accept the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, email: <a href="mailto:info@aixelar.io" className="text-accent hover:underline">info@aixelar.io</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

