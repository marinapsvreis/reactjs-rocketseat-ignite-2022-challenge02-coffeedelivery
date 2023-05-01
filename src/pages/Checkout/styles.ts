import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 32px;

  h3 {
    margin-top: 40px;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 15px;
  }
`
export const EnderecoContainer = styled.div`
  width: 40rem;
  height: 23.25rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  border-radius: 6px;

  input {
    height: 2.625rem;
    background-color: ${(props) => props.theme['base-input']};
    border: none;
    border-radius: 6px;
    padding: 12px;
    width: 100%;
  }

  input.numero,
  input.bairro {
    width: 12.5rem;
  }

  input.uf {
    width: 3.75rem;
  }
`
export const TitleArea = styled.div`
  display: flex;
  gap: 8px;
`
export const Title = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
`
export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const LineForm = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentContainer = styled.div`
  margin-top: 12px;
  width: 40rem;
  height: 12.93rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PayOptionsContainer = styled.div`
  display: flex;
  gap: 12px;
  border-radius: 6px;
`
export const PayOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${(props) => props.theme['base-button']};

  flex: 1;
  height: 3.19rem;
  border-radius: 6px;

  p {
    font-size: 12px;
    line-height: 160%;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CartContainer = styled.div`
  width: 28rem;
  min-height: 31.125rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const SummaryContainer = styled.div``

export const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.625rem;
`

export const TotalItems = styled(SummaryLine)``
export const DeliveryPrice = styled(SummaryLine)``
export const TotalOrder = styled(SummaryLine)`
  font-size: 1.25rem;
  font-weight: bold;
`

export const SendOrder = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.875rem;
  background-color: ${(props) => props.theme['yellow-500']};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
`
