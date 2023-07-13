// import login from '../../assets/images/login.jpg'
import logo from '../../assets/images/logo/logo.png'
import './css/login.scss'

function Login() {
    return (
        <div className="login-component row g-0">
            <div className='col-md-12 form'>
                <form className="mx-auto">
                    <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                        <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
                        <h4 className='pt-2'>Fliqx</h4>
                    </div>
                    <h5 className="text-center mt-5 mb-3" style={{ color: "#343a40", fontWeight: 600 }}>Sign in</h5>
                    <h6 className="text-center mb-4 sub-heading text-muted">Sign in to continue to Fliqx.</h6>
                    <div className="card p-3 mx-auto" style={{ maxWidth: "450px", borderRadius: 5, border: "none" }}>
                        <div className="card-body p-4">
                            <div className="mb-4">
                                <label htmlFor="id" className="form-label fw-medium">Email address or Phone</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                    </div>
                                    <input type="text" className="form-control" name='id' style={{ height: 40 }} id="id" placeholder='Please enter a valid Email or Phone' />
                                </div>
                                <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label fw-medium">Password</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                    <input type="password" className="form-control" name='password' style={{ height: 40 }} id="password" placeholder='Please enter your Password' />
                                </div>
                                <div className='text-end pt-2'>
                                    <a href="/forgotPassword" className='forgot text-muted font-size-13'>Forgot Password?</a>
                                </div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary text-white w-100">Submit</button>
                        </div>
                    </div>
                    <p className="text-center text-md-white mt-5">
                        Don&apos;t have an Account? <a href="/signup" className='forgot'>Signup now</a>
                    </p>
                </form>
            </div>
            {/* <div className="image-box col-md-6">
                <img src={login} alt="Login" className='w-100' style={{ height: "100vh" }} />
            </div> */}
        </div>
    )
}

export default Login
