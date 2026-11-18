'use client';

import { useState } from 'react';
import Link from 'next/link';

const inventoryData = [
  {
    id: 'pc-300-hull',
    name: '2026 Polycraft 300 Tuffy (Hull Only)',
    brand: 'polycraft',
    category: 'new',
    specs: "10'0\" • Beam: 5'0\" • 238 lbs • Up to 15 HP",
    stock: 'PC-300-01',
    status: 'NEW • IN STOCK',
    price: '$3,969',
    breakdown: 'Hull $3,695 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Grey Poly. Perfect tender with 3 storage lockers and rod holders. Unsinkable dual-wall rotationally molded polyethylene.'
  },
  {
    id: 'pc-300-elec',
    name: '2026 Polycraft 300 Tuffy Electric Package',
    brand: 'polycraft',
    category: 'new',
    specs: "10'0\" • ePropulsion Spirit 1.0 Plus (Lithium)",
    stock: 'PC-300-EL',
    status: 'NEW • IN STOCK',
    price: '$6,969',
    breakdown: 'Package $6,695 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Paired with ePropulsion Spirit 1.0 Plus electric outboard and floating battery. 100% silent, zero fumes.'
  },
  {
    id: 'pc-300-yam9',
    name: '2026 Polycraft 300 Tuffy | 9.9 HP Yamaha',
    brand: 'polycraft',
    category: 'new',
    specs: "10'0\" • Yamaha 9.9 HP 4-Stroke Tiller",
    stock: 'PC-300-Y9',
    status: 'NEW • IN STOCK',
    price: '$7,269',
    breakdown: 'Hull+Motor $6,995 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Includes 9.9HP Yamaha Tiller motor with fuel line and tank. Pre-delivery inspected and test-run.'
  },
  {
    id: 'pc-410-cc',
    name: '2025 Polycraft 410 Challenger Center Console',
    brand: 'polycraft',
    category: 'new',
    specs: "13'6\" • Beam: 6'0\" • 400 lbs • Yamaha 50 HP",
    stock: 'PC-410-CC',
    status: 'NEW • IN STOCK',
    price: '$22,969',
    breakdown: 'Hull+Motor $22,495 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg',
    desc: 'Center Console with windshield & rail. Fully rigged: steering, electrical, mechanical. 4 storage compartments.'
  },
  {
    id: 'pc-410-sc',
    name: '2025 Polycraft 410 Challenger Side Console',
    brand: 'polycraft',
    category: 'new',
    specs: "13'6\" • Beam: 6'0\" • 400 lbs • Yamaha 50 HP",
    stock: 'PC-410-SC',
    status: 'NEW • INCOMING',
    price: '$23,469',
    breakdown: 'Hull+Motor $22,995 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg',
    desc: 'Side Console layout for wide open deck space from bow to stern. Yamaha 50 HP fully rigged.'
  },
  {
    id: 'pc-480-cc',
    name: '2025 Polycraft 480 Brumby Center Console',
    brand: 'polycraft',
    category: 'new',
    specs: "15'8\" • Beam: 7'0\" • 683 lbs • Yamaha 90 HP",
    stock: 'PC-480-CC',
    status: 'NEW • IN STOCK',
    price: '$35,069',
    breakdown: 'Hull+Motor $34,495 + Freight $499 + Doc $75',
    img: '/assets/real-boat-480-brumby.jpg',
    desc: 'Offshore capability with 90 HP Yamaha 4-stroke. Power trim & tilt, digital tach, navigation lights, ladder.'
  },
  {
    id: 'st-260-hull',
    name: '2026 Steady 260 Dinghy (Hull Only)',
    brand: 'steady',
    category: 'new',
    specs: "8'4\" • Beam: 4'5\" • 132 lbs • Up to 8 HP",
    stock: 'ST-260-01',
    status: 'NEW • IN STOCK',
    price: '$3,273',
    breakdown: 'Hull $2,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Indestructible Norwegian tender. Perimeter rope railing, 2 bench seats, oar locks, easy lifting handles.'
  },
  {
    id: 'st-260-yam8',
    name: '2026 Steady 260 w/ Yamaha 8HP Package',
    brand: 'steady',
    category: 'new',
    specs: "8'4\" • Yamaha 8 HP 4-Stroke Tiller",
    stock: 'ST-260-Y8',
    status: 'NEW • IN STOCK',
    price: '$5,973',
    breakdown: 'Hull+Motor $5,699 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Complete tender package with Yamaha 8HP 4-stroke tiller outboard. Rock-solid stability on water.'
  },
  {
    id: 'st-320-hull',
    name: '2026 Steady 320 (Hull Only)',
    brand: 'steady',
    category: 'new',
    specs: "10'5\" • Beam: 5'0\" • 253 lbs • Up to 15 HP",
    stock: 'ST-320-01',
    status: 'NEW • IN STOCK',
    price: '$4,773',
    breakdown: 'Hull $4,499 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg',
    desc: 'Self-bailing cockpit, aluminum grab railings, heavy-duty bench seating. Unrivaled 10ft stability.'
  },
  {
    id: 'st-320-yam15',
    name: '2026 Steady 320 w/ 15 HP Yamaha Package',
    brand: 'steady',
    category: 'new',
    specs: "10'5\" • Yamaha 15 HP 4-Stroke Tiller",
    stock: 'ST-320-Y15',
    status: 'NEW • IN STOCK',
    price: '$8,273',
    breakdown: 'Hull+Motor $7,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg',
    desc: 'High-power yacht tender package with Yamaha 15 HP 4-stroke motor. Self bailing, aluminum safety rails.'
  },
  {
    id: 'po-300-pkg',
    name: '2023 Polycraft 300 Tuffy Package',
    brand: 'polycraft',
    category: 'pre-owned',
    specs: "10'0\" • Honda 9.9HP 4-Stroke • 24 Hours",
    stock: 'PO-300-77',
    status: 'PRE-OWNED • CERTIFIED',
    price: '$4,925',
    breakdown: 'Certified Price $4,850 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Low hour freshwater tender. Includes 9.9HP Honda, galvanized bunk trailer, sunbrella cover, Lowrance fishfinder.'
  },
  {
    id: 'po-st-260',
    name: '2022 Steady 260 Certified Yacht Tender',
    brand: 'steady',
    category: 'pre-owned',
    specs: "8'4\" • Suzuki 4HP 4-Stroke • 15 Hours",
    stock: 'PO-ST-260',
    status: 'PRE-OWNED • CERTIFIED',
    price: '$2,225',
    breakdown: 'Certified Price $2,150 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Used for single season in Long Island Sound as yacht tender. Passed 50-point inspection. Mint condition.'
  },
  {
    id: 'po-410-cc',
    name: '2021 Polycraft 410 Center Console Pre-Owned',
    brand: 'polycraft',
    category: 'pre-owned',
    specs: "13'6\" • Suzuki 50HP Lean Burn • 82 Hours",
    stock: 'PO-PC-410',
    status: 'PRE-OWNED • CERTIFIED',
    price: '$12,565',
    breakdown: 'Certified Price $12,490 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg',
    desc: 'Olive Green hull. Minn Kota Riptide 55lb trolling motor with i-Pilot, Garmin 7" Echomap, custom bimini top.'
  },
];

