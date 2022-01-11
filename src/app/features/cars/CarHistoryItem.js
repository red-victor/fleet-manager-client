const CarHistoryItem = (props) => {
    const {history, index} = props

    const serviceType = (serviceType) => {
        switch(serviceType) {
            case 0: return 'RCA';
            case 1: return 'CASCO';
            case 2: return 'ITP';
            case 3: return 'Revision';
            case 4: return 'Consumable';
            default: return 'Other';
            }
    }

    return ( 
    <tr>
        <td>
            <a href="#" className="text-gray-600 text-hover-primary">{history.id}</a>
        </td>
        <td className="text-success">€{history.cost}</td>
        <td>{serviceType(history.serviceType)}</td>
        <td>{new Date(history.executionDate).toISOString().split('T')[0]}</td>
        <td>{new Date(history.renewDate).toISOString().split('T')[0]}</td>
        <td className={"text-"+ (history.isPayed ? "success" : "danger")}>{history.isPayed ? "Yes" : "No"}</td>
        <td className="">
            <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
        </td>
    </tr>
    );
}
 
export default CarHistoryItem;