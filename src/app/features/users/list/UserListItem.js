import ProfilePlaceholder from "../../../../assets/img/Profile-Placeholder.png";
import {Link} from "react-router-dom";

const UserListItem = (props) => {
    const {user} = props;


    return ( 
        <>
            <tr>
                <td className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="../../demo2/dist/apps/user-management/users/view.html">
                            <div className="symbol-label">
                                <img src={user.photoUrl ? user.photoUrl : ProfilePlaceholder} className="w-100" />
                            </div>
                        </a>
                    </div>
                    <div className="d-flex flex-column">
                        <Link to={ `/users/${user.id}` } className="text-gray-800 text-hover-primary mb-1">
                             {user.firstName + " " + user.lastName}
                        </Link>
                        <span>{user.email}</span>
                    </div>
                </td>
                <td>Administrator</td>
                <td>
                    <div className="badge badge-light fw-bolder">Yesterday</div>
                </td>
                <td>
                    {user.car 
                            ? <Link to={ `/cars/${user.car.id}` } className="badge badge-light-success">
                            {user.car.brand + " " + user.car.model}
                        </Link>
                        : <div className="badge badge-light-warning">None</div>}
                </td>
                <td>24 Jun 2021, 2:40 pm</td>
                <td className="text-end">
                    <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                            </svg>
                        </span>
                    </a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                        <div className="menu-item px-3">
                            <a href="../../demo2/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                    </div>
                </td>
            </tr>
        </>
     );
}
 
export default UserListItem;