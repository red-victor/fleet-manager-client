import BlankUserImg from "../../../../assets/media/avatars/blank.png"

const ModalUser = ({userImgUrl, name, role}) => {
    return (
        <div
        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
        style={{cursor: "pointer"}}
        >
        {/*begin::Avatar*/}
        <div className="symbol symbol-35px symbol-circle me-5">
            <img alt="Pic" src={userImgUrl ? userImgUrl : BlankUserImg} />
        </div>
        {/*end::Avatar*/}
        {/*begin::Info*/}
        <div className="fw-bold">
            <span className="fs-6 text-gray-800 me-2">{name}</span>
            <span className="badge badge-light">{role ? role : "Employee"}</span>
        </div>
        {/*end::Info*/}
        </div>
    )
}

export default ModalUser;