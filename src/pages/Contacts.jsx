import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
	const form = useRef()
	const [t, i18n] = useTranslation('global')


	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_4dzm7oz', 'template_qqolcec', form.current, 'Yc4mzWarFs7W36WL5')
		  .then((result) => {
			  console.log(result.text);
			  toast.success(t("notify.message2"))
		  }, (error) => {
			  toast.error(t("notify.message3"))
		  });
		  e.target.reset()
	  };

    return (
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch" style={{border: '0.02em solid black'}}>
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">{t("contacts.form_h1")}</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
							  {t("contacts.form_p")}
				      		</div>
									<form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label">{t("contacts.name")}</label>
													<input type="text" className="form-control" name="user_name" id="user_name" placeholder={t("contacts.name")} required/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label">Email</label>
													<input type="email" className="form-control" name="user_email" id="user_email" placeholder={t("contacts.email")} required/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label">{t("contacts.subject")}</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder={t("contacts.subject")} required/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label">{t("contacts.message")}</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder={t("contacts.message")} required></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<center>
													<button type='submit'  className='btn_send'>{t("contacts.button")}</button>
													</center>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 d-flex align-items-stretch">
								<div className="info-wrap w-100 p-md-5 p-4" style={{background: 'rgba(1, 210, 142, 0.4)'}}>
									<h3>{t("contacts.h1")}</h3>
									<p className="mb-4">{t("contacts.h2")}</p>
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>{t("contacts.span1")}</span> {t("contacts.address")}</p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>{t("contacts.span2")}:</span> <a href="tel://1234567920">+375 17 219 48 40</a></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">bvg1952@gmail.com
                                birukv@capital.by
                                consulting@capital.by
                                </a></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-globe"></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>{t("contacts.span3")}</span> <a href="#">+(375)(17) 306-35-23</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
	</section>
    );
};

export default Contacts;