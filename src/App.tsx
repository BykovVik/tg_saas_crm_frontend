import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
      <>
          <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/clients"}>Clients</Link>
          </nav>
          <Outlet/>
      </>
    )
}

export default App
