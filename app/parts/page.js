'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PartsPage() {
  const [ordered, setOrdered] = useState(false);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / PARTS &amp; ACCESSORIES</div>
          <h1 className="page-banner-title">GENUINE PARTS &amp; CUSTOM ACCESSORIES</h1>
          <p className="page-banner-desc">Official factory replacement parts, factory consoles, casting decks, stainless bow rails, Bimini tops, and specialized hardware engineered for polyethylene hulls.</p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase' }}>PARTS &amp; ACCESSORIES CATALOG</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Fast nationwide shipping to USA, Canada, Mexico, and Caribbean.</p>
          </div>

          <div className="boats-grid">
            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">POLY ACCESSORY</span>
                <div style={{ textAlign: 'center', padding: '15px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>CASTING DECKS</div>
                  <div style={{ fontSize: '11px', color: 'var(--sky-blue)' }}>300 TUFFY &amp; 410 CHALLENGER</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Polycraft Front Casting Deck Kit</h4>
                <div className="boat-specs">Part #PC-CD-300 &bull; Molded Non-Skid PE</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Drop-in rotational molded casting platform with integrated dry storage hatch.</p>
                <div className="boat-price">$490</div>
                <a href="#parts-order" className="btn-card-view">ORDER PART &rarr;</a>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">CONSOLES</span>
                <div style={{ textAlign: 'center', padding: '15px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>CENTER CONSOLE</div>
                  <div style={{ fontSize: '11px', color: 'var(--sky-blue)' }}>WINDSCREEN &amp; GRAB RAIL</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Polycraft 410 Modular Center Console</h4>
                <div className="boat-specs">Part #PC-CC-410 &bull; Polyethylene Construction</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Includes tinted acrylic windshield, 316 stainless surround handrail, steering cutout.</p>
                <div className="boat-price">$1,250</div>
                <a href="#parts-order" className="btn-card-view">ORDER PART &rarr;</a>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">COVERS &amp; TOPS</span>
                <div style={{ textAlign: 'center', padding: '15px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>SUNBRELLA BIMINI</div>
                  <div style={{ fontSize: '11px', color: 'var(--sky-blue)' }}>HEAVY DUTY 3-BOW</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Custom Fit 3-Bow Bimini Top</h4>
                <div className="boat-specs">Part #BT-POLY-ALL &bull; Marine Grade Sunbrella</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Anodized aluminum frame with stainless fittings and rear support poles.</p>
                <div className="boat-price">$580</div>
                <a href="#parts-order" className="btn-card-view">ORDER PART &rarr;</a>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">STEADY OEM</span>
                <div style={{ textAlign: 'center', padding: '15px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800 }}>SAFETY ROPE KIT</div>
                  <div style={{ fontSize: '11px', color: 'var(--sky-blue)' }}>STEADY 260 / 320 / 400</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Steady Factory Perimeter Grab Rope</h4>
                <div className="boat-specs">Part #ST-GRP-320 &bull; UV Resistant Braided</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Full perimeter replacement safety grab line kit with heavy-duty molded eyelet guides.</p>
                <div className="boat-price">$165</div>
                <a href="#parts-order" className="btn-card-view">ORDER PART &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }} id="parts-order">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="form-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>ORDER PARTS OR REQUEST HULL SPECIFIC ACCESSORIES</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '25px' }}>Enter your boat model, Hull Identification Number (HIN), or the part numbers you need. We ship daily from our warehouse in Alpine, NJ.</p>

            {ordered ? (
              <div style={{ background: '#E8F5E9', border: '1px solid #A5D6A7', padding: '24px', borderRadius: 'var(--radius-sm)', textAlign: 'center', color: '#2E7D32' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '8px' }}>✓ PARTS ORDER RECEIVED!</h3>
                <p style={{ fontSize: '14px' }}>Our parts desk will confirm stock availability and send an invoice with tracking information.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setOrdered(true); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" required placeholder="(201) 555-0123" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Boat Model &amp; Year</label>
                    <input type="text" className="form-control" required placeholder="e.g. 2024 Polycraft 410 Challenger" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Part Name / Number / Description</label>
                  <textarea className="form-control" rows={3} required placeholder="Specify part numbers, accessories, hardware, or replacement items needed..."></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Shipping Destination (City, State, Zip, Country)</label>
                  <input type="text" className="form-control" required placeholder="e.g. Miami, FL 33101 USA" />
                </div>

                <button type="submit" className="btn-primary-blue" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                  SUBMIT PARTS ORDER REQUEST &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
