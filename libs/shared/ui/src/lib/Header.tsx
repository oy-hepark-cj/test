import styled from '@emotion/styled';

// npx nx g @nx/react:library libs/shared/ui 했더니 얘가 생김
const StyledHeader = styled.header`
  color: gray;
  border: 1px solid gray;
  text-align: center;
  padding: .5rem;
`;
export function Header() {
  return (
    <StyledHeader>
      <h1>공통 헤더 영역 </h1>
    </StyledHeader>
  );
}

export default Header;
