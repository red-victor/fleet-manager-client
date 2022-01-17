import UserList from "./list/UserList";
import { useState } from "react";

const UserListPage = () => {
    const [, setShowAddUserModal] = useState(false);
    const handleShowAddUserModal = () => setShowAddUserModal(prevState => {
        console.log(!prevState)
        return !prevState
    })

    return (
        <>
            <UserList handleShowAddUserModal={handleShowAddUserModal} />
        </>
    );
}

export default UserListPage;