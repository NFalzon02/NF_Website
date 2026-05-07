/* global React, Button */

function Hero({ onBook, onView }) {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '92vh',
        marginTop: -64, // pull under the transparent header
        paddingTop: 64,
        background: '#0A0A0A',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* photographic placeholder */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.85) 100%), ' +
            'radial-gradient(120% 80% at 70% 30%, #134E4A 0%, #0A0A0A 60%), ' +
            'linear-gradient(135deg, #1E3A8A 0%, #0A0A0A 60%)',
        }}
      />
      {/* corner brackets — the brand motif */}
      <BracketCorners />

      <div
        style={{
          position: 'relative',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 32px 96px',
          width: '100%',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.075 + 'em',
            textTransform: 'uppercase',
            color: '#2DD4BF',
            marginBottom: 24,
          }}
        >
          Sports photojournalism · Malta
        </span>
        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(44px, 7vw, 88px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -0.025 + 'em',
            margin: 0,
            maxWidth: 1100,
            color: '#fff',
          }}
        >
          Pitchside,<br />poolside, trackside.
        </h1>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 18,
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 560,
            marginTop: 24,
          }}
        >
          Match-day coverage of football, futsal, motorsport, and waterpolo for clubs, federations, and athletes — published-quality imagery, filed on a journalist's deadline.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <Button size="lg" variant="primaryOnDark" onClick={onBook}>Book a shoot</Button>
          <Button size="lg" variant="secondaryOnDark" onClick={onView}>See sample gallery</Button>
        </div>
      </div>
    </section>
  );
}

function BracketCorners() {
  const stroke = { stroke: 'rgba(255,255,255,0.55)', strokeWidth: 2, fill: 'none' };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 96, left: 32, right: 32, bottom: 32,
        width: 'calc(100% - 64px)',
        height: 'calc(100% - 128px)',
        pointerEvents: 'none',
      }}
    >
      {/* TL */}<path {...stroke} d="M0 6 V0 H6" />
      {/* TR */}<path {...stroke} d="M94 0 H100 V6" />
      {/* BL */}<path {...stroke} d="M0 94 V100 H6" />
      {/* BR */}<path {...stroke} d="M94 100 H100 V94" />
    </svg>
  );
}

window.Hero = Hero;
window.BracketCorners = BracketCorners;
