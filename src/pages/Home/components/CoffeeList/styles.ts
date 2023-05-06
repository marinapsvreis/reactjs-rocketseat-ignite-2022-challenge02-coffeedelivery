import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;

    @media (max-width: 768px) {
      text-align: center;
      margin-top: 2rem;
    }
  }
`

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 9.81rem;
`
