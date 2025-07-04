import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Appointments from "./pages/Appointments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/clients", element: <Clients />},
            {path: "/appointments", element: <Appointments />}
        ]
    }
])

export default router