const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

export function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2.2" {...base}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="3" {...base}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function PulseIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}

export function BookIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" />
      <path d="M12 9v6" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function PinIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function HealthBookIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <path d="M5 3h11a3 3 0 0 1 3 3v15H8a3 3 0 0 1-3-3z" />
      <path d="M8.5 12h2l1.5-3 2 6 1.5-3h1" />
    </svg>
  );
}

export function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2.2" {...base}>
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

// Simple multi-colour "play" triangle used on the Google Play button.
export function PlayIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.2 2.4 13.6 12l-9.4 9.6c-.4-.2-.7-.7-.7-1.3V3.7c0-.6.3-1.1.7-1.3z" fill="#2FB4F2" />
      <path d="m16.7 8.9-3.1 3.1-9.4-9.6c.3-.1.7-.1 1.1.1z" fill="#34C759" />
      <path d="m16.7 15.1-11.4 6.4c-.4.2-.8.2-1.1.1l9.4-9.6z" fill="#FF3B4E" />
      <path d="m20.6 10.7-3.9-1.8-3.1 3.1 3.1 3.1 3.9-1.8c1-.6 1-2 0-2.6z" fill="#FFC531" />
    </svg>
  );
}

export const pillarIcons = {
  pulse: PulseIcon,
  book: BookIcon,
  pin: PinIcon,
};
