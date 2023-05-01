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
  PriceContainer,
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
        <PriceContainer>
          <Indexer>R$</Indexer>
          <Price>{coffee.price.toFixed(2).replace('.', ',')}</Price>
        </PriceContainer>
        <CartInfo>
          <ButtonToAddCoffee>
            <button>
              <Minus size={16} weight="bold" />
            </button>
            <p>1</p>
            <button>
              <Plus size={16} weight="bold" />
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
