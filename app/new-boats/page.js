import Link from 'next/link';

export const metadata = {
  title: 'New Boats Lineup | Polycraft & Steady - Polyboats',
  description: 'Factory-new polyethylene boats from Polycraft (Australia) and Steady (Norway). Real inventory & transparent pricing at Alpine Marina, NJ.',
};

const newBoats = [
  // 1-8: Polycraft Lineup
  {
    name: '2026 Polycraft 300 Tuffy (Hull Only)',
    brand: 'Polycraft',
    specs: "10'0\" • Beam: 5'0\" • 238 lbs • Up to 15 HP",
    desc: 'Unsinkable tender or backcountry creek explorer. Includes rod holders and 3 storage compartments. Available in 9 colors.',
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
    name: '2026 Polycraft 300 Tuffy | 9.9 HP Yamaha',
    brand: 'Polycraft',
    specs: "10'0\" • Beam: 5'0\" • Yamaha 9.9 HP Tiller",
    desc: 'Complete tender package with Yamaha 9.9 HP 4-stroke tiller outboard and fuel tank. Fast, reliable tender.',
    price: '$7,269',
    breakdown: 'Boat $6,995 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg'
  },
  {
    name: '2026 Polycraft 300 Tuffy | 15 HP Yamaha',
    brand: 'Polycraft',
    specs: "10'0\" • Beam: 5'0\" • Yamaha 15 HP Tiller",
    desc: 'Maximum rated horsepower package with Yamaha 15 HP 4-stroke outboard. High speed planing & heavy payload power.',
    price: '$7,469',
    breakdown: 'Boat $7,295 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg'
  },
  {
    name: '2025 Polycraft 410 Challenger Center Console | 50 HP',
    brand: 'Polycraft',
    specs: "13'6\" • Beam: 6'0\" • 400 lbs • Yamaha 50 HP Outboard",
    desc: 'Center Console with windshield & grab rail. 4 storage compartments, rod holders. Fully rigged (steering, electrical & mechanical).',
    price: '$22,969',
    breakdown: 'Boat $22,495 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg'
  },
  {
    name: '2025 Polycraft 410 Challenger Side Console | 50 HP',
    brand: 'Polycraft',
    specs: "13'6\" • Beam: 6'0\" • 400 lbs • Yamaha 50 HP Outboard",
    desc: 'Side Console layout for wide open unobstructed deck casting from bow to stern. Fully rigged with Yamaha 50 HP.',
    price: '$23,469',
    breakdown: 'Boat $22,995 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg'
  },
  {
    name: '2025 Polycraft 480 Brumby Center Console | 90 HP',
    brand: 'Polycraft',
    specs: "15'8\" • Beam: 7'0\" • 683 lbs • Yamaha 90 HP Outboard",
    desc: 'Center Console family & offshore fishing rig. Fully rigged with Yamaha 90 HP, power trim & tilt, digital tachometer, boarding ladder.',
    price: '$35,069',
    breakdown: 'Boat $34,495 + Freight $499 + Doc $75',
    img: '/assets/real-boat-480-brumby.jpg'
  },
  {
    name: '2025 Polycraft 480 Brumby Side Console | 90 HP',
    brand: 'Polycraft',
    specs: "15'8\" • Beam: 7'0\" • 683 lbs • Yamaha 90 HP Outboard",
    desc: 'Side Console layout with wide casting deck, power trim & tilt, digital tachometer, navigation lights, stainless boarding ladder.',
    price: '$36,069',
    breakdown: 'Boat $35,495 + Freight $499 + Doc $75',
    img: '/assets/real-boat-480-brumby.jpg'
  },

  // 9-16: Steady Lineup
  {
    name: '2026 Steady 260 (Hull Only)',
    brand: 'Steady',
    specs: "8'4\" • Beam: 4'5\" • 132 lbs • Up to 8 HP",
    desc: 'Virtually indestructible and unsinkable Norwegian dinghy. Rope railing, 2 bench seats, beachable on rocks and ramps.',
    price: '$3,273',
    breakdown: 'Hull $2,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg'
  },
  {
    name: '2026 Steady 260 w/ Yamaha 8HP',
    brand: 'Steady',
    specs: "8'4\" • Beam: 4'5\" • 132 lbs • Yamaha 8 HP Tiller",
    desc: 'Complete tender package with Yamaha 8 HP 4-stroke outboard. Maximum stability, safe boarding, non-marking polyethylene.',
    price: '$5,973',
    breakdown: 'Hull $5,699 + Freight $199 + Doc $75',
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
    name: '2026 Steady 320 w/ 15 HP Yamaha Motor',
    brand: 'Steady',
    specs: "10'5\" • Beam: 5'0\" • 253 lbs • Yamaha 15 HP Tiller",
    desc: 'High speed tender package with Yamaha 15 HP 4-stroke tiller motor. Self bailing, aluminum railings, seats 4 persons.',
    price: '$8,273',
    breakdown: 'Hull $7,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg'
  },
  {
    name: 'Steady 400 Utility Workboat',
    brand: 'Steady',
    specs: "13'2\" • Beam: 5'11\" • 440 lbs • Up to 40 HP",
    desc: 'Heavy duty commercial workboat certified CE Category C. Self-draining cockpit and massive payload capacity.',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/brand-steady.png'
  },
  {
    name: 'Steady GO Compact Tender',
    brand: 'Steady',
    specs: "9'6\" • Beam: 4'8\" • 175 lbs • Up to 10 HP",
    desc: 'Modern ergonomic sporty tender. Easy car-topper or davit lift for yachts. Virtually indestructible hull.',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/real-boat-steady-260.jpg'
  },
  {
    name: 'Steady 11 Easy / 14 Active Sport',
    brand: 'Steady',
    specs: "14'1\" • Beam: 5'8\" • 375 lbs • Up to 30 HP",
    desc: 'Sport console family boat with cushioned bench seating, stainless bow rails, and water sports towing hook.',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/real-boat-steady-320.jpg'
  },
  {
    name: 'Steady 14 Fisher / 16 Explorer / 17 Multi',
    brand: 'Steady',
    specs: "17'0\" • Beam: 7'0\" • 770 lbs • Up to 80 HP",
    desc: 'Multi-purpose rescue and workboat with optional drop-down bow ramp for wheelchairs, divers, and equipment.',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/brand-steady.png'
  },
];

