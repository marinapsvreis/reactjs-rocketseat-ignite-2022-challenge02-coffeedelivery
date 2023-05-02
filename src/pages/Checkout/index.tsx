import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <Address />
        <PaymentMethod />
      </div>

      <div>
        <h3>Cafés selecionados</h3>
        <Cart />
      </div>
    </CheckoutContainer>
  )
}
