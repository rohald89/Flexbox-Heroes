import { ButtonStyles} from './styled';

const Button = ({children, ...props}) => {
  return (
    <ButtonStyles {...props}>{children}</ButtonStyles>
  )
}
export default Button
