import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { core } from '@tundra/core';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  core();
  return (
    <StyledApp>
      <NxWelcome title="chrome-extension" />
    </StyledApp>
  );
}

export default App;
