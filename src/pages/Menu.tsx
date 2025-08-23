import Content from '../components/Content';
type Props = { isMuted: boolean };
function Menu({ isMuted }: Props) {
  return (
    <Content
      isMuted={isMuted}
      storyText="Welcome to Station Omega user < M.Chen >."
      choices={[
        { id: 1, choice: 'START' },
        { id: 2, choice: 'ABOUT' },
        { id: 3, choice: 'OPTIONS' },
      ]}
    />
  );
}

export default Menu;
