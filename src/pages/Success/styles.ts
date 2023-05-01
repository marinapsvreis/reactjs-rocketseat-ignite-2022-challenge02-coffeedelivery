import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 6.5rem;

  h1 {
    margin-top: 80px;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-700']};
  }

  h4 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`

export const DeliveryContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  position: relative;

  width: 32.87rem;
  height: 16.87rem;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.background};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const LineInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const CircleIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
  }

  &.purple {
    background-color: ${(props) => props.theme['purple-500']};
  }

  &.yellow {
    background-color: ${(props) => props.theme['yellow-500']};
  }

  &.orange {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`

export const TextInfo = styled.div``

export const DeliveryArt = styled.img``
