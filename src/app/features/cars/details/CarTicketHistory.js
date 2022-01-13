const CarTicketHistory = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default CarTicketHistory;