export default function NewBoatsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / NEW BOATS</div>
          <h1 className="page-banner-title">NEW POLYETHYLENE BOATS</h1>
          <p className="page-banner-desc">Explore the official 16-product lineup from Polycraft (Australia) and Steady (Norway). Dual-wall rotationally molded polyethylene for zero corrosion, unsinkable flotation, and zero gelcoat maintenance. Clear transparent pricing &mdash; pickup inside Alpine Marina, NJ.</p>
        </div>
      </section>

      <section style={{ padding: '50px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', textTransform: 'uppercase', color: 'var(--navy-dark)' }}>2025&ndash;2026 FACTORY LINEUP ({newBoats.length} MODELS)</h2>
            <span style={{ fontSize: '13px', color: 'var(--text-specs)', fontWeight: 600 }}>Showing all {newBoats.length} factory models</span>
          </div>

          <div className="boats-grid">
            {newBoats.map((boat, idx) => (
              <div key={idx} className="boat-card">
                <div className="card-img-wrap">
                  <span className="card-badge">{boat.price === 'Call for Pricing' ? 'COMING SOON' : 'IN STOCK'}</span>
                  <img src={boat.img} alt={boat.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--sky-blue)', textTransform: 'uppercase', marginBottom: '4px' }}>{boat.brand}</div>
                  <h4 className="boat-name">{boat.name}</h4>
                  <div className="boat-specs">{boat.specs}</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px', lineHeight: 1.4 }}>{boat.desc}</p>
                  <div style={{ fontSize: '11px', color: 'var(--text-specs)', marginBottom: '4px' }}>{boat.breakdown}</div>
                  <div className="boat-price">{boat.price}</div>
                  <a href="tel:2018004770" className="btn-card-view" style={{ textAlign: 'center' }}>
                    TEXT TO ORDER &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Table */}
      <section style={{ padding: '60px 0', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-h3)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '12px', color: 'var(--navy-dark)' }}>CLEAR PRICING &amp; SPECS QUICK REFERENCE</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Brand</th>
                  <th>Length</th>
                  <th>Width</th>
                  <th>Weight</th>
                  <th>Horsepower</th>
                  <th>Base Price</th>
                  <th>Freight</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>300 Tuffy (Hull Only)</strong></td><td>Polycraft</td><td>10&apos;0&quot;</td><td>5&apos;0&quot;</td><td>238 lbs</td><td>15 HP</td><td>$3,695</td><td>$199</td><td><strong>$3,969</strong></td></tr>
                <tr><td><strong>300 Tuffy Electric</strong></td><td>Polycraft</td><td>10&apos;0&quot;</td><td>5&apos;0&quot;</td><td>238 lbs</td><td>Spirit 1.0</td><td>$6,695</td><td>$199</td><td><strong>$6,969</strong></td></tr>
                <tr><td><strong>300 Tuffy 9.9 HP</strong></td><td>Polycraft</td><td>10&apos;0&quot;</td><td>5&apos;0&quot;</td><td>238 lbs</td><td>9.9 HP</td><td>$6,995</td><td>$199</td><td><strong>$7,269</strong></td></tr>
                <tr><td><strong>300 Tuffy 15 HP</strong></td><td>Polycraft</td><td>10&apos;0&quot;</td><td>5&apos;0&quot;</td><td>238 lbs</td><td>15 HP</td><td>$7,295</td><td>$199</td><td><strong>$7,469</strong></td></tr>
                <tr><td><strong>410 Challenger CC</strong></td><td>Polycraft</td><td>13&apos;6&quot;</td><td>6&apos;0&quot;</td><td>400 lbs</td><td>50 HP</td><td>$22,495</td><td>$399</td><td><strong>$22,969</strong></td></tr>
                <tr><td><strong>410 Challenger SC</strong></td><td>Polycraft</td><td>13&apos;6&quot;</td><td>6&apos;0&quot;</td><td>400 lbs</td><td>50 HP</td><td>$22,995</td><td>$399</td><td><strong>$23,469</strong></td></tr>
                <tr><td><strong>480 Brumby CC</strong></td><td>Polycraft</td><td>15&apos;8&quot;</td><td>7&apos;0&quot;</td><td>683 lbs</td><td>90 HP</td><td>$34,495</td><td>$499</td><td><strong>$35,069</strong></td></tr>
                <tr><td><strong>480 Brumby SC</strong></td><td>Polycraft</td><td>15&apos;8&quot;</td><td>7&apos;0&quot;</td><td>683 lbs</td><td>90 HP</td><td>$35,495</td><td>$499</td><td><strong>$36,069</strong></td></tr>
                <tr><td><strong>Steady 260 (Hull Only)</strong></td><td>Steady</td><td>8&apos;4&quot;</td><td>4&apos;5&quot;</td><td>132 lbs</td><td>8 HP</td><td>$2,999</td><td>$199</td><td><strong>$3,273</strong></td></tr>
                <tr><td><strong>Steady 260 w/ 8HP Yamaha</strong></td><td>Steady</td><td>8&apos;4&quot;</td><td>4&apos;5&quot;</td><td>132 lbs</td><td>8 HP</td><td>$5,699</td><td>$199</td><td><strong>$5,973</strong></td></tr>
                <tr><td><strong>Steady 320 (Hull Only)</strong></td><td>Steady</td><td>10&apos;5&quot;</td><td>5&apos;0&quot;</td><td>253 lbs</td><td>15 HP</td><td>$4,499</td><td>$199</td><td><strong>$4,773</strong></td></tr>
                <tr><td><strong>Steady 320 w/ 15HP Yamaha</strong></td><td>Steady</td><td>10&apos;5&quot;</td><td>5&apos;0&quot;</td><td>253 lbs</td><td>15 HP</td><td>$7,999</td><td>$199</td><td><strong>$8,273</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}