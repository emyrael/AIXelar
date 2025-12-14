import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thompson",
    role: "Owner, Thompson's Auto Repair",
    content: "The AI chatbot Xelar built for our shop handles customer inquiries after hours. We're getting bookings even when we're closed. Game changer for a small business like ours.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, GreenLeaf Organics",
    content: "Their automation system streamlined our inventory management. We went from spending hours on spreadsheets to everything updating automatically. Very happy with the results.",
    rating: 4,
  },
  {
    name: "James Wilson",
    role: "Manager, Wilson & Sons Plumbing",
    content: "The Xelar team understood our needs quickly and delivered a solution that helps us schedule jobs more efficiently. Response time was great, and the system works exactly as promised.",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    role: "Owner, Martinez Bakery",
    content: "We're a small family business, and Xelar made AI feel accessible. The email automation they set up saves us hours each week. Would definitely recommend to other small businesses.",
    rating: 4,
  },
  {
    name: "Robert Kim",
    role: "Director, Kim's Accounting Services",
    content: "The document processing AI they built for us has been a huge time saver during tax season. It's not perfect, but it handles about 80% of the routine work, which is exactly what we needed.",
    rating: 4,
  },
  {
    name: "Amanda Foster",
    role: "Owner, Foster's Pet Care",
    content: "Xelar created a simple booking system with AI that helps us manage appointments and send reminders. Our customers love it, and we love the time it saves us. Great value for the price.",
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
            Don't just take our word for it hear from businesses we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
