import SignInMethod from "./signInMethod/SignInMethod"

const SettingsTab = () => {
    return (
        <>
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Profile Details</h3>
                    </div>
                </div>
                <div id="kt_account_settings_profile_details" className="collapse show">
                    <form id="kt_account_profile_details_form" className="form">
                        <div className="card-body border-top p-9">
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
                                <div className="col-lg-8">
                                    <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: 'url(assets/media/avatars/blank.png)' }}>
                                        <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: 'url(assets/media/avatars/150-26.jpg)' }} />
                                        <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                            <i className="bi bi-pencil-fill fs-7" />
                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                            <input type="hidden" name="avatar_remove" />
                                        </label>
                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                            <i className="bi bi-x fs-2" />
                                        </span>
                                        <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                            <i className="bi bi-x fs-2" />
                                        </span>
                                    </div>
                                    <div className="form-text">Allowed file types: png, jpg, jpeg.</div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6 fv-row">
                                            <input type="text" name="fname" className="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" defaultValue="Max" />
                                        </div>
                                        <div className="col-lg-6 fv-row">
                                            <input type="text" name="lname" className="form-control form-control-lg form-control-solid" placeholder="Last name" defaultValue="Smith" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-bold fs-6">Company</label>
                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="company" className="form-control form-control-lg form-control-solid" placeholder="Company name" defaultValue="Keenthemes" />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">
                                    <span className="required">Contact Phone</span>
                                    <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active" />
                                </label>
                                <div className="col-lg-8 fv-row">
                                    <input type="tel" name="phone" className="form-control form-control-lg form-control-solid" placeholder="Phone number" defaultValue="044 3276 454 935" />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6">Company Site</label>
                                <div className="col-lg-8 fv-row">
                                    <input type="text" name="website" className="form-control form-control-lg form-control-solid" placeholder="Company website" defaultValue="keenthemes.com" />
                                </div>
                            </div>
                            <div className="row mb-6">
                                <label className="col-lg-4 col-form-label required fw-bold fs-6">Communication</label>
                                <div className="col-lg-8 fv-row">
                                    <div className="d-flex align-items-center mt-3">
                                        <label className="form-check form-check-inline form-check-solid me-5">
                                            <input className="form-check-input" name="communication[]" type="checkbox" defaultValue={1} />
                                            <span className="fw-bold ps-2 fs-6">Email</span>
                                        </label>
                                        <label className="form-check form-check-inline form-check-solid">
                                            <input className="form-check-input" name="communication[]" type="checkbox" defaultValue={2} />
                                            <span className="fw-bold ps-2 fs-6">Phone</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
                            <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
            <SignInMethod />
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_email_preferences" aria-expanded="true" aria-controls="kt_account_email_preferences">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">Email Preferences</h3>
                    </div>
                </div>
                <div id="kt_account_settings_email_preferences" className="collapse show">
                    <form className="form">
                        <div className="card-body border-top px-9 py-9">
                            <label className="form-check form-check-custom form-check-solid align-items-start">
                                <input className="form-check-input me-3" type="checkbox" name="email-preferences[]" defaultValue={1} />
                                <span className="form-check-label d-flex flex-column align-items-start">
                                    <span className="fw-bolder fs-5 mb-0">Successful Payments</span>
                                    <span className="text-muted fs-6">Receive a notification for every successful payment.</span>
                                </span>
                            </label>
                            <div className="separator separator-dashed my-6" />
                            <label className="form-check form-check-custom form-check-solid align-items-start">
                                <input className="form-check-input me-3" type="checkbox" name="email-preferences[]" defaultChecked="checked" defaultValue={1} />
                                <span className="form-check-label d-flex flex-column align-items-start">
                                    <span className="fw-bolder fs-5 mb-0">Payouts</span>
                                    <span className="text-muted fs-6">Receive a notification for every initiated payout.</span>
                                </span>
                            </label>
                            <div className="separator separator-dashed my-6" />
                        </div>
                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                            <button className="btn btn-light btn-active-light-primary me-2">Discard</button>
                            <button className="btn btn-primary px-6">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SettingsTab;