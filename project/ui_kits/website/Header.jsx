/* global React, Button */
const { useState: useStateH, useEffect: useEffectH } = React;

function Header({ active, onNavigate, onBook }) {
  const [scrolled, setScrolled] = useStateH(false);
  useEffectH(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'press', label: 'Press' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        transition: 'background-color 180ms, border-color 180ms',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '14px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); onNavigate('top'); }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: scrolled ? '#0A0A0A' : '#fff' }}
        >
          <img
            src="../../assets/nf-logo-icon.svg"
            alt=""
            style={{ width: 32, height: 32, filter: scrolled ? 'invert(0)' : 'invert(1)' }}
          />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14, letterSpacing: 0.075 + 'em', textTransform: 'uppercase' }}>
            NF Photography
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: scrolled ? (active === l.id ? '#0A0A0A' : '#525252') : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                letterSpacing: 0.01 + 'em',
                borderBottom: active === l.id ? '1px solid currentColor' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'color 180ms',
              }}
            >
              {l.label}
            </a>
          ))}
          <Button variant={scrolled ? 'primary' : 'secondaryOnDark'} size="sm" onClick={onBook}>
            Book a shoot
          </Button>
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
