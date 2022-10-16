import styled from "styled-components"

const FooterStyles = styled.footer`
    position: relative;
    margin-top: auto;
    padding-top: 80px;
    max-height: 300px;
`;

const SectionWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterStyles className="spacer waves-1" >
        <SectionWrapper >
            <h1>Footer</h1>
            <div>
                <p>Flexbox Heroes is a project by <a href="#" target="_blank">Rohald van Merode</a></p>
            </div>
        </SectionWrapper>
    </FooterStyles>
  )
}
export default Footer
