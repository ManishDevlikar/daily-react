import { LogProvider } from './LogProvider'
import Home from './Home'

function LogApp() {
  return (
    <div>
      <LogProvider>
            <Home/>
      </LogProvider>
    </div>
  )
}

export default LogApp
