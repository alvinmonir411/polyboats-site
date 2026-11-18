'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / MARINE SERVICE &amp; RIGGING</div>
          <h1 className="page-banner-title">SERVICE, REPAIR &amp; CUSTOM RIGGING</h1>
          <p className="page-banner-desc">Full-service marine repair center located directly on the Hudson River at Alpine Marina, New Jersey. Specialists in specialized polyethylene extrusion welding, outboard repower, electronics, and winterization.</p>
        </div>
      </section>

      {/* Service Pillars */}
      <section style={{ padding: '60px 0', background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ border: '1px solid var(--border-light)', padding: '30px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-light)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-blue)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '18px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>Polyethylene Plastic Welding</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>Unlike fiberglass which requires toxic resin and epoxy, polyethylene can be seamlessly thermal-welded using PE extrusion rods. We repair gouges, install custom brackets, rod holders, and transducer blocks with 100% molecular bonding.</p>
            </div>

            <div style={{ border: '1px solid var(--border-light)', padding: '30px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-light)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--navy-dark)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '18px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>Outboard 100-Hr &amp; Annual Service</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>Factory-certified servicing for Suzuki, Honda, and Yamaha. Engine oil, high-performance gear lube, water pump impellers, spark plugs, zinc anodes, fuel-water separator replacements, and ECU diagnostics report.</p>
            </div>

            <div style={{ border: '1px solid var(--border-light)', padding: '30px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-light)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--warm-amber)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '18px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>Marine Electronics &amp; Rigging</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>GPS Chartplotter &amp; Sonar installation (Garmin, Simrad, Lowrance), trolling motor installs (Minn Kota / Rhodan), lithium battery conversion, underwater LEDs, and marine audio system installs with sealed marine harness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section style={{ padding: '70px 0', background: 'var(--bg-light)' }} id="contact">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="form-card">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 800, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>GET IN TOUCH WITH OUR SPECIALISTS</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--navy-dark)' }}>SCHEDULE SERVICE OR INQUIRE</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '600px', margin: '8px auto 0 auto' }}>Have questions about Polycraft or Steady boats, need an outboard repower, or want to schedule maintenance? Fill out the form below or call us directly.</p>
            </div>

            {submitted ? (
              <div style={{ background: '#E8F5E9', border: '1px solid #A5D6A7', padding: '24px', borderRadius: 'var(--radius-sm)', textAlign: 'center', color: '#2E7D32' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '8px' }}>✓ REQUEST RECEIVED SUCCESSFULLY!</h3>
                <p style={{ fontSize: '14px' }}>Thank you! A marine technician from Polyboats will call you within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" required placeholder="First and Last Name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" required placeholder="(201) 555-0199" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" required placeholder="name@example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Topic / Service Needed</label>
                    <select className="form-control">
                      <option>New Boat Purchase Inquiry</option>
                      <option>Pre-Owned Boat Sea-Trial</option>
                      <option>Outboard Motor Repower / Quote</option>
                      <option>Polyethylene Plastic Welding / Repair</option>
                      <option>Annual Engine Service (100-Hr)</option>
                      <option>Electronics / Trolling Motor Install</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message or Detailed Requirements</label>
                  <textarea className="form-control" rows={4} placeholder="Tell us about your boat, water use, location for delivery, or specific issues..."></textarea>
                </div>

                <button type="submit" className="btn-primary-blue" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '14px' }}>
                  SUBMIT INQUIRY / SCHEDULE SERVICE &rarr;
                </button>
              </form>
            )}

            <div style={{ marginTop: '30px', paddingTop: '25px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-around', textAlign: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '12px', color: 'var(--navy-dark)', textTransform: 'uppercase' }}>Direct Phone</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-blue)' }}>(201) 768-4500</div>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '12px', color: 'var(--navy-dark)', textTransform: 'uppercase' }}>Shop Address</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Alpine Marina, Alpine, NJ 07620</div>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '12px', color: 'var(--navy-dark)', textTransform: 'uppercase' }}>Service Hours</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Mon &ndash; Sat: 8:00 AM &ndash; 5:30 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
