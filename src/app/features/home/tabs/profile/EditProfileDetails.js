import { useState } from "react";
import AppInput from "../../../../layout/appComponents/input/AppInput";
import AvatarInput from "../../../../layout/appComponents/input/AvatarInput";
import LoadingButton from "../../../../layout/appComponents/LoadingButton";
import agent from "../../../../api/agent";

const EditProfileDetails = ({user, closeEditForm, saveUser}) => {
    // const [formValues, setFormValues] = useState({
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     cnp: user.cnp,
    //     phoneNumber: user.phoneNumber,
    //     adress: user.adress
    // });
    const [formValues, setFormValues] = useState(user);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFromValuesChange = (event) => {
        const { name, value } = event.target;
        
        setFormValues(prevState => {
          return {
            ...prevState,
            [name]: value.trim()
          }
        });
    }

    const formHasNotChanged = () => {
        return user.firstName.toLowerCase().trim() === formValues.firstName.toLowerCase().trim() &&
                user.lastName.toLowerCase().trim() === formValues.lastName.toLowerCase().trim() &&
                user.cnp.trim() === formValues.cnp.trim() &&
                user.phoneNumber.trim() === formValues.phoneNumber.trim() &&
                user.adress.trim() === formValues.adress.trim()
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formValues)
        if (formHasNotChanged()) {
            console.log("form has not changed")
            closeEditForm();
            return;
        }

        setIsSubmitting(true);

        agent.Users.Update({ id: user.id, user: formValues })
            .then(res => {
                console.log(res);
                saveUser({
                    ...res,
                    token: user.token
                })
                setIsSubmitting(false);
                closeEditForm();
            })
            .catch(e => {
                console.log(e);
                setIsSubmitting(false);
            })

    }

    return (
        <div className="card mb-5 mb-xl-10">
            <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
                <div className="card-title m-0">
                    <h3 className="fw-bolder m-0">Profile Details</h3>
                </div>
            </div>
            <div id="kt_account_settings_profile_details" className="collapse show">
                <form id="kt_account_profile_details_form" className="form" onSubmit={handleSubmit}>
                    <div className="card-body border-top p-9">
                        <AvatarInput className="fv-row mb-6" userAvatar={formValues.photoUrl ? formValues.photoUrl : undefined} />
                        <div className="row mb-6">
                            <AppInput label="First Name" displayOnSameColon={true} labelClasses="col-lg-4 col-form-label fw-bold fs-6" inputClasses="form-control form-control-lg form-control-solid" name="firstName" placeholder={user.firstName} value={formValues.firstName} onChange={handleFromValuesChange} />
                        </div>
                        <div className="row mb-6">
                            <AppInput label="Last Name" displayOnSameColon={true} labelClasses="col-lg-4 col-form-label fw-bold fs-6" inputClasses="form-control form-control-lg form-control-solid" name="lastName" placeholder={user.lastName} value={formValues.lastName} onChange={handleFromValuesChange} />
                        </div>
                        <div className="row mb-6">
                            <AppInput label="CNP" displayOnSameColon={true} labelClasses="col-lg-4 col-form-label fw-bold fs-6" inputClasses="form-control form-control-lg form-control-solid" name="cnp" placeholder={user.cnp} value={formValues.cnp} onChange={handleFromValuesChange} />
                        </div>
                        <div className="row mb-6">
                            <AppInput label="Phone Number" displayOnSameColon={true} labelClasses="col-lg-4 col-form-label fw-bold fs-6" inputClasses="form-control form-control-lg form-control-solid" name="phoneNumber" placeholder={user.phoneNumber} value={formValues.phoneNumber} onChange={handleFromValuesChange} />
                        </div>
                        <div className="row mb-6">
                            <AppInput label="Address" displayOnSameColon={true} labelClasses="col-lg-4 col-form-label fw-bold fs-6" inputClasses="form-control form-control-lg form-control-solid" name="adress" placeholder={user.adress} value={formValues.adress} onChange={handleFromValuesChange} />
                    </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end py-6 px-9">
                        <button type="reset" className="btn btn-light btn-active-light-primary me-2" onClick={closeEditForm}>Discard</button>
                        <LoadingButton isSubmitting={isSubmitting}>Save Changes</LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfileDetails;