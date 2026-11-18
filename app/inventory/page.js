'use client';

import { useState } from 'react';
import Link from 'next/link';

const inventoryData = [
  { id: '1', name: '2026 Polycraft 300 Tuffy', brand: 'polycraft', category: 'new', specs: "10'0\" • 238 lbs • Up to 15 HP", stock: 'PC-300-01', status: 'NEW • IN STOCK', price: '$3,969', img: '/assets/boat-300-tuffy.png', desc: 'Grey Poly. Includes front and rear casting decks. Unsinkable dual hull.' },
  { id: '2', name: '2026 Polycraft 410 Challenger', brand: 'polycraft', category: 'new', specs: "13'6\" • 400 lbs • 30–60 HP", stock: 'PC-410-04', status: 'NEW • IN STOCK', price: '$14,369', img: '/assets/boat-410-challenger.png', desc: 'Center Console. Pre-rigged for Suzuki 50HP with hydraulic steering.' },
  { id: '3', name: '2026 Polycraft 480 Brumby', brand: 'polycraft', category: 'new', specs: "15'9\" • 683 lbs • 40–70 HP", stock: 'PC-480-02', status: 'NEW • INCOMING', price: '$18,419', img: '/assets/boat-480-brumby.png', desc: 'Side Console. High Bow Rails. 70HP Honda Pre-rig package.' },
  { id: '4', name: 'Steady 320', brand: 'steady', category: 'new', specs: "10'6\" • 198 lbs • Up to 15 HP", stock: 'ST-320-09', status: 'NEW • IN STOCK', price: '$3,730', img: '/assets/boat-steady-320.png', desc: 'Arctic White. Oar locks & Safety rope perimeter. Yacht tender favorite.' },
  { id: '5', name: '2023 Polycraft 300 Tuffy Package', brand: 'polycraft', category: 'pre-owned', specs: "10'0\" • 24 Engine Hours • Trailer", stock: 'PO-300-77', status: 'PRE-OWNED • CERTIFIED', price: '$4,850', img: '/assets/boat-300-tuffy.png', desc: 'Includes 9.9HP Honda 4-stroke, galvanized bunk trailer, sunbrella cover.' },
  { id: '6', name: '2022 Steady 260 Dinghy Tender', brand: 'steady', category: 'pre-owned', specs: "8'6\" • 132 lbs • 4HP Suzuki", stock: 'PO-ST-260', status: 'PRE-OWNED • CERTIFIED', price: '$2,150', img: '/assets/boat-steady-320.png', desc: 'Used for one summer as freshwater lake yacht tender. Excellent condition.' },
  { id: '7', name: '2026 Polycraft 599 Frontier Offshore', brand: 'polycraft', category: 'new', specs: "19'8\" • 1,950 lbs • 150HP Rigged", stock: 'PC-599-01', status: 'NEW • IN STOCK', price: '$41,500', img: '/assets/hero-boat.png', desc: 'Garmin 9" GPS/Sounder, T-Top, Dual Axle Aluminum Trailer included.' },
  { id: '8', name: '2026 Steady 400 Commercial Utility', brand: 'steady', category: 'new', specs: "13'2\" • 440 lbs • 30HP Ready", stock: 'ST-400-03', status: 'NEW • INCOMING', price: '$5,450', img: '/assets/brand-steady.png', desc: 'Reinforced bow eye, heavy duty rubbing strake. Unsinkable commercial grade.' },
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
          <p className="page-banner-desc">Real-time dealer inventory at Alpine Marina. Filter by condition, manufacturer, or budget. All boats include full manufacturer hull warranty and custom rigging options.</p>
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
          <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 800, color: 'var(--navy-dark)', textTransform: 'uppercase' }}>
              LIVE INVENTORY REPOSITORY
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
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="card-body">
                  <h4 className="boat-name">{item.name}</h4>
                  <div className="boat-specs">{item.specs}</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    Stock #{item.stock} &bull; {item.desc}
                  </p>
                  <div className="boat-price">{item.price}</div>
                  <Link href="/service#contact" className="btn-card-view">
                    INQUIRE / RESERVE &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
