import BlankUserImg from "../../../../assets/media/avatars/blank.png"

const ModalUser = ({userImgUrl, name, role, onUserClick}) => {
    return (
        <div
        className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
        style={{cursor: "pointer"}}
        onClick={onUserClick}
        >
        {/*begin::Avatar*/}
        <div className="symbol symbol-35px symbol-circle me-5">
            <img alt="Pic" src={userImgUrl ? userImgUrl : BlankUserImg} />
        </div>
        {/*end::Avatar*/}
        {/*begin::Info*/}
        <div className="fw-bold">
            <span className="fs-6 text-gray-800 me-2">{name}</span>
            <span className="badge badge-light text-primary">{role ? role : "Admin"}</span>
        </div>
        {/*end::Info*/}
        </div>
    )
}

export default ModalUser;