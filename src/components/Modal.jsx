import * as Dialog from '@radix-ui/react-dialog';
import { StyledOverlay, StyledDialogContent } from '../styles/Modal';
import { Button } from '../styles/ButtonStyles';
import styled from 'styled-components';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

const CloseModal = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Modal = ({ trigger, children, onOpen }) => {
  return (
    <Dialog.Root onOpenChange={onOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledDialogContent>
          <Dialog.Close asChild>
            <CloseModal>
              <FaceIcon />
            </CloseModal>
          </Dialog.Close>
          {children}
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Modal;
