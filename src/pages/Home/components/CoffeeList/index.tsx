import { Card } from './components/Card'
import { CardList, CoffeeListContainer } from './styles'

export interface Coffee {
  id: number
  name: string
  description: string
  labels: string[]
  price: number
  img: string
  count: number
}

const coffeesMock: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos',
    labels: ['TRADICIONAL'],
    price: 9.9,
    img: 'https://imgur.com/A0p3RKu.png',
    count: 1,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    labels: ['TRADICIONAL'],
    price: 9.9,
    img: 'https://imgur.com/WCgu4bm.png',
    count: 1,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    labels: ['TRADICIONAL'],
    price: 9.9,
    img: 'https://imgur.com/5Fn3Mt3.png',
    count: 1,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Batida preparada com café expresso e cubos de gelo',
    labels: ['TRADICIONAL', 'GELADO'],
    price: 9.9,
    img: 'https://imgur.com/eNFrtYe.png',
    count: 1,
  },
  {
    id: 5,
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    labels: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    img: 'https://i.imgur.com/asdTp68.png',
    count: 1,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    labels: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    img: 'https://imgur.com/pRcJ9V4.png',
    count: 1,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    labels: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    img: 'https://imgur.com/uBECnEw.png',
    count: 1,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    labels: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    img: 'https://imgur.com/fMtSWmI.png',
    count: 1,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    labels: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    img: 'https://imgur.com/r0B21yV.png',
    count: 1,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    labels: ['ESPECIAL', 'COM LEITE'],
    price: 9.9,
    img: 'https://i.imgur.com/jALcqRb.png',
    count: 1,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    labels: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 9.9,
    img: 'https://imgur.com/1d0l3dH.png',
    count: 1,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    labels: ['ESPECIAL'],
    price: 9.9,
    img: 'https://imgur.com/Ydg2SAg.png',
    count: 1,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café e especiarias',
    labels: ['ESPECIAL'],
    price: 9.9,
    img: 'https://i.imgur.com/yZWoouB.png',
    count: 1,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    labels: ['ESPECIAL', 'ALCOÓLICO'],
    price: 9.9,
    img: 'https://imgur.com/krVTiLV.png',
    count: 1,
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CardList>
        {coffeesMock.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CardList>
    </CoffeeListContainer>
  )
}
