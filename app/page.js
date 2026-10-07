'use client';
import { useState } from "react";

const accent = "#C9A84C";
const dark = "#1A1A2E";
const light = "#F9F6F1";
const gray = "#6B7280";

const navLinks = ["Home", "Listings", "Services", "About", "Contact"];

const listings = [
  { title: "Modern Downtown Penthouse", price: "$1,250,000", beds: 3, baths: 2, img: "https://images.pexels.com/photos/7045918/pexels-photo-7045918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { title: "Suburban Family Estate", price: "$875,000", beds: 5, baths: 4, img: "https://images.pexels.com/photos/32802992/pexels-photo-32802992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { title: "Beachfront Villa", price: "$2,100,000", beds: 4, baths: 3, img: "https://images.pexels.com/photos/12389384/pexels-photo-12389384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
];

export default function App() {
  const [hover, setHover] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const btnStyle = (key) => ({
    background: hover === key ? "#b8923e" : accent,
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "14px 32px",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: hover === key ? "0 8px 24px rgba(201,168,76,0.45)" : "0 4px 12px rgba(201,168,76,0.25)",
    transition: "all 0.2s",
  });

  return (
    <div style={{ fontFamily: "Georgia, serif", background: light, color: dark, margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", background: dark, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ color: accent, fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>MERIDIAN REALTY</div>
        <div style={{ display: "flex", gap: 32 }}>
          {navLinks.map((l) => (
            <span key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ color: "#E5E7EB", fontSize: 14, cursor: "pointer", letterSpacing: 0.5 }}>{l}</span>
          ))}
        </div>
      </nav>

      <section id="home" style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} src="https://videos.pexels.com/video-files/9700254/9700254-hd_1920_1080_30fps.mp4" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,46,0.68)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "96px 64px", maxWidth: 700 }}>
          <p style={{ color: accent, fontSize: 14, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Premium Properties Await</p>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 20px" }}>Find Your Dream Home With Confidence</h1>
          <p style={{ fontSize: 18, color: "#D1D5DB", lineHeight: 1.7, marginBottom: 36 }}>Meridian Realty connects discerning buyers and sellers with exceptional properties across the most sought-after markets.</p>
          <button style={btnStyle("hero")} onMouseEnter={() => setHover("hero")} onMouseLeave={() => setHover(null)} onClick={() => scrollTo("contact")}>Schedule a Consultation</button>
        </div>
      </section>

      <section id="listings" style={{ padding: "80px 48px", background: "#fff" }}>
        <p style={{ color: accent, textAlign: "center", letterSpacing: 3, fontSize: 13, textTransform: "uppercase" }}>Featured Properties</p>
        <h2 style={{ textAlign: "center", fontSize: 38, fontWeight: 700, margin: "12px 0 48px" }}>Exclusive Listings</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "center" }}>
          {listings.map((p, i) => (
            <div key={i} style={{ background: light, borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.08)", flex: "1 1 280px", maxWidth: 360 }}>
              <img src={p.img} alt={p.title} style={{ width: "100%", height: 210, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 17, fontWeight: 700, wordWrap: "break-word", overflowWrap: "break-word", flex: 1 }}>{p.title}</span>
                  <span style={{ color: accent, fontWeight: 700, fontSize: 17, whiteSpace: "nowrap" }}>{p.price}</span>
                </div>
                <p style={{ color: gray, fontSize: 14, marginTop: 10 }}>{p.beds} Bedrooms  |  {p.baths} Bathrooms</p>
                <button style={{ ...btnStyle("card" + i), padding: "10px 20px", fontSize: 14, marginTop: 14 }} onMouseEnter={() => setHover("card" + i)} onMouseLeave={() => setHover(null)} onClick={() => scrollTo("contact")}>Request Viewing</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{ padding: "80px 48px", background: light }}>
        <p style={{ color: accent, textAlign: "center", letterSpacing: 3, fontSize: 13, textTransform: "uppercase" }}>What We Offer</p>
        <h2 style={{ textAlign: "center", fontSize: 38, fontWeight: 700, margin: "12px 0 48px" }}>Full-Service Real Estate</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[{ icon: "🏡", t: "Buyer Representation", d: "We negotiate fiercely on your behalf to secure your ideal home at the best possible price." }, { icon: "📋", t: "Property Valuation", d: "Get accurate, data-driven valuations that reflect true market value and maximize returns." }, { icon: "🔑", t: "Luxury Rentals", d: "Access premium rental properties curated for quality, location, and lifestyle excellence." }].map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "32px 28px", flex: "1 1 220px", maxWidth: 320, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{s.t}</h3>
              <p style={{ color: gray, fontSize: 15, lineHeight: 1.7 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "80px 48px", background: dark, display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", justifyContent: "center" }}>
        <img src="https://images.pexels.com/photos/8730026/pexels-photo-8730026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="About" style={{ borderRadius: 16, width: 340, maxWidth: "100%", objectFit: "cover", height: 380 }} />
        <div style={{ maxWidth: 500, flex: "1 1 280px" }}>
          <p style={{ color: accent, letterSpacing: 3, fontSize: 13, textTransform: "uppercase", marginBottom: 12 }}>About Meridian</p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>25 Years of Trusted Real Estate Excellence</h2>
          <p style={{ color: "#D1D5DB", fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>With over 2,400 successful transactions, our team of seasoned agents delivers white-glove service, deep market expertise, and results that speak for themselves. We treat every client like family.</p>
          <button style={btnStyle("about")} onMouseEnter={() => setHover("about")} onMouseLeave={() => setHover(null)} onClick={() => scrollTo("contact")}>Meet Our Agents</button>
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 48px", background: "#fff", maxWidth: 640, margin: "0 auto" }}>
        <p style={{ color: accent, textAlign: "center", letterSpacing: 3, fontSize: 13, textTransform: "uppercase" }}>Get In Touch</p>
        <h2 style={{ textAlign: "center", fontSize: 38, fontWeight: 700, margin: "12px 0 40px" }}>Start Your Property Journey</h2>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 24px", background: light, borderRadius: 16, fontSize: 18, color: dark }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
            Thanks, we will be in touch with you shortly!
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[["name", "Your Full Name"], ["email", "Email Address"]].map(([k, ph]) => (
              <input key={k} type={k === "email" ? "email" : "text"} placeholder={ph} required value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} style={{ padding: "14px 18px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 16, outline: "none" }} />
            ))}
            <textarea placeholder="Tell us about your property goals" rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ padding: "14px 18px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 16, resize: "vertical", outline: "none" }} />
            <button type="submit" style={btnStyle("submit")} onMouseEnter={() => setHover("submit")} onMouseLeave={() => setHover(null)}>Send Message</button>
          </form>
        )}
      </section>

      <footer style={{ background: dark, color: "#9CA3AF", textAlign: "center", padding: "28px 24px", fontSize: 14 }}>
        2024 Meridian Realty. All rights reserved. | Luxury Real Estate Services
      </footer>
    </div>
  );
}