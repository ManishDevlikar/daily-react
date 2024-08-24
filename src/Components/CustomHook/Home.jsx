import { useIsLogged } from './useIsLogged'

function Home() {
    const {isLogged,setlogged} = useIsLogged(false);
  return (
    <div>
      <h1>user is {isLogged?"active":"inactive"}</h1>
    </div>
  )
}

export default Home
