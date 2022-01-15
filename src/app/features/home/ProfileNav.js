const ProfileNav = () => {
    return (
        <>
            <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                <li className="nav-item mt-2">
                    <a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="../../demo2/dist/account/overview.html">Overview</a>
                </li>
                <li className="nav-item mt-2">
                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/account/settings.html">My Profile</a>
                </li>
                <li className="nav-item mt-2">
                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/account/security.html">Settings</a>
                </li>
                <li className="nav-item mt-2">
                    <a className="nav-link text-active-primary ms-0 me-10 py-5" href="../../demo2/dist/account/billing.html">Logs</a>
                </li>
            </ul>
        </>
    );
}

export default ProfileNav;