import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 5rem;
  padding-block: 8px;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

export const ProductName = styled.p`
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Options = styled.div`
  display: flex;
  gap: 8px;
`

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  width: 4.5rem;

  button {
    border: none;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['purple-500']};
    width: 1.5rem;
    height: 100%;
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
  }

  button:hover {
    color: ${(props) => props.theme['purple-700']};
    background-color: ${(props) => props.theme['purple-300']};
  }

  button:focus {
    box-shadow: none;
  }

  p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 8px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  p {
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const ProductPrice = styled.p`
  font-weight: bold;
`

export const Separator = styled.div`
  width: 100%;
  height: 0px;

  border: 1px solid #e6e5e5;
`
