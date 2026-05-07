/* global React */

function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: '#fff', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="../../assets/nf-logo-icon.svg" style={{ width: 36, height: 36, filter: 'invert(1)' }} alt="" />
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: 0.075 + 'em', textTransform: 'uppercase' }}>NF Photography</span>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55, marginTop: 16, maxWidth: 38 + 'ch' }}>
            Sports photojournalism by Nicholas Falzon. Malta + occasional regional travel.
          </p>
        </div>
        <FooterCol title="Work" links={['Football', 'Futsal', 'Motorsport', 'Waterpolo']} />
        <FooterCol title="Practice" links={['About', 'Press archive', 'Licensing', 'Contact']} />
        <FooterCol title="Elsewhere" links={['Instagram · @nfalzon_photos', 'nfalzon.com', 'Email']} />
      </div>
      <div style={{ maxWidth: 1280, margin: '64px auto 0', paddingTop: 24, borderTop: '1px solid #262626', display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
        <span>© NF Photography {new Date().getFullYear()}. All rights reserved.</span>
        <span>Pitchside, poolside, trackside.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 0.075 + 'em', textTransform: 'uppercase', color: '#A3A3A3' }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map((l) => (
          <li key={l}><a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

window.Footer = Footer;
