import UserListItem from "./UserListItem";
import {useState, useEffect} from "react";
import agent from "../../api/agent";

const UserList = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getData();
    }, [setUsers])

    async function getData(){
        const data = await agent.Users.GetAll();
        setUsers(data);
    }

    return ( 
        <>
            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
                <div className="content flex-row-fluid" id="kt_content">
                    <div className="card">
                        <div className="card-header border-0 pt-6">
                            <div className="card-title">
                                <div className="d-flex align-items-center position-relative my-1">
                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="black" />
                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                    </svg>
                                </span>
                                <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search user" />
                                </div>
                            </div>
                            <div className="card-toolbar">
                                {/*begin::Toolbar*/}
                                <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                {/*begin::Filter*/}
                                <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                    <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}Filter</button>
                                {/*begin::Menu 1*/}
                                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                    {/*begin::Header*/}
                                    <div className="px-7 py-5">
                                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                                    </div>
                                    {/*end::Header*/}
                                    {/*begin::Separator*/}
                                    <div className="separator border-gray-200" />
                                    {/*end::Separator*/}
                                    {/*begin::Content*/}
                                    <div className="px-7 py-5" data-kt-user-table-filter="form">
                                    {/*begin::Input group*/}
                                    <div className="mb-10">
                                        <label className="form-label fs-6 fw-bold">Role:</label>
                                        <select className="form-select form-select-solid fw-bolder" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                                        <option />
                                        <option value="Administrator">Administrator</option>
                                        <option value="Analyst">Analyst</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Support">Support</option>
                                        <option value="Trial">Trial</option>
                                        </select>
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="mb-10">
                                        <label className="form-label fs-6 fw-bold">Two Step Verification:</label>
                                        <select className="form-select form-select-solid fw-bolder" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="two-step" data-hide-search="true">
                                        <option />
                                        <option value="Enabled">Enabled</option>
                                        </select>
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Actions*/}
                                    <div className="d-flex justify-content-end">
                                        <button type="reset" className="btn btn-light btn-active-light-primary fw-bold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                                        <button type="submit" className="btn btn-primary fw-bold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                    </div>
                                    {/*end::Actions*/}
                                    </div>
                                    {/*end::Content*/}
                                </div>
                                {/*end::Menu 1*/}
                                {/*end::Filter*/}
                                {/*begin::Export*/}
                                <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_export_users">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                                    <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.3" x="12.75" y="4.25" width={12} height={2} rx={1} transform="rotate(90 12.75 4.25)" fill="black" />
                                        <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="black" />
                                        <path d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="#C4C4C4" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}Export</button>
                                {/*end::Export*/}
                                {/*begin::Add user*/}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                    <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="11.364" y="20.364" width={16} height={2} rx={1} transform="rotate(-90 11.364 20.364)" fill="black" />
                                        <rect x="4.36396" y="11.364" width={16} height={2} rx={1} fill="black" />
                                    </svg>
                                    </span>
                                    {/*end::Svg Icon*/}Add User</button>
                                {/*end::Add user*/}
                                </div>
                                {/*end::Toolbar*/}
                                {/*begin::Group actions*/}
                                <div className="d-flex justify-content-end align-items-center d-none" data-kt-user-table-toolbar="selected">
                                <div className="fw-bolder me-5">
                                    <span className="me-2" data-kt-user-table-select="selected_count" />Selected</div>
                                <button type="button" className="btn btn-danger" data-kt-user-table-select="delete_selected">Delete Selected</button>
                                </div>
                                {/*end::Group actions*/}
                                {/*begin::Modal - Adjust Balance*/}
                                <div className="modal fade" id="kt_modal_export_users" tabIndex={-1} aria-hidden="true">
                                {/*begin::Modal dialog*/}
                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                    {/*begin::Modal content*/}
                                    <div className="modal-content">
                                    {/*begin::Modal header*/}
                                    <div className="modal-header">
                                        {/*begin::Modal title*/}
                                        <h2 className="fw-bolder">Export Users</h2>
                                        {/*end::Modal title*/}
                                        {/*begin::Close*/}
                                        <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
                                    {/*end::Modal header*/}
                                    {/*begin::Modal body*/}
                                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                        {/*begin::Form*/}
                                        <form id="kt_modal_export_users_form" className="form" action="#">
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-10">
                                            {/*begin::Label*/}
                                            <label className="fs-6 fw-bold form-label mb-2">Select Roles:</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <select name="role" data-control="select2" data-placeholder="Select a role" data-hide-search="true" className="form-select form-select-solid fw-bolder">
                                            <option />
                                            <option value="Administrator">Administrator</option>
                                            <option value="Analyst">Analyst</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Support">Support</option>
                                            <option value="Trial">Trial</option>
                                            </select>
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-10">
                                            {/*begin::Label*/}
                                            <label className="required fs-6 fw-bold form-label mb-2">Select Export Format:</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <select name="format" data-control="select2" data-placeholder="Select a format" data-hide-search="true" className="form-select form-select-solid fw-bolder">
                                            <option />
                                            <option value="excel">Excel</option>
                                            <option value="pdf">PDF</option>
                                            <option value="cvs">CVS</option>
                                            <option value="zip">ZIP</option>
                                            </select>
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="text-center">
                                            <button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                                            <span className="indicator-label">Submit</span>
                                            <span className="indicator-progress">Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                            </button>
                                        </div>
                                        {/*end::Actions*/}
                                        </form>
                                        {/*end::Form*/}
                                    </div>
                                    {/*end::Modal body*/}
                                    </div>
                                    {/*end::Modal content*/}
                                </div>
                                {/*end::Modal dialog*/}
                                </div>
                                {/*end::Modal - New Card*/}
                                {/*begin::Modal - Add task*/}
                                <div className="modal fade" id="kt_modal_add_user" tabIndex={-1} aria-hidden="true">
                                {/*begin::Modal dialog*/}
                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                    {/*begin::Modal content*/}
                                    <div className="modal-content">
                                    {/*begin::Modal header*/}
                                    <div className="modal-header" id="kt_modal_add_user_header">
                                        {/*begin::Modal title*/}
                                        <h2 className="fw-bolder">Add User</h2>
                                        {/*end::Modal title*/}
                                        {/*begin::Close*/}
                                        <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
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
                                    {/*end::Modal header*/}
                                    {/*begin::Modal body*/}
                                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                        {/*begin::Form*/}
                                        <form id="kt_modal_add_user_form" className="form" action="#">
                                        {/*begin::Scroll*/}
                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header" data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                            {/*begin::Label*/}
                                            <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
                                            {/*end::Label*/}
                                            {/*begin::Image input*/}
                                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{backgroundImage: 'url(assets/media/avatars/blank.png)'}}>
                                                {/*begin::Preview existing avatar*/}
                                                <div className="image-input-wrapper w-125px h-125px" style={{backgroundImage: 'url(assets/media/avatars/150-1.jpg)'}} />
                                                {/*end::Preview existing avatar*/}
                                                {/*begin::Label*/}
                                                <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                <i className="bi bi-pencil-fill fs-7" />
                                                {/*begin::Inputs*/}
                                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" name="avatar_remove" />
                                                {/*end::Inputs*/}
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Cancel*/}
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                <i className="bi bi-x fs-2" />
                                                </span>
                                                {/*end::Cancel*/}
                                                {/*begin::Remove*/}
                                                <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                <i className="bi bi-x fs-2" />
                                                </span>
                                                {/*end::Remove*/}
                                            </div>
                                            {/*end::Image input*/}
                                            {/*begin::Hint*/}
                                            <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                                            {/*end::Hint*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                            {/*begin::Label*/}
                                            <label className="required fw-bold fs-6 mb-2">Full Name</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <input type="text" name="user_name" className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" defaultValue="Emma Smith" />
                                            {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                            {/*begin::Label*/}
                                            <label className="required fw-bold fs-6 mb-2">Email</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <input type="email" name="user_email" className="form-control form-control-solid mb-3 mb-lg-0" placeholder="example@domain.com" defaultValue="e.smith@kpmg.com.au" />
                                            {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-7">
                                            {/*begin::Label*/}
                                            <label className="required fw-bold fs-6 mb-5">Role</label>
                                            {/*end::Label*/}
                                            {/*begin::Roles*/}
                                            {/*begin::Input row*/}
                                            <div className="d-flex fv-row">
                                                {/*begin::Radio*/}
                                                <div className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input className="form-check-input me-3" name="user_role" type="radio" defaultValue={0} id="kt_modal_update_role_option_0" defaultChecked="checked" />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_0">
                                                    <div className="fw-bolder text-gray-800">Administrator</div>
                                                    <div className="text-gray-600">Best for business owners and company administrators</div>
                                                </label>
                                                {/*end::Label*/}
                                                </div>
                                                {/*end::Radio*/}
                                            </div>
                                            {/*end::Input row*/}
                                            <div className="separator separator-dashed my-5" />
                                            {/*begin::Input row*/}
                                            <div className="d-flex fv-row">
                                                {/*begin::Radio*/}
                                                <div className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input className="form-check-input me-3" name="user_role" type="radio" defaultValue={1} id="kt_modal_update_role_option_1" />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_1">
                                                    <div className="fw-bolder text-gray-800">Developer</div>
                                                    <div className="text-gray-600">Best for developers or people primarily using the API</div>
                                                </label>
                                                {/*end::Label*/}
                                                </div>
                                                {/*end::Radio*/}
                                            </div>
                                            {/*end::Input row*/}
                                            <div className="separator separator-dashed my-5" />
                                            {/*begin::Input row*/}
                                            <div className="d-flex fv-row">
                                                {/*begin::Radio*/}
                                                <div className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input className="form-check-input me-3" name="user_role" type="radio" defaultValue={2} id="kt_modal_update_role_option_2" />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_2">
                                                    <div className="fw-bolder text-gray-800">Analyst</div>
                                                    <div className="text-gray-600">Best for people who need full access to analytics data, but don't need to update business settings</div>
                                                </label>
                                                {/*end::Label*/}
                                                </div>
                                                {/*end::Radio*/}
                                            </div>
                                            {/*end::Input row*/}
                                            <div className="separator separator-dashed my-5" />
                                            {/*begin::Input row*/}
                                            <div className="d-flex fv-row">
                                                {/*begin::Radio*/}
                                                <div className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input className="form-check-input me-3" name="user_role" type="radio" defaultValue={3} id="kt_modal_update_role_option_3" />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_3">
                                                    <div className="fw-bolder text-gray-800">Support</div>
                                                    <div className="text-gray-600">Best for employees who regularly refund payments and respond to disputes</div>
                                                </label>
                                                {/*end::Label*/}
                                                </div>
                                                {/*end::Radio*/}
                                            </div>
                                            {/*end::Input row*/}
                                            <div className="separator separator-dashed my-5" />
                                            {/*begin::Input row*/}
                                            <div className="d-flex fv-row">
                                                {/*begin::Radio*/}
                                                <div className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input className="form-check-input me-3" name="user_role" type="radio" defaultValue={4} id="kt_modal_update_role_option_4" />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_4">
                                                    <div className="fw-bolder text-gray-800">Trial</div>
                                                    <div className="text-gray-600">Best for people who need to preview content data, but don't need to make any updates</div>
                                                </label>
                                                {/*end::Label*/}
                                                </div>
                                                {/*end::Radio*/}
                                            </div>
                                            {/*end::Input row*/}
                                            {/*end::Roles*/}
                                            </div>
                                            {/*end::Input group*/}
                                        </div>
                                        {/*end::Scroll*/}
                                        {/*begin::Actions*/}
                                        <div className="text-center pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-kt-users-modal-action="cancel">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                                            <span className="indicator-label">Submit</span>
                                            <span className="indicator-progress">Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                            </button>
                                        </div>
                                        {/*end::Actions*/}
                                        </form>
                                        {/*end::Form*/}
                                    </div>
                                    {/*end::Modal body*/}
                                    </div>
                                    {/*end::Modal content*/}
                                </div>
                                {/*end::Modal dialog*/}
                                </div>
                                {/*end::Modal - Add task*/}
                            </div>
                        </div>
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
                                    {users && users.map( (user, i) => 
                                        <UserListItem key={i} user={user} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UserList;