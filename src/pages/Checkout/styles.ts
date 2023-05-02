import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding-top: 6.5rem;
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
