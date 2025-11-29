"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CreditCard, LinkIcon, Globe, Smartphone, QrCode, Zap, Shield, TrendingUp } from 'lucide-react'

export default function Payments() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Complete Payment Solutions"
        description="Accept payments with 180+ payment methods including UPI, Cards, Wallets, Net Banking, and more"
      >
        <PillButton variant="default" size="lg" href="/contact">
          Start Accepting Payments
        </PillButton>
        <PillButton variant="outline" size="lg" href="/docs">
          View Documentation
        </PillButton>
      </PageHeader>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Smart Checkout",
                description: "Customizable checkout that loads in under 200ms with optimized payment flows",
                features: ["One-click checkout", "Saved cards and addresses", "Mobile optimized", "Multi-language support"]
              },
              {
                icon: LinkIcon,
                title: "Payment Links",
                description: "Create and share payment links via SMS, email, or social media",
                features: ["No coding required", "Instant link generation", "Custom branding", "Track payment status"]
              },
              {
                icon: Globe,
                title: "Payment Pages",
                description: "Beautiful, hosted payment pages for your products and services",
                features: ["Drag-and-drop builder", "Mobile responsive", "SEO optimized", "Analytics included"]
              },
              {
                icon: QrCode,
                title: "UPI Payments",
                description: "Accept UPI payments with autopay and collect requests",
                features: ["UPI intent flow", "QR code payments", "UPI autopay", "Instant settlements"]
              },
              {
                icon: Smartphone,
                title: "Mobile SDKs",
                description: "Native iOS and Android SDKs for seamless in-app payments",
                features: ["React Native support", "Flutter integration", "Kotlin & Swift SDKs", "Offline capability"]
              },
              {
                icon: Globe,
                title: "International Payments",
                description: "Accept payments in 140+ currencies from customers worldwide",
                features: ["Multi-currency processing", "Competitive FX rates", "Local payment methods", "Compliance support"]
              }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 100} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  features={feature.features}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Businesses Choose Ztake</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "99.9% Success Rate", desc: "Industry-leading payment success rates powered by smart routing" },
              { icon: Shield, title: "Bank-Grade Security", desc: "PCI DSS Level 1 certified with end-to-end encryption" },
              { icon: TrendingUp, title: "Instant Settlements", desc: "Get your money faster with instant settlements" }
            ].map((benefit, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 150} className="h-full">
                <GlassCard className="p-8 text-center h-full flex flex-col items-center justify-center" glow hover>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="scaleIn">
            <GlassCard className="p-12 text-center relative overflow-hidden" glow tilt>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 animate-shimmer bg-[length:200%_100%] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Accepting Payments?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Get started in minutes with our simple integration
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <PillButton variant="default" size="lg" href="/contact">
                    Create Account
                  </PillButton>
                  <PillButton variant="outline" size="lg" href="/docs">
                    View Documentation
                  </PillButton>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
