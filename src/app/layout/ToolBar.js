import { Link } from "react-router-dom";

const ToolBar = ({options}) => {
    return (
        // begin::Toolbar
        <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
            {/* begin::Container */}
            <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap">
                {/* begin::Page title */}
                <div className="page-title d-flex flex-column me-3">
                    {/* begin::Title */}
                    <h1 className="d-flex text-white fw-bolder my-1 fs-3">{options.title}</h1>
                    {/* end::Title */}
                    {/* begin::Breadcrumb */}
                    <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        {/* begin::FirstItem */}
                        <li className="breadcrumb-item text-white opacity-75">
                            <Link to="/" className="text-white text-hover-primary">Home</Link>
                        </li>
                        {/* end::FirstItem */}
                        {options.links.map(link => (
                        <>
                            <li className="breadcrumb-item">
                                <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
                            </li>
                            <li className="breadcrumb-item text-white opacity-75">
                                <Link to={link.to} className="text-white text-hover-primary">{link.title}</Link>
                            </li>
                        </>
                        ))}                        
                    </ul>
                    {/* end::Breadcrumb */}
                </div>
                {/* end::Page title */}
            </div>
            {/* end::Container */}
        </div>
    )
}

export default ToolBar;