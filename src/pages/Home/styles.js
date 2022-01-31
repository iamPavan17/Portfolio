import styled, { css } from "styled-components";

const Section = styled.section`
  background: linear-gradient(90deg, #ece4db 100%, #fff 5%);
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35fr 65fr;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 6.2rem 4.4rem;
`;

const UserImg = styled.img`
  display: inline-block;
  width: 350px;
  height: 520px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  filter: brightness(110%);
`;

const Content = styled.div`
  p {
    &:first-child {
      margin-bottom: 3rem;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 2.4rem;
`;

const IconImg = styled.img`
  transform: translateY(0px);
  transition: all 0.3s;
`;

const onHoverStyle = css`
  &:hover {
    opacity: 0.7;
  }
  &:hover img {
    transform: translateY(-3px);
  }
`;

export {
  Section,
  Container,
  Content,
  UserImg,
  IconsWrapper,
  IconImg,
  onHoverStyle,
};