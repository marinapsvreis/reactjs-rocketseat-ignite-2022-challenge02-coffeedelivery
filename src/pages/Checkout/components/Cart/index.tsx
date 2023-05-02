import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CartContext'
import { Product } from '../Product'
import {
  CartContainer,
  DeliveryPrice,
  SendOrder,
  SummaryContainer,
  TotalItems,
  TotalOrder,
} from './styles'

export function Cart() {
  const { products } = useContext(CartContext)
  return (
    <CartContainer>
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
      <SummaryContainer>
        <TotalItems>
          <div>Total de itens</div>
          <div>
            R${' '}
            {products
              .reduce((sumTotal, product) => {
                return sumTotal + product.price * product.quantity
              }, 0)
              .toFixed(2)
              .replace('.', ',')}
          </div>
        </TotalItems>
        <DeliveryPrice>
          <div>Entrega</div>
          <div>R$ 3,50</div>
        </DeliveryPrice>
        <TotalOrder>
          <div>Total</div>
          <div>
            R${' '}
            {products
              .reduce((sumTotal, product) => {
                return sumTotal + product.price * product.quantity
              }, 3.5)
              .toFixed(2)
              .replace('.', ',')}
          </div>
        </TotalOrder>
      </SummaryContainer>
      <NavLink to="/success" title="Success" style={{ textDecoration: 'none' }}>
        <SendOrder disabled={products.length === 0}>CONFIRMAR PEDIDO</SendOrder>
      </NavLink>
    </CartContainer>
  )
}
