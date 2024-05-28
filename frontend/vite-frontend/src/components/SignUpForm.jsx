import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackendApi from '../api';
import '../App.css';


function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        state: "pending",
    });

    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignUpForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // Use the createUser method from your API class
            const res = await BackendApi.createUser(formData);
            console.log("User registered successfully", res);

            // Clear form data after successful registration
            setFormData({
                email: "",
                firstName: "",
                lastName: "",
                state: "pending"
            });

            // Navigate to another page if needed
            navigate('/');  

        } catch (error) {
            if (error.response) {
                console.error('Error registering user', error.response.data);
            } else {
                console.error('Error registering user', error.message);
            }
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <div className="container">
        <div className="row justify-content-center mx-3">
            <div className="col-md-6">
                <div className='signup-container'>
                    <h2 className="mb-4">Sign Up for Yodlr</h2>
                    <div className='signup-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='signup-text'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    placeholder='Email'
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                />
                            </div>

                            <div className='signup-text'>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder='First Name'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                />
                            </div>

                            <div className='signup-text'>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder='Last Name'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default SignUpForm;
