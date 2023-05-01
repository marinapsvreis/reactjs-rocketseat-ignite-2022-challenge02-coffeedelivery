import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { Cart, HeaderContainer, Info, Location, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <Logo src={LogoCoffeeDelivery} alt="Logo do coffee delivery" />
      </NavLink>
      <Info>
        <Location>
          <MapPin weight="fill" size={22} color="#8047F8" />
          <p>Petrópolis, RJ</p>
        </Location>
        <NavLink to="/checkout" title="Checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </Cart>
        </NavLink>
      </Info>
    </HeaderContainer>
  )
}
