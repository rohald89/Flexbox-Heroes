import * as Dialog from '@radix-ui/react-dialog';
import { CodeIcon } from '@radix-ui/react-icons';
import { useSelector } from 'react-redux';
import { Button } from '../styles/ButtonStyles';
import { StyledOverlay, StyledDialogContent } from '../styles/Modal';

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
