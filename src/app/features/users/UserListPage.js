import { useState, useEffect } from "react";
import agent from "../../api/agent";
import AddUserModal from "./list/modal/AddUserModal";
import UserListHeader from "./list/UserListHeader";
import UserListBody from "./list/UserListBody";

const UserListPage = () => {
    const [users, setUsers] = useState(null);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShowAddUserModal = () => setShowAddUserModal(prevState => {
        return !prevState
    })

    useEffect(() => {
        getData();
    }, [setUsers])

    async function getData() {
        const data = await agent.Users.GetAll();
        setUsers(data);
    }

    const registerUser = formValues => {
        setIsSubmitting(true);
        agent.Account.register(formValues)
            .then(() => {
                getData();
                setShowAddUserModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    return (
        <>
            {showAddUserModal &&
                <AddUserModal closeModal={handleShowAddUserModal} registerUser={registerUser} isSubmitting={isSubmitting} />}

            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card">

                        <UserListHeader handleShowAddUserModal={handleShowAddUserModal} />

                        <UserListBody users={users} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListPage;