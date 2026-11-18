import Link from 'next/link';

export const metadata = {
  title: 'Certified Pre-Owned Boats | Polyboats',
  description: '50-Point inspected used polyethylene boats with powertrain guarantee at Alpine Marina, NJ.',
};

const preOwnedListings = [
  {
    name: '2023 Polycraft 300 Tuffy Package',
    brand: 'Polycraft',
    specs: "10'0\" • Honda 9.9HP 4-Stroke • 24 Engine Hours",
    desc: 'Certified pre-owned. Includes Honda 9.9HP 4-stroke outboard, galvanized bunk trailer, sunbrella cover, and Lowrance Hook 4x fishfinder. Zero hull cracks or gelcoat to maintain.',
    price: '$4,925',
    breakdown: 'Unit $4,850 + Doc Fee $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    tag: 'CERTIFIED USED'
  },
  {
    name: '2022 Steady 260 Certified Yacht Tender',
    brand: 'Steady',
    specs: "8'4\" • Suzuki 4HP 4-Stroke • 15 Engine Hours",
    desc: 'Arctic white hull with fresh safety rope perimeter. Used for a single summer season in Long Island Sound as yacht tender. Engine fully flushed and serviced.',
    price: '$2,225',
    breakdown: 'Unit $2,150 + Doc Fee $75',
    img: '/assets/real-boat-steady-260.jpg',
    tag: 'CERTIFIED USED'
  },
  {
    name: '2021 Polycraft 410 Center Console Pre-Owned',
    brand: 'Polycraft',
    specs: "13'6\" • Suzuki 50HP Lean Burn • 82 Engine Hours",
    desc: 'Olive Green hull. Outfitted with Minn Kota Riptide Terrova 55lb trolling motor with i-Pilot, Garmin 7" Echomap GPS/sonar, and custom Bimini top.',
    price: '$12,565',
    breakdown: 'Unit $12,490 + Doc Fee $75',
    img: '/assets/real-boat-410-challenger.jpg',
    tag: 'JUST TRADED'
  },
  {
    name: '2020 Polycraft 480 Brumby Bowrider',
    brand: 'Polycraft',
    specs: "15'8\" • Yamaha 70HP 4-Stroke • 140 Engine Hours",
    desc: 'Ski tow pole, stainless boarding ladder, Garmin 7" touchscreen, forward bow cushions, aluminum trailer. Turn-key family ski and fishing boat.',
    price: '$16,275',
    breakdown: 'Unit $16,200 + Doc Fee $75',
    img: '/assets/real-boat-480-brumby.jpg',
    tag: 'JUST TRADED'
  }
];

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
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', textAlign: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 900, color: 'var(--primary-blue)' }}>50-POINT</div>
            <div style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy-dark)' }}>Certified Marine Inspection</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Every hull, compression test, steering cable, and trailer is water tested.</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 900, color: 'var(--navy-dark)' }}>30-DAY</div>
            <div style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy-dark)' }}>Dealer Powertrain Guarantee</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Complete peace of mind on all certified pre-owned outboard motors.</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 900, color: 'var(--primary-blue)' }}>TRADE-IN</div>
            <div style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', color: 'var(--navy-dark)' }}>Fair Market Valuations</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Trade in your aluminum dinghy, RIB, or fiberglass skiff against any new or used boat.</p>
          </div>
        </div>
      </section>

      {/* Pre-Owned Listings */}
      <section style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--navy-dark)' }}>AVAILABLE PRE-OWNED BOATS</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>All units are available for immediate sea-trial at Alpine Marina, Alpine, NJ.</p>
          </div>

          <div className="boats-grid">
            {preOwnedListings.map((boat, idx) => (
              <div key={idx} className="boat-card">
                <div className="card-img-wrap">
                  <span className="card-badge" style={{ background: 'var(--navy-dark)' }}>{boat.tag}</span>
                  <img src={boat.img} alt={boat.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--sky-blue)', textTransform: 'uppercase', marginBottom: '4px' }}>{boat.brand}</div>
                  <h4 className="boat-name">{boat.name}</h4>
                  <div className="boat-specs">{boat.specs}</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.4 }}>{boat.desc}</p>
                  <div style={{ fontSize: '11px', color: 'var(--text-specs)', marginBottom: '4px' }}>{boat.breakdown}</div>
                  <div className="boat-price">{boat.price}</div>
                  <a href="tel:2018004770" className="btn-card-view" style={{ textAlign: 'center' }}>
                    CALL / SEA-TRIAL &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}