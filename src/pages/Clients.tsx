import { useState, useEffect } from "react"
import getClients from "../api/clientApi"

const Clients = () => {

    const[_clients, setClients] = useState([])

    useEffect(() => {
        getClients().then((res) => setClients(res.data.json()))
    }, [])

    return (
        <div className="page">
            <div className="pageBox">
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
                <div className="client">
                    <p className="name">Диего Мартинес</p>
                    <p className="date">+380509873833</p>
                </div>
            </div>
        </div>
    )
}
export default Clients

