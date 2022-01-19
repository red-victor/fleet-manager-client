import { useContext } from "react";
import UserContext from "../../../../../context/user-context";
import MailTo from "../../../../../layout/appComponents/MailTo";

const ProfileDetails = (props) => {
    const { user } = props;

    return (
        <>
            <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div className="card-header cursor-pointer">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Profile Details</h3>
                    </div>
                    <div className="btn btn-primary align-self-center">Edit Profile</div>
                </div>
                <div className="card-body p-9">
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Full Name</label>
                        <div className="col-lg-8">
                            <span className="fw-bolder fs-6 text-gray-800">{user.firstName + " " + user.lastName}</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Company</label>
                        <div className="col-lg-8 fv-row">
                            <span className="fw-bold text-gray-800 fs-6">Keenthemes</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Contact Phone
                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active" /></label>
                        <div className="col-lg-8 d-flex align-items-center">
                            <span className="fw-bolder fs-6 text-gray-800 me-2">{user.phoneNumber}</span>
                            <span className={"badge badge-" + (user.phoneNumberConfirmed ? "success" : "warning")}>
                                {user.phoneNumberConfirmed ? "Verified" : "Unverified"}
                            </span>
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
                        <label className="col-lg-4 fw-bold text-muted">Country
                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination" /></label>
                        <div className="col-lg-8">
                            <span className="fw-bolder fs-6 text-gray-800">Germany</span>
                        </div>
                    </div>
                    <div className="row mb-7">
                        <label className="col-lg-4 fw-bold text-muted">Communication</label>
                        <div className="col-lg-8">
                            <span className="fw-bolder fs-6 text-gray-800">Email, Phone</span>
                        </div>
                    </div>
                    <div className="row mb-10">
                        <label className="col-lg-4 fw-bold text-muted">Allow Changes</label>
                        <div className="col-lg-8">
                            <span className="fw-bold fs-6 text-gray-800">Yes</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetails;