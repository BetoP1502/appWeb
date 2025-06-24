import styled from "styled-components";
import { Link } from 'react-router-dom';

const itens = [
    {label: 'Home', path: '/'},
    {label: 'Golpes', path: '/golpes'},
    {label: 'Sugestões', path: '/Sugestoes'}
];

const Lista = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;  
`;
const Texto = styled.li`
  margin-right: 50px;
`;

const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

function ItensMenu() {
  return (  
        <Lista>
            {itens.map((opcao, index) => (
        <Texto key={index}>
           <LinkMenu to={opcao.path}>{opcao.label}</LinkMenu>
        </Texto>
      ))}
        </Lista>
    );
}
export default ItensMenu;  