import styled from "styled-components"

const PreviewHeaderStyles = styled.div`
    background-color: ${({theme}) => theme.accent};
    border-radius: 6px 6px 0 0;
    padding: 0.5rem 1rem;
    color: #ECEFF3;
`;
const PreviewHeader = ({children}) => {
  return (
    <PreviewHeaderStyles>
        {children}
    </PreviewHeaderStyles>
  )
}
export default PreviewHeader
