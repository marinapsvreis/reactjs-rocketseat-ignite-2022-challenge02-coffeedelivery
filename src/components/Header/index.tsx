import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  Cart,
  CircleCounter,
  HeaderBox,
  HeaderContainer,
  Info,
  Location,
  Logo,
} from './styles'

export function Header() {
  const { products } = useContext(CartContext)

  return (
    <HeaderBox>
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
              <CircleCounter className={products.length === 0 ? 'empty' : ''}>
                {products.length}
              </CircleCounter>
            </Cart>
          </NavLink>
        </Info>
      </HeaderContainer>
    </HeaderBox>
  )
}
