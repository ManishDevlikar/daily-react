// import { LoggedContext } from './LoggedContext'
import { useIsLogged } from './useIsLogged'

function Home() {
    const {isLogged,setlogged} = useIsLogged(false);
    // const {isLogged,setLogged} = use(LoggedContext);  // react 19 feature

  return (
    <div>
      <h1>user is {isLogged?"active":"inactive"}</h1>
    </div>
  )
}

export default Home
