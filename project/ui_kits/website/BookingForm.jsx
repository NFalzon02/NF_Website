/* global React, Button */
const { useState: useStateB } = React;

function BookingForm() {
  const [submitted, setSubmitted] = useStateB(false);
  const [form, setForm] = useStateB({ club: '', sport: 'Football', date: '', email: '', notes: '' });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" style={{ background: '#fff', padding: '96px 32px', borderTop: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <span style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 0.075 + 'em', textTransform: 'uppercase', color: '#0F766E', marginBottom: 14 }}>Book · Match-day</span>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(28px, 3.6vw, 44px)',
          fontWeight: 600,
          letterSpacing: -0.015 + 'em',
          lineHeight: 1.05,
          margin: 0,
          color: '#0A0A0A',
        }}>Tell me about the fixture.</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: '#525252', marginTop: 12, maxWidth: 60 + 'ch' }}>
          Reply within one working day. Match-day slots confirm 48 hours before kick-off.
        </p>

        {submitted ? (
          <div style={{ marginTop: 40, padding: 24, border: '1px solid #BBF7D0', background: '#F0FDF4', borderRadius: 8 }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 600, color: '#15803D' }}>Booking received.</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#404040', marginTop: 6, marginBottom: 0 }}>You'll get a reply within one working day at <strong>{form.email || 'your email'}</strong>.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Club / federation"><input value={form.club} onChange={(e) => set('club', e.target.value)} placeholder="Floriana FC" required /></Field>
            <Field label="Sport">
              <select value={form.sport} onChange={(e) => set('sport', e.target.value)}>
                <option>Football</option><option>Futsal</option><option>Motorsport</option><option>Waterpolo</option><option>Other</option>
              </select>
            </Field>
            <Field label="Match date &amp; kick-off"><input value={form.date} onChange={(e) => set('date', e.target.value)} placeholder="Sat · 14 Mar · 19:00" required /></Field>
            <Field label="Email"><input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@club.mt" required /></Field>
            <div style={{ gridColumn: '1 / -1' }}>
              <Field label="Notes (optional)">
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => set('notes', e.target.value)}
                  placeholder="Cup fixture, sponsor deliverables, archive licensing, etc."
                  style={{ resize: 'vertical' }}
                />
              </Field>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
              <Button type="submit" variant="primary" size="md">Send booking request</Button>
              <Button type="button" variant="ghost" size="md" onClick={() => setForm({ club: '', sport: 'Football', date: '', email: '', notes: '' })}>Reset</Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#525252', letterSpacing: 0.02 + 'em' }}>{label}</span>
      {React.cloneElement(children, {
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: 14,
          padding: '10px 12px',
          borderRadius: 6,
          border: '1px solid #D4D4D4',
          background: '#fff',
          color: '#171717',
          width: '100%',
          ...(children.props.style || {}),
        }
      })}
    </label>
  );
}

window.BookingForm = BookingForm;
