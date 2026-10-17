import { PLAY_STORE_URL } from '../data.js';
import { PlayIcon } from './Icons.js';

export default function PlayStoreButton({ variant = 'dark', className = '' }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`play-btn play-btn--${variant} rh-btn ${className}`}
      aria-label="Get it on Google Play (opens in a new tab)"
    >
      <PlayIcon size={26} />
      <span className="play-btn__text">
        <span className="play-btn__small">GET IT ON</span>
        <span className="play-btn__big">Google Play</span>
      </span>
    </a>
  );
}
