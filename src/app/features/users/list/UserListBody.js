import UserListItem from "./body/UserListItem";

const UserListBody = (props) => {
    const { users } = props;

    return (
        <>
            <div className="card-body pt-0">
                <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                    <thead>
                        <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                            <th className="min-w-125px">User</th>
                            <th className="min-w-125px">Role</th>
                            <th className="min-w-125px">Last login</th>
                            <th className="min-w-125px">Car</th>
                            <th className="min-w-125px">Joined Date</th>
                            <th className="text-end min-w-100px">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 fw-bold">
                        {users && users.map((user, i) =>
                            <UserListItem key={i} user={user} />
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserListBody;