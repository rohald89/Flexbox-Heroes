import { CodeIcon, PlusCircledIcon, ResetIcon } from "@radix-ui/react-icons"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addFlexItem, generateCode, resetPlayground } from "../../app/playgroundSlice"
import Button from "../shared/Button"
import CodeBlock from "../codeBlock"
import Modal from "../shared/Modal/Modal"
import OverflowWarning from "../OverflowWarning"
import PlaygroundPreview from "./PlaygroundPreview"
import PreviewHeader from "./PreviewHeader"
import PreviewWrapper from "./PreviewWrapper"

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Playground = () => {
    const { generatedCSS, generatedHTML } =
    useSelector((state) => state.playground);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFlexItem());
  };

  const handleReset = () => {
    dispatch(resetPlayground());
  };
  return (
    <>
        <PreviewHeader>
          <ButtonContainer>
            <Button aria-label="Reset" onClick={handleReset}>
              <ResetIcon />
            </Button>
            <Button aria-label="Add FlexItem" onClick={handleClick}>
              <PlusCircledIcon />
            </Button>
            <Modal
              onOpen={() => dispatch(generateCode())}
              icon={<CodeIcon />}
            >
              <CodeBlock language="html" code={generatedHTML} clipboard />
              <CodeBlock language="css" code={generatedCSS} clipboard />
            </Modal>
            <OverflowWarning />
          </ButtonContainer>
        </PreviewHeader>
        <PreviewWrapper>
          <PlaygroundPreview />
        </PreviewWrapper>
        </>
  )
}
export default Playground
