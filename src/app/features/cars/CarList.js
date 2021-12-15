import agent from "../../api/agent";
import { useState, useEffect } from "react";
import CarListItem from "./CarListItem";
import Layout from "../../layout/Layout";

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
        <Layout>
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
            <div className="content flex-row-fluid" id="kt_content">
                <div className="card">
                    <div className="card-header border-0 pt-6">
                        <div className="card-title">
                            <div className="d-flex align-items-center position-relative my-1">
                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                    </svg>
                                </span>
                                <input type="text" data-kt-subscription-table-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search Subscriptions" />
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="d-flex justify-content-end" data-kt-subscription-table-toolbar="base">
                                <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
                                    </svg>
                                </span>
                                Filter</button>

                                <a href="#" className="btn btn-primary">
                                <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                    </svg>
                                </span>
                                Add Car(Pending...)</a>
                            </div>
                        </div>
                    </div>
                    <div classNameName="card-body pt-0">
                        <table classNameName="table align-middle table-row-dashed fs-6 gy-5" id="kt_subscriptions_table">
                            <thead>
                                <tr classNameName="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                    <th classNameName="w-10px pe-2">Count</th>
                                    <th classNameName="min-w-125px">Car (brand, model)</th>
                                    <th classNameName="min-w-125px">User</th>
                                    <th classNameName="min-w-125px">Licence Plate Number</th>
                                    <th classNameName="min-w-125px">Mileage</th>
                                    <th classNameName="min-w-125px">First Registration</th>
                                    <th classNameName="text-end min-w-70px">Actions</th>
                                </tr>
                            </thead>
                            <tbody classNameName="text-gray-600 fw-bold">
                                {cars && cars.map( (car, i) => 
                                <CarListItem car={car} index={i + 1} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
     );
}
 
export default CarList;