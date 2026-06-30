import { Quote, Star } from "lucide-react";

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
    <section className="py-14 bg-secondary/30 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mt-3 mb-4 md:mt-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Don't just take our word for it hear from businesses we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto lg:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-3 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card sm:p-5 md:p-8"
            >
              <Quote className="absolute right-3 top-3 h-6 w-6 text-accent/10 transition-colors group-hover:text-accent/20 sm:right-5 sm:top-5 sm:h-8 sm:w-8 md:right-6 md:top-6 md:h-10 md:w-10" />
              {/* Rating */}
              <div className="flex gap-0.5 mb-2 relative z-10 sm:gap-1 sm:mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent sm:w-4 sm:h-4 md:w-5 md:h-5" />
                ))}
              </div>

              {/* Content */}
              <p className="relative z-10 text-xs text-foreground mb-4 leading-relaxed line-clamp-5 sm:text-sm sm:mb-5 sm:line-clamp-none md:text-base md:mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center md:w-12 md:h-12">
                  <span className="text-sm font-bold text-accent md:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-xs font-semibold text-foreground sm:text-sm md:text-base">{testimonial.name}</h4>
                  <p className="line-clamp-1 text-xs text-muted-foreground md:text-sm">{testimonial.role}</p>
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
