import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../../assets/media/logos/logo-1.svg";
import GoogleLogo from "../../../assets/media/svg/brand-logos/google-icon.svg";
import agent from "../../api/agent";
import UserContext from "../../context/user-context";

const Login = () => {
	const userCtx = useContext(UserContext);
	const history = useHistory();
	const [formValues, setFormValues] = useState({
		email: "",
		password: ""
	});

	useEffect(() => {
		if (userCtx.user)
			history.push("/");
		
	}, []);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
    	setFormValues({...formValues, [name]: value});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		agent.Account.login(formValues)
			.then(user => {
				userCtx.saveUser(user);
				history.push("/");
			})
			.catch(error => console.log(error))
	}

    return (
        <div className="d-flex flex-column flex-root mt-20">
			{/* <!--begin::Authentication - Sign-in --> */}
			<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style={{backgroundImage: "url(assets/media/illustrations/sigma-1/14.png"}}>
				{/* <!--begin::Content--> */}
				<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					{/* <!--begin::Logo--> */}
					<img alt="Logo" src={Logo} className="h-40px mb-20" />
					{/* <!--end::Logo--> */}
					{/* <!--begin::Wrapper--> */}
					<div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						{/* <!--begin::Form--> */}
						<form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
							{/* <!--begin::Heading--> */}
							<div className="text-center mb-10">
								{/* <!--begin::Title--> */}
								<h1 className="text-dark mb-3">Sign In to Metronic</h1>
								{/* <!--end::Title--> */}
								{/* <!--begin::Link--> */}
								<div className="text-gray-400 fw-bold fs-4">New Here? &nbsp;
								<Link to="/" className="link-primary fw-bolder">Create an Account</Link></div>
								{/* <!--end::Link--> */}
							</div>
							{/* <!--begin::Heading--> */}
							{/* <!--begin::Input group--> */}
							<div className="fv-row mb-10">
								{/* <!--begin::Label--> */}
								<label className="form-label fs-6 fw-bolder text-dark">Email</label>
								{/* <!--end::Label--> */}
								{/* <!--begin::Input--> */}
								<input
									className="form-control form-control-lg form-control-solid" 
									type="text" 
									name="email" 
									autoComplete="off" 
									onChange={handleInputChange}
								/>
								{/* <!--end::Input--> */}
							</div>
							{/* <!--end::Input group--> */}
							{/* <!--begin::Input group--> */}
							<div className="fv-row mb-10">
								{/* <!--begin::Wrapper--> */}
								<div className="d-flex flex-stack mb-2">
									{/* <!--begin::Label--> */}
									<label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
									{/* <!--end::Label--> */}
									{/* <!--begin::Link--> */}
									<Link to="/" className="link-primary fs-6 fw-bolder">Forgot Password ?</Link>
									{/* <!--end::Link--> */}
								</div>
								{/* <!--end::Wrapper--> */}
								{/* <!--begin::Input--> */}
								<input 
									className="form-control form-control-lg form-control-solid" 
									type="password" 
									name="password" 
									autoComplete="off" 
									onChange={handleInputChange} 
								/>
								{/* <!--end::Input--> */}
							</div>
							{/* <!--end::Input group--> */}
							{/* <!--begin::Actions--> */}
							<div className="text-center">
								{/* <!--begin::Submit button--> */}
								<button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
									<span className="indicator-label">Continue</span>
									<span className="indicator-progress">Please wait...
									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
								{/* <!--end::Submit button--> */}
								{/* <!--begin::Separator--> */}
								<div className="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
								{/* <!--end::Separator--> */}
								{/* <!--begin::Google link--> */}
								<Link to="/" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
								<img alt="Logo" src={GoogleLogo} className="h-20px me-3" />Continue with Google</Link>
								{/* <!--begin::Google link--> */}
							</div>
							{/* <!--end::Actions--> */}
						</form>
						{/* <!--end::Form--> */}
					</div>
					{/* <!--end::Wrapper--> */}
				</div>
				{/* <!--end::Content--> */}
			</div>
			{/* <!--end::Authentication - Sign-in--> */}
		</div>
    )
}

export default Login;