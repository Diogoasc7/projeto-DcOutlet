import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é uma reimaginação moderna do clássico de 2005 da Capcom. Lançado em 2023, o jogo traz gráficos totalmente refeitos, jogabilidade mais fluida e mecânicas atualizadas.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4 Remake é uma reimaginação moderna do clássico de 2005 da Capcom. Lançado em 2023, o jogo traz gráficos totalmente refeitos, jogabilidade mais fluida e mecânicas atualizadas.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é a aguardada sequência de Breath of the Wild, trazendo um mundo aberto ainda mais expansivo e cheio de possibilidades.',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['5%', 'R$ 350,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é a aguardada sequência de Breath of the Wild, trazendo um mundo aberto ainda mais expansivo e cheio de possibilidades.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 350,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG de Ação',
    description:
      'Diablo IV é a mais nova entrada na lendária franquia de RPG de ação da Blizzard. Lançado em 2023, o jogo apresenta um mundo aberto sombrio e expansivo repleto de masmorras, monstros e chefes desafiadores.',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Ação e Aventura',
    description:
      'Star Wars Jedi: Survivor é a sequência direta de Jedi: Fallen Order, desenvolvido pela Respawn Entertainment e lançado em 2023. O jogo acompanha o Jedi Cal Kestis em uma luta desesperada pela sobrevivência contra o Império Galáctico.',
    title: 'Star Wars Jedi: Survivor',
    system: 'Xbox Series S',
    infos: ['20/07'],
    image: starWars
  },
  {
    id: 7,
    category: 'Ação e Aventura',
    description:
      'Star Wars Jedi: Survivor é a sequência direta de Jedi: Fallen Order, desenvolvido pela Respawn Entertainment e lançado em 2023. O jogo acompanha o Jedi Cal Kestis em uma luta desesperada pela sobrevivência contra o Império Galáctico.',
    title: 'Star Wars Jedi: Survivor',
    system: 'Xbox Series S',
    infos: ['20/07'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG de Ação',
    description:
      'Diablo IV é a mais nova entrada na lendária franquia de RPG de ação da Blizzard. Lançado em 2023, o jogo apresenta um mundo aberto sombrio e expansivo repleto de masmorras, monstros e chefes desafiadores.',
    title: 'Zelda',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
