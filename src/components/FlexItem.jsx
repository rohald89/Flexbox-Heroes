import FlexItemStyles from "../styles/FlexItemStyles";

const FlexItem = ({ children, ...props }) => {
  return (
    <FlexItemStyles {...props} layout transition={{
      default: {
        duration: 0.3,
        ease: 'linear'
      }
    }} >
      {children}
    </FlexItemStyles>
  );
};

export default FlexItem;
