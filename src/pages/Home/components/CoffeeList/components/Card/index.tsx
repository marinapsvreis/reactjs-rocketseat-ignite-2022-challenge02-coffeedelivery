import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Coffee } from '../..'
import { CartContext } from '../../../../../../contexts/CartContext'
import {
  ButtonToAddCoffee,
  CardContainer,
  CardFooter,
  CartInfo,
  CoffeImg,
  CoffeeName,
  Description,
  IconBoxButton,
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
  const { addProductToCart } = useContext(CartContext)

  function handleAddCount(coffee: Coffee) {
    setCount(count + 1)
  }

  function handleSubstractCount(coffee: Coffee) {
    if (count - 1 > 0) {
      setCount(count - 1)
    }
  }

  function handleAddProductToCart(coffee: Coffee) {
    addProductToCart(coffee)
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
          <IconBoxButton
            onClick={() => handleAddProductToCart(coffee)}
            title="Adicionar no carrinho"
          >
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </IconBoxButton>
        </CartInfo>
      </CardFooter>
    </CardContainer>
  )
}
