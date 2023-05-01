import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 0 36px 0 36px;

  padding: 1.25rem;
`

export const CoffeeName = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 12px;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  line-height: 130%;
  margin-top: 8px;
`

export const CoffeImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -2.75rem;
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;
`

export const Tag = styled.div`
  background-color: ${(props) => props.theme['yellow-300']};

  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-700']};
  height: 1.31rem;

  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 12px;
  margin-top: 12px;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 23px;
  align-items: center;
  margin-top: 2.06rem;
`

export const ButtonToAddCoffee = styled.div`
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

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Indexer = styled.p`
  font-size: 0.875rem;
  margin-right: 3px;
`

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Baloo 2', sans-serif;
`

export const CartInfo = styled.div`
  display: flex;
  gap: 8px;
`

export const IconBox = styled.div`
  background-color: ${(props) => props.theme['purple-700']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
`
