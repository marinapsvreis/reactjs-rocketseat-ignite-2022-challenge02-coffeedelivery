import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
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

export function Checkout() {
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
              <input type="text" placeholder="CEP" />
            </LineForm>
            <LineForm>
              <input type="text" placeholder="Rua" />
            </LineForm>
            <LineForm>
              <input className="numero" type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </LineForm>
            <LineForm>
              <input className="bairro" type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input className="uf" type="text" placeholder="UF" />
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
            <PayOption>
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </PayOption>
            <PayOption>
              <Bank size={16} />
              <p>CARTÃO DÉBITO</p>
            </PayOption>
            <PayOption>
              <Money size={16} />
              <p>DINHEIRO</p>
            </PayOption>
          </PayOptionsContainer>
        </PaymentContainer>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
        <CartContainer>
          <Product />
          <Product />
          <SummaryContainer>
            <TotalItems>
              <div>Total de itens</div>
              <div>R$ 29,70</div>
            </TotalItems>
            <DeliveryPrice>
              <div>Entrega</div>
              <div>R$ 3,50</div>
            </DeliveryPrice>
            <TotalOrder>
              <div>Total</div>
              <div>R$ 33,20</div>
            </TotalOrder>
          </SummaryContainer>
          <SendOrder>CONFIRMAR PEDIDO</SendOrder>
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
