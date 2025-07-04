import { useState, useEffect } from "react"
import getClients from "../api/clientApi"

const Appointments = () => {

    const[_clients, setClients] = useState([])

    useEffect(() => {
        getClients().then((res) => setClients(res.data.json()))
    }, [])

    return (
        <div className="page">
            <div className="pageBox">
                <div className="appointments" tabIndex={0}>
                    <p className="name">Диего Мартинес</p>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p className="date">Date 22/01/1989</p>
                </div>
                <div className="appointments" tabIndex={0}>
                    <p className="name">Диего Мартинес</p>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p className="date">Date 22/01/1989</p>
                </div>
                <div className="appointments" tabIndex={0}>
                    <p className="name">Диего Мартинес</p>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p className="date">Date 22/01/1989</p>
                </div>
            </div>
        </div>
    )
}
export default Appointments