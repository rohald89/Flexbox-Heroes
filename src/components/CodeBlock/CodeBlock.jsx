import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter/dist/cjs/';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';
import ClipboardCopy from './ClipboardCopy';

const CodeBlockStyles = styled.div`
  position: relative;
`;

const CodeBlock = ({ language, code, clipboard = false }) => {
  return (
    <CodeBlockStyles>
      <SyntaxHighlighter language={language} showLineNumbers style={nord}>
        {code}
      </SyntaxHighlighter>
      { clipboard ? <ClipboardCopy copyText={code} /> : null }
    </CodeBlockStyles>
  );
};

export default CodeBlock;
