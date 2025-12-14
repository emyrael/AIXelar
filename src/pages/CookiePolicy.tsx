import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CookiePolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              This Cookie Policy explains how Xelar uses cookies and similar tracking technologies on aixelar.io.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files placed on your device when you visit a website. They help improve functionality, performance, and analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground mb-2">
                      Required for basic site functionality:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Page navigation</li>
                      <li>Contact form operation</li>
                      <li>Security</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      These cookies cannot be disabled.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground mb-2">
                      Used to understand how visitors use the site, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Page views</li>
                      <li>Time spent on page</li>
                      <li>User interactions</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 mb-2">
                      Tools may include:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Vercel Analytics</li>
                      <li>Cloudflare Analytics</li>
                      <li>Google Analytics (if added)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground">
                      Improve load speed and site responsiveness.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Managing Cookies</h2>
                <p className="text-muted-foreground mb-2">
                  You can adjust cookie settings in your browser to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>block cookies</li>
                  <li>delete cookies</li>
                  <li>receive warnings before cookies are stored</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Note: disabling cookies may affect parts of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  Some third-party services (hosting, analytics, form processors, etc.) may set their own cookies. These services follow their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Updates to This Cookie Policy</h2>
                <p className="text-muted-foreground">
                  We may update this policy from time to time. Changes will be posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about cookies, email: <a href="mailto:info@aixelar.io" className="text-accent hover:underline">info@aixelar.io</a>
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

export default CookiePolicy;

