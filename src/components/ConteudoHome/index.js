import styled from "styled-components";
import Background from "../Background";
import Sugestoes from "../../pages/Sugestoes";

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
            <h1>Bem-vindo ao InfoSegura</h1>
            <p>Seu portal de informações sobre segurança digital.</p>
            <p>Explore nossos recursos e fique seguro online!</p>
            <p>No mundo digital de hoje, os golpes estão por toda parte, evoluindo a cada dia e ameaçando a segurança financeira e pessoal de milhões de pessoas. Mas você não precisa ser a próxima vítima.
            Aqui, no InfoSegura, estamos dedicados a ser o seu guia confiável contra as armadilhas dos golpistas. Navegue por nossa plataforma para:</p>
            <p><strong>Identificar os golpes mais comuns:</strong> Conheça as táticas usadas por criminosos.</p>
            <p><strong>Aprender a se proteger:</strong> Descubra dicas práticas e eficazes para manter seus dados e dinheiro seguros.</p>
            <p><strong>Manter-se atualizado(a):</strong> Fique por dentro das novas fraudes e tendências.</p>

            <p>Nosso objetivo é transformar curiosidade em conhecimento e conhecimento em proteção.</p>
            <p>Junte-se a nós e fortaleça suas defesas contra os golpes. Sua segurança começa aqui!</p>
            
        </ConteudoConteinner>
    );
}   
export default ConteudoHome;
