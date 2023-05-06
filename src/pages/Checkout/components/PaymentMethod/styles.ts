import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  margin-top: 12px;
  width: 40rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 600px) {
    width: 35rem;
  }

  @media (max-width: 500px) {
    width: 30rem;
  }

  @media (max-width: 425px) {
    width: 360px;
  }
`

export const PayOptionsContainer = styled.div`
  display: flex;
  gap: 12px;
  border-radius: 6px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 10rem;
  }
`
export const PayOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};

  flex: 1;
  height: 3.19rem;
  border-radius: 6px;

  transition: 0.2s;

  p {
    font-size: 12px;
    line-height: 160%;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    border: 1px solid ${(props) => props.theme['base-hover']};
  }

  &.selected {
    background-color: ${(props) => props.theme['purple-300']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`
