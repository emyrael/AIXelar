import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              AIXelar ("AIXelar", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit aixelar.io, use our contact form, or engage with our AI consulting services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We may collect the following types of personal information:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Information you provide directly</h3>
                    <p className="text-muted-foreground mb-2">
                      When you submit our contact form or communicate with us, we collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Full name</li>
                      <li>Company name</li>
                      <li>Email address</li>
                      <li>Project details or any message you submit</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Automatically collected information</h3>
                    <p className="text-muted-foreground mb-2">
                      When you visit our website, we may collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>IP address</li>
                      <li>Device type</li>
                      <li>Browser type</li>
                      <li>Usage data (pages visited, time spent, clicks)</li>
                      <li>Cookies (see Cookie Policy)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Optional communication data</h3>
                    <p className="text-muted-foreground">
                      If you reply to emails or schedule calls, we may store call notes, preferences, and project requirements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Respond to your inquiries</li>
                  <li>Provide proposals for AI solutions</li>
                  <li>Improve our services and website</li>
                  <li>Communicate with you about your request</li>
                  <li>Maintain security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not sell or share your information with third parties for advertising.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Share Information</h2>
                <p className="text-muted-foreground mb-2">
                  We may share your information only with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Service providers (e.g., email platforms, form processing services)</li>
                  <li>Hosting providers (Vercel, Cloudflare)</li>
                  <li>Legal authorities, if required</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All service providers follow GDPR-compliant data protection practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We take security seriously and implement measures to protect your data from unauthorized access, disclosure, or misuse. However, no system is 100% secure, and we cannot guarantee absolute protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your GDPR Rights</h2>
                <p className="text-muted-foreground mb-2">
                  If you are in the EU/EEA, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Access your data</li>
                  <li>Request correction</li>
                  <li>Request deletion</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                  <li>Request data portability</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise your rights, email: <a href="mailto:info@aixelar.io" className="text-accent hover:underline">info@aixelar.io</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain personal information only as long as necessary to fulfil the purposes outlined above or comply with legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  For questions regarding this Privacy Policy, contact us at: <a href="mailto:info@aixelar.io" className="text-accent hover:underline">info@aixelar.io</a>
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

export default PrivacyPolicy;

