import { useState, useEffect } from "react";
import agent from "../../api/agent";
import AddUserModal from "./list/modal/AddUserModal";
import UserListHeader from "./list/UserListHeader";
import UserListBody from "./list/UserListBody";
import UploadFileModal from "../../layout/appComponents/UploadFileModal";

const UserListPage = () => {
    const [users, setUsers] = useState(null);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showUploadExcelModal, setShowUploadExcelModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(false);

    const handleShowAddUserModal = () => setShowAddUserModal(prevState => { return !prevState })

    const handleShowUploadExcelModal = () => setShowUploadExcelModal(prevState => setShowUploadExcelModal(!prevState));

    useEffect(() => {
        getData();
    }, [setUsers])

    async function getData() {
        setIsFetchingData(true);
        const data = await agent.Users.GetAll();
        setUsers(data);
        setIsFetchingData(false);
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

    const uploadFile = formData => {
        setIsSubmitting(true);
        console.log(formData.get('File'));
        agent.Files.UploadUserExcel({ file: formData })
            .then(() => {
                getData();
                setShowUploadExcelModal(false);
            })
            .catch(e => console.log(e))
            .finally(() => setIsSubmitting(false));
    }

    const searchUsers = async str => {
        setIsFetchingData(true);
        if (str.trim() === "") {
            await getData();
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
            {showUploadExcelModal &&
                <UploadFileModal closeModal={handleShowUploadExcelModal} uploadFile={uploadFile} isSubmitting={isSubmitting} title={"Upload User List Excel"} />}

            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card">

                        <UserListHeader 
                            handleShowAddUserModal={handleShowAddUserModal} 
                            handleShowUploadExcelModal={handleShowUploadExcelModal}
                            searchUsers={searchUsers} isFetchingData={isFetchingData} />

                        <UserListBody users={users} isFetchingData={isFetchingData} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListPage;