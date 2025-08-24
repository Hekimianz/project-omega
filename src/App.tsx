import { useState, useEffect, useRef } from 'react';
import mutedImg from './assets/muted.png';
import volumeOnImg from './assets/volumeOn.png';
import ambientSound from './assets/ambient.wav';
import Header from './components/Header';
import Menu from './pages/Menu';

type User = {
  firstName: string;
  lastName: string;
  fullName: string;
};

function App() {
  const [muted, setMuted] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    fullName: '',
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.8;
    }

    if (!muted) {
      audioRef.current?.play().catch(console.error);
    } else {
      audioRef.current?.pause();
    }
  }, [muted]);

  return (
    <section className="crt-screen">
      <audio ref={audioRef} src={ambientSound} />
      <img
        id="sound"
        src={muted ? mutedImg : volumeOnImg}
        alt="Mute/Unmute sound"
        onClick={() => setMuted(!muted)}
      />
      <div className="terminal">
        <Header />
        <Menu setUser={setUser} user={user} />
      </div>
    </section>
  );
}

export default App;
