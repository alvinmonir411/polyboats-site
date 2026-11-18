import Link from 'next/link';

export const metadata = {
  title: 'New Boats Lineup | Polycraft & Steady - Polyboats',
  description: 'Factory-new polyethylene boats from Polycraft (Australia) and Steady (Norway). Real inventory & transparent pricing at Alpine Marina, NJ.',
};

const newBoats = [
  {
    name: '2026 Polycraft 300 Tuffy (Hull Only)',
    brand: 'Polycraft',
    specs: "10'0\" • Beam: 5'0\" • 238 lbs • Up to 15 HP",
    desc: 'Unsinkable dual-wall tender or creek explorer. Includes rod holders and 3 storage compartments. 9 colors available.',
    price: '$3,969',
    breakdown: 'Hull $3,695 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg'
  },
  {
    name: '2026 Polycraft 300 Tuffy Electric Package',
    brand: 'Polycraft',
    specs: "10'0\" • Beam: 5'0\" • ePropulsion Spirit 1.0 Plus",
    desc: 'Hull + ePropulsion 1.0 Spirit Plus electric motor & integrated floating lithium battery. 100% silent, zero emissions.',
    price: '$6,969',
    breakdown: 'Package $6,695 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg'
  },
  {
    name: '2025 Polycraft 410 Challenger Center Console',
    brand: 'Polycraft',
    specs: "13'6\" • Beam: 6'0\" • 400 lbs • 50 HP Yamaha Rigged",
    desc: 'Center Console with windshield & grab rail. Fully rigged: steering, electrical, mechanical. 4 storage compartments.',
    price: '$22,969',
    breakdown: 'Hull+Motor $22,495 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg'
  },
  {
    name: '2025 Polycraft 410 Challenger Side Console',
    brand: 'Polycraft',
    specs: "13'6\" • Beam: 6'0\" • 400 lbs • 50 HP Yamaha Rigged",
    desc: 'Side Console layout for wide open unobstructed deck casting from bow to stern. Fully rigged with Yamaha 50 HP.',
    price: '$23,469',
    breakdown: 'Hull+Motor $22,995 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg'
  },
  {
    name: '2025 Polycraft 480 Brumby Center Console',
    brand: 'Polycraft',
    specs: "15'8\" • Beam: 7'0\" • 683 lbs • 90 HP Yamaha Rigged",
    desc: 'The ultimate coastal family & fishing rig. Power trim & tilt, digital tachometer, navigation lights, stainless boarding ladder.',
    price: '$35,069',
    breakdown: 'Hull+Motor $34,495 + Freight $499 + Doc $75',
    img: '/assets/real-boat-480-brumby.jpg'
  },
  {
    name: '2026 Steady 260 Dinghy (Hull Only)',
    brand: 'Steady',
    specs: "8'4\" • Beam: 4'5\" • 132 lbs • Up to 8 HP",
    desc: 'Norwegian engineered dinghy. Virtually indestructible and unsinkable. Rope railings, 2 bench seats, beachable anywhere.',
    price: '$3,273',
    breakdown: 'Hull $2,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg'
  },
  {
    name: '2026 Steady 260 w/ Yamaha 8HP Package',
    brand: 'Steady',
    specs: "8'4\" • Beam: 4'5\" • 132 lbs • Yamaha 8 HP Tiller",
    desc: 'Complete tender package with Yamaha 8HP 4-stroke outboard. Maximum stability, safe boarding, non-marking polyethylene.',
    price: '$5,973',
    breakdown: 'Hull+Motor $5,699 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg'
  },
  {
    name: '2026 Steady 320 (Hull Only)',
    brand: 'Steady',
    specs: "10'5\" • Beam: 5'0\" • 253 lbs • Up to 15 HP",
    desc: 'The strongest 10-foot tender on the market. Self-bailing cockpit, aluminum grab railings, heavy-duty bench seating.',
    price: '$4,773',
    breakdown: 'Hull $4,499 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg'
  },
  {
    name: '2026 Steady 320 w/ 15 HP Yamaha Package',
    brand: 'Steady',
    specs: "10'5\" • Beam: 5'0\" • 253 lbs • Yamaha 15 HP Tiller",
    desc: 'High speed tender package with Yamaha 15 HP 4-stroke tiller motor. Self bailing, aluminum railings, seats 4 persons.',
    price: '$8,273',
    breakdown: 'Hull+Motor $7,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg'
  },
];

