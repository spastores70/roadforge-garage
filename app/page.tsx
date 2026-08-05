"use client";

import { FormEvent, useMemo, useState } from "react";

const affiliateBase =
  "https://www.kqzyfj.com/click-101807185-17318871";

const makes: Record<string, string[]> = {
  Ford: ["F-150", "F-250 Super Duty", "Ranger", "Bronco"],
  Chevrolet: ["Silverado 1500", "Silverado 2500 HD", "Colorado", "Tahoe"],
  Ram: ["1500", "2500", "3500"],
  Toyota: ["Tacoma", "Tundra", "4Runner"],
  Jeep: ["Wrangler", "Gladiator", "Grand Cherokee"],
  GMC: ["Sierra 1500", "Sierra 2500 HD", "Canyon"],
};

const categories = [
  { icon: "▰", name: "Tonneau Covers", copy: "Secure, weather-ready bed protection.", tag: "BED PROTECTION" },
  { icon: "↗", name: "Running Boards", copy: "A stronger step with trail-ready stance.", tag: "STEP BARS" },
  { icon: "▦", name: "Floor Liners", copy: "Precision-fit defense against mud and spills.", tag: "INTERIOR ARMOR" },
  { icon: "▱", name: "Truck Bumpers", copy: "Heavy-duty protection with an aggressive profile.", tag: "FRONT & REAR" },
  { icon: "◉", name: "Lighting", copy: "See farther with durable LED upgrades.", tag: "VISIBILITY" },
  { icon: "⌁", name: "Storage", copy: "Organize tools and cargo without wasted space.", tag: "TRUCK STORAGE" },
];

const picks = [
  {
    badge: "BEST OVERALL",
    category: "BED PROTECTION",
    title: "OEDRO Soft Tri-Fold Tonneau Cover",
    fit: "Popular truck fitments available",
    price: "Check current price",
    score: "9.2",
  },
  {
    badge: "TOP VALUE",
    category: "STEP BARS",
    title: "OEDRO 6-Inch Running Boards",
    fit: "Vehicle-specific bolt-on options",
    price: "See available deals",
    score: "8.9",
  },
  {
    badge: "DAILY DRIVER PICK",
    category: "INTERIOR",
    title: "OEDRO All-Weather Floor Liners",
    fit: "Custom-fit sets by year and model",
    price: "Check current price",
    score: "9.0",
  },
];

