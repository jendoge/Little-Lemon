import React, { useState }  from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/UserDetails.css';
import Date from '../assets/dateicon.svg';
import People from '../assets/peopleIcon.svg';
import Schedule from '../assets/scheduleIcon.svg';
import Celebration from '../assets/celebrationIcon.svg';
import Bruchetta from '../assets/bruchetta.jpg';
import Salad from '../assets/greek salad.jpg';
import Restaurant from '../assets/restaurant.jpg';

function UserDetails() {
    const [radioButton, setRadioButton] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formError, setFormError] = useState('');
    const [textArea, setTextArea] = useState('');
    const location = useLocation();
    const userDetails = location.state;
    const backToHome = useNavigate();
  
    const clickHomeButton = () => {
      backToHome('/');
    };
    
    const handleAgreementChange = () => {
        setRadioButton(!radioButton);

    }
    
    const handleTextAreaChange = (e) => {
        setTextArea(e.target.value);
      };

    return (
        <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNumber: ''
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required('First Name is required'),
                        lastName: Yup.string().required('Last Name is required'),
                        email: Yup.string().email('Invalid email').required('Email is required'),
                        phoneNumber: Yup.string().required('Phone Number is required')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    setShowPopup(true);
                }}
                >
                    {({ isValid, dirty, validateForm}) => (
                    <Form id="user-details-form">
                        <div className='User-Form'>
                        <div className="form-group">
                            <label htmlFor="firstName" className='label-Left'>First Name *</label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name"
                                className="Left-User-Input"
                            />
                            <ErrorMessage name="firstName" component="div" className="error-message-left" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className='label-Right'>Last Name *</label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name"
                                className="Right-User-Input"
                            />
                            <ErrorMessage name="lastName" component="div" className="error-message-Right" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className='label-Left'>Email *</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="Left-User-Input"
                            />
                            <ErrorMessage name="email" component="div" className="error-message-left1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className='label-Right'>Phone Number *</label>
                            <Field
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                className="Right-User-Input"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="error-message-Right"/>
                        </div>

                         <div className='Reservation-Page'>
                            <div>
                            <img src={Date} alt='Date Icon' className='icon-color'/>
                            <p className='link-text'>{userDetails.selectedDate}</p>
                            </div>
                            <div>
                            <img src={People} alt='Profile Icon' className='icon-color'/>
                            <p className='link-text'>{userDetails.dinnersDropdown}</p>
                            </div>
                            <div>
                            <img src={Celebration} alt='Schedule Icon' className='icon-color'/>
                            <p className='link-text'>{userDetails.occasionsDropdown}</p>
                            </div>
                            <div>
                            <img src={Schedule} alt='Party Icon' className='icon-color'/>
                            <p className='link-text'>{userDetails.timeDropdown}</p>
                            </div>
                            <div className='Outdoor'>
                            <p className='link-text'>{userDetails.selectedRadio}</p>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description" className='Text-label-Right'>Special Requests</label>
                            <textarea
                                value={textArea}
                                onChange={handleTextAreaChange}
                                placeholder="Comment"
                                rows={4}
                                cols={50}
                                className='Text-Area'
                            />
                            <ErrorMessage name="description" component="div" className="error-message" />
                            </div>
                            </div>


                    <div className='Radio-Div'>
                <label className='Terms-Conditions'>
                    <input
                    type="radio"
                    value="agree"
                    checked={radioButton}
                    onChange={handleAgreementChange}
                    
                    />
                    You agree to our friendly <Link to="/" className='link'>privacy policy</Link>
                </label>
                    </div>

                    <div className='emptydiv'>.</div>

                    <div className='Three-Image-Section'>
                    <img src={Restaurant} alt="Restaurant" className='Three-Image'/>
                    <img src={Salad} alt="Salad" className='Three-Image'/>
                    <img src={Bruchetta} alt="Bruchetta" className="Three-Image"/>
                    </div>

                        <div className='Submit-Button'>
                            <div className='btn5'>
                                        <button
                                            type="button"
                                            className="btn3"
                                            onClick={() => {
                                                if (isValid && dirty) {
                                                    validateForm().then(() => {
                                                        setShowPopup(true);
                                                    });
                                                } else {
                                                    setFormError('Please fill out the form correctly before submitting.');
                                                }
                                            }}
                                        >
                                Confirm Reservation
                            </button>
                            </div>
                            <div className="error-message">
                            {formError && <div>{formError}</div>}
                            </div>
                        </div>
                        {showPopup && (
                            <div className="popup">
                                <div className="popup-content">
                                    <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                                    <p>Thank you for booking!</p>
                                    <button onClick={clickHomeButton} className="btn7">Home</button>
                                </div>
                            </div>
                        )}
                        </Form>
                                )}
                            </Formik>
                    </div>
    );
}

export default UserDetails;
