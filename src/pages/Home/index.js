import styled from "styled-components";
import Background from "../../components/Background";
import Sugestoes from "../Sugestoes";
import CarouselHome from "../../components/CarouselHome";

const ConteudoConteinner = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1em;
    flex-direction: column;
    align-items: center;
`;

function ConteudoHome() {
    return (
        <ConteudoConteinner>
            <Background/>
            <CarouselHome/>            
        </ConteudoConteinner>
    );
}   
export default ConteudoHome;
