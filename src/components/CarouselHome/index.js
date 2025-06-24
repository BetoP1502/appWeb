import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import img1 from '../../images/carousel.png'
import styled from 'styled-components';


const Titulo = styled.h2`
    text-align: center;
    color: red;
    margin-bottom: 75px;
`;

function CarouselHome () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 500, height: 500, borderRadius: 25, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <Titulo>Bem-vindo ao InfoSegura</Titulo>
      <Carousel style={{height: 400, width: 400}}>
        <Carousel.Item interval={3000}>
           <img
            className="d-block w-100  opacity-0"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>            
            <h5 style={{color: "#000"}}>Seu portal de informações sobre segurança digital.</h5>
            <h5 style={{color: "#000"}}>Explore nossos recursos e fique seguro online!</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  opacity-0"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption style={{height: 10, padding: 60}}>
            <h5 style={{color: "#000"}}>Aqui, no InfoSegura, estamos dedicados a ser o seu guia confiável contra as armadilhas dos golpistas. Navegue por nossa plataforma para:</h5>
            <p style={{color: "#000"}}><strong>Identificar os golpes mais comuns:</strong> Conheça as táticas usadas por criminosos.</p>
            <p style={{color: "#000"}}><strong>Aprender a se proteger:</strong> Descubra dicas práticas e eficazes para manter seus dados e dinheiro seguros.</p>
            <p style={{color: "#000"}}><strong>Manter-se atualizado(a):</strong> Fique por dentro das novas fraudes e tendências.</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
           <img
            className="d-block w-100  opacity-0"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Three"
          />
          <Carousel.Caption>            
          <h5 style={{color: "#000"}}>Nosso objetivo é transformar curiosidade em conhecimento e conhecimento em proteção.</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselHome;