import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    content: "AIXelar transformed our customer service. The AI chatbot they built handles 70% of inquiries automatically. ROI was visible within the first month.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director, LogiFlow",
    content: "The process automation they implemented saved our team 40 hours per week. Their expertise in AI engineering is unmatched.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder, DataDriven Co.",
    content: "Fast delivery, excellent communication, and a product that exceeded expectations. They truly understand business AI applications.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, ScaleUp Solutions",
    content: "Working with AIXelar felt like having an in-house AI team. They delivered a complex RAG system in just two weeks.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from businesses we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 card-hover"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
