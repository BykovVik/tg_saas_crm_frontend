import { useState, useEffect } from "react"
import getClients from "../api/clientApi"

const Clients = () => {

    const[clients, setClients] = useState([])

    useEffect(() => {
        getClients().then((res) => setClients(res.data.json()))
    }, [])

    return (
        <div>
            <h1>Список клиентов</h1>
            {clients.map((c) => (
                <div>{c}</div>
            ))}
        </div>
    )
}
export default Clients

