import FlexItemStyles from "../styles/FlexItemStyles";

const FlexItem = ({ children, ...props }) => {
  return (
    <FlexItemStyles {...props} >  
      {children}
    </FlexItemStyles>
  );
};

export default FlexItem;
