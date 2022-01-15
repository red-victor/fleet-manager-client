import Toolbar from "../tickets/Toolbar";
import SolvedHistoryItem from "./SolvedHistoryItem";

const MySolvedHistories = (props) => {
    const { histories } = props;

    return (
        <>
            <div className="col-xl-6">
                <div className="card card-xl-stretch mb-5 mb-xl-8">
                    <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bolder fs-3 mb-1">My Solved History</span>
                            <span className="text-muted mt-1 fw-bold fs-7">{histories.length} ticket(s) processed. Nice job! ;P</span>
                        </h3>
                        <Toolbar />
                    </div>
                    <div className="card-body py-3">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="kt_table_widget_6_tab_1">
                                <div className="table-responsive">
                                    <table className="table align-middle gs-0 gy-3">
                                        <thead>
                                            <tr>
                                                <th className="p-0 w-50px" />
                                                <th className="p-0 min-w-150px" />
                                                <th className="p-0 min-w-140px" />
                                                <th className="p-0 min-w-120px" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {histories && histories.map((historyItem, i) =>
                                                <SolvedHistoryItem historyItem={historyItem} key={i + 1} />
                                            )}
                                            <tr>
                                                <td>
                                                    <div className="symbol symbol-50px me-2">
                                                        <span className="symbol-label">
                                                            <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                    <span className="text-muted fw-bold d-block">Successful Fellas</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted fw-bold d-block fs-7">Paid</span>
                                                    <span className="text-dark fw-bolder d-block fs-5">$200,500</span>
                                                </td>
                                                <td className="text-end">
                                                    <span className="text-primary fs-7 fw-bolder">+28%</span>
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
                                                    <div className="symbol symbol-50px me-2">
                                                        <span className="symbol-label">
                                                            <img src="assets/media/svg/avatars/018-girl-9.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                    <span className="text-muted fw-bold d-block">HTML, CSS Coding</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted fw-bold d-block fs-7">Paid</span>
                                                    <span className="text-dark fw-bolder d-block fs-5">$1,200,000</span>
                                                </td>
                                                <td className="text-end">
                                                    <span className="text-warning fs-7 fw-bolder">+52%</span>
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
                                                    <div className="symbol symbol-50px me-2">
                                                        <span className="symbol-label">
                                                            <img src="assets/media/svg/avatars/047-girl-25.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                    <span className="text-muted fw-bold d-block">PHP, Laravel, VueJS</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted fw-bold d-block fs-7">Paid</span>
                                                    <span className="text-dark fw-bolder d-block fs-5">$1,200,000</span>
                                                </td>
                                                <td className="text-end">
                                                    <span className="text-danger fs-7 fw-bolder">+52%</span>
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
                                                    <div className="symbol symbol-50px me-2">
                                                        <span className="symbol-label">
                                                            <img src="assets/media/svg/avatars/014-girl-7.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                    <span className="text-muted fw-bold d-block">UI/UX Designer</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted fw-bold d-block fs-7">Paid</span>
                                                    <span className="text-dark fw-bolder d-block fs-5">$3,400,000</span>
                                                </td>
                                                <td className="text-end">
                                                    <span className="text-success fs-7 fw-bolder">-34%</span>
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
                                                    <div className="symbol symbol-50px me-2">
                                                        <span className="symbol-label">
                                                            <img src="assets/media/svg/avatars/043-boy-18.svg" className="h-75 align-self-end" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Kevin Leonard</a>
                                                    <span className="text-muted fw-bold d-block">Art Director</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted fw-bold d-block fs-7">Paid</span>
                                                    <span className="text-dark fw-bolder d-block fs-5">$35,600,000</span>
                                                </td>
                                                <td className="text-end">
                                                    <span className="text-info fs-7 fw-bolder">+230%</span>
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
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MySolvedHistories;