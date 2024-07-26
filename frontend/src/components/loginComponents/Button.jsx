import styled from 'styled-components';

const Button = styled.button`
  border-radius: 32px;
  border: 1.6px solid #825DF4;
  background-color: #825DF4;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 19.2px 72px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
