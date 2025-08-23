import { useRef } from 'react';
import keyDownSound from '../assets/keyDown.wav';

type Choice = {
  id: number;
  choice: string;
};

type Props = {
  isMuted: boolean;
  storyText: string;
  choices: Choice[];
};

export default function Content({ isMuted, storyText, choices }: Props) {
  const sfxRef = useRef<HTMLAudioElement>(null);

  const handleClick = (id: number) => {
    if (isMuted) return;
    const el = sfxRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.volume = 0.8;
    el.play().catch(() => {});
    alert('choice clicked: ' + id);
  };
  return (
    <div className="content">
      <audio ref={sfxRef} src={keyDownSound} preload="auto" />
      <div className="story-text">
        {storyText}
        <span className="cursor"></span>
      </div>
      <div className="choices">
        {choices.map((c) => (
          <button
            key={c.id}
            onClick={() => handleClick(c.id)}
            className="choice"
          >
            [{c.id}] {c.choice}
          </button>
        ))}
      </div>
    </div>
  );
}
