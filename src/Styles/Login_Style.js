import styled from "styled-components"


//Elemento pai que alinha tudo ao centro
export const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 117px;
    height: 90vh;
    width: 100vw;
`

//Logo que fica acima da janela
export const Logo = styled.div`
    width: 230px; 
`

export const DivbtnLogin = styled.button`
    width: auto;
    height: auto;
    display: flex;
    padding: 8px 15px;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid #828282;
    background: #FFFFFF;
    background-clip: border-box;
    transition: 0.1s ease-in-out;
    transform: scale(0.8);

    &:hover{
        box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.30);
        cursor: pointer;
    }
`

export const SVGGoogle = styled.svg`
    width: 20px;
`

export const TextoBTN = styled.p`
    color: #6D6D6D;
    font-family: Segoe UI;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`