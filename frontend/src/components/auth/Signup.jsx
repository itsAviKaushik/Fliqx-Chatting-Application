// import login from '../../assets/images/login.jpg'
import logo from '../../assets/images/logo/logo.png'
import './css/login.scss'

function Signup() {
    return (
        <div className="login-component row g-0">
            <div className='col-md-12 form'>
                <form className="mx-auto">
                    <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                        <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
                        <h4 className='pt-2'>Fliqx</h4>
                    </div>
                    <div className="card p-3 mx-auto mt-5" style={{ maxWidth: "850px", borderRadius: 5, border: "none" }}>
                        <h5 className="text-center mt-3 mb-3" style={{ color: "#343a40", fontWeight: 600 }}>Sign Up</h5>
                        <h6 className="text-center mb-4 sub-heading text-muted">Create you account to continue to Fliqx.</h6>
                        <div className="card-body row p-4">
                            <div className="col-md-6 mb-4">
                                <label htmlFor="firstName" className="form-label fw-medium">First Name</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                    </div>
                                    <input type="text" className="form-control" name='firstName' style={{ height: 40 }} id="firstName" placeholder='Please enter your First Name' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="lastName" className="form-label fw-medium">Last Name</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                    </div>
                                    <input type="text" className="form-control" name='lastName' style={{ height: 40 }} id="lastName" placeholder='Please enter your Surname' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="email" className="form-label fw-medium">Email address</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign"><circle cx={12} cy={12} r={4} /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></svg>
                                    </div>
                                    <input type="email" className="form-control" name='email' style={{ height: 40 }} id="email" placeholder='Please enter a valid Email Address' />
                                </div>
                                <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="phone" className="form-label fw-medium">Phone Number</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <input type='tel' className="form-control" name='phone' style={{ height: 40 }} id="phone" placeholder='Please enter a valid Phone Number' />
                                </div>
                                <div id="emailHelp" className="form-text">We will never share your Contact Number with anyone else.</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="password" className="form-label fw-medium">Password</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                    <input type="password" className="form-control" name='password' style={{ height: 40 }} id="password" placeholder='Please enter your Password' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="password" className="form-label fw-medium">Confirm Password</label>
                                <div className='d-flex'>
                                    <div className='svg-box'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                    <input type="password" className="form-control" name='password' style={{ height: 40 }} id="password" placeholder='Please enter your Password' />
                                </div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary text-white w-100">Open my Account!</button>
                        </div>
                        <p className="text-muted text-center fw-bold">OR</p>
                        <p className="text-center text-md-white">
                            Already have an Account? <a href="/login" className='forgot'>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
