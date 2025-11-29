"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MetricDisplay } from "@/components/metric-display"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { PillButton } from "@/components/pill-button"
import { GlassCard } from "@/components/glass-card"
import { AnimatedGradientBg } from "@/components/animated-gradient-bg"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useParallax } from "@/hooks/use-parallax"
import { CreditCard, Zap, Globe, Shield, Code, TrendingUp, Wallet, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  const parallaxSlow = useParallax({ speed: 0.1 })
  const parallaxMedium = useParallax({ speed: 0.2 })
  const parallaxFast = useParallax({ speed: 0.3 })

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedGradientBg className="absolute inset-0" />

        {/* Parallax Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={parallaxSlow.style} className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div style={parallaxMedium.style} className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-24">
            <ScrollReveal animation="fadeInUp" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 text-sm font-medium text-primary-foreground/80 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Next-Gen Payment Infrastructure
              </div>
            </ScrollReveal>

            <ScrollReveal animation="revealText" delay={200}>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-balance tracking-tight">
                Empowering Modern
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Businesses to Get Paid
                </span>
                <br />
                Instantly
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty font-light">
                Accept payments with 180+ methods including UPI, Cards, Wallets, and more. Built for developers, loved by
                businesses.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <PillButton variant="default" size="lg" href="/contact" className="w-full sm:w-auto text-lg h-14 px-10">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </PillButton>
                <PillButton variant="outline" size="lg" href="https://docs.ztake.in" className="w-full sm:w-auto text-lg h-14 px-10">
                  View Documentation
                </PillButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal animation="fadeInUp" delay={800} className="w-full">
              <MetricDisplay value="10K+" label="Active Merchants" />
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={900} className="w-full">
              <MetricDisplay value="₹500Cr+" label="Transactions Processed" />
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={1000} className="w-full">
              <MetricDisplay value="99.9%" label="Uptime Guarantee" />
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Why Choose Ztake */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Why Choose Ztake</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Experience the future of digital payments with our innovative solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure Payments", desc: "Bank-grade security with end-to-end encryption for all transactions" },
              { icon: Zap, title: "Lightning Fast", desc: "Process payments in milliseconds with our optimized infrastructure" },
              { icon: Globe, title: "Global Reach", desc: "Accept payments from customers worldwide with multi-currency support" },
              { icon: Users, title: "24/7 Support", desc: "Round-the-clock customer support to help you succeed" }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 100} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.desc}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Complete Payment Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Everything you need to accept and manage payments at scale
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Payment Gateway",
                desc: "Seamless payment processing with support for all major payment methods",
                features: ["Multi-currency support", "Real-time processing", "Advanced fraud protection"],
                href: "/payments"
              },
              {
                icon: TrendingUp,
                title: "Subscriptions",
                desc: "Manage recurring billing and subscription plans effortlessly",
                features: ["Flexible billing cycles", "Automated dunning", "Customer portal"],
                href: "/subscriptions"
              },
              {
                icon: Wallet,
                title: "ZtakeX Banking",
                desc: "Business banking with payouts, corporate cards, and more",
                features: ["Instant payouts 24/7", "Virtual corporate cards", "Accounting integrations"],
                href: "/ztakex"
              },
              {
                icon: Code,
                title: "Developer APIs",
                desc: "Developer-friendly APIs with comprehensive documentation",
                features: ["RESTful APIs", "Multiple SDKs", "Webhook notifications"],
                href: "/docs"
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                desc: "Enterprise-grade security with PCI DSS compliance",
                features: ["PCI DSS Level 1", "AES-256 encryption", "Real-time monitoring"],
                href: "/security"
              },
              {
                icon: Globe,
                title: "International Payments",
                desc: "Accept payments in 140+ currencies from customers worldwide",
                features: ["Multi-currency processing", "Competitive FX rates", "Local payment methods"],
                href: "/international-payments"
              }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 100} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.desc}
                  features={feature.features}
                  href={feature.href}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Trusted by Businesses</h2>
              <p className="text-xl text-muted-foreground font-light">See what our customers have to say</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Ztake has revolutionized our payment processing. The integration was seamless and the support team is exceptional.",
                author: "Rajesh Kumar",
                role: "CTO",
                company: "TechStart Solutions"
              },
              {
                quote: "Outstanding service and reliability. Our transaction success rate has improved significantly since switching to Ztake.",
                author: "Priya Sharma",
                role: "Operations Manager",
                company: "E-commerce Plus"
              },
              {
                quote: "The analytics dashboard provides incredible insights. Ztake is definitely the best payment gateway we have used.",
                author: "Amit Patel",
                role: "Founder",
                company: "Digital Ventures"
              }
            ].map((testimonial, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 150} className="h-full">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal animation="scaleIn">
            <GlassCard className="p-16 text-center relative overflow-hidden" glow tilt>
              {/* Animated background inside card */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 animate-shimmer bg-[length:200%_100%] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of businesses already using Ztake to process their payments securely and efficiently
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <PillButton variant="default" size="lg" href="/contact" className="w-full sm:w-auto text-lg h-14 px-10">
                    Start Free Trial
                  </PillButton>
                  <PillButton variant="outline" size="lg" href="/contact" className="w-full sm:w-auto text-lg h-14 px-10">
                    Contact Sales
                  </PillButton>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "PCI DSS Certified" },
              { label: "99.9% Uptime SLA" },
              { label: "24/7 Support" },
              { label: "ISO 27001 Certified" }
            ].map((item, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 100}>
                <div className="group cursor-default">
                  <CheckCircle className="w-10 h-10 mx-auto mb-4 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                  <div className="font-semibold text-lg tracking-wide group-hover:text-primary transition-colors duration-300">{item.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
