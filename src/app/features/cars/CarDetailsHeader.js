import { Link } from "react-router-dom";

import CarTicketItem from "./CarTicketItem";

const CarDetailsHeader = ({car, ticketList}) => {
    return (
        <div className="card card-flush pt-3 mb-5 mb-xl-10">
            <div className="card-header">
                <div className="card-title">
                    <h2 className="fw-bolder">{car.brand} {car.model} - {car.licencePlate}</h2>
                </div>
                <div className="card-toolbar">
                    <div className="btn btn-light-primary">Update Car</div>
                </div>
            </div>
            <div className="card-body pt-3">
                <div className="mb-10">
                    <h5 className="mb-4">Autovehicle Details:</h5>
                    <div className="d-flex flex-wrap py-5">
                        <div className="flex-equal me-5">
                            <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                <tbody>
                                    <tr>
                                        <td className="text-gray-400 min-w-175px w-175px">User:</td>
                                        <td className="text-gray-800 min-w-200px">
                                            {car.user 
                                                ? <Link to={ `/users/${car.user.id}` } className="text-gray-800 text-hover-primary mb-1">
                                                    {car.user.firstName + " " + car.user.lastName}
                                                </Link>
                                                : "None"}    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Brand:</td>
                                        <td className="text-gray-800">{car.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Model:</td>
                                        <td className="text-gray-800">{car.model}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Year:</td>
                                        <td className="text-gray-800">{new Date(car.firstRegistrationDate).getFullYear()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex-equal">
                            <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                <tbody>
                                    <tr>
                                        <td className="text-gray-400 min-w-175px w-175px">Chassis Series:</td>
                                        <td className="text-gray-800 min-w-200px">
                                            {car.chassisSeries}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Licence Plate:</td>
                                        <td className="text-gray-800">{car.licencePlate}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Mileage:</td>
                                        <td className="text-gray-800">{car.mileage}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-gray-400">Color:</td>
                                        <td className="text-gray-800">{car.color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mb-0">
                    <h5 className="mb-4">Tickets:</h5>
                    <div className="table-responsive">
                        <table className="table align-middle table-row-dashed fs-6 gy-4 mb-0">
                            <thead>
                                <tr className="border-bottom border-gray-200 text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                    <th className="min-w-150px">Title</th>
                                    <th className="min-w-125px">Status</th>
                                    <th className="min-w-125px">Type</th>
                                    <th className="min-w-125px">DateTime</th>
                                    <th className="text-end min-w-70px">(Action Columnn)</th>
                                </tr>
                            </thead>
                            <tbody className="fw-bold text-gray-800">
                            {ticketList && ticketList.map( (ticket, i) => 
                                <CarTicketItem ticket={ticket} key={i + 1} />
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetailsHeader;