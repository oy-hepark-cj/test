import styled from '@emotion/styled';

// npx nx g @nx/react:library libs/shared/ui 했더니 얘가 생김
const StyledUi = styled.div`
  color: pink;
`;
export function Ui() {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>
    </StyledUi>
  );
}

export default Ui;
