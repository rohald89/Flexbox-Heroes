import * as Dialog from '@radix-ui/react-dialog';
import { StyledOverlay, StyledDialogContent } from '../styles/Modal';

const Modal = ({ trigger, children, onOpen }) => {
  return (
    <Dialog.Root onOpenChange={onOpen}>
        <Dialog.Trigger asChild>
        {trigger}
        </Dialog.Trigger>
        <Dialog.Portal>
        <StyledOverlay />
        <StyledDialogContent>
            {children}
            <Dialog.Close>Close</Dialog.Close>
        </StyledDialogContent>
        </Dialog.Portal>
    </Dialog.Root>
  )
}
export default Modal