export default function InventoryPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = inventoryData.filter(item => {
    const matchesFilter = (
      filter === 'all' ||
      item.category === filter ||
      item.brand === filter
    );
    const q = search.toLowerCase().trim();
    const matchesSearch = (
      q === '' ||
      item.name.toLowerCase().includes(q) ||
      item.specs.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / CURRENT INVENTORY</div>
          <h1 className="page-banner-title">IN-STOCK & INCOMING INVENTORY</h1>
          <p className="page-banner-desc">Real-time dealer inventory at Alpine Marina, NJ. Filter by condition, manufacturer, or model. Transparent itemized pricing includes freight and pre-delivery inspection.</p>
        </div>
      </section>

      {/* Filter Toolbar */}
      <div className="filter-toolbar">
        <div className="container filter-bar-inner">
          <div className="filter-pills">
            {['all', 'new', 'pre-owned', 'polycraft', 'steady'].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All Inventory' : f === 'new' ? 'New Boats' : f === 'pre-owned' ? 'Pre-Owned' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div className="filter-search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search by model, specs, price..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <section style={{ padding: '50px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 800, color: 'var(--navy-dark)', textTransform: 'uppercase' }}>
              DEALER INVENTORY AT ALPINE MARINA
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-specs)', fontWeight: 600 }}>
              Showing {filtered.length} boat{filtered.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="boats-grid">
            {filtered.map((item) => (
              <div key={item.id} className="boat-card">
                <div className="card-img-wrap">
                  <span className="card-badge">{item.status}</span>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
                <div className="card-body">
                  <h4 className="boat-name">{item.name}</h4>
                  <div className="boat-specs">{item.specs}</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Stock #{item.stock} &bull; {item.desc}
                  </p>
                  <div style={{ fontSize: '11px', color: 'var(--text-specs)', marginBottom: '4px' }}>
                    {item.breakdown}
                  </div>
                  <div className="boat-price">{item.price}</div>
                  <a href="tel:2018004770" className="btn-card-view" style={{ textAlign: 'center' }}>
                    CALL OR TEXT (201) 800-4770 &rarr;
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