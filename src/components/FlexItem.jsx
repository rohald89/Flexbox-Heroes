import FlexItemStyles from '../styles/FlexItemStyles';

const FlexItem = ({ children, ...props }) => {
  return (
    <FlexItemStyles
      {...props}
      layout
      transition={{
        default: {
          duration: 0.3,
          ease: 'linear',
        },
      }}
      exit={{
        opacity: 0,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      {children}
    </FlexItemStyles>
  );
};

export default FlexItem;
