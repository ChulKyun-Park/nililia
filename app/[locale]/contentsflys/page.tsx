"use client";

import { Link } from "@/i18n/navigation";
import { Check, ArrowLeft, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import { contentsflysContent } from "@/lib/content";

export default function ContentsflysPage() {
  const { heading, subheading, body, features } = contentsflysContent;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section: Applied Brand Primary Color (#0097FE) */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-b border-border overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-bold text-sm tracking-tight uppercase">Premium Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight tracking-tighter uppercase">
              {heading}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 break-keep max-w-2xl">
              {subheading}
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed mb-10 break-keep max-w-3xl">
              {body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="flex items-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </Link>
              <Link href="/contact" className="rounded-xl border-2 border-primary bg-background px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-primary/5">
                Inquiry Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section: Key Features with Soft Rectangle Design */}
      <section className="py-24 bg-background">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl font-black text-foreground tracking-tight">Key Features</h2>
            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 border border-border hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed break-keep">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section: Professional Blue Footer */}
      <section className="py-20 bg-primary">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 tracking-tight">
            Ready to elevate your global content?
          </h2>
          <Link href="/contact" className="group mx-auto inline-flex items-center rounded-xl bg-background px-12 py-5 text-xl font-bold text-primary shadow-2xl transition-all hover:bg-background/90">
            <MessageSquare className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
            Get a Free Consultation
          </Link>
        </Container>
      </section>
    </div>
  );
}