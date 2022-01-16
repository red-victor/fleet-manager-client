import CarTicketItem from "./CarTicketItem";

const CarTickets = (props) => {
    const { ticketList } = props;

    return (
        <>
            <div className="card card-flush mb-0" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                <div className="card-header">
                    <div className="card-title">
                        <h2>Tickets</h2>
                    </div>
                </div>

                {ticketList && ticketList.length > 0 ?
                    <div className="card-body pt-3">
                        <div className="mb-0">
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
                                        {ticketList && ticketList.map((ticket, i) =>
                                            <CarTicketItem ticket={ticket} key={i + 1} />
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    : <h3 style={{ marginLeft: "50px" }}>No Tickets yet!</h3>
                }
            </div>
        </>
    );
}

export default CarTickets;