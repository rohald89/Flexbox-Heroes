import * as Dialog from '@radix-ui/react-dialog';
import { StyledOverlay, StyledTrigger, StyledCloseButton, StyledDialogContent } from './styled';
import { Cross1Icon } from '@radix-ui/react-icons'

const Modal = ({ icon, children, onOpen }) => {
  return (
    <Dialog.Root onOpenChange={onOpen}>
      <StyledTrigger>{icon}</StyledTrigger>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledDialogContent>
          <StyledCloseButton>
              <Cross1Icon />
          </StyledCloseButton>
          {children}
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Modal;
