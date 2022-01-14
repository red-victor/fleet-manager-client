import agent from "../../../api/agent";
import { useState, useEffect } from "react";
import CarListItem from "./CarListItem";

const CarList = (props) => {
    const {cars} = props;

    return ( 
         <>
            <div className="card-body pt-0">
                <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table" >
                    <thead>
                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                            <th className="min-w-125px">Id</th>
                            <th className="min-w-125px">Brand / Model</th>
                            <th className="min-w-125px">User</th>
                            <th className="min-w-125px">Licence Plate Number</th>
                            <th className="min-w-125px">Mileage</th>
                            <th className="min-w-125px">First Registration</th>
                            <th className="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 fw-bold">
                        {cars && cars.map( (car) => 
                        <CarListItem key={car.id} car={car} />
                        )}
                    </tbody>
                </table>
            </div>
         </>   
     );
}
 
export default CarList;