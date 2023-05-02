import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Address } from './components/Address'
import { Product } from './components/Product'
import {
  CartContainer,
  CheckoutContainer,
  DeliveryPrice,
  PayOption,
  PayOptionsContainer,
  PaymentContainer,
  SendOrder,
  Subtitle,
  SummaryContainer,
  Title,
  TitleArea,
  TotalItems,
  TotalOrder,
} from './styles'

export function Checkout() {
  const { products } = useContext(CartContext)
  const [paymentOption, setPaymentOption] = useState('')

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:payment-option-state-1.0.0',
      paymentOption,
    )
  }, [paymentOption])

  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>

        <Address />

        <PaymentContainer>
          <TitleArea>
            <CurrencyDollar size={22} />
            <div>
              <Title>Pagamento</Title>
              <Subtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Subtitle>
            </div>
          </TitleArea>
          <PayOptionsContainer>
            <PayOption
              className={`${
                paymentOption === 'Cartão de Crédito' ? 'selected' : ''
              }`}
              onClick={() => setPaymentOption('Cartão de Crédito')}
            >
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </PayOption>
            <PayOption
              className={`${
                paymentOption === 'Cartão de débito' ? 'selected' : ''
              }`}
              onClick={() => setPaymentOption('Cartão de débito')}
            >
              <Bank size={16} />
              <p>CARTÃO DÉBITO</p>
            </PayOption>
            <PayOption
              className={`${paymentOption === 'Dinheiro' ? 'selected' : ''}`}
              onClick={() => setPaymentOption('Dinheiro')}
            >
              <Money size={16} />
              <p>DINHEIRO</p>
            </PayOption>
          </PayOptionsContainer>
        </PaymentContainer>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
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
          <NavLink
            to="/success"
            title="Success"
            style={{ textDecoration: 'none' }}
          >
            <SendOrder disabled={products.length === 0}>
              CONFIRMAR PEDIDO
            </SendOrder>
          </NavLink>
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
