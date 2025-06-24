
import Background from '../../components/Background';
import Botao from '../../components/Botao';
import Formulario from '../../components/Formulario';
import styled from 'styled-components';

const SugestoesContainer = styled.div`
  hight: 100vh;
  display: flex;
  background-color: #fff;
  margin: 0 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
`;

function Sugestoes() {
  return (
    <>
      <Background/>
      <SugestoesContainer>        
        <Formulario/>
        <Botao />
      </SugestoesContainer>
    </>
  );
}

export default Sugestoes;