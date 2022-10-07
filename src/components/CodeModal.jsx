import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { CodeIcon } from '@radix-ui/react-icons';
import { useSelector } from 'react-redux';
import { Button } from '../styles/ButtonStyles';

const StyledDialogContent = styled(Dialog.Content)`
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    width: 80%;
    max-width: 500px;
    min-height: 300px;
    max-height: 80vh;
    overflow: auto;
`;

const StyledOverlay = styled(Dialog.Overlay)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const CodeModal = () => {
    const generatedHTML = useSelector(state => state.playground.generatedHTML);
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
        <Button aria-label="Get CSS"><CodeIcon /></Button>
        </Dialog.Trigger>
        <Dialog.Portal>
        <StyledOverlay />
        <StyledDialogContent>
            <Dialog.Title>Code</Dialog.Title>
            <Dialog.Description>
                <pre>
                    <code>
                        {generatedHTML}
                    </code>
                </pre>
            </Dialog.Description>
            <Dialog.Close>Close</Dialog.Close>
        </StyledDialogContent>
        </Dialog.Portal>
    </Dialog.Root>
  )
}
export default CodeModal
