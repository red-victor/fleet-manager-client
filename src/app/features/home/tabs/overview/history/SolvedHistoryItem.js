import PlacholderImage from "../../../../../../assets/img/solved-history-placeholder.jpg";

const SolvedHistoryItem = (props) => {
    const { historyItem } = props;
    console.log(historyItem);

    return (
        <>
            <tr>
                <td>
                    <div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
                        {/* <span className="symbol-label"> */}
                        <img src={historyItem.imagePath ? historyItem.imagePath : PlacholderImage} alt="" />
                        {/* </span> */}
                    </div>
                </td>
                <td>
                    <div className="text-dark fw-bolder text-hover-primary mb-1 fs-6">{historyItem.title ? historyItem.title : "Title Pending..."}</div>
                    <span className="text-muted fw-bold d-block">{historyItem.details}</span>
                </td>
                <td>
                    <span className="text-muted fw-bold d-block fs-7">{historyItem.isPayed ? "Paid" : "Unpaid"}</span>
                    <span className="text-dark fw-bolder d-block fs-5">{historyItem.cost}€</span>
                </td>
                <td className="text-end">
                    <span className="text-primary fs-7 fw-bolder">+28%</span>
                </td>
                <td className="text-end">
                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                        <span className="svg-icon svg-icon-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                            </svg>
                        </span>
                    </a>
                </td>
            </tr>

        </>
    );
}

export default SolvedHistoryItem;