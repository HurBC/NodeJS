import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'MrBeast',
    name: 'Jimmy Donaldson',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: true
  },
  {
    userName: 'JasperDevYT',
    name: 'Jasper Dev',
    isFollowing: true
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }, index) => {
          return (
            <TwitterFollowCard
              userName={userName}
              isFollowing={isFollowing}
              key={index}>
                {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
