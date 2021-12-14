import agent from "../../api/agent";
import { useState, useEffect } from "react";

const CarList = () => {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        getData();


    }, [setCars])

    async function getData(){
        const data = await agent.Cars.GetAll();
        setCars(data);

        console.log(data);
    }

    const mileageColor = (mileage) => {
        if (mileage < 10000)
            return "green"
        else if (mileage < 30000)
            return "chartreuse"
        else if (mileage < 50000)
            return "yellow"
        else if (mileage < 100000)
            return "orange"
        else if (mileage >= 100000)
            return "red"
    }

    return ( 
        <div className="card-body pt-0">
               
            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table">
                <thead>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                        <th className="w-10px pe-2">
                            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_subscriptions_table .form-check-input" value="1" />
                            </div>
                        </th>
                        <th className="min-w-125px">Car (brand, model)</th>
                        <th className="min-w-125px">User</th>
                        <th className="min-w-125px">Color</th>
                        <th className="min-w-125px">Mileage</th>
                        <th className="min-w-125px">First Registration</th>
                        <th className="text-end min-w-70px">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 fw-bold">
                     {cars && cars.map( (car, i) => 
                        <tr key={i}>
                        <td>
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="1" />
                            </div>
                        </td>
                        <td>
                            <a 
                                href="../../demo2/dist/apps/customers/view.html" 
                                className="text-gray-800 text-hover-primary mb-1"
                                >
                                    {car.brand + " " +car.model}
                            </a>
                        </td>
                        <td>
                            <div 
                                className={"badge badge-light-"+ (car.user ? "success" : "warning")}>
                                {car.user ? car.user.firstName + " " + car.user.lastName : "None"}
                            </div>
                        </td>
                        <td>
                            <div className="badge badge-light" style={{ backgroundColor: car.color}}>{car.color}</div>
                        </td>
                        <td style={{color: mileageColor(car.mileage)}}>{car.mileage}</td>
                        <td>{new Date(car.firstRegistrationDate).toLocaleString()}</td>
                        <td className="text-end">
                            <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                <span className="svg-icon svg-icon-5 m-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                                    </svg>
                                </span>
                            </a>
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                <div className="menu-item px-3">
                                    <a href="../../demo2/dist/apps/subscriptions/add.html" className="menu-link px-3">View</a>
                                </div>
                                <div className="menu-item px-3">
                                    <a href="../../demo2/dist/apps/subscriptions/add.html" className="menu-link px-3">Edit</a>
                                </div>
                                <div className="menu-item px-3">
                                    <a href="#" data-kt-subscriptions-table-filter="delete_row" className="menu-link px-3">Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
     );
}
 
export default CarList;