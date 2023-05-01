import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import ExpressoTadicional from '../../../../../../assets/tipos-de-cafe/expresso-tradicional.png'
import {
  ButtonToAddCoffee,
  CardContainer,
  CardFooter,
  CartInfo,
  CoffeImg,
  CoffeeName,
  Description,
  IconBox,
  Indexer,
  Price,
  Tag,
  Tags,
} from './styles'

export function Card() {
  return (
    <CardContainer>
      <CoffeImg src={ExpressoTadicional} alt="expresso tradicional" />
      <Tags>
        <Tag>TRADICIONAL</Tag>
      </Tags>
      <CoffeeName>Expresso Tradicional</CoffeeName>
      <Description>
        O tradicional café feito com água quente e grãos moidos
      </Description>
      <CardFooter>
        <Indexer>R$</Indexer>
        <Price>9,90</Price>
        <CartInfo>
          <ButtonToAddCoffee>
            <button>
              <Minus size={14} weight="bold" color="#8047F8" />
            </button>
            <p>1</p>
            <button>
              <Plus size={14} weight="bold" color="#8047F8" />
            </button>
          </ButtonToAddCoffee>
          <IconBox>
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </IconBox>
        </CartInfo>
      </CardFooter>
    </CardContainer>
  )
}
