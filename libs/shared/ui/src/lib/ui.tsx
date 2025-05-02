import styled from '@emotion/styled';

// npx nx g @nx/react:library libs/shared/ui 했더니 얘가 생김
const StyledUi = styled.div`
  color: blue;
  border: 1px solid black;
`;
export function Ui() {
  return (
    <StyledUi>
      <h1>Shared UI 영역</h1>
    </StyledUi>
  );
}

export default Ui;
