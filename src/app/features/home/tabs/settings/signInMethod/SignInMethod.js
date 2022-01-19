import { useState } from "react";
import EditPasswordFrom from "./EditPasswordForm";

const SignInMethod = () => {
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    return (
        <div className="card mb-5 mb-xl-10">
            <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
                <div className="card-title m-0">
                    <h3 className="fw-bolder m-0">Sign-in Method</h3>
                </div>
            </div>
            <div id="kt_account_settings_signin_method" className="collapse show">
                <div className="card-body border-top p-9">
                    <div className="d-flex flex-wrap align-items-center">
                        <div id="kt_signin_email">
                            <div className="fs-6 fw-bolder mb-1">Email Address</div>
                            <div className="fw-bold text-gray-600">support@keenthemes.com</div>
                        </div>
                        <div id="kt_signin_email_button" className="ms-auto">
                            <button className="btn btn-light btn-active-light-primary">Change Email</button>
                        </div>
                    </div>

                    <div className="separator separator-dashed my-6" />

                    <div className="d-flex flex-wrap align-items-center mb-10">
                        {!isEditingPassword &&
                            <>
                                <div id="kt_signin_password">
                                    <div className="fs-6 fw-bolder mb-1">Password</div>
                                    <div className="fw-bold text-gray-600">************</div>
                                </div>
                                <div id="kt_signin_password_button" className="ms-auto">
                                    <button className="btn btn-light btn-active-light-primary" onClick={() => setIsEditingPassword(true)}>Reset Password</button>
                                </div>
                            </>
                        }

                        {isEditingPassword &&
                            <EditPasswordFrom closeForm={() => setIsEditingPassword(false)} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInMethod;