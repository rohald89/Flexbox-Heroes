import styled from "styled-components"
import Button from "../shared/Button"
import CodeBlock from "../CodeBlock"
import Modal from "../shared/Modal/Modal"
import OverflowWarning from "../OverflowWarning"
import { CodeIcon, PlusCircledIcon, ResetIcon } from "@radix-ui/react-icons"
import { useDispatch, useSelector } from "react-redux"
import { addFlexItem, generateCode, resetPlayground } from "../../app/playgroundSlice"

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PlaygroundHeader = () => {
    const { generatedCSS, generatedHTML } =
    useSelector((state) => state.playground);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFlexItem());
  };

  const handleReset = () => {
    dispatch(resetPlayground());
  };

  console.log('playground header rendered');
  return (
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
  )
}
export default PlaygroundHeader
