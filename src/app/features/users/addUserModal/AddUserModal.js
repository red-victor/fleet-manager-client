import BlankUserImg from "../../../../assets/media/avatars/blank.png";
import UserPhoto from "../../../../assets/media/avatars/150-1.jpg"
import LoadingButton from "../../../layout/appComponents/LoadingButton";
import AppInput from "../../../layout/appComponents/AppInput";
import { useEffect } from "react";
import { useState } from "react";
import agent from "../../../api/agent";

const AddUserModal = ({closeModal, registerUser, isSubmitting}) => {
  const initialUserFormValueState = {
    firstName: "",
    lastName: "",
    email: "",
    cnp: "",
    phoneNumber: "",
    address: "",
    role: "Employee"
  }

  const [userAvatar, setUserAvatar] = useState(null);

  const [userFormValues, setUserFormValues] = useState(initialUserFormValueState);

  const isValidForm = () => userFormValues.firstName != "" && userFormValues.lastName != "" && userFormValues.email != "" &&
  userFormValues.cnp != "" && userFormValues.phoneNumber != "" && userFormValues.address != "";
  

  const handleUserFromValuesChange = (event) => {
    const {name, value} = event.target;
    setUserFormValues(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!isValidForm()) return;
    registerUser(userFormValues);
  } 

  function escFunction(event){
    if(event.keyCode === 27) {
      closeModal();
    }
  }

    useEffect(() => {
      document.addEventListener("keydown", escFunction, false);

      return () => document.removeEventListener("keydown", escFunction, false);
    }, []);

    return (
      <div className="modal fade show" style={{display: "block", backgroundColor: "rgba(24,28,50, 0.15)"}} aria-modal={true} role="dialog">
      <div className="modal-dialog modal-dialog-centered mw-650px">
        {/*begin::Modal content*/}
        <div className="modal-content">
          {/*begin::Modal header*/}
          <div className="modal-header">
            {/*begin::Modal title*/}
            <h2 className="fw-bolder">Add User</h2>
            {/*end::Modal title*/}
            {/*begin::Close*/}
            <div
              className="btn btn-icon btn-sm btn-active-icon-primary"
              onClick={closeModal}
            >
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
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
              {/*end::Svg Icon*/}
            </div>
            {/*end::Close*/}
          </div>
          {/*end::Modal header*/}
          {/*begin::Modal body*/}
          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            {/*begin::Form*/}
            <form id="kt_modal_add_user_form" className="form" onSubmit={handleSubmit}>
              {/*begin::Scroll*/}
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
                {/*begin::Input group*/}
                <div className="fv-row mb-7">
                  {/*begin::Label*/}
                  <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
                  {/*end::Label*/}
                  {/*begin::Image input*/}
                  <div
                    className={`image-input image-input-outline ${!userAvatar && 'image-input-empty'}`}
                    data-kt-image-input="true"
                    style={{
                      backgroundImage: `url(${BlankUserImg})`
                    }}
                  >
                    {/*begin::Preview existing avatar*/}
                    <div
                      className="image-input-wrapper w-125px h-125px"
                      style={{
                        backgroundImage: userAvatar ? `url(${UserPhoto})` : 'none' // !userImage and backgroundImage none
                      }}
                    />
                    {/*end::Preview existing avatar*/}
                    {/*begin::Label*/}
                    <label
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title="Change avatar"
                    >
                      <i className="bi bi-pencil-fill fs-7" />
                      {/*begin::Inputs*/}
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                      <input type="hidden" name="avatar_remove" />
                      {/*end::Inputs*/}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Cancel*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      title="Cancel avatar"
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*end::Cancel*/}
                    {/*begin::Remove*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title="Remove avatar"
                      onClick={() => setUserAvatar(null)}
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*end::Remove*/}
                  </div>
                  {/*end::Image input*/}
                  {/*begin::Hint*/}
                  <div className="form-text">
                    Allowed file types: png, jpg, jpeg.
                  </div>
                  {/*end::Hint*/}
                </div>
                {/*end::Input group*/}
                <AppInput label="First Name" name="firstName" placeholder="John" value={userFormValues.firstName} onChange={handleUserFromValuesChange} />
                <AppInput label="Last Name" name="lastName" placeholder="Doe" value={userFormValues.lastName} onChange={handleUserFromValuesChange} />
                <AppInput type="email" label="Email" name="email" placeholder="example@domain.com" value={userFormValues.email} onChange={handleUserFromValuesChange} />
                <AppInput label="CNP" name="cnp" placeholder="12345678901234" value={userFormValues.cnp} onChange={handleUserFromValuesChange} />
                <AppInput label="phoneNumber" name="phoneNumber" placeholder="12345678901234" value={userFormValues.phoneNumber} onChange={handleUserFromValuesChange} />
                <AppInput label="Address" name="address" placeholder="Personal address" value={userFormValues.address} onChange={handleUserFromValuesChange} />
                {/*begin::Input group*/}
                <div className="mb-7">
                  {/*begin::Label*/}
                  <label className="required fw-bold fs-6 mb-5">Role</label>
                  {/*end::Label*/}
                  {/*begin::Roles*/}
                  {/*begin::Input row*/}
                  <div className="d-flex fv-row">
                    {/*begin::Radio*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*begin::Input*/}
                      <input
                        className="form-check-input me-3"
                        name="role"
                        type="radio"
                        value="Admin"
                        id="kt_modal_update_role_option_0"
                        checked={userFormValues.role === "Admin"}
                        onChange={handleUserFromValuesChange}
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className="form-check-label"
                        htmlFor="kt_modal_update_role_option_0"
                      >
                        <div className="fw-bolder text-gray-800">Admin</div>
                        <div className="text-gray-600">
                          Company manager
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Radio*/}
                  </div>
                  {/*end::Input row*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Input row*/}
                  <div className="d-flex fv-row">
                    {/*begin::Radio*/}
                    <div className="form-check form-check-custom form-check-solid">
                      {/*begin::Input*/}
                      <input
                        className="form-check-input me-3"
                        name="role"
                        type="radio"
                        value="Employee"
                        id="kt_modal_update_role_option_1"
                        checked={userFormValues.role === "Employee"}
                        onChange={handleUserFromValuesChange}
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className="form-check-label"
                        htmlFor="kt_modal_update_role_option_1"
                      >
                        <div className="fw-bolder text-gray-800">Employee</div>
                        <div className="text-gray-600">
                          Company employee
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Radio*/}
                  </div>
                  {/*end::Input row*/}
                  {/*end::Roles*/}
                </div>
                {/*end::Input group*/}
              </div>
              {/*end::Scroll*/}
              {/*begin::Actions*/}
              <div className="text-center pt-15">
                <button
                  type="reset"
                  className="btn btn-light me-3"
                  data-kt-users-modal-action="cancel"
                >
                  Discard
                </button>
                <LoadingButton isSubmitting={isSubmitting} />
              </div>
              {/*end::Actions*/}
            </form>
            {/*end::Form*/}
          </div>
          {/*end::Modal body*/}
        </div>
        {/*end::Modal content*/}
      </div>
      </div>
    )
}

export default AddUserModal;