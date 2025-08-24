type User = {
  firstName: string;
  lastName: string;
  fullName: string;
};
export default function Header() {
  const raw = localStorage.getItem('user');
  const savedUser: User | null = raw ? JSON.parse(raw) : null;
  const formattedName = savedUser
    ? `${savedUser.fullName.split(' ')[0][0]}.${
        savedUser.fullName.split(' ')[1]
      }`
    : 'N/A';
  return (
    <div className="terminal-header">
      <div className="system-name">Project Omega | Terminal Access</div>
      <div className="system-status">
        SYSTEM ONLINE | USER: {formattedName} | ACCESS LEVEL:{' '}
        {savedUser ? 'MAINTENANCE' : 'NONE'}
      </div>
    </div>
  );
}
