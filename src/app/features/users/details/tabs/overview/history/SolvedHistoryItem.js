import { Link } from "react-router-dom";
import PlacholderImage from "../../../../../../../assets/img/solved-history-placeholder.jpg";

const SolvedHistoryItem = (props) => {
    const { historyItem } = props;

    const serviceType = (serviceType) => {
        switch (serviceType) {
            case 0: return 'RCA';
            case 1: return 'CASCO';
            case 2: return 'ITP';
            case 3: return 'Revision';
            case 4: return 'Consumable';
            default: return 'Other';
        }
    }

    const serviceTypeTextColor = (serviceType) => {
        switch (serviceType) {
            case 0:
            case 1: return 'primary';
            case 2: return 'warning';
            case 3: return 'info';
            case 4: return 'success';
            default: return 'danger';
        }
    }

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
                    <span className={"text-" + serviceTypeTextColor(historyItem.serviceType) + " fs-7 fw-bolder"}>{serviceType(historyItem.serviceType)}</span>
                </td>
                <td className="text-end">
                    {/* <div className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"> */}
                    <Link to={`/cars/${historyItem.carId}`} className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                        To Car
                    </Link>
                    {/* </div> */}
                </td>
            </tr>

        </>
    );
}

export default SolvedHistoryItem;