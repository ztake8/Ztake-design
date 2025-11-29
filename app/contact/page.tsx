"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/glass-card";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Mail, Phone } from 'lucide-react';
import { useState } from "react";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      countryCode: selectedCountry.code,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    } else {
      setError("Failed to send message. Please try again.");
    }
  }

  const inputClasses = "w-full px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 shadow-sm hover:bg-white/10"

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Get in Touch"
        description="Our team is here to help you succeed with Ztake Payments"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Sales", value: "sales@ztake.in" },
              { icon: Phone, title: "Phone", value: "+91 9220592512" },
              { icon: Mail, title: "Support", value: "support@ztake.in" }
            ].map((item, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 100}>
                <GlassCard className="p-8 text-center h-full" hover glow>
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeInUp" delay={300}>
            <GlassCard className="p-12" glow>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <select
                      value={COUNTRIES.indexOf(selectedCountry)}
                      onChange={(e) => setSelectedCountry(COUNTRIES[parseInt(e.target.value)])}
                      className={cn(inputClasses, "appearance-none cursor-pointer pr-8")}
                    >
                      {COUNTRIES.map((country, idx) => (
                        <option key={idx} value={idx} className="bg-gray-900 text-white">
                          {country.flag} {country.name} ({country.code})
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</div>
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit number"
                    required
                    maxLength={10}
                    pattern="\d{10}"
                    inputMode="numeric"
                    className={cn(inputClasses, "col-span-2")}
                    onInput={(e: any) => {
                      e.target.value = e.target.value.replace(/\D/g, '');
                    }}
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={inputClasses}
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className={cn(inputClasses, "resize-none")}
                />

                <button
                  className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-500 font-medium text-center animate-fadeIn">Message sent successfully!</p>
                )}
                {error && <p className="text-red-500 font-medium text-center animate-fadeIn">{error}</p>}
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
