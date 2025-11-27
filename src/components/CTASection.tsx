import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 node-bg opacity-10" />
      
      {/* Gradient Accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10">
            Book a free consultation call. We'll discuss your challenges and show you exactly how AI can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/50 mt-6">
            No commitment required. 30-minute strategy call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
