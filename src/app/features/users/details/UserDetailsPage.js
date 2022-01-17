import agent from "../../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import BlankUserImg from "../../../../assets/media/avatars/blank.png"
import ProfileNav from "./ProfileNav";
import OverviewTab from "./tabs/overview/OverviewTab";
import MyProfileTab from "./tabs/profile/MyProfileTab";
import SettingsTab from "./tabs/settings/SettingsTab";
import LogsTab from "./tabs/logsTab/LogsTab";

const UserDetailsPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState(null);
    const [histories, setHistories] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const userData = await agent.Users.Get(id);
            const ticketsData = await agent.Tickets.GetAllForUser(id);
            const historyData = await agent.History.GetAllForUser(id);
            setUser(userData);
            setTickets(ticketsData);
            setHistories(historyData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {user &&
                <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                    <div className="content flex-row-fluid" id="kt_content">
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pt-9 pb-0">

                                <UserHeader user={user} />

                                <ProfileNav />

                            </div>
                        </div>

                        {tickets && histories && <OverviewTab tickets={tickets} histories={histories} />}
                        {/* <MyProfileTab user={user} /> */}
                        {/* <SettingsTab user={user}/> */}
                        {/* <LogsTab /> */}

                        <div className="row g-5 g-xxl-8">
                            <div className="col-xl-6">

                            </div>
                            <div className="col-xl-6">

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default UserDetailsPage;