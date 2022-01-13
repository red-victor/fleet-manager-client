import ProfilePlaceholder from "../../../../assets/img/Profile-Placeholder.png";
import UserContext from "../../../context/user-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const UserCard = () => {
    const userCtx = useContext(UserContext);
    console.log(userCtx);

    return ( 
        <>
            <div className="card-body">
                <div className="d-flex flex-center flex-column py-5">
                    <div className="symbol symbol-100px symbol-circle mb-7">
                        <img src={userCtx.user.photoUrl ? userCtx.user.photoUrl : ProfilePlaceholder} alt="image" />
                    </div>
                    <div className="fs-3 text-gray-800 text-hover-primary fw-bolder mb-3" style={{cursor: "default"}}>
                        { userCtx.user.firstName + " " + userCtx.user.lastName }
                    </div>
                    <div className="mb-9">
                        <div className="badge badge-lg badge-light-primary d-inline">Administrator</div>
                    </div>
                    <div className="fw-bolder mb-3">Assigned Tickets
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Number of support tickets assigned, closed and pending this week." />
                    </div>
                    <div className="d-flex flex-wrap flex-center">
                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                            <div className="fs-4 fw-bolder text-gray-700">
                                <span className="w-75px">243</span>
                                    <span className="svg-icon svg-icon-3 svg-icon-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="black" />
                                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
                                        </svg>
                                    </span>
                                </div>
                            <div className="fw-bold text-muted">Total</div>
                        </div>
                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                            <div className="fs-4 fw-bolder text-gray-700">
                                <span className="w-50px">56</span>
                                <span className="svg-icon svg-icon-3 svg-icon-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="black" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black" />
                                    </svg>
                                </span>
                            </div>
                            <div className="fw-bold text-muted">Solved</div>
                        </div>
                        <div className="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                            <div className="fs-4 fw-bolder text-gray-700">
                                <span className="w-50px">188</span>
                                <span className="svg-icon svg-icon-3 svg-icon-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="black" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
                                    </svg>
                                </span>
                            </div>
                            <div className="fw-bold text-muted">Open</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-stack fs-4 py-3">
                    <div className="fw-bolder rotate collapsible" data-bs-toggle="collapse" href="#kt_user_view_details" role="button" aria-expanded="false" aria-controls="kt_user_view_details">Details
                        <span className="ms-2 rotate-180">
                            <span className="svg-icon svg-icon-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                            </svg>
                            </span>
                        </span>
                    </div>
                    <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit customer details">
                    <a href="#" className="btn btn-sm btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_update_details">Edit</a>
                    </span>
                </div>
                <div className="separator" />
                <div id="kt_user_view_details" className="collapse show">
                    <div className="pb-5 fs-6">
                        <div className="fw-bolder mt-5">Account ID</div>
                        <div className="text-gray-600">{userCtx.user.id}</div>
                        <div className="fw-bolder mt-5">Email</div>
                        <div className="text-gray-600">
                            <a href="#" className="text-gray-600 text-hover-primary">{userCtx.user.email}</a>
                        </div>
                        <div className="fw-bolder mt-5">Car</div>
                        
                        {userCtx.user.car 
                            ? <Link to={ `/cars/${userCtx.user.car.id}` } className="text-gray-800 text-hover-primary mb-1">
                                {userCtx.user.car.brand + " " + userCtx.user.car.model}
                            </Link>
                            : <div className="text-gray-600">None</div>}
                        <div className="fw-bolder mt-5">Phone Number</div>
                        <div className="text-gray-600">{userCtx.user.phoneNumber ? userCtx.user.phoneNumber : "-"}</div>
                        <div className="fw-bolder mt-5">Last Login</div>
                        <div className="text-gray-600">10 Nov 2021, 6:43 am (placeholder)</div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UserCard;