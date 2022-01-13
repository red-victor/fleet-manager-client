import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarUser from "./details/CarUser";
import CarHeader from "./details/CarHeader";
import CarTickets from "./details/CarTickets";
import CarHistory from "./details/CarHistory";
import CarTicketHistory from "./details/CarTicketHistory";

const CarDetailsPage = () => {
    const {id} = useParams();
    const [car, setCar] = useState(null);
    const [historyList, setHistoryList] = useState(null);
    const [ticketList, setTicketList] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    async function getData(){
        try {
            const carData = await agent.Cars.Get(id);
            const historyData = await agent.History.GetAllForCar(id);
            const ticketData = await agent.Tickets.GetAllForCar(id);
            console.log(carData);
            setCar(carData);
            setHistoryList(historyData);
            setTicketList(ticketData)
        } catch (e) {
            console.log(e);
        }
    }

    const handleDissociateUser = () => {
        agent.Cars.DissociateUser(car.id)
            .then(() => setCar(prevState => {
                return {
                    ...prevState,
                    user: null
                }
            }))
            .catch(e => console.log(e));
    }

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
            {car &&
            <div className="content flex-row-fluid" id="kt_content">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
                        <CarHeader car={car} />
                        <CarTickets ticketList={ticketList}/>
                        <CarTicketHistory/>
                        <CarHistory historyList={historyList}/>
                    </div>
                    <CarUser car={car} user={car.user ? car.user : null} handleDissociateUser={handleDissociateUser} />
                </div>
            </div>
            }
        </div>
    );
}
 
export default CarDetailsPage;