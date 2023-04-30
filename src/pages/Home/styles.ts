import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
`

export const CapaContainer = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    max-width: 36.75rem;
  }

  h4 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    max-width: 36.75rem;
    margin-top: 1rem;
  }
`

export const DotsContainer = styled.div`
  display: flex;
  gap: 40px;
  max-width: 39rem;
  margin-top: 4.125rem;
`

export const DotsContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const DotsContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Dot = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const DotBall = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.dotOrange {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  &.dotYellow {
    background-color: ${(props) => props.theme['yellow-500']};
  }

  &.dotBrown {
    background-color: ${(props) => props.theme['base-text']};
  }

  &.dotPurple {
    background-color: ${(props) => props.theme['purple-500']};
  }
`

export const ImgHome = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`
