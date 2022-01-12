import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarHistoryItem from "./CarHistoryItem";
import CarDetailsUser from "./CarDetailsUser";
import CarDetailsHeader from "./CarDetailsHeader";

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
                        <CarDetailsHeader car={car} ticketList={ticketList} />
                        <div className="card card-flush pt-3 mb-5 mb-xl-10">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>Ticket History</h2>
                                </div>
                                <div className="card-toolbar">
                                    <div className="btn btn-light-primary">View All Tickets</div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="table-responsive">
                                    <table className="table align-middle table-row-dashed fs-6 text-gray-600 fw-bold gy-5" id="kt_table_customers_events">
                                        <tbody>
                                            <tr>
                                                <td className="min-w-400px">Invoice
                                                    <span className="fw-bolder text-gray-800 text-hover-primary me-1">5196-2425</span>status has changed from
                                                    <span className="badge badge-light-warning me-1">Pending</span>to
                                                    <span className="badge badge-light-info">In Progress</span>
                                                </td>
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">19 Aug 2021, 11:30 am</td>
                                            </tr>
                                            <tr>
                                                <td className="min-w-400px">
                                                <span className="fw-bolder text-gray-800 text-hover-primary me-1">Emma Smith</span>has made payment to
                                                <span className="fw-bolder text-gray-800 text-hover-primary">5944-7495</span></td>
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">22 Sep 2021, 11:05 am</td>
                                            </tr>
                                            <tr>
                                                <td className="min-w-400px">Invoice
                                                <span className="fw-bolder text-gray-800 text-hover-primary me-1">5196-2425</span>status has changed from
                                                <span className="badge badge-light-warning me-1">Pending</span>to
                                                <span className="badge badge-light-info">In Progress</span></td>
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2021, 11:30 am</td>
                                            </tr>
                                            <tr>
                                                <td className="min-w-400px">
                                                <span className="fw-bolder text-gray-800 text-hover-primary me-1">Max Smith</span>has made payment to
                                                <span className="fw-bolder text-gray-800 text-hover-primary">7849-4019</span></td>
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2021, 9:23 pm</td>
                                            </tr>
                                            <tr>
                                                <td className="min-w-400px">
                                                <span className="fw-bolder text-gray-800 text-hover-primary me-1">Emma Smith</span>has made payment to
                                                <span className="fw-bolder text-gray-800 text-hover-primary">5944-7495</span></td>
                                                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2021, 5:30 pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card card-flush pt-3 mb-5 mb-xl-10">
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>History</h2>
                                </div>
                                <div className="card-toolbar">
                                    <ul className="nav nav-stretch fs-5 fw-bold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <div id="kt_referrals_year_tab" className="nav-link text-active-primary active" data-bs-toggle="tab" role="tab">(Year Select - Pending...)</div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <div id="kt_referrals_2019_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab">2020</div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <div id="kt_referrals_2018_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab">2019</div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <div id="kt_referrals_2017_tab" className="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab">2018</div>
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
                                                        <CarHistoryItem history={history} key={i + 1} />
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CarDetailsUser car={car} user={car.user ? car.user : null} handleDissociateUser={handleDissociateUser} />
                </div>
            </div>
            }
        </div>
    );
}
 
export default CarDetailsPage;