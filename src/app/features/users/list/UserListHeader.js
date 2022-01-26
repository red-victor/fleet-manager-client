import UserListAdd from "./toolbar/UserListAdd";
import UserListExport from "./toolbar/UserListExport";
import UserListFilter from "./toolbar/UserListFilter";
import UserListSearch from "./toolbar/UserListSearch";

const UserListHeader = (props) => {
    const { handleShowAddUserModal, searchUsers, isFetchingData } = props;

    return (
        <>
            <div className="card-header border-0 pt-6">
                <div className="card-title">
                    <UserListSearch searchUsers={searchUsers} isLoading={isFetchingData} />
                </div>
                <div className="card-toolbar">
                    <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                        <UserListFilter />
                        <UserListExport />
                        <UserListAdd handleShowAddUserModal={handleShowAddUserModal} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListHeader;