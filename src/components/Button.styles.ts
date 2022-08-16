import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  border: 0;
  border-radius: 8px;
  margin-right: 6px;
  color: ${({ theme }) => theme.white};

  background-color: ${({ theme }) => theme['green-500']};
`
