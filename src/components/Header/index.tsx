import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { Cart, HeaderContainer, Info, Location, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoCoffeeDelivery} alt="Logo do coffee delivery" />
      <Info>
        <Location>
          <MapPin weight="fill" size={22} color="#8047F8" />
          <p>Petrópolis, RJ</p>
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </Cart>
      </Info>
    </HeaderContainer>
  )
}
