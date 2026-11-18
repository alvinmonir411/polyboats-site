import Link from 'next/link';

export const metadata = {
  title: 'Outboard Motors & Rigging | Suzuki, Honda, Yamaha - Polyboats',
  description: 'Authorized outboard repower and rigging center at Alpine Marina, NJ.',
};

export default function OutboardsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / OUTBOARD MOTORS</div>
          <h1 className="page-banner-title">OUTBOARD MOTORS & RIGGING</h1>
          <p className="page-banner-desc">Authorized sales, factory rigging, and repower center for Suzuki Marine, Honda Marine, and Yamaha. Expertly matched to Polycraft and Steady hull dynamics for peak fuel efficiency and speed.</p>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="boats-grid">
            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">PORTABLE</span>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 900 }}>HONDA BF9.9</div>
                  <div style={{ fontSize: '12px', color: 'var(--sky-blue)' }}>4-STROKE POWER THRUST</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Honda BF9.9 4-Stroke (Manual / Electric)</h4>
                <div className="boat-specs">222cc &bull; 2-Cyl &bull; 92 lbs &bull; 15&quot; or 20&quot; Shaft</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>The quintessential power match for the Polycraft 300 Tuffy or Steady 320. Ultra quiet, smooth low-end torque.</p>
                <div className="boat-price">$2,980 <span style={{ fontSize: '11px', color: 'var(--text-specs)' }}>+ Free Rigging</span></div>
                <Link href="/service#contact" className="btn-card-view">REQUEST MOTOR QUOTE &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">PORTABLE</span>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 900 }}>SUZUKI DF15A</div>
                  <div style={{ fontSize: '12px', color: 'var(--sky-blue)' }}>BATTERYLESS EFI</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Suzuki DF15A Electronic Fuel Injection</h4>
                <div className="boat-specs">327cc &bull; 2-Cyl &bull; 97 lbs &bull; Lean Burn Control</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Industry-first batteryless EFI in a 15 HP class. Instant start in any weather. Perfect match for Polycraft 300 Tuffy max power.</p>
                <div className="boat-price">$3,250 <span style={{ fontSize: '11px', color: 'var(--text-specs)' }}>+ Free Rigging</span></div>
                <Link href="/service#contact" className="btn-card-view">REQUEST MOTOR QUOTE &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">MID-RANGE</span>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 900 }}>SUZUKI DF50A</div>
                  <div style={{ fontSize: '12px', color: 'var(--sky-blue)' }}>3-CYLINDER DOHC 12V</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Suzuki DF50A High Output EFI</h4>
                <div className="boat-specs">941cc &bull; 3-Cyl &bull; 229 lbs &bull; Power Trim &amp; Tilt</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Self-adjusting timing chain, maintenance-free. Designed specifically for the Polycraft 410 Challenger center console.</p>
                <div className="boat-price">$7,890 <span style={{ fontSize: '11px', color: 'var(--text-specs)' }}>Rigged Package</span></div>
                <Link href="/service#contact" className="btn-card-view">REQUEST MOTOR QUOTE &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap" style={{ background: '#0B2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <span className="card-badge">MID-RANGE</span>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 900 }}>YAMAHA F70</div>
                  <div style={{ fontSize: '12px', color: 'var(--sky-blue)' }}>FEATHERWEIGHT 70HP</div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="boat-name">Yamaha F70 In-Line 4-Stroke</h4>
                <div className="boat-specs">996cc &bull; 4-Cyl &bull; 253 lbs &bull; 16-Valve SOHC</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Lightest 70 HP four-stroke on the water. Maximizes the performance and holeshot of the Polycraft 480 Brumby.</p>
                <div className="boat-price">$9,650 <span style={{ fontSize: '11px', color: 'var(--text-specs)' }}>Rigged Package</span></div>
                <Link href="/service#contact" className="btn-card-view">REQUEST MOTOR QUOTE &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
