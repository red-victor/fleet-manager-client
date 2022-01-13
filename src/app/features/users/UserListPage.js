import { useState } from "react";
import UserList from "./UserList";

const UserListPage = () => {
    const [_, setShowAddUserModal] = useState(false);
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