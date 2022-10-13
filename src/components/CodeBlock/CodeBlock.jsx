import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter/dist/cjs/';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';
import ClipboardCopy from '../ClipboardCopy';

const CodeBlockStyles = styled.div`
  position: relative;
`;

const CodeBlock = ({ language, code }) => {
  return (
    <CodeBlockStyles>
      <SyntaxHighlighter language={language} showLineNumbers style={nord}>
        {code}
      </SyntaxHighlighter>
      <ClipboardCopy copyText={code} />
    </CodeBlockStyles>
  );
};

export default CodeBlock;
