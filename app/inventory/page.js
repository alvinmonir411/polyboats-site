'use client';

import { useState } from 'react';
import Link from 'next/link';

const inventoryData = [
  // ===================== NEW BOATS: POLYCRAFT =====================
  {
    id: 'pc-300-hull',
    name: '2026 Polycraft 300 Tuffy (Hull Only)',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "10'0\" • Width: 5'0\" • 238 lbs • Up to 15 HP",
    stock: 'PC-300-01',
    status: 'IN STOCK',
    price: '$3,969',
    breakdown: 'Hull $3,695 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Length: 10\', Width: 5\', Fishing Rod Holders, 3 Storage Compartments, Weight: 238 lbs. Available in 9 Colors.'
  },
  {
    id: 'pc-300-elec',
    name: '2026 Polycraft 300 Tuffy Electric',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "10'0\" • ePropulsion Spirit 1.0 Plus (Lithium)",
    stock: 'PC-300-EL',
    status: 'IN STOCK',
    price: '$6,969',
    breakdown: 'Hull $6,695 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Hull Only + ePropulsion 1.0 Spirit. Fishing Rod Holders, 3 Storage Compartments. 100% silent tender.'
  },
  {
    id: 'pc-300-yam9',
    name: '2026 Polycraft 300 Tuffy | 9.9 HP Yamaha',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "10'0\" • Yamaha 9.9 HP Tiller Outboard",
    stock: 'PC-300-Y9',
    status: 'IN STOCK',
    price: '$7,269',
    breakdown: 'Boat $6,995 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Hull + Motor. Fishing Rod Holders, 3 Storage Compartments, Yamaha 9.9 HP Tiller Outboard. Available in 9 Colors.'
  },
  {
    id: 'pc-300-yam15',
    name: '2026 Polycraft 300 Tuffy | 15 HP Yamaha',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "10'0\" • Yamaha 15 HP Tiller Outboard",
    stock: 'PC-300-Y15',
    status: 'IN STOCK',
    price: '$7,469',
    breakdown: 'Boat $7,295 + Freight $199 + Doc $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Hull + Motor. Fishing Rod Holders, 3 Storage Compartments, Yamaha 15 HP Tiller Outboard. High speed tender.'
  },
  {
    id: 'pc-410-cc',
    name: '2025 Polycraft 410 Challenger Center Console | 50 HP',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "13'6\" • Width: 6'0\" • 400 lbs • Yamaha 50 HP",
    stock: 'PC-410-CC',
    status: 'IN STOCK',
    price: '$22,969',
    breakdown: 'Boat $22,495 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg',
    desc: 'Hull + Motor + Center Console. Fishing Rod Holders, 4 Storage Compartments. Fully Rigged (Steering, Electrical & Mechanical).'
  },
  {
    id: 'pc-410-sc',
    name: '2025 Polycraft 410 Challenger Side Console | 50 HP',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "13'6\" • Width: 6'0\" • 400 lbs • Yamaha 50 HP",
    stock: 'PC-410-SC',
    status: 'IN STOCK',
    price: '$23,469',
    breakdown: 'Boat $22,995 + Freight $399 + Doc $75',
    img: '/assets/real-boat-410-challenger.jpg',
    desc: 'Hull + Motor + Side Console. Fishing Rod Holders, 4 Storage Compartments. Fully Rigged (Steering, Electrical & Mechanical).'
  },
  {
    id: 'pc-480-cc',
    name: '2025 Polycraft 480 Brumby Center Console | 90 HP',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "15'8\" • Width: 7'0\" • 683 lbs • Yamaha 90 HP",
    stock: 'PC-480-CC',
    status: 'IN STOCK',
    price: '$35,069',
    breakdown: 'Boat $34,495 + Freight $499 + Doc $75',
    img: '/assets/real-boat-480-brumby.jpg',
    desc: 'Hull + Motor + Center Console. Power Trim & Tilt, Digital Tachometer, Navigation Lights, Boarding Ladder.'
  },
  {
    id: 'pc-480-sc',
    name: '2025 Polycraft 480 Brumby Side Console | 90 HP',
    brand: 'polycraft',
    category: 'new-boats',
    condition: 'New',
    specs: "15'8\" • Width: 7'0\" • 683 lbs • Yamaha 90 HP",
    stock: 'PC-480-SC',
    status: 'IN STOCK',
    price: '$36,069',
    breakdown: 'Boat $35,495 + Freight $499 + Doc $75',
    img: '/assets/real-boat-480-brumby.jpg',
    desc: 'Hull + Motor + Side Console. Power Trim & Tilt, Digital Tachometer, Navigation Lights, Boarding Ladder.'
  },

  // ===================== NEW BOATS: STEADY =====================
  {
    id: 'st-260-hull',
    name: '2026 Steady 260 (Hull Only)',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "8'4\" • Width: 4'5\" • 132 lbs • Max 3 Persons",
    stock: 'ST-260-01',
    status: 'IN STOCK',
    price: '$3,273',
    breakdown: 'Hull $2,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Rope Railing, 2 Bench Seats, Hull Weight: 132 lbs. Available in 4 Colors. Virtually indestructible and unsinkable.'
  },
  {
    id: 'st-260-yam8',
    name: '2026 Steady 260 w/ Yamaha 8HP',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "8'4\" • Width: 4'5\" • Yamaha 8 HP Tiller",
    stock: 'ST-260-Y8',
    status: 'IN STOCK',
    price: '$5,973',
    breakdown: 'Hull $5,699 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Hull + 8 HP Tiller Outboard. Rope Railings, 2 Bench Seats, Hull Weight: 132 lbs. Available in 4 Colors.'
  },
  {
    id: 'st-320-hull',
    name: '2026 Steady 320 (Hull Only)',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "10'5\" • Width: 5'0\" • 253 lbs • Self Bailing",
    stock: 'ST-320-01',
    status: 'IN STOCK',
    price: '$4,773',
    breakdown: 'Hull $4,499 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg',
    desc: 'Self Bailing, Aluminum Railings, Bench Seats. Weight: 253 lbs. Available in 4 Colors. Strongest 10\' tender.'
  },
  {
    id: 'st-320-yam15',
    name: '2026 Steady 320 w/ 15 HP Yamaha Motor',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "10'5\" • Width: 5'0\" • Yamaha 15 HP Tiller",
    stock: 'ST-320-Y15',
    status: 'IN STOCK',
    price: '$8,273',
    breakdown: 'Hull $7,999 + Freight $199 + Doc $75',
    img: '/assets/real-boat-steady-320.jpg',
    desc: 'Hull + 15 HP Tiller Outboard. Self Bailing, Aluminum Railings, Bench Seats, Weight: 253 lbs. Available in 4 Colors.'
  },
  {
    id: 'st-400-cs',
    name: 'Steady 400 Utility Workboat',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "13'2\" • Width: 5'11\" • 440 lbs • Up to 40 HP",
    stock: 'ST-400-CS',
    status: 'COMING SOON',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/brand-steady.png',
    desc: 'CE Category C commercial utility workboat. Self-draining cockpit, heavy duty rubbing strake.'
  },
  {
    id: 'st-go-cs',
    name: 'Steady GO Compact Tender',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "9'6\" • Width: 4'8\" • 175 lbs • Up to 10 HP",
    stock: 'ST-GO-CS',
    status: 'COMING SOON',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Modern ergonomic sporty tender. Easy car-topper or davit lift for yachts. Double hull flotation.'
  },
  {
    id: 'st-11-cs',
    name: 'Steady 11 Easy / 14 Active Sport',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "14'1\" • Width: 5'8\" • 375 lbs • Up to 30 HP",
    stock: 'ST-14-CS',
    status: 'COMING SOON',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/real-boat-steady-320.jpg',
    desc: 'Sport console family boat with cushioned bench seating, stainless bow rails, and ski tow hook.'
  },
  {
    id: 'st-multi-cs',
    name: 'Steady 14 Fisher / 16 Explorer / 17 Multi',
    brand: 'steady',
    category: 'new-boats',
    condition: 'New',
    specs: "17'0\" • Width: 7'0\" • 770 lbs • Up to 80 HP",
    stock: 'ST-17-CS',
    status: 'COMING SOON',
    price: 'Call for Pricing',
    breakdown: 'ALL MODELS PRICING & SPECS COMING SOON',
    img: '/assets/brand-steady.png',
    desc: 'Flagship multi-purpose rescue and workboat with drop-down bow ramp for wheelchairs, divers, and gear.'
  },

  // ===================== PRE-OWNED BOATS =====================
  {
    id: 'po-300-pkg',
    name: '2023 Polycraft 300 Tuffy Certified Package',
    brand: 'polycraft',
    category: 'pre-owned',
    condition: 'Pre-Owned',
    specs: "10'0\" • Honda 9.9HP 4-Stroke • 24 Engine Hours",
    stock: 'PO-300-77',
    status: 'CERTIFIED PRE-OWNED',
    price: '$4,925',
    breakdown: 'Unit $4,850 + Doc Fee $75',
    img: '/assets/real-boat-300-tuffy.jpg',
    desc: 'Certified pre-owned. Includes Honda 9.9HP 4-stroke outboard, galvanized bunk trailer, sunbrella cover, Lowrance sonar.'
  },
  {
    id: 'po-st-260',
    name: '2022 Steady 260 Certified Yacht Tender',
    brand: 'steady',
    category: 'pre-owned',
    condition: 'Pre-Owned',
    specs: "8'4\" • Suzuki 4HP 4-Stroke • 15 Engine Hours",
    stock: 'PO-ST-260',
    status: 'CERTIFIED PRE-OWNED',
    price: '$2,225',
    breakdown: 'Unit $2,150 + Doc Fee $75',
    img: '/assets/real-boat-steady-260.jpg',
    desc: 'Arctic white hull with fresh safety rope perimeter. Used for a single summer season in Long Island Sound. 50-point inspection passed.'
  },
  {
    id: 'po-410-cc',
    name: '2021 Polycraft 410 Center Console Pre-Owned',
    brand: 'polycraft',
    category: 'pre-owned',
    condition: 'Pre-Owned',
    specs: "13'6\" • Suzuki 50HP Lean Burn • 82 Engine Hours",
    stock: 'PO-PC-410',
    status: 'CERTIFIED PRE-OWNED',
    price: '$12,565',
    breakdown: 'Unit $12,490 + Doc Fee $75',
    img: '/assets/real-boat-410-challenger.jpg',
    desc: 'Olive Green hull. Minn Kota Riptide Terrova 55lb trolling motor with i-Pilot, Garmin 7" Echomap GPS/sonar, custom Bimini top.'
  },
  {
    id: 'po-480-brumby',
    name: '2020 Polycraft 480 Brumby Bowrider Pre-Owned',
    brand: 'polycraft',
    category: 'pre-owned',
    condition: 'Pre-Owned',
    specs: "15'8\" • Yamaha 70HP 4-Stroke • 140 Engine Hours",
    stock: 'PO-PC-480',
    status: 'CERTIFIED PRE-OWNED',
    price: '$16,275',
    breakdown: 'Unit $16,200 + Doc Fee $75',
    img: '/assets/real-boat-480-brumby.jpg',
    desc: 'Ski tow pole, stainless boarding ladder, Garmin 7" touchscreen, forward bow cushions, aluminum trailer. Turn-key condition.'
  }
];

export default function InventoryPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = inventoryData.filter(item => {
    const matchesFilter = (
      filter === 'all' ||
      (filter === 'new-boats' && item.condition === 'New') ||
      (filter === 'pre-owned' && item.condition === 'Pre-Owned') ||
      (filter === 'polycraft' && item.brand === 'polycraft') ||
      (filter === 'steady' && item.brand === 'steady')
    );
    const q = search.toLowerCase().trim();
    const matchesSearch = (
      q === '' ||
      item.name.toLowerCase().includes(q) ||
      item.specs.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.status.toLowerCase().includes(q)
    );
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">HOME</Link> / CURRENT INVENTORY</div>
          <h1 className="page-banner-title">CURRENT INVENTORY</h1>
          <p className="page-banner-desc">Filter dealer inventory by New Boats, Pre-Owned, Polycraft, or Steady. Located inside Alpine Marina, NJ. Transparent itemized pricing includes freight and pre-delivery inspection.</p>
        </div>
      </section>

      {/* 4 Core Category Filter Toolbar */}
      <div className="filter-toolbar">
        <div className="container filter-bar-inner">
          <div className="filter-pills">
            {[
              { id: 'all', label: 'All Inventory' },
              { id: 'new-boats', label: 'New Boats' },
              { id: 'pre-owned', label: 'Pre-Owned' },
              { id: 'polycraft', label: 'Polycraft' },
              { id: 'steady', label: 'Steady' }
            ].map((f) => (
              <button
                key={f.id}
                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="filter-search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search inventory..."
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
              {filter === 'all' && 'ALL INVENTORY'}
              {filter === 'new-boats' && 'NEW BOATS INVENTORY'}
              {filter === 'pre-owned' && 'CERTIFIED PRE-OWNED BOATS'}
              {filter === 'polycraft' && 'POLYCRAFT BOATS'}
              {filter === 'steady' && 'STEADY BOATS'}
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-specs)', fontWeight: 600 }}>
              Showing {filtered.length} boat{filtered.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="boats-grid">
            {filtered.map((item) => (
              <div key={item.id} className="boat-card">
                <div className="card-img-wrap">
                  <span
                    className="card-badge"
                    style={{
                      background: item.condition === 'Pre-Owned' ? 'var(--navy-dark)' : item.status === 'COMING SOON' ? 'var(--navy-dark)' : 'var(--primary-blue)'
                    }}
                  >
                    {item.status}
                  </span>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--sky-blue)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.brand}
                  </div>
                  <h4 className="boat-name">{item.name}</h4>
                  <div className="boat-specs">{item.specs}</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.4 }}>
                    Stock #{item.stock} &bull; {item.desc}
                  </p>
                  <div style={{ fontSize: '11px', color: 'var(--text-specs)', marginBottom: '4px' }}>
                    {item.breakdown}
                  </div>
                  <div className="boat-price">{item.price}</div>
                  <a href="tel:2018004770" className="btn-card-view" style={{ textAlign: 'center' }}>
                    TEXT TO ORDER: (201) 800-4770 &rarr;
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