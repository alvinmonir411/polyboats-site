import Link from 'next/link';

export const metadata = {
  title: 'Certified Pre-Owned Boats | Polyboats',
  description: '50-Point inspected used polyethylene boats with powertrain guarantee.',
};

export default function PreOwnedPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / PRE-OWNED BOATS</div>
          <h1 className="page-banner-title">CERTIFIED PRE-OWNED BOATS</h1>
          <p className="page-banner-desc">Because polyethylene hulls never crack, rot, corrode, or suffer from osmosis blisters, buying a pre-owned Polycraft or Steady boat offers virtually the same structural integrity as buying new &mdash; at an incredible value.</p>
        </div>
      </section>

      {/* Guarantee Bar */}
      <section style={{ background: '#FFFFFF', padding: '35px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 900, color: 'var(--primary-blue)' }}>50-POINT</div>
            <div style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}>Certified Marine Inspection</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Every hull, compression test, steering cable, and trailer is water tested.</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 900, color: 'var(--navy-dark)' }}>30-DAY</div>
            <div style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}>Dealer Powertrain Guarantee</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Complete peace of mind on all certified pre-owned outboard motors.</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 900, color: 'var(--primary-blue)' }}>TRADE-IN</div>
            <div style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}>Fair Market Valuations</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Trade in your aluminum dinghy, RIB, or fiberglass skiff against any new or used boat.</p>
          </div>
        </div>
      </section>

      {/* Pre-Owned Listings */}
      <section style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase' }}>AVAILABLE PRE-OWNED BOATS</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>All units are available for immediate sea-trial at Alpine Marina.</p>
          </div>

          <div className="boats-grid">
            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge" style={{ background: 'var(--navy-dark)' }}>CERTIFIED USED</span>
                <img src="/assets/boat-300-tuffy.png" alt="2023 Polycraft 300 Tuffy" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2023 Polycraft 300 Tuffy Package</h4>
                <div className="boat-specs">10&apos;0&quot; &bull; 9.9HP Honda 4-Stroke &bull; 24 Hrs</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Includes galvanized bunk trailer, custom sunbrella cover, and Lowrance Hook 4x fishfinder.</p>
                <div className="boat-price">$4,850</div>
                <Link href="/service#contact" className="btn-card-view">INQUIRE / SEA-TRIAL &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge" style={{ background: 'var(--navy-dark)' }}>CERTIFIED USED</span>
                <img src="/assets/boat-steady-320.png" alt="2022 Steady 260" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2022 Steady 260 Yacht Tender</h4>
                <div className="boat-specs">8&apos;6&quot; &bull; 4HP Suzuki Outboard &bull; 15 Hrs</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>White hull with fresh safety lines. Used for one summer as yacht tender in Long Island Sound.</p>
                <div className="boat-price">$2,150</div>
                <Link href="/service#contact" className="btn-card-view">INQUIRE / SEA-TRIAL &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge" style={{ background: 'var(--navy-dark)' }}>CERTIFIED USED</span>
                <img src="/assets/boat-410-challenger.png" alt="2021 Polycraft 410" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2021 Polycraft 410 Center Console</h4>
                <div className="boat-specs">13&apos;6&quot; &bull; 50HP Suzuki Lean Burn &bull; 82 Hrs</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Minn Kota Riptide Terrova 55lb trolling motor with i-Pilot, onboard charger, bimini top.</p>
                <div className="boat-price">$12,490</div>
                <Link href="/service#contact" className="btn-card-view">INQUIRE / SEA-TRIAL &rarr;</Link>
              </div>
            </div>

            <div className="boat-card">
              <div className="card-img-wrap">
                <span className="card-badge" style={{ background: 'var(--navy-dark)' }}>JUST TRADED</span>
                <img src="/assets/boat-480-brumby.png" alt="2020 Polycraft 480 Brumby" />
              </div>
              <div className="card-body">
                <h4 className="boat-name">2020 Polycraft 480 Brumby Bowrider</h4>
                <div className="boat-specs">15&apos;9&quot; &bull; 70HP Yamaha 4-Stroke &bull; 140 Hrs</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Ski pole, boarding ladder, Garmin 7&quot; touchscreen, forward bow cushions, aluminum trailer.</p>
                <div className="boat-price">$16,200</div>
                <Link href="/service#contact" className="btn-card-view">INQUIRE / SEA-TRIAL &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
