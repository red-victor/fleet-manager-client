 const LoadingButton = ({isSubmitting, onSubmit}) => {
     return (
        <button
        type="submit"
        className="btn btn-primary"
        data-kt-users-modal-action="submit"
        data-kt-indicator={isSubmitting ? "on" : "off"}
        onSubmit={onSubmit}
      >
        <span className="indicator-label">Submit</span>
        <span className="indicator-progress">
          Please wait...
          <span className="spinner-border spinner-border-sm align-middle ms-2" />
        </span>
      </button>
     )
 }

 export default LoadingButton;