import MyTicketHistory from "./tickets/MyTicketHistory";
import MySolvedHistories from "./history/MySolvedHistories";
import Tickets from "./tickets/Tickets";

const OverviewTab = (props) => {
    const { tickets, histories } = props;

    return (
        <>
            <div className="row g-5 g-xl-8">
                <Tickets tickets={tickets} />
                <MySolvedHistories histories={histories} />
            </div>
            <MyTicketHistory />

            <div className="row gy-5 gx-xl-10">
                <div className="col-xl-6">
                    {/*begin::List Widget 5*/}
                    <div className="card card-xl-stretch mb-xl-10">
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
                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61a08dd9eff59">
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
                                                <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61a08dd9eff59" data-allow-clear="true">
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
                <div className="col-xl-6">
                    {/*begin::Tables Widget 5*/}
                    <div className="card card-xl-stretch mb-5 mb-xl-10">
                        {/*begin::Header*/}
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bolder fs-3 mb-1">Latest Products</span>
                                <span className="text-muted mt-1 fw-bold fs-7">More than 400 new products</span>
                            </h3>
                            <div className="card-toolbar">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-dark active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_1">Month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-dark fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_2">Week</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-dark fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_5_tab_3">Day</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div className="card-body py-3">
                            <div className="tab-content">
                                {/*begin::Tap pane*/}
                                <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="border-0">
                                                    <th className="p-0 w-50px" />
                                                    <th className="p-0 min-w-150px" />
                                                    <th className="p-0 min-w-140px" />
                                                    <th className="p-0 min-w-110px" />
                                                    <th className="p-0 min-w-50px" />
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                        <span className="text-muted fw-bold d-block">Movie Creator</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">React, HTML</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-success">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                        <span className="text-muted fw-bold d-block">Most Successful</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">New Users</a>
                                                        <span className="text-muted fw-bold d-block">Awesome Users</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-primary">Success</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
                                                        <span className="text-muted fw-bold d-block">Movie Creator</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-danger">Rejected</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                                                        <span className="text-muted fw-bold d-block">Best Customers</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                    </div>
                                    {/*end::Table*/}
                                </div>
                                {/*end::Tap pane*/}
                                {/*begin::Tap pane*/}
                                <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="border-0">
                                                    <th className="p-0 w-50px" />
                                                    <th className="p-0 min-w-150px" />
                                                    <th className="p-0 min-w-140px" />
                                                    <th className="p-0 min-w-110px" />
                                                    <th className="p-0 min-w-50px" />
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                        <span className="text-muted fw-bold d-block">Movie Creator</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">React, HTML</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-success">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                        <span className="text-muted fw-bold d-block">Most Successful</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
                                                        <span className="text-muted fw-bold d-block">Movie Creator</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-danger">Rejected</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                    </div>
                                    {/*end::Table*/}
                                </div>
                                {/*end::Tap pane*/}
                                {/*begin::Tap pane*/}
                                <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="border-0">
                                                    <th className="p-0 w-50px" />
                                                    <th className="p-0 min-w-150px" />
                                                    <th className="p-0 min-w-140px" />
                                                    <th className="p-0 min-w-110px" />
                                                    <th className="p-0 min-w-50px" />
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                                                        <span className="text-muted fw-bold d-block">Best Customers</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
                                                        <span className="text-muted fw-bold d-block">Movie Creator</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-danger">Rejected</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">New Users</a>
                                                        <span className="text-muted fw-bold d-block">Awesome Users</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-primary">Success</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol symbol-45px me-2">
                                                            <span className="symbol-label">
                                                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                        <span className="text-muted fw-bold d-block">Most Successful</span>
                                                    </td>
                                                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                    </div>
                                    {/*end::Table*/}
                                </div>
                                {/*end::Tap pane*/}
                            </div>
                        </div>
                        {/*end::Body*/}
                    </div>
                    {/*end::Tables Widget 5*/}
                </div>
            </div>
        </>
    );
}

export default OverviewTab;