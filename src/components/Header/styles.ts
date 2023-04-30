import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  background: ${(props) => props.theme.background};

  display: flex;
  justify-content: space-between;
  align-items: center;
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
  gap: 4px;
  align-items: center;
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
`
