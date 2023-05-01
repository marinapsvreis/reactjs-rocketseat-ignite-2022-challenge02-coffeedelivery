import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
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

export interface Address {
  cep: string
  numero?: string
  complemento?: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export function Checkout() {
  const { products } = useContext(CartContext)
  const [cep, setCep] = useState('')
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

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            toast.error('CEP não encontrado na API viaCEP', {
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
            toast.success(
              'CEP encontrado na API viaCEP, formulário atualizado',
              {
                position: 'top-center',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              },
            )

            setAddress({
              cep,
              numero: '',
              complemento: '',
              logradouro: data.logradouro,
              bairro: data.bairro,
              localidade: data.localidade,
              uf: data.uf,
            })
          }
        })
        .catch((error) => console.log(error))
    }
  }, [cep])

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:address-state-1.0.0',
      JSON.stringify(address),
    )
  }, [address])

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
              <input
                type="text"
                placeholder="Rua"
                value={address.logradouro}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    logradouro: e.target.value,
                  })
                }}
              />
            </LineForm>
            <LineForm>
              <input
                className="numero"
                type="text"
                placeholder="Número"
                value={address.numero}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    numero: e.target.value,
                  })
                }}
              />
              <input
                type="text"
                placeholder="Complemento"
                value={address.complemento}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    complemento: e.target.value,
                  })
                }}
              />
            </LineForm>
            <LineForm>
              <input
                className="bairro"
                type="text"
                placeholder="Bairro"
                value={address.bairro}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    bairro: e.target.value,
                  })
                }}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={address.localidade}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    localidade: e.target.value,
                  })
                }}
              />
              <input
                className="uf"
                type="text"
                placeholder="UF"
                value={address.uf}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    uf: e.target.value,
                  })
                }}
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
