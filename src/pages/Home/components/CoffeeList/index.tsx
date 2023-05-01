import { Card } from './components/Card'
import { CardList, CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </CoffeeListContainer>
  )
}
