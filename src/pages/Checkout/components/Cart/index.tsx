import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
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
  const navigate = useNavigate()

  function handleConfirmOrder() {
    const addressString = localStorage.getItem(
      '@ignite-coffee-delivery:address-state-1.0.0',
    )

    let addressObj
    let addressIsValid

    if (addressString) {
      addressObj = JSON.parse(addressString)

      addressIsValid =
        addressObj.cep.length === 8 &&
        addressObj.numero.length > 0 &&
        addressObj.logradouro.length > 0 &&
        addressObj.bairro.length > 0 &&
        addressObj.localidade.length > 0 &&
        addressObj.uf.length > 0
    } else {
      addressIsValid = false
    }

    const paymentOptionIsValid = localStorage.getItem(
      '@ignite-coffee-delivery:payment-option-state-1.0.0',
    )

    const formIsValid = addressIsValid && paymentOptionIsValid

    if (formIsValid) {
      navigate('/success')
    } else if (!addressIsValid) {
      toast.info('Preencha seu endereço corretamente', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    } else {
      toast.info('Selecione uma forma de pagamento', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

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
      <SendOrder
        disabled={products.length === 0}
        onClick={() => handleConfirmOrder()}
      >
        CONFIRMAR PEDIDO
      </SendOrder>
    </CartContainer>
  )
}
