import { useContext, useState, useEffect } from "react";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";
import UserHeader from "./UserHeader";
import OverviewTab from "./tabs/overview/OverviewTab";
import MyProfileTab from "./tabs/profile/MyProfileTab";
import SettingsTab from "./tabs/settings/SettingsTab";
import LogsTab from "./tabs/logsTab/LogsTab";
import TabNavItem from "./TabNavItem";

const UserDashboard = () => {
    const userCtx = useContext(UserContext);
    const [tickets, setTickets] = useState(null);
    const [histories, setHistories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState("overview");

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
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <>Loading...</>

    return (
        <>
            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card mb-5 mb-xl-10">
                        <div className="card-body pt-9 pb-0">

                            <UserHeader user={userCtx.user} />

                            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                            <TabNavItem tab={tab} setTab={setTab} tabFor="overview" >Overview</TabNavItem>
                            <TabNavItem tab={tab} setTab={setTab} tabFor="profile" >Profile</TabNavItem>
                            <TabNavItem tab={tab} setTab={setTab} tabFor="settings" >Settings</TabNavItem>
                            <TabNavItem tab={tab} setTab={setTab} tabFor="logs" >Logs</TabNavItem>
                        </ul>

                        </div>
                    </div>
                    {(tab === "overview") && <OverviewTab tickets={tickets} histories={histories} />}
                    {(tab == "profile") && <MyProfileTab />} 
                    {(tab == "settings") && <SettingsTab />} 
                    {(tab == "logs") && <LogsTab /> }

                </div>
            </div>
        </>
    );
}

export default UserDashboard;