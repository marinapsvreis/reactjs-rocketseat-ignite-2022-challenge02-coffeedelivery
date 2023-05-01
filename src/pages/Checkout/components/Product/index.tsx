import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../../Home/components/CoffeeList'
import {
  Options,
  ProductContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductWrapper,
  RemoveButton,
  Separator,
} from './styles'

interface ProductProps {
  product: Coffee
}

export function Product({ product }: ProductProps) {
  const [count, setCount] = useState(1)

  function handleAddCount() {
    setCount(count + 1)
  }

  function handleSubstractCount() {
    if (count - 1 > 0) {
      setCount(count - 1)
    }
  }

  return (
    <ProductContainer>
      <ProductWrapper>
        <img src={product.img} alt="" />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <Options>
            <ProductQuantity>
              <button onClick={() => handleSubstractCount()}>
                <Minus size={16} weight="bold" />
              </button>
              <p>{count}</p>
              <button onClick={() => handleAddCount()}>
                <Plus size={16} weight="bold" />
              </button>
            </ProductQuantity>
            <RemoveButton>
              <Trash size={16} />
              <p>REMOVER</p>
            </RemoveButton>
          </Options>
        </ProductInfo>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductWrapper>
      <Separator />
    </ProductContainer>
  )
}
