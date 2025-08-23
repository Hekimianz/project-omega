import { useRef } from 'react';
import keyDownSound from '../assets/keyDown.wav';

type Props = { isMuted: boolean };
function Menu({ isMuted }: Props) {
  const sfxRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (isMuted) return;
    const el = sfxRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.volume = 0.8;
    el.play().catch(() => {});
  };
  return (
    <div className="content">
      <audio ref={sfxRef} src={keyDownSound} preload="auto" />
      <div className="story-text">
        {'Welcome to Station Omega user < M.Chen >'}.
        <span className="cursor"></span>
      </div>
      <div className="choices">
        <button onClick={handleClick} className="choice">
          [1] START
        </button>
      </div>
    </div>
  );
}

export default Menu;
