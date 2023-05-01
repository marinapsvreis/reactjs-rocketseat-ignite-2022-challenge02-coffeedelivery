import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
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

export function Product() {
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
        <img src="https://imgur.com/A0p3RKu.png" alt="" />
        <ProductInfo>
          <ProductName>Expresso Tradicional</ProductName>
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
        <ProductPrice>R$ 9,90</ProductPrice>
      </ProductWrapper>
      <Separator />
    </ProductContainer>
  )
}
