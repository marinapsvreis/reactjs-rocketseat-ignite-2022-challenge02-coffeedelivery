import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 28rem;
  min-height: 31.125rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 425px) {
    width: 360px;
  }
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
  text-decoration: none;

  &:disabled {
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
