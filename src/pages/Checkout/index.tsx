import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Product } from './components/Product'
import {
  CartContainer,
  CheckoutContainer,
  DeliveryPrice,
  EnderecoContainer,
  Form,
  LineForm,
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

interface Address {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}

export function Checkout() {
  const { products } = useContext(CartContext)
  const [paymentOption, setPaymentOption] = useState('')
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<Address>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  })

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setAddress(data)
        })
    }
  }, [cep])

  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <EnderecoContainer>
          <TitleArea>
            <MapPinLine size={22} />
            <div>
              <Title>Endereço de Entrega</Title>
              <Subtitle>
                Informe o endereço onde deseja receber seu pedido
              </Subtitle>
            </div>
          </TitleArea>
          <Form>
            <LineForm>
              <input
                type="text"
                placeholder="CEP"
                name="cep"
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value)
                }}
              />
            </LineForm>
            <LineForm>
              <input type="text" placeholder="Rua" value={address.logradouro} />
            </LineForm>
            <LineForm>
              <input className="numero" type="number" placeholder="Número" />
              <input
                type="text"
                placeholder="Complemento"
                value={address.complemento}
              />
            </LineForm>
            <LineForm>
              <input
                className="bairro"
                type="text"
                placeholder="Bairro"
                value={address.bairro}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={address.localidade}
              />
              <input
                className="uf"
                type="text"
                placeholder="UF"
                value={address.uf}
              />
            </LineForm>
          </Form>
        </EnderecoContainer>

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
                paymentOption === 'CARTÃO DE CRÉDITO' ? 'selected' : ''
              }`}
              onClick={() => setPaymentOption('CARTÃO DE CRÉDITO')}
            >
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </PayOption>
            <PayOption
              className={`${
                paymentOption === 'CARTÃO DE DÉBITO' ? 'selected' : ''
              }`}
              onClick={() => setPaymentOption('CARTÃO DE DÉBITO')}
            >
              <Bank size={16} />
              <p>CARTÃO DÉBITO</p>
            </PayOption>
            <PayOption
              className={`${paymentOption === 'DINHEIRO' ? 'selected' : ''}`}
              onClick={() => setPaymentOption('DINHEIRO')}
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
          <SendOrder disabled={products.length === 0}>
            CONFIRMAR PEDIDO
          </SendOrder>
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
