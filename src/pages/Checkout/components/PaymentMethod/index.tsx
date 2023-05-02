import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Subtitle, Title, TitleArea } from '../../styles'
import {
  PayOption,
  PayOptionsContainer,
  PaymentMethodContainer,
} from './styles'

export function PaymentMethod() {
  const [paymentOption, setPaymentOption] = useState('')

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:payment-option-state-1.0.0',
      paymentOption,
    )
  }, [paymentOption])
  return (
    <PaymentMethodContainer>
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
    </PaymentMethodContainer>
  )
}
