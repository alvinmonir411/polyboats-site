import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">BUILT<br />DIFFERENT.<br />BUILT TO LAST.</h1>
            <p className="hero-subtitle">Polyethylene boats from Polycraft and Steady.</p>
            <p className="hero-desc">Exceptionally durable. Low maintenance. Ready for real-world use on lakes, rivers, bays and beyond.</p>
            
            <div className="hero-buttons">
              <Link href="/new-boats" className="btn-primary-blue">SHOP NEW BOATS &rarr;</Link>
              <Link href="/inventory" className="btn-outline-white">VIEW INVENTORY &rarr;</Link>
            </div>
          </div>
        </div>

        {/* Value Badges Bar */}
        <div className="container">
          <div className="hero-badges-bar">
            <div className="badge-item">
              <span className="badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              IMPACT RESISTANT
            </div>
            <div className="badge-item">
              <span className="badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </span>
              LOW MAINTENANCE
            </div>
            <div className="badge-item">
              <span className="badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M2 12c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0 5.5-2.5 8 0"/><path d="M2 17c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0 5.5-2.5 8 0"/></svg>
              </span>
              NO GELCOAT
            </div>
            <div className="badge-item">
              <span className="badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
              </span>
              EXTREMELY DURABLE
            </div>
            <div className="badge-item shipping">
              <div className="shipping-header">
                <span className="badge-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </span>
                NATIONWIDE SHIPPING
              </div>
              <div className="shipping-sub">USA &bull; CANADA &bull; MEXICO &bull; CARIBBEAN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Grid - Clean Real Photography */}
      <section className="brand-grid-section">
        <div className="brand-card polycraft">
          <div className="brand-overlay"></div>
          <div className="brand-top">
            <div className="brand-logo-text">POLYCRAFT</div>
          </div>
          <div className="brand-bottom">
            <div className="brand-tagline">RUGGED. RELIABLE. ADVENTURE-READY.</div>
            <div className="brand-models">300 Tuffy &nbsp;|&nbsp; 410 Challenger &nbsp;|&nbsp; 480 Brumby</div>
            <Link href="/new-boats?brand=polycraft" className="btn-white-solid">EXPLORE POLYCRAFT &rarr;</Link>
          </div>
        </div>

        <div className="brand-card steady">
          <div className="brand-overlay"></div>
          <div className="brand-top">
            <div className="brand-logo-text">STEADY</div>
          </div>
          <div className="brand-bottom">
            <div className="brand-tagline">SIMPLE. DURABLE. VERSATILE.</div>
            <div className="brand-models">260 &nbsp;|&nbsp; 320 &nbsp;|&nbsp; 400 &nbsp;|&nbsp; GO &nbsp;|&nbsp; 11 Easy &nbsp;|&nbsp; 14 Active &nbsp;|&nbsp; 14 Fisher &nbsp;|&nbsp; 16 Explorer &nbsp;|&nbsp; 17 Multi</div>
            <Link href="/new-boats?brand=steady" className="btn-white-solid">EXPLORE STEADY &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Polyethylene Boats */}
      <section className="why-poly-section">
        <div className="container why-poly-grid">
          <div className="why-poly-left">
            <h2>WHY POLYETHYLENE BOATS?</h2>
            <p>Polyethylene boats are built to handle real life. They&apos;re impact resistant, low maintenance, and incredibly durable &mdash; making them ideal for fishing, work, recreation and family adventures.</p>
            <Link href="/new-boats" className="btn-outline-dark">LEARN MORE ABOUT POLYETHYLENE BOATS &rarr;</Link>
          </div>

          <div className="why-poly-features">
            <div className="feature-box">
              <div className="feature-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 3.26-6.36 6.36"/><path d="m11 5 4 4"/></svg>
              </div>
              <div className="feature-title">IMPACT<br />RESISTANT</div>
            </div>

            <div className="feature-box">
              <div className="feature-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <div className="feature-title">LOW<br />MAINTENANCE</div>
            </div>

            <div className="feature-box">
              <div className="feature-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <div className="feature-title">NO<br />GELCOAT</div>
            </div>

            <div className="feature-box">
              <div className="feature-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M2 12c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0 5.5-2.5 8 0"/><path d="M2 17c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0 5.5-2.5 8 0"/></svg>
              </div>
              <div className="feature-title">BUILT FOR<br />REAL-WORLD USE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Boats Section - Real Live Scraped Pricing */}
      <section className="featured-boats-section">
        <div className="container">
          <div className="section-header-row">
            <h3 className="section-title-h3">FEATURED BOATS</h3>
            <Link href="/inventory" className="link-all">VIEW ALL INVENTORY &rarr;</Link>
          </div>

          <div className="boats-grid">
            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge">NEW</span>
                <img src="/assets/real-boat-300-tuffy.jpg" alt="2026 Polycraft 300 Tuffy" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2026 Polycraft 300 Tuffy</h4>
                <div className="boat-specs">10&apos; &nbsp;|&nbsp; 238 lbs &nbsp;|&nbsp; Up to 15 HP</div>
                <div className="boat-price">$3,969</div>
                <Link href="/inventory" className="btn-card-view">VIEW BOAT &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge">NEW</span>
                <img src="/assets/real-boat-410-challenger.jpg" alt="2025 Polycraft 410 Challenger" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2025 Polycraft 410 Challenger CC</h4>
                <div className="boat-specs">13&apos;6&quot; &nbsp;|&nbsp; 400 lbs &nbsp;|&nbsp; 50 HP Yamaha</div>
                <div className="boat-price">$22,969</div>
                <Link href="/inventory" className="btn-card-view">VIEW BOAT &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge">NEW</span>
                <img src="/assets/real-boat-480-brumby.jpg" alt="2025 Polycraft 480 Brumby" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2025 Polycraft 480 Brumby CC</h4>
                <div className="boat-specs">15&apos;8&quot; &nbsp;|&nbsp; 683 lbs &nbsp;|&nbsp; 90 HP Yamaha</div>
                <div className="boat-price">$35,069</div>
                <Link href="/inventory" className="btn-card-view">VIEW BOAT &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge">NEW</span>
                <img src="/assets/real-boat-steady-320.jpg" alt="2026 Steady 320" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2026 Steady 320 Dinghy</h4>
                <div className="boat-specs">10&apos;5&quot; &nbsp;|&nbsp; 253 lbs &nbsp;|&nbsp; Up to 15 HP</div>
                <div className="boat-price">$4,773</div>
                <Link href="/inventory" className="btn-card-view">VIEW BOAT &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Section */}
      <section className="dealership-section" id="about">
        <div className="dealership-img"></div>
        <div className="dealership-content">
          <div className="dealership-eyebrow">WELCOME TO POLYBOATS</div>
          <h2 className="dealership-title">THE SOURCE FOR<br />POLYETHYLENE BOATS</h2>
          <p className="dealership-desc">We&apos;re a specialty boat dealer located inside Alpine Marina on the Hudson River in Alpine, New Jersey, proudly representing Polycraft and Steady. We also offer pre-owned boats, outboards, parts, and expert service &mdash; with shipping coordination throughout the USA, Canada, Mexico, and the Caribbean.</p>
          <div className="dealership-buttons">
            <Link href="/service" className="btn-primary-blue">ABOUT OUR DEALERSHIP &rarr;</Link>
            <a href="https://maps.google.com/?q=Alpine+Marina+1+Alpine+Approach+Rd+Alpine+NJ" target="_blank" rel="noopener noreferrer" className="btn-outline-white">VISIT ALPINE MARINA &rarr;</a>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner - Clean Background with zero text ghosting */}
      <section className="bottom-cta-banner">
        <div className="container">
          <h3 className="cta-title">READY TO GET ON THE WATER?</h3>
          <p className="cta-sub">Shop new boats, browse inventory, or contact our team &mdash; we&apos;re here to help.</p>
          <div className="cta-buttons">
            <Link href="/inventory" className="btn-pill-white">VIEW INVENTORY &rarr;</Link>
            <a href="tel:2018004770" className="btn-pill-warm">&#128222; CALL OR TEXT (201) 800-4770</a>
            <Link href="/service#contact" className="btn-pill-white">CONTACT US &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
