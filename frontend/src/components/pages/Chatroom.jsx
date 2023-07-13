import './css/chatroom.scss'
import logo from '../../assets/images/logo/logo.png'
import { useParams } from 'react-router-dom'

function Chatroom() {
    const { id: chatroomId } = useParams();

    return (
        <main className="content">
            <div className="container-fluid box p-0">
                <div className="container avi-chat-box">
                    <div className="card app-box">
                        <div className="row g-0">
                            <div className="col-12 col-lg-5 col-xl-3 border-right">
                                <div className="d-flex align-items-center p-2">
                                    <img src={logo} style={{ width: 50, height: 50 }} alt="logo" />
                                    <h1 className="h3 mb-3 px-3 py-2 pt-4">Messages</h1>
                                </div>
                                <div className="px-4 d-none d-md-block">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <input type="text" className="form-control my-3" placeholder="Search..." />
                                        </div>
                                    </div>
                                </div>
                                <div className='overflow-auto chat-list'>
                                    <a href="/" className="list-group-item list-group-item-action px-2 py-2 border-0">
                                        {/* <div className="badge bg-success float-right">5</div> */}
                                        <div className="d-flex align-items-center px-3">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width={40} height={40} />
                                            <div className="flex-grow-1 px-2">
                                                Vanessa Tucker
                                                <div className="small"><span className="fas fa-circle chat-online" /> Online</div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/" className="list-group-item list-group-item-action px-2 py-2 border-0">
                                        <div className="d-flex align-items-center px-3">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Christina Mason" width={40} height={40} />
                                            <div className="flex-grow-1 px-2">
                                                Christina Mason
                                                <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item list-group-item-action px-2 py-2 border-0">
                                        <div className="d-flex align-items-center px-3">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Fiona Green" width={40} height={40} />
                                            <div className="flex-grow-1 px-2">
                                                Fiona Green
                                                <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item list-group-item-action px-2 py-2 border-0">
                                        <div className="d-flex align-items-center px-3">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="Doris Wilder" width={40} height={40} />
                                            <div className="flex-grow-1 px-2">
                                                Doris Wilder
                                                <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item list-group-item-action px-2 py-2 border-0">
                                        <div className="d-flex align-items-center px-3">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Haley Kennedy" width={40} height={40} />
                                            <div className="flex-grow-1 px-2">
                                                Haley Kennedy
                                                <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="list-group-item list-group-item-action px-2 py-2 border-0">
                                        <div className="d-flex align-items-center px-3">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Jennifer Chang" width={40} height={40} />
                                            <div className="flex-grow-1 px-2">
                                                Jennifer Chang
                                                <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <hr className="d-block d-lg-none mt-1 mb-0" />
                            </div>
                            <div className="col-12 col-lg-7 col-xl-9 position-relative">
                                {chatroomId ?
                                    <>

                                        <div className="py-2 px-4 border-bottom d-lg-block">
                                            <div className="d-flex align-items-center py-1">
                                                <div className="position-relative">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                </div>
                                                <div className="flex-grow-1 pl-3">
                                                    <strong>Sharon Lessman</strong>
                                                    <div className="text-muted small"><em>Typing...</em></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-relative">
                                            <div className="chat-messages p-md-4">
                                                <div className="chat-message-right pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 mr-3">
                                                        <div className="fw-bold mb-1">You</div>
                                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                    </div>
                                                </div>
                                                <div className="chat-message-left pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 ml-3">
                                                        <div className="fw-bold mb-1">Sharon Lessman</div>
                                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                    </div>
                                                </div>
                                                <div className="chat-message-right mb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 mr-3">
                                                        <div className="fw-bold mb-1">You</div>
                                                        Cum ea graeci tractatos.
                                                    </div>
                                                </div>
                                                <div className="chat-message-left pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 ml-3">
                                                        <div className="fw-bold mb-1">Sharon Lessman</div>
                                                        Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                                                        Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                                    </div>
                                                </div>
                                                <div className="chat-message-left pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:37 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 ml-3">
                                                        <div className="fw-bold mb-1">Sharon Lessman</div>
                                                        Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.
                                                    </div>
                                                </div>
                                                <div className="chat-message-right mb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:38 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 mr-3">
                                                        <div className="fw-bold mb-1">You</div>
                                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                    </div>
                                                </div>
                                                <div className="chat-message-left pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:39 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 ml-3">
                                                        <div className="fw-bold mb-1">Sharon Lessman</div>
                                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                    </div>
                                                </div>
                                                <div className="chat-message-right mb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:40 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 mr-3">
                                                        <div className="fw-bold mb-1">You</div>
                                                        Cum ea graeci tractatos.
                                                    </div>
                                                </div>
                                                <div className="chat-message-right mb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:41 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 mr-3">
                                                        <div className="fw-bold mb-1">You</div>
                                                        Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.
                                                    </div>
                                                </div>
                                                <div className="chat-message-left pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:42 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 ml-3">
                                                        <div className="fw-bold mb-1">Sharon Lessman</div>
                                                        Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                                                        Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                                    </div>
                                                </div>
                                                <div className="chat-message-right mb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:43 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 mr-3">
                                                        <div className="fw-bold mb-1">You</div>
                                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                                    </div>
                                                </div>
                                                <div className="chat-message-left pb-4">
                                                    <div className='d-flex flex-direction-column align-item-center px-2' style={{ flexDirection: "column" }}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
                                                        <div className="text-muted small text-nowrap mt-2">2:44 am</div>
                                                    </div>
                                                    <div className="flex-shrink-1 bg-light rounded message py-2 px-3 ml-3">
                                                        <div className="fw-bold mb-1">Sharon Lessman</div>
                                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-0 py-3 px-4 border-top send-box">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Type your message" />
                                                <button className="btn btn-primary text-white">Send</button>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <div className='d-flex justify-content-center flex-column align-items-center' style={{ height: "100%" }}>
                                        <img src={logo} alt="logo" style={{ width: 100, height: 100 }} />
                                        <h4 className='p-4'>Fliqx - Chatting Application</h4>
                                        <p>Let&apos;s connect to your loved ones and continue the remarkable relationship. </p>
                                        <p className='text-muted'>Please Report to us if you find any problem regarding the Application.</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Chatroom