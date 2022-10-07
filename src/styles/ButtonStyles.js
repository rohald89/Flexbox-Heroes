import styled from "styled-components";

const ButtonContainer = styled.div`
margin-left: auto;
margin-right: .5rem;
display: flex;
align-items: center;
gap: 1rem;
`;

const Button = styled.button`
background-color: #4a5b763a;
border: none;
cursor: pointer;
color: #5D687A;
border-radius: 3px;
border: 1px solid #5D687A;
display: inline-flex;
align-items: center;
justify-content: center;
padding: 0.2rem 0.35rem;
transition: all 0.2s ease-in-out;
&:hover {
color: currentColor;
}`;

export { ButtonContainer, Button };
