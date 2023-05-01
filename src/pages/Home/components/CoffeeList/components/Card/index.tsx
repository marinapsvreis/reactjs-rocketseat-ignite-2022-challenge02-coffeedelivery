import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../..'
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

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  return (
    <CardContainer>
      <CoffeImg src={coffee.img} alt={coffee.name} />
      <Tags>
        {coffee.labels.map((label: string) => (
          <Tag key={label}>{label}</Tag>
        ))}
      </Tags>
      <CoffeeName>{coffee.name}</CoffeeName>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <Indexer>R$</Indexer>
        <Price>{coffee.price.toFixed(2).replace('.', ',')}</Price>
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
