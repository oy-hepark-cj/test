import styled from '@emotion/styled';

// npx nx g @nx/react:library libs/shared/ui 했더니 얘가 생김
const StyledHeader = styled.header`
  background-color: beige;
  text-align: center;
  padding: .75rem;
`;
export function Header() {
  return (
    <StyledHeader>
      <h1>공통 헤더 by Shared </h1>
    </StyledHeader>
  );
}

export default Header;
