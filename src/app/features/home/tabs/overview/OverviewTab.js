import MyTicketHistory from "./tickets/MyTicketHistory";
import MySolvedHistories from "./history/MySolvedHistories";
import Tickets from "./tickets/Tickets";

const OverviewTab = (props) => {
    const { tickets, histories, showHistoryModal, setTicketFormData } = props;

    return (
        <>
            <div className="row g-5 g-xl-8">
                <Tickets tickets={tickets} showHistoryModal={showHistoryModal} setTicketFormData={setTicketFormData} />
                <MySolvedHistories histories={histories} />
            </div>
            <MyTicketHistory />
        </>
    );
}

export default OverviewTab;