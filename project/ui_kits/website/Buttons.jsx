/* global React */
const { useState: useStateBtn } = React;

const baseBtn = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
  borderRadius: 6,
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'background-color 180ms cubic-bezier(.2,0,0,1), border-color 180ms',
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
};
const sizeMap = {
  sm: { padding: '6px 14px', fontSize: 12 },
  md: { padding: '10px 20px', fontSize: 14 },
  lg: { padding: '14px 28px', fontSize: 16 },
};

function Button({ variant = 'primary', size = 'md', children, onClick, type = 'button', disabled, block }) {
  const [hover, setHover] = useStateBtn(false);
  const variants = {
    primary: {
      base: { background: '#0A0A0A', color: '#fff' },
      hover: { background: '#262626' },
    },
    secondary: {
      base: { background: 'transparent', color: '#0A0A0A', borderColor: '#D4D4D4' },
      hover: { background: '#F5F5F5' },
    },
    ghost: {
      base: { background: 'transparent', color: '#404040' },
      hover: { background: '#FAFAFA', color: '#171717' },
    },
    secondaryOnDark: {
      base: { background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.45)' },
      hover: { background: 'rgba(255,255,255,0.08)' },
    },
    primaryOnDark: {
      base: { background: '#fff', color: '#0A0A0A' },
      hover: { background: '#E5E5E5' },
    },
  };
  const v = variants[variant];
  const style = {
    ...baseBtn,
    ...sizeMap[size],
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...(disabled ? { opacity: 0.4, cursor: 'not-allowed' } : null),
    ...(block ? { width: '100%', justifyContent: 'center' } : null),
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}

window.Button = Button;
