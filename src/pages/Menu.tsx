import { useState } from 'react';
import keyDownSound from '../assets/keyDown.wav';

type User = {
  firstName: string;
  lastName: string;
  fullName: string;
};

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
};
function Menu({ setUser }: Props) {
  const raw = localStorage.getItem('user');
  const savedUser: User | null = raw ? JSON.parse(raw) : null;

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  if (savedUser) return null;

  const handleClick = () => {
    if (!name || !lastName) return;

    // play sound first, independent of DOM
    const clickSound = new Audio(keyDownSound);
    clickSound.volume = 0.8;
    void clickSound.play();

    const nextUser: User = {
      firstName: name,
      lastName,
      fullName: `${name} ${lastName}`.trim(),
    };
    setUser(nextUser);
    localStorage.setItem('user', JSON.stringify(nextUser));
  };

  return (
    <div className="content">
      <div className="form-cont">
        <div className="form">
          <label htmlFor="nameInput">FIRST NAME:</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value.toUpperCase());
            }}
            type="text"
            className="name-input input"
            id="nameInput"
          />
        </div>
        <div className="form">
          <label htmlFor="nameInput">LAST NAME:</label>
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value.toUpperCase());
            }}
            type="text"
            className="name-input input"
            id="nameInput"
          />
        </div>
        <button onClick={handleClick} className="enter-btn">
          ENTER
        </button>
      </div>
    </div>
  );
}

export default Menu;
