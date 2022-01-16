import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserHeader from "./details/UserHeader";
import BlankUserImg from "../../../assets/media/avatars/blank.png"

const UserDetailsPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const userData = await agent.Users.Get(id);
            setUser(userData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {user &&
                <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                    <div className="content flex-row-fluid" id="kt_content">
                        <div className="card mb-5 mb-xxl-8">
                            <div className="card-body pt-9 pb-0">

                                <UserHeader user={user} />

                                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                                    <li className="nav-item mt-2">
                                        <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo2/dist/pages/profile/overview.html">Overview</a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/pages/profile/projects.html">Projects</a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/pages/profile/campaigns.html">Campaigns</a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/pages/profile/documents.html">Documents</a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/pages/profile/followers.html">Followers</a>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/pages/profile/activity.html">Activity</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row g-5 g-xxl-8">
                            {/*begin::Col*/}
                            <div className="col-xl-6">
                                {/*begin::Feeds Widget 2*/}
                                <div className="card mb-5 mb-xxl-8">
                                    {/*begin::Body*/}
                                    <div className="card-body pb-0">
                                        {/*begin::Header*/}
                                        <div className="d-flex align-items-center mb-5">
                                            {/*begin::User*/}
                                            <div className="d-flex align-items-center flex-grow-1">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-45px me-5">
                                                    <img src={BlankUserImg} alt="" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Info*/}
                                                <div className="d-flex flex-column">
                                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bolder">Nick Logan</a>
                                                    <span className="text-gray-400 fw-bold">PHP, SQLite, Artisan CLI</span>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::Menu*/}
                                            <div className="my-0">
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                                <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 2*/}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Quick Actions</div>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator mb-3 opacity-75" />
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Customer</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                        {/*begin::Menu item*/}
                                                        <a href="#" className="menu-link px-3">
                                                            <span className="menu-title">New Group</span>
                                                            <span className="menu-arrow" />
                                                        </a>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu sub*/}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Member Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                        </div>
                                                        {/*end::Menu sub*/}
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Contact</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator mt-3 opacity-75" />
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content px-3 py-3">
                                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                        </div>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu 2*/}
                                            </div>
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Post*/}
                                        <div className="mb-5">
                                            {/*begin::Text*/}
                                            <p className="text-gray-800 fw-normal mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>
                                            {/*end::Text*/}
                                            {/*begin::Toolbar*/}
                                            <div className="d-flex align-items-center mb-5">
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                    <span className="svg-icon svg-icon-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                                            <rect x={6} y={12} width={7} height={2} rx={1} fill="black" />
                                                            <rect x={6} y={7} width={12} height={2} rx={1} fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}120</a>
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}15</a>
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Post*/}
                                        {/*begin::Separator*/}
                                        <div className="separator mb-4" />
                                        {/*end::Separator*/}
                                        {/*begin::Reply input*/}
                                        <form className="position-relative mb-6">
                                            <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                            <div className="position-absolute top-0 end-0 me-n5">
                                                <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                    <span className="svg-icon svg-icon-3 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="black" />
                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                                <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                    <span className="svg-icon svg-icon-2 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </form>
                                        {/*edit::Reply input*/}
                                    </div>
                                    {/*end::Body*/}
                                </div>
                                {/*end::Feeds Widget 2*/}
                                {/*begin::Feeds Widget 3*/}
                                <div className="card mb-5 mb-xxl-8">
                                    {/*begin::Body*/}
                                    <div className="card-body pb-0">
                                        {/*begin::Header*/}
                                        <div className="d-flex align-items-center mb-3">
                                            {/*begin::User*/}
                                            <div className="d-flex align-items-center flex-grow-1">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-45px me-5">
                                                    <img src={BlankUserImg} alt="" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Info*/}
                                                <div className="d-flex flex-column">
                                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bolder">Carles Nilson</a>
                                                    <span className="text-gray-400 fw-bold">Yestarday at 5:06 PM</span>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::Menu*/}
                                            <div className="my-0">
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                                <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 2*/}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Quick Actions</div>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator mb-3 opacity-75" />
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Customer</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                        {/*begin::Menu item*/}
                                                        <a href="#" className="menu-link px-3">
                                                            <span className="menu-title">New Group</span>
                                                            <span className="menu-arrow" />
                                                        </a>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu sub*/}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Member Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                        </div>
                                                        {/*end::Menu sub*/}
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Contact</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator mt-3 opacity-75" />
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content px-3 py-3">
                                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                        </div>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu 2*/}
                                            </div>
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Post*/}
                                        <div className="mb-7">
                                            {/*begin::Text*/}
                                            <div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>
                                            {/*end::Text*/}
                                            {/*begin::Toolbar*/}
                                            <div className="d-flex align-items-center mb-5">
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                    <span className="svg-icon svg-icon-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                                            <rect x={6} y={12} width={7} height={2} rx={1} fill="black" />
                                                            <rect x={6} y={7} width={12} height={2} rx={1} fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}12</a>
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}150</a>
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Post*/}
                                        {/*begin::Replies*/}
                                        <div className="mb-7 ps-10">
                                            {/*begin::Reply*/}
                                            <div className="d-flex mb-5">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-45px me-5">
                                                    <img src={BlankUserImg} alt="" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Info*/}
                                                <div className="d-flex flex-column flex-row-fluid">
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center flex-wrap mb-1">
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bolder me-2">Alice Danchik</a>
                                                        <span className="text-gray-400 fw-bold fs-7">1 day</span>
                                                        <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7">Reply</a>
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Post*/}
                                                    <span className="text-gray-800 fs-7 fw-normal pt-1">Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write.</span>
                                                    {/*end::Post*/}
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Reply*/}
                                            {/*begin::Reply*/}
                                            <div className="d-flex">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-45px me-5">
                                                    <img src={BlankUserImg} alt="" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Info*/}
                                                <div className="d-flex flex-column flex-row-fluid">
                                                    {/*begin::Info*/}
                                                    <div className="d-flex align-items-center flex-wrap mb-1">
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bolder me-2">Harris Bold</a>
                                                        <span className="text-gray-400 fw-bold fs-7">2 days</span>
                                                        <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7">Reply</a>
                                                    </div>
                                                    {/*end::Info*/}
                                                    {/*begin::Post*/}
                                                    <span className="text-gray-800 fs-7 fw-normal pt-1">Outlines keep you honest. They stop you from indulging in poorly</span>
                                                    {/*end::Post*/}
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Reply*/}
                                        </div>
                                        {/*end::Replies*/}
                                        {/*begin::Separator*/}
                                        <div className="separator mb-4" />
                                        {/*end::Separator*/}
                                        {/*begin::Reply input*/}
                                        <form className="position-relative mb-6">
                                            <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                            <div className="position-absolute top-0 end-0 me-n5">
                                                <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                    <span className="svg-icon svg-icon-3 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="black" />
                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                                <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                    <span className="svg-icon svg-icon-2 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </form>
                                        {/*edit::Reply input*/}
                                    </div>
                                    {/*end::Body*/}
                                </div>
                                {/*end::Feeds Widget 3*/}
                                {/*begin::Feeds Widget 4*/}
                                <div className="card mb-5 mb-xxl-8">
                                    {/*begin::Body*/}
                                    <div className="card-body pb-0">
                                        {/*begin::Header*/}
                                        <div className="d-flex align-items-center mb-5">
                                            {/*begin::User*/}
                                            <div className="d-flex align-items-center flex-grow-1">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-45px me-5">
                                                    <img src={BlankUserImg} alt="" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Info*/}
                                                <div className="d-flex flex-column">
                                                    <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bolder">Carles Nilson</a>
                                                    <span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::Menu*/}
                                            <div className="my-0">
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                                <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 3*/}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                                    {/*begin::Heading*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Create Invoice</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Generate Bill</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                        <a href="#" className="menu-link px-3">
                                                            <span className="menu-title">Subscription</span>
                                                            <span className="menu-arrow" />
                                                        </a>
                                                        {/*begin::Menu sub*/}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Plans</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Billing</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Statements</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu separator*/}
                                                            <div className="separator my-2" />
                                                            {/*end::Menu separator*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <div className="menu-content px-3">
                                                                    {/*begin::Switch*/}
                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                                                                        {/*end::Input*/}
                                                                        {/*end::Label*/}
                                                                        <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                        {/*end::Label*/}
                                                                    </label>
                                                                    {/*end::Switch*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                        </div>
                                                        {/*end::Menu sub*/}
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3 my-1">
                                                        <a href="#" className="menu-link px-3">Settings</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu 3*/}
                                            </div>
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Post*/}
                                        <div className="mb-7">
                                            {/*begin::Text*/}
                                            <div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>
                                            {/*end::Text*/}
                                            {/*begin::Toolbar*/}
                                            <div className="d-flex align-items-center mb-5">
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                    <span className="svg-icon svg-icon-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                                            <rect x={6} y={12} width={7} height={2} rx={1} fill="black" />
                                                            <rect x={6} y={7} width={12} height={2} rx={1} fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}22</a>
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}59</a>
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Post*/}
                                        {/*begin::Separator*/}
                                        <div className="separator mb-4" />
                                        {/*end::Separator*/}
                                        {/*begin::Reply input*/}
                                        <form className="position-relative mb-6">
                                            <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                            <div className="position-absolute top-0 end-0 me-n5">
                                                <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                    <span className="svg-icon svg-icon-3 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="black" />
                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                                <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                    <span className="svg-icon svg-icon-2 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </form>
                                        {/*edit::Reply input*/}
                                    </div>
                                    {/*end::Body*/}
                                </div>
                                {/*end::Feeds Widget 4*/}
                                {/*begin::Feeds widget 5*/}
                                <div className="card d-none" id="kt_widget_5">
                                    {/*begin::Body*/}
                                    <div className="card-body pb-0">
                                        {/*begin::Header*/}
                                        <div className="d-flex align-items-center mb-5">
                                            {/*begin::User*/}
                                            <div className="d-flex align-items-center flex-grow-1">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-45px me-5">
                                                    <img src={BlankUserImg} alt="" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Info*/}
                                                <div className="d-flex flex-column">
                                                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Carles Nilson</a>
                                                    <span className="text-gray-400 fw-bold">Last week at 10:00 PM</span>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::Menu*/}
                                            <div className="my-0">
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                                <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                                <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 2*/}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Quick Actions</div>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator mb-3 opacity-75" />
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Ticket</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Customer</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                        {/*begin::Menu item*/}
                                                        <a href="#" className="menu-link px-3">
                                                            <span className="menu-title">New Group</span>
                                                            <span className="menu-arrow" />
                                                        </a>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu sub*/}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Admin Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Staff Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Member Group</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                        </div>
                                                        {/*end::Menu sub*/}
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">New Contact</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator mt-3 opacity-75" />
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content px-3 py-3">
                                                            <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                        </div>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu 2*/}
                                            </div>
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Post*/}
                                        <div className="mb-7">
                                            {/*begin::Image*/}
                                            <div className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5" style={{ backgroundImage: 'url("../../../assets/media/stock/900x600/19.jpg")' }} />
                                            {/*end::Image*/}
                                            {/*begin::Text*/}
                                            <div className="text-gray-800 mb-5">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</div>
                                            {/*end::Text*/}
                                            {/*begin::Toolbar*/}
                                            <div className="d-flex align-items-center mb-5">
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                                    <span className="svg-icon svg-icon-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                                            <rect x={6} y={12} width={7} height={2} rx={1} fill="black" />
                                                            <rect x={6} y={7} width={12} height={2} rx={1} fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}20</a>
                                                <a href="#" className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}50</a>
                                            </div>
                                            {/*end::Toolbar*/}
                                        </div>
                                        {/*end::Post*/}
                                        {/*begin::Separator*/}
                                        <div className="separator mb-4" />
                                        {/*end::Separator*/}
                                        {/*begin::Reply input*/}
                                        <form className="position-relative mb-6">
                                            <textarea className="form-control border-0 p-0 pe-10 resize-none min-h-25px" data-kt-autosize="true" rows={1} placeholder="Reply.." defaultValue={""} />
                                            <div className="position-absolute top-0 end-0 me-n5">
                                                <span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
                                                    <span className="svg-icon svg-icon-3 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="black" />
                                                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                                <span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                                                    <span className="svg-icon svg-icon-2 mb-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                                            <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </span>
                                            </div>
                                        </form>
                                        {/*edit::Reply input*/}
                                    </div>
                                    {/*end::Body*/}
                                </div>
                                {/*end::Feeds widget 5*/}
                                {/*begin::Feeds widget 4, 5 load more*/}
                                <button className="btn btn-primary w-100 text-center" id="kt_widget_5_load_more_btn">
                                    <span className="indicator-label">More Feeds</span>
                                    <span className="indicator-progress">Loading...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                </button>
                                {/*end::Feeds widget 4, 5 load more*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-xl-6">
                                {/*begin::Charts Widget 1*/}
                                <div className="card mb-5 mb-xxl-8">
                                    {/*begin::Header*/}
                                    <div className="card-header border-0 pt-5">
                                        {/*begin::Title*/}
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="card-label fw-bolder fs-3 mb-1">Recent Statistics</span>
                                            <span className="text-muted fw-bold fs-7">More than 400 new members</span>
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Toolbar*/}
                                        <div className="card-toolbar">
                                            {/*begin::Menu*/}
                                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                            <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                        </g>
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                            </button>
                                            {/*begin::Menu 1*/}
                                            <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61a08dbf1bb04">
                                                {/*begin::Header*/}
                                                <div className="px-7 py-5">
                                                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator border-gray-200" />
                                                {/*end::Menu separator*/}
                                                {/*begin::Form*/}
                                                <div className="px-7 py-5">
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Status:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <div>
                                                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61a08dbf1bb04" data-allow-clear="true">
                                                                <option />
                                                                <option value={1}>Approved</option>
                                                                <option value={2}>Pending</option>
                                                                <option value={2}>In Process</option>
                                                                <option value={2}>Rejected</option>
                                                            </select>
                                                        </div>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Member Type:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Options*/}
                                                        <div className="d-flex">
                                                            {/*begin::Options*/}
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                                <span className="form-check-label">Author</span>
                                                            </label>
                                                            {/*end::Options*/}
                                                            {/*begin::Options*/}
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                                                                <span className="form-check-label">Customer</span>
                                                            </label>
                                                            {/*end::Options*/}
                                                        </div>
                                                        {/*end::Options*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Notifications:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Switch*/}
                                                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                                                            <label className="form-check-label">Enabled</label>
                                                        </div>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex justify-content-end">
                                                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end::Menu 1*/}
                                            {/*end::Menu*/}
                                        </div>
                                        {/*end::Toolbar*/}
                                    </div>
                                    {/*end::Header*/}
                                    {/*begin::Body*/}
                                    <div className="card-body">
                                        {/*begin::Chart*/}
                                        <div id="kt_charts_widget_1_chart" style={{ height: '350px' }} />
                                        {/*end::Chart*/}
                                    </div>
                                    {/*end::Body*/}
                                </div>
                                {/*end::Charts Widget 1*/}
                                {/*begin::List Widget 5*/}
                                <div className="card mb-5 mb-xxl-8">
                                    {/*begin::Header*/}
                                    <div className="card-header align-items-center border-0 mt-4">
                                        <h3 className="card-title align-items-start flex-column">
                                            <span className="fw-bolder mb-2 text-dark">Activities</span>
                                            <span className="text-muted fw-bold fs-7">890,344 Sales</span>
                                        </h3>
                                        <div className="card-toolbar">
                                            {/*begin::Menu*/}
                                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                            <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                            <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                            <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                        </g>
                                                    </svg>
                                                </span>
                                                {/*end::Svg Icon*/}
                                            </button>
                                            {/*begin::Menu 1*/}
                                            <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61a08dbf1be63">
                                                {/*begin::Header*/}
                                                <div className="px-7 py-5">
                                                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                                                </div>
                                                {/*end::Header*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator border-gray-200" />
                                                {/*end::Menu separator*/}
                                                {/*begin::Form*/}
                                                <div className="px-7 py-5">
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Status:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <div>
                                                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61a08dbf1be63" data-allow-clear="true">
                                                                <option />
                                                                <option value={1}>Approved</option>
                                                                <option value={2}>Pending</option>
                                                                <option value={2}>In Process</option>
                                                                <option value={2}>Rejected</option>
                                                            </select>
                                                        </div>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Member Type:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Options*/}
                                                        <div className="d-flex">
                                                            {/*begin::Options*/}
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                                <span className="form-check-label">Author</span>
                                                            </label>
                                                            {/*end::Options*/}
                                                            {/*begin::Options*/}
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                                                                <span className="form-check-label">Customer</span>
                                                            </label>
                                                            {/*end::Options*/}
                                                        </div>
                                                        {/*end::Options*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="form-label fw-bold">Notifications:</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Switch*/}
                                                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                                                            <label className="form-check-label">Enabled</label>
                                                        </div>
                                                        {/*end::Switch*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="d-flex justify-content-end">
                                                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end::Menu 1*/}
                                            {/*end::Menu*/}
                                        </div>
                                    </div>
                                    {/*end::Header*/}
                                    {/*begin::Body*/}
                                    <div className="card-body pt-5">
                                        {/*begin::Timeline*/}
                                        <div className="timeline-label">
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">08:42</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-warning fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Text*/}
                                                <div className="fw-mormal timeline-content text-muted ps-3">Outlines keep you honest. And keep structure</div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">10:00</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-success fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Content*/}
                                                <div className="timeline-content d-flex">
                                                    <span className="fw-bolder text-gray-800 ps-3">AEOL meeting</span>
                                                </div>
                                                {/*end::Content*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">14:37</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-danger fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Desc*/}
                                                <div className="timeline-content fw-bolder text-gray-800 ps-3">Make deposit
                                                    <a href="#" className="text-primary">USD 700</a>. to ESL</div>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-primary fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Text*/}
                                                <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-danger fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Desc*/}
                                                <div className="timeline-content fw-bold text-gray-800 ps-3">New order placed
                                                    <a href="#" className="text-primary">#XF-2356</a>.</div>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-primary fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Text*/}
                                                <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-danger fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Desc*/}
                                                <div className="timeline-content fw-bold text-gray-800 ps-3">New order placed
                                                    <a href="#" className="text-primary">#XF-2356</a>.</div>
                                                {/*end::Desc*/}
                                            </div>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <div className="timeline-item">
                                                {/*begin::Label*/}
                                                <div className="timeline-label fw-bolder text-gray-800 fs-6">10:30</div>
                                                {/*end::Label*/}
                                                {/*begin::Badge*/}
                                                <div className="timeline-badge">
                                                    <i className="fa fa-genderless text-success fs-1" />
                                                </div>
                                                {/*end::Badge*/}
                                                {/*begin::Text*/}
                                                <div className="timeline-content fw-mormal text-muted ps-3">Finance KPI Mobile app launch preparion meeting</div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Item*/}
                                        </div>
                                        {/*end::Timeline*/}
                                    </div>
                                    {/*end: Card Body*/}
                                </div>
                                {/*end: List Widget 5*/}
                            </div>
                            {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                        {/*begin::Modals*/}
                        {/*begin::Modal - Offer A Deal*/}
                        <div className="modal fade" id="kt_modal_offer_a_deal" tabIndex={-1} aria-hidden="true">
                            {/*begin::Modal dialog*/}
                            <div className="modal-dialog modal-dialog-centered mw-1000px">
                                {/*begin::Modal content*/}
                                <div className="modal-content">
                                    {/*begin::Modal header*/}
                                    <div className="modal-header py-7 d-flex justify-content-between">
                                        {/*begin::Modal title*/}
                                        <h2>Offer a Deal</h2>
                                        {/*end::Modal title*/}
                                        {/*begin::Close*/}
                                        <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                            <span className="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                                                    <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </div>
                                        {/*end::Close*/}
                                    </div>
                                    {/*begin::Modal header*/}
                                    {/*begin::Modal body*/}
                                    <div className="modal-body scroll-y m-5">
                                        {/*begin::Stepper*/}
                                        <div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
                                            {/*begin::Nav*/}
                                            <div className="stepper-nav justify-content-center py-2">
                                                {/*begin::Step 1*/}
                                                <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                                    <h3 className="stepper-title">Deal Type</h3>
                                                </div>
                                                {/*end::Step 1*/}
                                                {/*begin::Step 2*/}
                                                <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                    <h3 className="stepper-title">Deal Details</h3>
                                                </div>
                                                {/*end::Step 2*/}
                                                {/*begin::Step 3*/}
                                                <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                                    <h3 className="stepper-title">Finance Settings</h3>
                                                </div>
                                                {/*end::Step 3*/}
                                                {/*begin::Step 4*/}
                                                <div className="stepper-item" data-kt-stepper-element="nav">
                                                    <h3 className="stepper-title">Completed</h3>
                                                </div>
                                                {/*end::Step 4*/}
                                            </div>
                                            {/*end::Nav*/}
                                            {/*begin::Form*/}
                                            <form className="mx-auto mw-500px w-100 pt-15 pb-10" noValidate="novalidate" id="kt_modal_offer_a_deal_form">
                                                {/*begin::Type*/}
                                                <div className="current" data-kt-stepper-element="content">
                                                    {/*begin::Wrapper*/}
                                                    <div className="w-100">
                                                        {/*begin::Heading*/}
                                                        <div className="mb-13">
                                                            {/*begin::Title*/}
                                                            <h2 className="mb-3">Deal Type</h2>
                                                            {/*end::Title*/}
                                                            {/*begin::Description*/}
                                                            <div className="text-muted fw-bold fs-5">If you need more info, please check out
                                                                <a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-15" data-kt-buttons="true">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6 mb-6 active">
                                                                {/*begin::Input*/}
                                                                <input className="btn-check" type="radio" defaultChecked="checked" name="offer_type" defaultValue={1} />
                                                                {/*end::Input*/}
                                                                {/*begin::Label*/}
                                                                <span className="d-flex">
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                                                    <span className="svg-icon svg-icon-3hx">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
                                                                            <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Info*/}
                                                                    <span className="ms-4">
                                                                        <span className="fs-3 fw-bolder text-gray-900 mb-2 d-block">Personal Deal</span>
                                                                        <span className="fw-bold fs-4 text-muted">If you need more info, please check it out</span>
                                                                    </span>
                                                                    {/*end::Info*/}
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6">
                                                                {/*begin::Input*/}
                                                                <input className="btn-check" type="radio" name="offer_type" defaultValue={2} />
                                                                {/*end::Input*/}
                                                                {/*begin::Label*/}
                                                                <span className="d-flex">
                                                                    {/*begin::Icon*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                    <span className="svg-icon svg-icon-3hx">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <rect x={2} y={2} width={9} height={9} rx={2} fill="black" />
                                                                            <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="black" />
                                                                            <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="black" />
                                                                            <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Icon*/}
                                                                    {/*begin::Info*/}
                                                                    <span className="ms-4">
                                                                        <span className="fs-3 fw-bolder text-gray-900 mb-2 d-block">Corporate Deal</span>
                                                                        <span className="fw-bold fs-4 text-muted">Create corporate account to manage users</span>
                                                                    </span>
                                                                    {/*end::Info*/}
                                                                </span>
                                                                {/*end::Label*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex justify-content-end">
                                                            <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                                                                <span className="indicator-label">Offer Details</span>
                                                                <span className="indicator-progress">Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Type*/}
                                                {/*begin::Details*/}
                                                <div data-kt-stepper-element="content">
                                                    {/*begin::Wrapper*/}
                                                    <div className="w-100">
                                                        {/*begin::Heading*/}
                                                        <div className="mb-13">
                                                            {/*begin::Title*/}
                                                            <h2 className="mb-3">Deal Details</h2>
                                                            {/*end::Title*/}
                                                            {/*begin::Description*/}
                                                            <div className="text-muted fw-bold fs-5">If you need more info, please check out
                                                                <a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold mb-2">Customer</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
                                                                <option />
                                                                <option value={1} defaultValue={"selected"}>Keenthemes</option>
                                                                <option value={2}>CRM App</option>
                                                            </select>
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-bold mb-2">Deal Title</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" defaultValue="Marketing Campaign" />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold mb-2">Deal Description</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Label*/}
                                                            <textarea className="form-control form-control-solid" rows={3} placeholder="Enter Deal Description" name="details_description" defaultValue={"Experience share market at your fingertips with TICK PRO stock investment mobile trading app"} />
                                                            {/*end::Label*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            <label className="required fs-6 fw-bold mb-2">Activation Date</label>
                                                            <div className="position-relative d-flex align-items-center">
                                                                {/*begin::Icon*/}
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                                <span className="svg-icon svg-icon-2 position-absolute mx-4">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                        <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="black" />
                                                                        <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="black" />
                                                                        <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="black" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                                {/*end::Icon*/}
                                                                {/*begin::Datepicker*/}
                                                                <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
                                                                {/*end::Datepicker*/}
                                                            </div>
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-15">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-stack">
                                                                {/*begin::Label*/}
                                                                <div className="me-5">
                                                                    <label className="required fs-6 fw-bold">Notifications</label>
                                                                    <div className="fs-7 fw-bold text-muted">Allow Notifications by Phone or Email</div>
                                                                </div>
                                                                {/*end::Label*/}
                                                                {/*begin::Checkboxes*/}
                                                                <div className="d-flex">
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid me-10">
                                                                        {/*begin::Input*/}
                                                                        <input className="form-check-input h-20px w-20px" type="checkbox" defaultValue="email" name="details_notifications[]" />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="form-check-label fw-bold">Email</span>
                                                                        {/*end::Label*/}
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input className="form-check-input h-20px w-20px" type="checkbox" defaultValue="phone" defaultChecked="checked" name="details_notifications[]" />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="form-check-label fw-bold">Phone</span>
                                                                        {/*end::Label*/}
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                </div>
                                                                {/*end::Checkboxes*/}
                                                            </div>
                                                            {/*begin::Wrapper*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex flex-stack">
                                                            <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
                                                            <button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
                                                                <span className="indicator-label">Financing</span>
                                                                <span className="indicator-progress">Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Details*/}
                                                {/*begin::Budget*/}
                                                <div data-kt-stepper-element="content">
                                                    {/*begin::Wrapper*/}
                                                    <div className="w-100">
                                                        {/*begin::Heading*/}
                                                        <div className="mb-13">
                                                            {/*begin::Title*/}
                                                            <h2 className="mb-3">Finance</h2>
                                                            {/*end::Title*/}
                                                            {/*begin::Description*/}
                                                            <div className="text-muted fw-bold fs-5">If you need more info, please check out
                                                                <a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            {/*begin::Label*/}
                                                            <label className="d-flex align-items-center fs-6 fw-bold mb-2">
                                                                <span className="required">Setup Budget</span>
                                                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class='fas fa-university fs-3 me-3'></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-bold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-dark fw-bolder mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>" />
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Dialer*/}
                                                            <div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min={50} data-kt-dialer-max={50000} data-kt-dialer-step={100} data-kt-dialer-prefix="$" data-kt-dialer-decimals={2}>
                                                                {/*begin::Decrease control*/}
                                                                <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen042.svg*/}
                                                                    <span className="svg-icon svg-icon-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="black" />
                                                                            <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </button>
                                                                {/*end::Decrease control*/}
                                                                {/*begin::Input control*/}
                                                                <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readOnly="readonly" defaultValue="$50" />
                                                                {/*end::Input control*/}
                                                                {/*begin::Increase control*/}
                                                                <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen041.svg*/}
                                                                    <span className="svg-icon svg-icon-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="black" />
                                                                            <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="black" />
                                                                            <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </button>
                                                                {/*end::Increase control*/}
                                                            </div>
                                                            {/*end::Dialer*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-8">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-bold mb-2">Budget Usage</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Row*/}
                                                            <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 col-lg-12 col-xxl-6">
                                                                    {/*begin::Option*/}
                                                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default active d-flex text-start p-6" data-kt-button="true">
                                                                        {/*begin::Radio*/}
                                                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                            <input className="form-check-input" type="radio" name="finance_usage" defaultValue={1} defaultChecked="checked" />
                                                                        </span>
                                                                        {/*end::Radio*/}
                                                                        {/*begin::Info*/}
                                                                        <span className="ms-5">
                                                                            <span className="fs-4 fw-bolder text-gray-800 mb-2 d-block">Precise Usage</span>
                                                                            <span className="fw-bold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                                        </span>
                                                                        {/*end::Info*/}
                                                                    </label>
                                                                    {/*end::Option*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 col-lg-12 col-xxl-6">
                                                                    {/*begin::Option*/}
                                                                    <label className="btn btn-outline btn-outline-dashed btn-outline-default d-flex text-start p-6" data-kt-button="true">
                                                                        {/*begin::Radio*/}
                                                                        <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                            <input className="form-check-input" type="radio" name="finance_usage" defaultValue={2} />
                                                                        </span>
                                                                        {/*end::Radio*/}
                                                                        {/*begin::Info*/}
                                                                        <span className="ms-5">
                                                                            <span className="fs-4 fw-bolder text-gray-800 mb-2 d-block">Extreme Usage</span>
                                                                            <span className="fw-bold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                                        </span>
                                                                        {/*end::Info*/}
                                                                    </label>
                                                                    {/*end::Option*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                            </div>
                                                            {/*end::Row*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-15">
                                                            {/*begin::Wrapper*/}
                                                            <div className="d-flex flex-stack">
                                                                {/*begin::Label*/}
                                                                <div className="me-5">
                                                                    <label className="fs-6 fw-bold">Allow Changes in Budget</label>
                                                                    <div className="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
                                                                </div>
                                                                {/*end::Label*/}
                                                                {/*begin::Switch*/}
                                                                <label className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="checkbox" defaultValue={1} name="finance_allow" defaultChecked="checked" />
                                                                    <span className="form-check-label fw-bold text-muted">Allowed</span>
                                                                </label>
                                                                {/*end::Switch*/}
                                                            </div>
                                                            {/*end::Wrapper*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex flex-stack">
                                                            <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
                                                            <button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
                                                                <span className="indicator-label">Build Team</span>
                                                                <span className="indicator-progress">Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                                            </button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </div>
                                                {/*end::Budget*/}
                                                {/*begin::Complete*/}
                                                <div data-kt-stepper-element="content">
                                                    {/*begin::Wrapper*/}
                                                    <div className="w-100">
                                                        {/*begin::Heading*/}
                                                        <div className="mb-13">
                                                            {/*begin::Title*/}
                                                            <h2 className="mb-3">Deal Created!</h2>
                                                            {/*end::Title*/}
                                                            {/*begin::Description*/}
                                                            <div className="text-muted fw-bold fs-5">If you need more info, please check out
                                                                <a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
                                                            {/*end::Description*/}
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex flex-center pb-20">
                                                            <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
                                                            <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
                                                        </div>
                                                        {/*end::Actions*/}
                                                        {/*begin::Illustration*/}
                                                        <div className="text-center px-4">
                                                            <img src="../../../assets/media/illustrations/sigma-1/20.png" alt="" className="mw-100 mh-300px" />
                                                        </div>
                                                        {/*end::Illustration*/}
                                                    </div>
                                                </div>
                                                {/*end::Complete*/}
                                            </form>
                                            {/*end::Form*/}
                                        </div>
                                        {/*end::Stepper*/}
                                    </div>
                                    {/*begin::Modal body*/}
                                </div>
                            </div>
                        </div>
                        {/*end::Modal - Offer A Deal*/}
                        {/*end::Modals*/}
                    </div>
                    {/*end::Post*/}
                </div>
            }
        </>
    );
}

export default UserDetailsPage;