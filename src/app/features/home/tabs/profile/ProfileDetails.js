import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../../context/user-context";
import MailTo from "../../../../layout/appComponents/MailTo";
import utils from "../../../../utils/utils";

const ProfileDetails = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div className="card-header">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Profile Details</h3>
                    </div>
                    <a href="../../demo2/dist/account/settings.html" className="btn btn-primary align-self-center">Edit Profile</a>
                </div>
                <div className="card-body p-9">
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Full Name</label>
                        <div className="col-lg-8">
                            <span className="fw-bolder fs-6 text-gray-800">{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Email</label>
                        <div className="col-lg-8">
                            {/* <a href="#" className="fw-bold fs-6 text-gray-800 text-hover-primary">{user.email}</a> */}
                            <div className="fw-bold fs-6 text-gray-800 text-hover-primary">
                                <MailTo mailto={user.email} />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Contact Phone
                            {user.phoneNumberConfirmed ? "" : <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active" />}</label>
                        <div className="col-lg-8 d-flex align-items-center">
                            <span className="fw-bold fs-6 text-gray-800 me-2">{user.phoneNumber}</span>
                            <span className={"badge badge-" + (user.phoneNumberConfirmed ? "success" : "warning")}>
                                {user.phoneNumberConfirmed ? "Verified" : "Unverified"}
                            </span>
                        </div>
                    </div>

                    {/* TODO: Add validation for admin */}
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">CNP</label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">{user.cNP}</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Address</label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">{user.adress}</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Car</label>
                        <div className="col-lg-8">
                            <Link to={`/cars/${user.car.id}`} className="fw-bold fs-6 text-primary">{user.car.brand} {user.car.model} ({new Date(user.car.firstRegistrationDate).getFullYear()})</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetails;