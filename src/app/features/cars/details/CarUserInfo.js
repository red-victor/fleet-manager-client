import ProfileImage from "../../../../assets/media/avatars/blank.png";
import { Link } from "react-router-dom";

const CarUserInfo = ({user, handleDissociateUser}) => {
    return (
        <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2">
            <div className="card card-flush mb-0" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                <div className="card-header">
                    <div className="card-title">
                        <h2>User</h2>
                    </div>
                </div>
                <div className="card-body pt-0 fs-6">
                    <div className="mb-7">
                        <div className="d-flex align-items-center">
                            <div className="symbol symbol-60px symbol-circle me-3">
                                <img alt="Pic" src={ProfileImage} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="fs-4 fw-bolder text-gray-900 text-hover-primary me-2">
                                    {user 
                                        ? <Link to={ `/users/${user.id}` } className="text-gray-800 text-hover-primary mb-1">
                                            {user.firstName + " " + user.lastName}
                                        </Link>
                                        : "None"}
                                </div>
                                <div className="fw-bold text-gray-600 text-hover-primary">{user.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-dashed mb-7"></div>
                    <div className="mb-7">
                        <h5 className="mb-4">Expenses (Pending)</h5>
                        <div className="mb-0">
                            <span className="badge badge-light-info me-2">Total</span>
                            <span className="fw-bold text-gray-600">€149.99</span>
                        </div>
                    </div>
                    <div className="separator separator-dashed mb-7"></div>
                    <div className="mb-10">
                        <h5 className="mb-4">User Details</h5>
                        <table className="table fs-6 fw-bold gs-0 gy-2 gx-2">
                            <tbody>
                                <tr className="">
                                    <td className="text-gray-400">Username:</td>
                                    <td className="text-gray-800">{user.userName}</td>
                                </tr>
                                <tr className="">
                                    <td className="text-gray-400">Email:</td>
                                    <td className="text-gray-800">{user.email}</td>
                                </tr>
                                <tr className="">
                                    <td className="text-gray-400">Role:</td>
                                    <td>
                                        <span className="badge badge-light-primary">Admin</span>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="text-gray-400">Phone Number:</td>
                                    <td className="text-gray-800">{user.phoneNumber ? user.phoneNumber : "-"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-0">
                        <button className="btn btn-danger" onClick={handleDissociateUser}>Dissociate User</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarUserInfo;