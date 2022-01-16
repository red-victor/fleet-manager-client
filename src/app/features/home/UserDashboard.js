import { useContext, useState, useEffect } from "react";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";
import UserHeader from "../users/details/UserHeader";
import ProfileNav from "./ProfileNav";
import OverviewTab from "./tabs/overview/OverviewTab";
import MyProfileTab from "./tabs/profile/MyProfileTab";
import SettingsTab from "./tabs/settings/SettingsTab";
import LogsTab from "./tabs/logs/LogsTab";

const UserDashboard = () => {
    const userCtx = useContext(UserContext);
    const [tickets, setTickets] = useState(null);
    const [histories, setHistories] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const ticketData = await agent.Tickets.GetAll();
            const historyData = await agent.History.GetAll();
            setTickets(ticketData);
            setHistories(historyData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {userCtx.user &&
                <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                    <div className="content flex-row-fluid" id="kt_content">
                        <div className="card mb-5 mb-xl-10">
                            <div className="card-body pt-9 pb-0">

                                <UserHeader user={userCtx.user} />

                                <ProfileNav />

                            </div>
                        </div>
                        {tickets && histories && <OverviewTab tickets={tickets} histories={histories} />}
                        {/* <MyProfileTab /> */}
                        {/* <SettingsTab /> */}
                        {/* <LogsTab /> */}

                    </div>
                </div>
            }
        </>
    );
}

export default UserDashboard;