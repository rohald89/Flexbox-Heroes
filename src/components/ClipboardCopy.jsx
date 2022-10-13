import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../lib/copyToClipboard';
import { Button } from '../styles/ButtonStyles';

const ClipboardButton = styled(Button)`
  position: absolute;
  right: .5rem;
  top: .5rem;
`;
const ClipboardCopy = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    copyToClipboard(copyText).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }).catch(err => console.log(err));
  }
  return (
    <ClipboardButton onClick={handleClick}>
      {
      isCopied ? (
        <CheckIcon />
      ) : <ClipboardIcon />
    }
    </ClipboardButton>
  )
}

export default ClipboardCopy;

