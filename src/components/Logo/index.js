import logo from "../../images/alert-logo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25%;
    height: auto;
    margin-right: 0.5rem;
  }
`;
const LogoText = styled.p`
  font-size: 0.75rem;
  color: #de1d1d;
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="imagem da Logo" />
      <LogoText>InfoSegura</LogoText>
    </LogoContainer>
  );
}
export default Logo;