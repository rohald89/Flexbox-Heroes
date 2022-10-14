import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { copyToClipboard } from '../../lib/copyToClipboard';
import Button from '../shared/Button';

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
    <Button className="copy-btn" onClick={handleClick}>
      {
      isCopied ? (
        <CheckIcon />
      ) : <ClipboardIcon />
    }
    </Button>
  )
}

export default ClipboardCopy;
