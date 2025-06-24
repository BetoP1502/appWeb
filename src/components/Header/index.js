import ItensMenu from '../ItensMenu';
import Logo from '../Logo';
import styled from 'styled-components';

 const HeaderContainer = styled.header`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    padding: 1rem;
    z-index: 1; 
  `;
  const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    max-width: 1200px;
    
  `; 

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menu>
        <ItensMenu></ItensMenu>
      </Menu>
    </HeaderContainer>
  );
}
export default Header;