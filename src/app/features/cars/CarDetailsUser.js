import ProfileImage from "../../../assets/img/adi-ferentari.jpg";
import { useEffect, useState } from "react";
import agent from "../../api/agent";

const CarDetailsUser = (props) => {
    const {car, user, handleDissociateUser} = props;

    if (user)
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
                                    <a href="#" className="fs-4 fw-bolder text-gray-900 text-hover-primary me-2">
                                        {user.firstName + " " + user.lastName}
                                    </a>
                                    <a href="#" className="fw-bold text-gray-600 text-hover-primary">{user.email}</a>
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
                        {/* <div className="mb-10">
                            <h5 className="mb-4">User Tickets</h5>
                            <div className="mb-0">
                                <div className="fw-bold text-gray-600 d-flex align-items-center">Mastercard
                                <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px ms-2" alt="" /></div>
                                <div className="fw-bold text-gray-600">Expires Dec 2024</div>
                            </div>
                        </div> */}
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
                                            <span className="badge badge-light-danger">Admin</span>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="text-gray-400">Phone Number:</td>
                                        <td className="text-gray-800">{user.phoneNumber}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-0">
                            <button className="btn btn-primary" onClick={handleDissociateUser}>Dissociate User (Functionality Pending...)</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return(
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2">
                <div className="card card-flush mb-0" data-kt-sticky="true" data-kt-sticky-name="subscription-summary" data-kt-sticky-offset="{default: false, lg: '200px'}" data-kt-sticky-width="{lg: '250px', xl: '300px'}" data-kt-sticky-left="auto" data-kt-sticky-top="150px" data-kt-sticky-animation="false" data-kt-sticky-zindex="95">
                    <div className="card-header">
                        <div className="card-title">
                            <h2>No User Yet!</h2>
                        </div>
                    </div>
                    <div className="card-body pt-0 fs-6">
                        <div className="mb-0">
                            <a href="#" className="btn btn-primary">Assign User (Functionality Pending...)</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}
 
export default CarDetailsUser;