import Link from 'next/link';

export const metadata = {
  title: 'New Boats Lineup | Polycraft & Steady - Polyboats',
  description: 'Factory-new polyethylene boats from Polycraft (Australia) and Steady (Norway).',
};

const newBoats = [
  { name: '2026 Polycraft 300 Tuffy', brand: 'Polycraft', specs: "10'0\" • Beam: 5'1\" • 238 lbs • Up to 15 HP", desc: 'Unsinkable tender, car-topper, or backcountry creek explorer. Dual hull polyethylene with front casting deck.', price: '$3,969', img: '/assets/boat-300-tuffy.png' },
  { name: '2026 Polycraft 410 Challenger', brand: 'Polycraft', specs: "13'6\" • Beam: 6'1\" • 400 lbs • 30–60 HP", desc: 'Available in Open, Side Console, or Center Console layout. High-riding reverse chine design for soft dry ride.', price: '$14,369', img: '/assets/boat-410-challenger.png' },
  { name: '2026 Polycraft 480 Brumby', brand: 'Polycraft', specs: "15'9\" • Beam: 7'0\" • 683 lbs • 40–70 HP", desc: 'Offshore coastal capability with dual console or center console. Deep V entry with non-skid polyethylene floor.', price: '$18,419', img: '/assets/boat-480-brumby.png' },
  { name: 'Steady 320', brand: 'Steady', specs: "10'6\" • Beam: 4'9\" • 198 lbs • Up to 15 HP", desc: 'Norwegian engineering. Unrivaled stability, grab-line safety handles, and lightweight handling for yacht tendering.', price: '$3,730', img: '/assets/boat-steady-320.png' },
  { name: 'Steady 260 Dinghy', brand: 'Steady', specs: "8'6\" • Beam: 4'6\" • 132 lbs • Up to 6 HP", desc: 'The most stable small tender on the market. Non-puncturing, beachable on rocks and concrete ramp-safe.', price: '$2,490', img: '/assets/boat-steady-320.png' },
  { name: 'Steady 400 Utility', brand: 'Steady', specs: "13'2\" • Beam: 5'11\" • 440 lbs • 25–40 HP", desc: 'Heavy-duty workboat certified for CE Category C. Self-draining cockpit and massive payload capacity.', price: '$5,450', img: '/assets/brand-steady.png' },
  { name: '2026 Polycraft 599 Frontier', brand: 'Polycraft', specs: "19'8\" • Beam: 8'2\" • 1,950 lbs • 115–175 HP", desc: 'The flagship Polycraft blue-water offshore machine. Massive 200L underfloor fuel cell and twin live bait tanks.', price: '$29,800', img: '/assets/hero-boat.png' },
  { name: 'Steady 14 Active Sport', brand: 'Steady', specs: "14'1\" • Beam: 5'8\" • 375 lbs • 15–30 HP", desc: 'Sporty console layout with cushioned bench seating, stainless bow rails, and water sports towing hook.', price: '$8,900', img: '/assets/brand-steady.png' },
];

export default function NewBoatsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / NEW BOATS</div>
          <h1 className="page-banner-title">NEW POLYETHYLENE BOATS</h1>
          <p className="page-banner-desc">Explore the latest brand lineup from Polycraft (Australia) and Steady (Norway). Dual-wall rotationally molded polyethylene for zero corrosion, unsinkable flotation, and zero gelcoat maintenance.</p>
        </div>
      </section>

      <section style={{ padding: '50px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', textTransform: 'uppercase' }}>2026 FACTORY NEW LINEUP</h2>
            <span style={{ fontSize: '13px', color: 'var(--text-specs)', fontWeight: 600 }}>Showing 8 models</span>
          </div>

          <div className="boats-grid">
            {newBoats.map((boat, idx) => (
              <div key={idx} className="boat-card">
                <div className="card-img-wrap">
                  <span className="card-badge">NEW</span>
                  <img src={boat.img} alt={boat.name} />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--sky-blue)', textTransform: 'uppercase', marginBottom: '4px' }}>{boat.brand}</div>
                  <h4 className="boat-name">{boat.name}</h4>
                  <div className="boat-specs">{boat.specs}</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.4 }}>{boat.desc}</p>
                  <div className="boat-price">{boat.price}</div>
                  <Link href="/inventory" className="btn-card-view">VIEW FULL SPECS &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Table */}
      <section style={{ padding: '60px 0', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '12px' }}>LINEUP SPECIFICATIONS QUICK REFERENCE</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Brand</th>
                  <th>Length</th>
                  <th>Beam</th>
                  <th>Hull Weight</th>
                  <th>Max HP</th>
                  <th>Capacity</th>
                  <th>Base Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>300 Tuffy</strong></td><td>Polycraft</td><td>3.00 m / 10&apos;0&quot;</td><td>1.55 m / 5&apos;1&quot;</td><td>108 kg / 238 lbs</td><td>15 HP</td><td>3 Persons</td><td><strong>$3,969</strong></td></tr>
                <tr><td><strong>Steady 320</strong></td><td>Steady</td><td>3.20 m / 10&apos;6&quot;</td><td>1.45 m / 4&apos;9&quot;</td><td>90 kg / 198 lbs</td><td>15 HP</td><td>4 Persons</td><td><strong>$3,730</strong></td></tr>
                <tr><td><strong>410 Challenger</strong></td><td>Polycraft</td><td>4.10 m / 13&apos;6&quot;</td><td>1.85 m / 6&apos;1&quot;</td><td>181 kg / 400 lbs</td><td>60 HP</td><td>4 Persons</td><td><strong>$14,369</strong></td></tr>
                <tr><td><strong>Steady 400</strong></td><td>Steady</td><td>4.00 m / 13&apos;2&quot;</td><td>1.80 m / 5&apos;11&quot;</td><td>200 kg / 440 lbs</td><td>40 HP</td><td>5 Persons</td><td><strong>$5,450</strong></td></tr>
                <tr><td><strong>480 Brumby</strong></td><td>Polycraft</td><td>4.80 m / 15&apos;9&quot;</td><td>2.15 m / 7&apos;0&quot;</td><td>310 kg / 683 lbs</td><td>70 HP</td><td>5 Persons</td><td><strong>$18,419</strong></td></tr>
                <tr><td><strong>599 Frontier</strong></td><td>Polycraft</td><td>5.99 m / 19&apos;8&quot;</td><td>2.50 m / 8&apos;2&quot;</td><td>885 kg / 1,950 lbs</td><td>175 HP</td><td>7 Persons</td><td><strong>$29,800</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
