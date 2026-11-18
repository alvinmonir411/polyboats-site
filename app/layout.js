import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'POLYBOATS | The Source for Polyethylene Boats - Official Dealer',
  description: 'Official dealer of Polycraft and Steady polyethylene boats. Located inside Alpine Marina, 1 Alpine Approach Rd, Alpine, NJ 07620. Call or Text: (201) 800-4770.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,700;0,800;0,900;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Top Header */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand-logo">
              <div className="logo-main"><span className="poly">POLY</span><span className="boats">BOATS</span></div>
              <div className="logo-sub">THE SOURCE FOR POLYETHYLENE BOATS</div>
            </Link>

            <nav>
              <ul className="nav-links">
                <li><Link href="/new-boats" className="nav-link">NEW BOATS <span style={{fontSize: '9px'}}>▼</span></Link></li>
                <li><Link href="/inventory" className="nav-link">INVENTORY</Link></li>
                <li><Link href="/pre-owned" className="nav-link">PRE-OWNED</Link></li>
                <li><Link href="/outboards" className="nav-link">OUTBOARDS</Link></li>
                <li><Link href="/service" className="nav-link">SERVICE</Link></li>
                <li><Link href="/parts" className="nav-link">PARTS</Link></li>
                <li><Link href="/#about" className="nav-link">ABOUT</Link></li>
              </ul>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link href="/service#contact" className="btn-contact">CONTACT US</Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Site Footer with Real Old Site Data */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="brand-logo" style={{ marginBottom: '16px' }}>
                  <div className="logo-main" style={{ color: '#FFFFFF' }}><span style={{ color: '#FFFFFF' }}>POLY</span><span style={{ color: 'var(--sky-blue)' }}>BOATS</span></div>
                  <div className="logo-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>THE SOURCE FOR POLYETHYLENE BOATS</div>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '320px' }}>
                  PolyBoats is the #1 source for polyethylene boats in the country. Official authorized dealer for Polycraft and Steady boats, plus ePropulsion and Yamaha outboards.
                </p>
                <div style={{ marginTop: '14px', fontSize: '12px', color: 'var(--sky-blue)', fontWeight: 700 }}>
                  <a href="https://www.instagram.com/polyboats" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    Follow on Instagram @polyboats &rarr;
                  </a>
                </div>
              </div>

              <div className="footer-col">
                <h4>EXPLORE</h4>
                <ul>
                  <li><Link href="/new-boats">New Boats Lineup</Link></li>
                  <li><Link href="/inventory">Current Inventory</Link></li>
                  <li><Link href="/pre-owned">Pre-Owned Boats</Link></li>
                  <li><Link href="/outboards">Outboard Motors</Link></li>
                  <li><Link href="/service">Service &amp; Rigging</Link></li>
                  <li><Link href="/parts">Parts &amp; Accessories</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>BRANDS</h4>
                <ul>
                  <li><Link href="/new-boats?brand=polycraft">Polycraft Boats (Australia)</Link></li>
                  <li><Link href="/new-boats?brand=steady">Steady Boats (Norway)</Link></li>
                  <li><Link href="/outboards?brand=epropulsion">ePropulsion Electric</Link></li>
                  <li><Link href="/outboards?brand=yamaha">Yamaha Marine</Link></li>
                  <li><Link href="/outboards?brand=suzuki">Suzuki Outboards</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>DEALERSHIP LOCATION</h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '10px' }}>
                  <strong>Located Inside Alpine Marina</strong><br />
                  1 Alpine Approach Rd<br />
                  Alpine, NJ 07620<br />
                  <strong>Call or Text:</strong> (201) 800-4770 <span style={{ fontSize: '11px', color: 'var(--sky-blue)' }}>(TEXT ONLY)</span>
                </p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, marginBottom: '10px' }}>
                  <strong>Showroom Hours:</strong><br />
                  Monday &ndash; Sunday: 9:00 AM &ndash; 5:00 PM<br />
                  <em>(By Appointment Only)</em>
                </p>
                <p style={{ fontSize: '12px', color: 'var(--sky-blue)', fontWeight: 600 }}>
                  Shipping coordinated throughout USA, Canada, Mexico &amp; Caribbean Islands.
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <div>&copy; 2026 Poly Boats LLC. All rights reserved. Powered by Next.js &amp; Wix Studio CMS Architecture.</div>
              <div>Official Importer &bull; Polycraft &bull; Steady &bull; ePropulsion</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
