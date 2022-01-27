import BlankUserImg from "../../../../assets/media/avatars/blank.png";
import UserPhoto from "../../../../assets/media/avatars/150-1.jpg";
import LoadingButton from "../../../layout/appComponents/LoadingButton";
import AppInput from "../../../layout/appComponents/input/AppInput";
import { useEffect } from "react";
import { useState } from "react";

const AddCarModal = ({ closeModal, addCar, isSubmitting }) => {
    const initialCarFormValueState = {
        imagePath: "",
        licencePlate: "",
        chassisSeries: "",
        brand: "",
        model: "",
        firstRegistrationDate: new Date(Date.now()).toISOString().split('T')[0],
        color: "",
        mileage: 0,
    }

    const [carFormValues, setCarFormValues] = useState(initialCarFormValueState);

    const isValidForm = () => carFormValues.licencePlate !== "" && carFormValues.chassisSeries !== "" && carFormValues.brand !== "" &&
        carFormValues.model !== "" && carFormValues.firstRegistrationDate !== "" && carFormValues.color !== "" && carFormValues.mileage !== "";

    const handleCarFormValuesChange = (event) => {
        const { name, value } = event.target;
        setCarFormValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!isValidForm()) return;
        console.log(carFormValues);
        addCar(carFormValues);
    }

    function escFunction(event) {
        if (event.keyCode === 27) {
            closeModal();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => document.removeEventListener("keydown", escFunction, false);
    }, []);

    return (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(24,28,50, 0.15)" }} aria-modal={true} role="dialog">
            <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="fw-bolder text-center">Add Car</h2>
                        <div className="btn btn-icon btn-sm btn-active-icon-primary" onClick={closeModal}>
                            <span className="svg-icon svg-icon-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        opacity="0.5"
                                        x={6}
                                        y="17.3137"
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-45 6 17.3137)"
                                        fill="black"
                                    />
                                    <rect
                                        x="7.41422"
                                        y={6}
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(45 7.41422 6)"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                        <form id="kt_modal_add_user_form" className="form" onSubmit={handleSubmit}>
                            <div
                                className="d-flex flex-column scroll-y me-n7 pe-7"
                                id="kt_modal_add_user_scroll"
                                data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}"
                                data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                data-kt-scroll-offset="300px"
                            >
                                <AppInput
                                    label="Car Brand" name="brand" placeholder="Ford"
                                    value={carFormValues.brand} onChange={handleCarFormValuesChange}
                                />
                                <AppInput
                                    label="Model" name="model" placeholder="Mustang"
                                    value={carFormValues.model} onChange={handleCarFormValuesChange}
                                />
                                <AppInput
                                    label="Color" name="color" placeholder="Red"
                                    value={carFormValues.color} onChange={handleCarFormValuesChange}
                                />
                                <AppInput
                                    label="License Plate" name="licencePlate" placeholder="B-214-DEZ"
                                    value={carFormValues.licencePlate} onChange={handleCarFormValuesChange}
                                />
                                <AppInput
                                    label="Chassis Series Number" name="chassisSeries" placeholder="1HG CM8263 3A004352"
                                    value={carFormValues.chassisSeries} onChange={handleCarFormValuesChange}
                                />
                                <AppInput
                                    label="Mileage" name="mileage" placeholder="20000 km"
                                    value={carFormValues.mileage} type="number" onChange={handleCarFormValuesChange}
                                />
                                <AppInput
                                    label="First Registration Date" name="firstRegistrationDate" type="date"
                                    value={carFormValues.firstRegistrationDate} onChange={handleCarFormValuesChange}
                                    inputClasses={"form-control form-control-solid"}
                                />
                            </div>
                            <div className="text-center pt-15">
                                <button
                                    type="reset"
                                    className="btn btn-light me-3"
                                    onClick={closeModal}
                                >
                                    Discard
                                </button>
                                <LoadingButton isSubmitting={isSubmitting}>Submit</LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCarModal;