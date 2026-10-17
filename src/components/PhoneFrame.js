export default function PhoneFrame({ src, alt, size = 'md' }) {
  return (
    <div className={`phone phone--${size}`}>
      <div className="phone__screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}
