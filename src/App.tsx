import './App.css'
import { Outlet, Link, useLocation } from 'react-router-dom'

function App() {

    const location = useLocation()

    return (
        <>
            <nav>
                <Link to={"/"} className={location.pathname === "/" ? "navFocus" : ""}>Add client</Link>
                <Link to={"/clients"} className={location.pathname === "/clients" ? "navFocus" : ""}>Clients list</Link>
                <Link to={"/appointments"} className={location.pathname === "/appointments" ? "navFocus" : ""}>Appointments</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default App
