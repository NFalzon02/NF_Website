/* global React */

function PressStrip() {
  const features = [
    { pub: 'Times of Malta', label: 'Press archive · 2024–26' },
    { pub: 'MFA', label: 'Match programme contributor' },
    { pub: 'Aquatic Sports Association', label: 'Season feature · LEN Cup' },
    { pub: 'Mdina Grand Prix', label: 'Official photographer · 2025' },
  ];
  return (
    <section id="press" style={{ background: '#0A0A0A', color: '#fff', padding: '64px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 0.075 + 'em', textTransform: 'uppercase', color: '#2DD4BF' }}>Press &amp; clients</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 24, borderTop: '1px solid #262626' }}>
          {features.map((f, i) => (
            <div key={f.pub} style={{
              padding: '24px 24px 24px 0',
              borderRight: i < features.length - 1 ? '1px solid #262626' : 'none',
              paddingLeft: i === 0 ? 0 : 24,
            }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 600, color: '#fff' }}>{f.pub}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#A3A3A3', marginTop: 6 }}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PressStrip = PressStrip;
