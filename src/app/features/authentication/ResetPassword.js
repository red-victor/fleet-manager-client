import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/media/logos/logo-1.svg";
import agent from "../../api/agent";
import LoadingButton from "../../layout/appComponents/LoadingButton"

const ResetPassword = () => {
    const [emailValue, setEmailValue] = useState("");

    const handleEmailChange = event => {
        setEmailValue(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        agent.Account.sendResetPasswordLink({email: emailValue});
    }

    return (
        <div className="d-flex flex-column flex-root">
            {/*begin::Authentication - Password reset */}
            <div
                className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed mt-20"
                style={{ backgroundImage: `url(../../../assets/media/illustrations/sigma-1/14.png)` }}
            >
                {/*begin::Content*/}
                <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                {/*begin::Logo*/}
                <div className="mb-12">
                    <img
                    alt="Logo"
                    src={Logo}
                    className="h-40px"
                    />
                </div>
                {/*end::Logo*/}
                {/*begin::Wrapper*/}
                <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    {/*begin::Form*/}
                    <form
                    className="form w-100"
                    noValidate="novalidate"
                    id="kt_password_reset_form"
                    onSubmit={handleSubmit}
                    >
                    {/*begin::Heading*/}
                    <div className="text-center mb-10">
                        {/*begin::Title*/}
                        <h1 className="text-dark mb-3">Forgot Password ?</h1>
                        {/*end::Title*/}
                        {/*begin::Link*/}
                        <div className="text-gray-400 fw-bold fs-4">
                        Enter your email to reset your password.
                        </div>
                        {/*end::Link*/}
                    </div>
                    {/*begin::Heading*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                        <label className="form-label fw-bolder text-gray-900 fs-6">
                        Email
                        </label>
                        <input
                        className="form-control form-control-solid"
                        type="email"
                        placeholder
                        name="email"
                        value={emailValue}
                        onChange={handleEmailChange}
                        autoComplete="off"
                        />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                        <LoadingButton />
                        <Link
                        to="/login"
                        style={{marginLeft: 30}}
                        className="btn btn-lg btn-light-primary fw-bolder"
                        >
                        Cancel
                        </Link>
                    </div>
                    {/*end::Actions*/}
                    </form>
                    {/*end::Form*/}
                </div>
                {/*end::Wrapper*/}
                </div>
                {/*end::Content*/}
            </div>
            {/*end::Authentication - Password reset*/}
        </div>
    )
}

export default ResetPassword;