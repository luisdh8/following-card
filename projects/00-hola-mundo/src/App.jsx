import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'kiburld',
        name: 'Kibu',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'dan_abramov',
        name: 'Dan Abramov',
        isFollowing: true
    },
    {
        userName: 'ryanflorence',
        name: 'Ryan Florence',
        isFollowing: false
    }
]

export function App () {
    return (
        // <React.Fragment></React.Fragment> == <></>
        <section className='App'> 
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return(
                        <TwitterFollowCard
                            key = {userName}
                            userName = {userName}
                            initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}