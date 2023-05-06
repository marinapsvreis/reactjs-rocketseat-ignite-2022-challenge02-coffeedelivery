import styled from 'styled-components'

export const HeaderBox = styled.header`
  position: fixed;
  background: ${(props) => props.theme.background};

  left: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`

export const HeaderContainer = styled.div`
  height: 6.5rem;
  background: ${(props) => props.theme.background};

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding-inline: 2rem;
  }
`

export const Logo = styled.img`
  width: 5.3rem;
  height: 2.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
  font-size: 0.875rem;
  padding: 8px;
  border-radius: 6px;
  width: 8.93rem;
  height: 2.375rem;
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${(props) => props.theme['yellow-300']};
  padding: 8px;
  border-radius: 6px;

  position: relative;
`

export const CircleCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-700']};

  position: absolute;
  top: -8px;
  right: -8px;

  &.empty {
    display: none;
  }
`
