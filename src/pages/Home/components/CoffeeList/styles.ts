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
  }
`

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`
