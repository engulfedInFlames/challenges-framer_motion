import styled from "styled-components";

const Wrapper = styled.div`
  height: 180px;
  display: grid;
  place-content: center center;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: bold;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Hello Framer Motion!</Title>
    </Wrapper>
  );
}

export default Header;
