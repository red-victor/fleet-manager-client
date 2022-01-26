import { useState, useEffect } from "react";
import agent from "../../api/agent";
import AddUserModal from "./list/modal/AddUserModal";
import UserListHeader from "./list/UserListHeader";
import UserListBody from "./list/UserListBody";

const UserListPage = () => {
    const [users, setUsers] = useState(null);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(false);

    const handleShowAddUserModal = () => setShowAddUserModal(prevState => {
        return !prevState
    })

    useEffect(() => {
        getAllUsers();
    }, [setUsers])

    async function getAllUsers() {
        setIsFetchingData(true);
        const data = await agent.Users.GetAll();
        setUsers(data);
        setIsFetchingData(false);
    }

    const registerUser = formValues => {
        setIsSubmitting(true);
        agent.Account.register(formValues)
            .then(() => {
                getAllUsers();
                setShowAddUserModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    const searchUsers = async str => {
        setIsFetchingData(true);
        if (str.trim() === "") {
            await getAllUsers();
            setIsFetchingData(false);
        }
        else {
            agent.Users.Search(str)
                .then(users => setUsers(users))
                .catch(e => console.log(e))
                .finally(() => setIsFetchingData(false));
        }
        
    }

    return (
        <>
            {showAddUserModal &&
                <AddUserModal closeModal={handleShowAddUserModal} registerUser={registerUser} isSubmitting={isSubmitting} />}

            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card">

                        <UserListHeader handleShowAddUserModal={handleShowAddUserModal} searchUsers={searchUsers} isFetchingData={isFetchingData} />

                        <UserListBody users={users} isFetchingData={isFetchingData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListPage;