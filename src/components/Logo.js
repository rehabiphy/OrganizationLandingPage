// "R" monogram with the gold dot. `light` = white tile with navy letter.
export function LogoMark({ size = 40, light = false }) {
  return (
    <span
      className={`logo-mark ${light ? 'logo-mark--light' : ''}`}
      style={{ width: size, height: size, fontSize: size / 2 }}
      aria-hidden="true"
    >
      R<span className="logo-mark__dot" />
    </span>
  );
}

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Rehabiphy Health Technologies — home">
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">Rehabiphy</span>
        <span className="logo__sub">Health Technologies</span>
      </span>
    </a>
  );
}