export default function NewBoatsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / NEW BOATS</div>
          <h1 className="page-banner-title">NEW POLYETHYLENE BOATS</h1>
          <p className="page-banner-desc">Explore the official brand lineup from Polycraft (Australia) and Steady (Norway). Dual-wall rotationally molded polyethylene for zero corrosion, unsinkable flotation, and zero gelcoat maintenance. Clear transparent pricing &mdash; pickup inside Alpine Marina, NJ.</p>
        </div>
      </section>

      <section style={{ padding: '50px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', textTransform: 'uppercase', color: 'var(--navy-dark)' }}>2025&ndash;2026 FACTORY NEW LINEUP</h2>
            <span style={{ fontSize: '13px', color: 'var(--text-specs)', fontWeight: 600 }}>Showing {newBoats.length} factory models</span>
          </div>

          <div className="boats-grid">
            {newBoats.map((boat, idx) => (
              <div key={idx} className="boat-card">
                <div className="card-img-wrap">
                  <span className="card-badge">NEW IN STOCK</span>
                  <img src={boat.img} alt={boat.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--sky-blue)', textTransform: 'uppercase', marginBottom: '4px' }}>{boat.brand}</div>
                  <h4 className="boat-name">{boat.name}</h4>
                  <div className="boat-specs">{boat.specs}</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px', lineHeight: 1.4 }}>{boat.desc}</p>
                  <div style={{ fontSize: '11px', color: 'var(--text-specs)', marginBottom: '4px' }}>{boat.breakdown}</div>
                  <div className="boat-price">{boat.price}</div>
                  <Link href="/inventory" className="btn-card-view">VIEW INVENTORY / ORDER &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Table */}
      <section style={{ padding: '60px 0', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '12px', color: 'var(--navy-dark)' }}>LINEUP SPECIFICATIONS QUICK REFERENCE</h2>
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
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>300 Tuffy (Hull)</strong></td><td>Polycraft</td><td>10&apos;0&quot;</td><td>5&apos;0&quot;</td><td>238 lbs</td><td>15 HP</td><td>3 Persons</td><td><strong>$3,969</strong></td></tr>
                <tr><td><strong>300 Tuffy Electric</strong></td><td>Polycraft</td><td>10&apos;0&quot;</td><td>5&apos;0&quot;</td><td>238 lbs</td><td>3 HP Equiv.</td><td>3 Persons</td><td><strong>$6,969</strong></td></tr>
                <tr><td><strong>Steady 260 Dinghy</strong></td><td>Steady</td><td>8&apos;4&quot;</td><td>4&apos;5&quot;</td><td>132 lbs</td><td>8 HP</td><td>3 Persons</td><td><strong>$3,273</strong></td></tr>
                <tr><td><strong>Steady 320 Tender</strong></td><td>Steady</td><td>10&apos;5&quot;</td><td>5&apos;0&quot;</td><td>253 lbs</td><td>15 HP</td><td>4 Persons</td><td><strong>$4,773</strong></td></tr>
                <tr><td><strong>410 Challenger CC</strong></td><td>Polycraft</td><td>13&apos;6&quot;</td><td>6&apos;0&quot;</td><td>400 lbs</td><td>50 HP</td><td>4 Persons</td><td><strong>$22,969</strong></td></tr>
                <tr><td><strong>480 Brumby CC</strong></td><td>Polycraft</td><td>15&apos;8&quot;</td><td>7&apos;0&quot;</td><td>683 lbs</td><td>90 HP</td><td>5 Persons</td><td><strong>$35,069</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}