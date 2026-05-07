/* global React */
const { useState: useStateP } = React;

const SPORTS = ['All', 'Football', 'Futsal', 'Motorsport', 'Waterpolo'];

const ITEMS = [
  { sport: 'Football', title: 'Equaliser, 78th minute.', meta: 'Hibernians 1–1 Floriana · Premier League', tone: 'a' },
  { sport: 'Waterpolo', title: 'Behind the lane line.', meta: 'Neptunes WPSC · third period', tone: 'b' },
  { sport: 'Motorsport', title: 'Qualifying session, gravel.', meta: 'Mdina Grand Prix · Saturday', tone: 'c' },
  { sport: 'Futsal', title: 'Two minutes, three goals.', meta: 'Luxol vs Swieqi · Enemed Futsal', tone: 'd' },
  { sport: 'Football', title: 'Cup final, extra time.', meta: 'FA Trophy · Ta\u2019 Qali', tone: 'e' },
  { sport: 'Waterpolo', title: 'National team, summer leg.', meta: 'Malta vs Greece · LEN Cup', tone: 'f' },
];

const tones = {
  a: ['#0F766E', '#0A0A0A'],
  b: ['#1E3A8A', '#134E4A'],
  c: ['#262626', '#0A0A0A'],
  d: ['#0D9488', '#1E3A8A'],
  e: ['#404040', '#171717'],
  f: ['#1D4ED8', '#0A0A0A'],
};

function PortfolioGrid() {
  const [filter, setFilter] = useStateP('All');
  const items = filter === 'All' ? ITEMS : ITEMS.filter(i => i.sport === filter);

  return (
    <section id="work" style={{ background: '#fff', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
          <div>
            <span style={eyebrow}>Selected work · 2025/26</span>
            <h2 style={h2}>Three sports.<br />Four federations.<br />One season.</h2>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {SPORTS.map((s) => {
              const active = filter === s;
              return (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    fontWeight: 500,
                    padding: '8px 14px',
                    borderRadius: 6,
                    border: '1px solid ' + (active ? '#0A0A0A' : '#D4D4D4'),
                    background: active ? '#0A0A0A' : 'transparent',
                    color: active ? '#fff' : '#171717',
                    cursor: 'pointer',
                    transition: 'all 180ms cubic-bezier(.2,0,0,1)',
                  }}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {items.map((it, i) => <PortfolioCard key={it.title + i} item={it} />)}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }) {
  const [c1, c2] = tones[item.tone];
  return (
    <article
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #E5E5E5',
        background: '#fff',
        cursor: 'pointer',
        transition: 'border-color 180ms',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#A3A3A3')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E5E5')}
    >
      <div
        style={{
          aspectRatio: '4 / 3',
          background:
            'linear-gradient(180deg, rgba(10,10,10,0) 50%, rgba(10,10,10,0.7) 100%), ' +
            `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
          position: 'relative',
        }}
      >
        <span style={{
          position: 'absolute',
          top: 14, left: 16,
          fontFamily: 'Inter, sans-serif',
          fontSize: 10, fontWeight: 600,
          letterSpacing: 0.075 + 'em',
          textTransform: 'uppercase',
          color: '#2DD4BF',
        }}>{item.sport}</span>
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 18, fontWeight: 600,
          letterSpacing: -0.015 + 'em',
          lineHeight: 1.2,
          margin: 0,
          color: '#0A0A0A',
        }}>{item.title}</h3>
        <p style={{ margin: '6px 0 0', fontSize: 13, color: '#737373' }}>{item.meta}</p>
      </div>
    </article>
  );
}

const eyebrow = {
  display: 'inline-block',
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0.075 + 'em',
  textTransform: 'uppercase',
  color: '#0F766E',
  marginBottom: 14,
};
const h2 = {
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: 'clamp(32px, 4vw, 48px)',
  fontWeight: 600,
  letterSpacing: -0.015 + 'em',
  lineHeight: 1.05,
  margin: 0,
  color: '#0A0A0A',
};

window.PortfolioGrid = PortfolioGrid;