const guides = [
  ["FITMENT 101", "How to Choose Accessories That Actually Fit", "Year, cab style, bed length, and trim—here’s what to verify before buying."],
  ["BUYING GUIDE", "Soft vs. Hard Tonneau Covers", "Compare security, access, weather protection, and price before outfitting your bed."],
  ["INSTALLATION", "Can You Install Running Boards at Home?", "What to expect from a bolt-on installation and the tools you’ll likely need."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fitMessage, setFitMessage] = useState("");

  const models = useMemo(() => (make ? makes[make] ?? [] : []), [make]);

  function findFit(event: FormEvent) {
    event.preventDefault();
    if (!year || !make || !model) {
      setFitMessage("Choose your year, make, and model to continue.");
      return;
    }
    setFitMessage(`Fitment ready for your ${year} ${make} ${model}. Opening matching accessories…`);
    window.setTimeout(() => window.open(affiliateBase, "_blank", "noopener,noreferrer"), 650);
  }

  return (
    <main>
      <div className="disclosure">
        Independent buying guides. We may earn a commission from qualifying purchases.
      </div>

      <header className="site-header">
        <a className="logo" href="#home" aria-label="RoadForge Garage home">
          <span>ROADFORGE</span>
          <small><i /> GARAGE <i /></small>
        </a>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#fitment">Shop by Vehicle</a>
          <a href="#guides">Gear Guides</a>
          <a href="#top-picks">Reviews</a>
          <a href="#deals">Deals</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-copy shell">
          <p className="eyebrow"><span /> Tested for work. Ready for weekends.</p>
          <h1>Upgrade Your Truck.<br />Own Every Mile.</h1>
          <div className="orange-rule" />
          <p className="hero-lead">
            Straightforward guides to truck accessories that fit right, work hard,
            and are built for the road ahead.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#fitment">Find Your Fit</a>
            <a className="button secondary" href="#top-picks">Explore Top Picks</a>
          </div>
          <div className="trust-row" aria-label="Site benefits">
            <span>✓ Fitment-first research</span>
            <span>✓ Honest comparisons</span>
            <span>✓ No-cost buying guides</span>
          </div>
        </div>
      </section>

      <section className="fitment-wrap shell" id="fitment">
        <form className="fitment-panel" onSubmit={findFit}>
          <div className="fitment-intro">
            <div className="garage-icon">⌂</div>
            <div><small>START HERE</small><strong>Find Gear That Fits</strong></div>
          </div>
          <label>
            <span>YEAR</span>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Select year</option>
              {Array.from({ length: 17 }, (_, i) => 2026 - i).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span>MAKE</span>
            <select value={make} onChange={(e) => { setMake(e.target.value); setModel(""); }}>
              <option value="">Select make</option>
              {Object.keys(makes).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>MODEL</span>
            <select value={model} onChange={(e) => setModel(e.target.value)} disabled={!make}>
              <option value="">Select model</option>
              {models.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <button className="button primary fit-button" type="submit">Find Your Fit <span>→</span></button>
        </form>
        <p className="fit-message" role="status">{fitMessage}</p>
      </section>

      <section className="section shell" aria-labelledby="categories-title">
        <div className="section-heading">
          <div>
            <p className="kicker">BUILD IT YOUR WAY</p>
            <h2 id="categories-title">Shop by Category</h2>
          </div>
          <p>Start with what your truck needs most. Every guide puts compatibility before hype.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a
              className="category-card"
              href={affiliateBase}
              target="_blank"
              rel="sponsored noopener noreferrer"
              key={category.name}
            >
              <div className="category-glow" />
              <span className="category-tag">{category.tag}</span>
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.copy}</p>
              <strong>Explore gear <b>→</b></strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section picks-section" id="top-picks">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">ROADFORGE RECOMMENDS</p>
              <h2>Top Gear Picks</h2>
            </div>
            <p>Popular OEDRO accessories organized to make your shortlist faster—not to replace checking exact fitment.</p>
          </div>
          <div className="picks-grid">
            {picks.map((pick, index) => (
              <article className="pick-card" key={pick.title}>
                <div className={`pick-visual visual-${index + 1}`}>
                  <span>{pick.category}</span>
                  <div className="product-silhouette">{index === 0 ? "▰" : index === 1 ? "╱═╲" : "▦"}</div>
                  <b>{pick.score}<small>/10</small></b>
                </div>
                <div className="pick-content">
                  <span className="badge">{pick.badge}</span>
                  <h3>{pick.title}</h3>
                  <p>{pick.fit}</p>
                  <div className="pick-footer">
                    <strong>{pick.price}</strong>
                    <a href={affiliateBase} target="_blank" rel="sponsored noopener noreferrer">
                      View at OEDRO <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="price-note">Prices and availability can change. Confirm vehicle compatibility and current terms on the merchant’s website.</p>
        </div>
      </section>

      <section className="section shell" id="guides">
        <div className="section-heading">
          <div>
            <p className="kicker">KNOW BEFORE YOU BOLT</p>
            <h2>Garage Guides</h2>
          </div>
          <p>Practical answers for choosing, comparing, and installing upgrades with confidence.</p>
        </div>
        <div className="guide-grid">
          {guides.map(([tag, title, copy], index) => (
            <article className="guide-card" key={title}>
              <div className={`guide-number n-${index + 1}`}>0{index + 1}</div>
              <span>{tag}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={affiliateBase} target="_blank" rel="sponsored noopener noreferrer">Read the guide →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="deal-band" id="deals">
        <div className="shell deal-inner">
          <div>
            <p className="kicker">CURRENT OEDRO OFFERS</p>
            <h2>Build More. Spend Smarter.</h2>
            <p>Check the latest merchant pricing on truck protection, storage, steps, and lighting.</p>
          </div>
          <a className="button primary" href={affiliateBase} target="_blank" rel="sponsored noopener noreferrer">
            View Today&apos;s Deals ↗
          </a>
        </div>
      </section>

      <section className="why shell">
        <div>
          <p className="kicker">OUR STANDARD</p>
          <h2>Fit First.<br />Hype Never.</h2>
        </div>
        <div className="why-grid">
          <p><strong>01</strong><span><b>Compatibility matters</b>We remind readers to verify year, make, model, cab, and bed configuration.</span></p>
          <p><strong>02</strong><span><b>Clear recommendations</b>We organize the details that matter so comparisons take less time.</span></p>
          <p><strong>03</strong><span><b>Independent voice</b>RoadForge Garage is an independent publisher, not the product manufacturer.</span></p>
          <p><strong>04</strong><span><b>Transparent links</b>Affiliate relationships are disclosed clearly and never change your purchase price.</span></p>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <a className="logo footer-logo" href="#home"><span>ROADFORGE</span><small><i /> GARAGE <i /></small></a>
          <p>Independent truck gear guides built for drivers who expect more from every mile.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
        <div className="shell footer-bottom">
          <p>© 2026 RoadForge Garage. All rights reserved.</p>
          <div><a href="#disclosure">Affiliate Disclosure</a><a href="#privacy">Privacy</a><a href="#contact">Contact</a></div>
        </div>
        <div className="shell legal" id="disclosure">
          RoadForge Garage participates in affiliate programs and may earn commissions from qualifying purchases.
          Product names and trademarks belong to their respective owners. We are not OEDRO and do not represent the manufacturer.
        </div>
      </footer>
    </main>
  );
}
