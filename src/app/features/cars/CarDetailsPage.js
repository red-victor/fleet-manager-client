import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarHistoryItem from "./CarHistoryItem";
import CarDetailsUser from "./CarDetailsUser";
import Layout from "../../layout/Layout";
import CarTicketItem from "./CarTicketItem";

const CarDetailsPage = () => {
    const {id} = useParams();
    const [car, setCar] = useState(null);
    const [historyList, setHistoryList] = useState(null);
    const [ticketList, setTicketList] = useState(null);

    useEffect(() => {
        getData();
    }, [setCar, setHistoryList, setTicketList])

    async function getData(){
        try {
            const carData = await agent.Cars.Get(id);
            const historyData = await agent.History.GetAllForCar(id);
            const ticketData = await agent.Tickets.GetAllForCar(id);
            console.log(carData);
            console.log(historyData);
            console.log(ticketData);
            setCar(carData);
            setHistoryList(historyData);
            setTicketList(ticketData)
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <Layout>
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
            {car &&
            <div className="content flex-row-fluid" id="kt_content">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
                        <div className="card card-flush pt-3 mb-5 mb-xl-10">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2 className="fw-bolder">{car.brand} {car.model} - {car.licencePlate}</h2>
                                </div>
                                <div className="card-toolbar">
                                    <a href="../../demo2/dist/apps/subscriptions/add.html" className="btn btn-light-primary">Update Car</a>
                                </div>
                            </div>
                            <div className="card-body pt-3">
                                <div className="mb-10">
                                    <h5 className="mb-4">Autovehicle Details:</h5>
                                    <div className="d-flex flex-wrap py-5">
                                        <div className="flex-equal me-5">
                                            <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
                                                <tr>
                                                    <td className="text-gray-400 min-w-175px w-175px">User:</td>
                                                    <td className="text-gray-800 min-w-200px">
                                                        {car.user ? car.user.firstName + " " + car.user.lastName : "None"}    
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
                                            </table>
                                        </div>
                                        <div className="flex-equal">
                                            <table className="table fs-6 fw-bold gs-0 gy-2 gx-2 m-0">
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
                                                <CarTicketItem ticket={ticket} index={i + 1} />
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-flush pt-3 mb-5 mb-xl-10">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>Current Tickets</h2>
                                </div>
                                <div className="card-toolbar">
                                    <a href="#" className="btn btn-light-primary">View All Tickets</a>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="table-responsive">
                                    <table className="table align-middle table-row-dashed fs-6 text-gray-600 fw-bold gy-5" id="kt_table_customers_events">
                                        <tbody>
                                            <tr>
                                                <td className="min-w-400px">Invoice
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary me-1">5196-2425</a>status has changed from
                                                <span className="badge badge-light-warning me-1">Pending</span>to
                                                <span className="badge badge-light-info">In Progress</span></td>
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">19 Aug 2021, 11:30 am</td>
                                            </tr>
                                            <tr>
                                                <td className="min-w-400px">
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary me-1">Emma Smith</a>has made payment to
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary">5944-7495</a></td>
                                                {/*end::Event=*/}
                                                {/*begin::Timestamp=*/}
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">22 Sep 2021, 11:05 am</td>
                                                {/*end::Timestamp=*/}
                                            </tr>
                                            {/*end::Table row*/}
                                            {/*begin::Table row*/}
                                            <tr>
                                                {/*begin::Event=*/}
                                                <td className="min-w-400px">Invoice
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary me-1">5196-2425</a>status has changed from
                                                <span className="badge badge-light-warning me-1">Pending</span>to
                                                <span className="badge badge-light-info">In Progress</span></td>
                                                {/*end::Event=*/}
                                                {/*begin::Timestamp=*/}
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2021, 11:30 am</td>
                                                {/*end::Timestamp=*/}
                                            </tr>
                                            {/*end::Table row*/}
                                            {/*begin::Table row*/}
                                            <tr>
                                                {/*begin::Event=*/}
                                                <td className="min-w-400px">
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary me-1">Max Smith</a>has made payment to
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary">7849-4019</a></td>
                                                {/*end::Event=*/}
                                                {/*begin::Timestamp=*/}
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2021, 9:23 pm</td>
                                                {/*end::Timestamp=*/}
                                            </tr>
                                            {/*end::Table row*/}
                                            {/*begin::Table row*/}
                                            <tr>
                                                {/*begin::Event=*/}
                                                <td className="min-w-400px">
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary me-1">Emma Smith</a>has made payment to
                                                <a href="#" className="fw-bolder text-gray-800 text-hover-primary">5944-7495</a></td>
                                                {/*end::Event=*/}
                                                {/*begin::Timestamp=*/}
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2021, 5:30 pm</td>
                                                {/*end::Timestamp=*/}
                                            </tr>
                                            {/*end::Table row*/}
                                        </tbody>
                                        {/*end::Table body*/}
                                    </table>
                                    {/*end::Table*/}
                                </div>
                                {/*end::Table wrapper*/}
                            </div>
                            {/*end::Card body*/}
                        </div>
                        <div className="card card-flush pt-3 mb-5 mb-xl-10">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>History</h2>
                                </div>
                                <div className="card-toolbar">
                                    <ul className="nav nav-stretch fs-5 fw-bold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a id="kt_referrals_year_tab" className="nav-link text-active-primary active" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_1">(Year Select - Pending...)</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a id="kt_referrals_2019_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_2">2020</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a id="kt_referrals_2018_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_3">2019</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a id="kt_referrals_2017_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab" href="#kt_customer_details_invoices_4">2018</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body pt-2">
                                <div id="kt_referred_users_tab_content" className="tab-content">
                                    <div id="kt_customer_details_invoices_1" className="tab-pane fade show active" role="tabpanel">
                                        <div className="table-responsive">
                                            <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0">
                                                <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bolder">
                                                    <tr className="text-start text-gray-400">
                                                        <th className="min-w-100px">ID</th>
                                                        <th className="min-w-100px">Cost</th>
                                                        <th className="min-w-100px">Type</th>
                                                        <th className="min-w-125px">ExecDate</th>
                                                        <th className="min-w-125px">Renew Date</th>
                                                        <th className="min-w-100px">Paid</th>
                                                        <th className="w-100px">(Pending...)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="fs-6 fw-bold text-gray-600">
                                                    {historyList && historyList.map( (history, i) => 
                                                        <CarHistoryItem history={history} index={i + 1} />
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CarDetailsUser user={car.user ? car.user : null}/>
                </div>
            </div>
            }
        </div>
        </Layout>
    );
}
 
export default CarDetailsPage;