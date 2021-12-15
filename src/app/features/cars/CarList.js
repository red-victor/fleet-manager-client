import agent from "../../api/agent";
import { useState, useEffect } from "react";
import CarListItem from "./CarListItem";

const CarList = () => {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        getData();


    }, [setCars])

    async function getData(){
        const data = await agent.Cars.GetAll();
        console.log(data);
        setCars(data);
    }

    return ( 
        <div className="card-body pt-0">
               
            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table">
                <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                        <th className="w-10px pe-2">Count</th>
                        <th className="min-w-125px">Car (brand, model)</th>
                        <th className="min-w-125px">User</th>
                        <th className="min-w-125px">Licence Plate Number</th>
                        <th className="min-w-125px">Mileage</th>
                        <th className="min-w-125px">First Registration</th>
                        <th className="text-end min-w-70px">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 fw-bold">
                     {cars && cars.map( (car, i) => 
                        <CarListItem car={car} index={i + 1} />
                    )}
                </tbody>
            </table>
        </div>
     );
}
 
export default CarList;