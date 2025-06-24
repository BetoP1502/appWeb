import fundo from '../../images/fundo.png';
import styled from 'styled-components';

const FundoImg = styled.img`
    position: fixed;
    height: 100%;
    display: flex;   
    opacity: 0.1; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`;

function Background() {
  return (
    <FundoImg src={fundo} alt="Fundo da página"/>
  );
}   
export default Background;