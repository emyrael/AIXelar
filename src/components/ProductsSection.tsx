import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "Ginja",
    eyebrow: "Featured Product",
    status: "Live",
    logo: "/images/ginja-logo.png",
    website: "https://ginja.io",
    description:
      "Ginja is an AI-powered productivity platform designed to help people plan, collaborate, and grow through adaptive workflows.",
    reason:
      "We built Ginja because most productivity tools force people into rigid systems. We wanted to create software that adapts to how people think, plan, and show up in real life.",
    features: [
      "AI-powered planning",
      "Collaborative circles",
      "Adaptive goals and habits",
      "Personal productivity intelligence",
    ],
    cta: "Visit Ginja",
    active: true,
  },
  {
    name: "TervaTech",
    eyebrow: "Coming Soon",
    status: "In Development",
    logo: "/images/tervatech-logo.png",
    website: "https://tervatech.com",
    description:
      "TervaTech is a defence intelligence platform in development, designed to support real-time field reporting, operational visibility, and AI-assisted decision support for defence and security organizations.",
    reason:
      "We are designing TervaTech around clarity, speed, and structured information flow for high-pressure operational environments.",
    features: [
      "Field intelligence reporting",
      "Command visibility",
      "Alert and threat overview",
      "AI-assisted intelligence briefings",
    ],
    cta: "In Development",
    active: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative overflow-hidden py-14 md:py-24">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We've Built</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:mt-4 md:text-5xl">
            Product Thinking, Engineered Into Real Systems
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            Alongside client delivery, AIXELAR builds its own products to prove the same AI, app, automation, and intelligence systems we design for modern businesses.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2 lg:gap-6">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group gradient-border relative overflow-hidden rounded-2xl bg-card/85 p-4 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow md:p-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between gap-3 md:mb-7 md:gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background p-2 shadow-soft md:h-16 md:w-16">
                      <img src={product.logo} alt={`${product.name} logo`} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent md:text-sm">{product.eyebrow}</p>
                      <h3 className="text-xl font-bold text-foreground md:text-2xl">{product.name}</h3>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {product.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{product.description}</p>

                <div className="my-4 rounded-xl border border-border/70 bg-background/70 p-3 md:my-6 md:p-4">
                  <p className="text-sm font-semibold text-foreground">Why we built it</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.reason}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5 text-xs font-medium text-foreground sm:gap-2 sm:text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-5 md:mt-8">
                  {product.active ? (
                    <Button variant="hero" className="group/button" asChild>
                      <a href={product.website} target="_blank" rel="noopener noreferrer">
                        {product.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      {product.cta}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
