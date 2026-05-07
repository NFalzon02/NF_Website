/* global React, Button */

function FeatureBlock({ onBook }) {
  return (
    <section id="services" style={{ background: '#1E3A8A', color: '#fff', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <span style={{
          display: 'inline-block',
          fontFamily: 'Inter, sans-serif',
          fontSize: 12, fontWeight: 600,
          letterSpacing: 0.075 + 'em',
          textTransform: 'uppercase',
          color: '#2DD4BF',
          marginBottom: 14,
        }}>Services · Coverage tiers</span>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 600,
          letterSpacing: -0.015 + 'em',
          lineHeight: 1.05,
          margin: 0,
          maxWidth: 800,
        }}>
          Match-day, season-long, on-demand.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.78)', maxWidth: 640, marginTop: 16 }}>
          Three coverage tiers. Pick the rhythm that fits your season — single fixture, full league campaign, or sponsor-led project work.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 48 }}>
          {[
            { title: 'Match-day', sub: 'Single fixture', body: 'Pitchside coverage, 90 minutes. Same-day social edits, full gallery in 24 hours.', meta: 'From €450 / fixture' },
            { title: 'Season', sub: 'League campaign', body: 'Full home season, monthly delivery, sponsor-ready imagery, archive licensing.', meta: 'Custom · 8\u201316 fixtures' },
            { title: 'Project', sub: 'Editorial / sponsor', body: 'Tournaments, athlete features, sponsor activations. Editorial-grade photo essays.', meta: 'Scoped per brief' },
          ].map((t) => (
            <article key={t.title} style={{
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 8,
              padding: 24,
              background: 'rgba(255,255,255,0.04)',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 0.075 + 'em', textTransform: 'uppercase', color: '#2DD4BF' }}>{t.sub}</span>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 24, fontWeight: 600, margin: 0, letterSpacing: -0.015 + 'em' }}>{t.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{t.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.12)', fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{t.meta}</div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <button
            onClick={onBook}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 14,
              padding: '12px 24px',
              borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.3)',
              background: '#fff',
              color: '#0A0A0A',
              cursor: 'pointer',
            }}
          >Book a shoot</button>
        </div>
      </div>
    </section>
  );
}

window.FeatureBlock = FeatureBlock;
