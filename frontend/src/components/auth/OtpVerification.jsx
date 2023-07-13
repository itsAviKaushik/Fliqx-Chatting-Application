import logo from '../../assets/images/logo/logo.png'
import './css/login.scss'

function OtpVerification() {
    return (
        <div className="login-component row g-0">
            <div className='col-md-12 form'>
                <form className="mx-auto">
                    <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                        <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
                        <h4 className='pt-2'>Fliqx</h4>
                    </div>
                    <h5 className="text-center mt-5 mb-3" style={{ color: "#343a40", fontWeight: 600 }}>Verify using OTP</h5>
                    <h6 className="text-center mb-4 sub-heading text-muted">Email Verification.</h6>
                    <div className="card p-3 mx-auto" style={{ maxWidth: "450px", borderRadius: 5, border: "none" }}>
                        <div className="card-body p-4">
                            <div className="mb-4">
                                <label htmlFor="otp" className="form-label fw-medium">OTP</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                    <input type="number" className="form-control" name='otp' style={{ height: 40 }} id="otp" placeholder='Please enter OTP' />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary text-white w-100">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="image-box col-md-6">
                <img src={login} alt="Login" className='w-100' style={{ height: "100vh" }} />
            </div> */}
        </div>
    )
}

export default OtpVerification