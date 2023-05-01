import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
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
  const [count, setCount] = useState(1)

  function handleAddCount(coffee: Coffee) {
    setCount(count + 1)
  }

  function handleSubstractCount(coffee: Coffee) {
    if (count - 1 > 0) {
      setCount(count - 1)
    }
  }

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
            <button onClick={() => handleSubstractCount(coffee)}>
              <Minus size={16} weight="bold" />
            </button>
            <p>{count}</p>
            <button onClick={() => handleAddCount(coffee)}>
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
