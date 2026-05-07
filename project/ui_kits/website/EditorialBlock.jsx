/* global React, Button */

function EditorialBlock() {
  return (
    <section id="about" style={{ background: '#fff', padding: '96px 32px', borderTop: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
        <div>
          <span style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: 12, fontWeight: 600,
            letterSpacing: 0.075 + 'em',
            textTransform: 'uppercase',
            color: '#0F766E',
            marginBottom: 14,
          }}>About · Editorial</span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            fontWeight: 600,
            letterSpacing: -0.015 + 'em',
            lineHeight: 1.05,
            margin: 0,
            color: '#1E3A8A',
          }}>
            Sport,<br />captured properly.
          </h2>
        </div>
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 18,
            lineHeight: 1.6,
            color: '#404040',
            margin: 0,
            maxWidth: '60ch',
          }}>
            NF Photography is the working sports photojournalism practice of <span style={{ color: '#1E3A8A', fontWeight: 600 }}>Nicholas Falzon</span> — covering Maltese football, futsal, motorsport, and waterpolo with the discipline of newsroom photography.
            Same-day social-ready edits. Full galleries within 48 hours. The athlete is the hero; the photographer files on deadline.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 40 }}>
            {[
              ['01', 'Craft', 'Newspaper-grade quality on every shoot.'],
              ['02', 'Speed', 'Same-day edits. 48-hour gallery turnaround.'],
              ['03', 'Range', 'Football, futsal, motorsport, waterpolo.'],
              ['04', 'Trust', 'Reliable delivery, clean licensing, professional conduct.'],
            ].map(([n, name, body]) => (
              <div key={n}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, fontWeight: 600, color: '#0F766E', letterSpacing: 0.05 + 'em' }}>{n}</div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 600, color: '#0A0A0A', marginTop: 4 }}>{name}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#737373', lineHeight: 1.5, marginTop: 6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.EditorialBlock = EditorialBlock;
