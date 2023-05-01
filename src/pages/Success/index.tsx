import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import SuccessImg from '../../assets/delivery-art.png'
import {
  CircleIcon,
  ContentContainer,
  DeliveryArt,
  DeliveryContainer,
  LineInfo,
  SuccessContainer,
  TextInfo,
} from './styles'

import { CartContext } from '../../contexts/CartContext'
import { Address } from '../Checkout'

export function Success() {
  const [paymentOption, setPaymentOption] = useState('')
  const [address, setAddress] = useState<Address>({
    cep: '',
    numero: '',
    complemento: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  })

  const { cleanCart } = useContext(CartContext)

  useEffect(() => {
    const addressString = localStorage.getItem(
      '@ignite-coffee-delivery:address-state-1.0.0',
    )

    if (addressString) {
      setAddress(JSON.parse(addressString))
    }

    const paymentOptionString = localStorage.getItem(
      '@ignite-coffee-delivery:payment-option-state-1.0.0',
    )

    if (paymentOptionString) {
      setPaymentOption(paymentOptionString)
    }

    cleanCart()
  }, [])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h4>Agora é só aguardar que logo o café chegará até você</h4>
      <ContentContainer>
        <DeliveryContainer>
          <LineInfo>
            <CircleIcon className="purple">
              <MapPin size={16} weight="fill" />
            </CircleIcon>
            <TextInfo>
              <p>
                Entrega em{' '}
                <strong>
                  {address.logradouro},{address.numero}
                </strong>
              </p>
              <p>
                {address.bairro} - {address.localidade}, {address.uf}
              </p>
            </TextInfo>
          </LineInfo>
          <LineInfo>
            <CircleIcon className="yellow">
              <Timer size={16} weight="fill" />
            </CircleIcon>
            <TextInfo>
              <p>Previsão de entrega</p>
              <p>
                <strong>20min - 30min</strong>
              </p>
            </TextInfo>
          </LineInfo>
          <LineInfo>
            <CircleIcon className="orange">
              <CurrencyDollar size={16} />
            </CircleIcon>
            <TextInfo>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentOption}</strong>
              </p>
            </TextInfo>
          </LineInfo>
        </DeliveryContainer>
        <DeliveryArt src={SuccessImg} alt="entregador a caminho desenhado" />
      </ContentContainer>
    </SuccessContainer>
  )
}
