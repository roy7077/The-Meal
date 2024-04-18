import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const url = 'http://localhost:8080/api/v1/login'; // Replace with your server endpoint
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convert form data to JSON
            });
    
            // console.log(response);
            // console.log(35)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // console.log(40);
            // Server responded with success
            console.log('Form data sent successfully:', formData);
            navigate('/app'); // Redirect to login page after successful signup
        } catch (error) {
            // Handle errors
            console.error('There was a problem sending the form data:', error.message);
            //setError('There was a problem. Please try again later.'); // Update state to show error to the user
        }
    };
  

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input type="email" id="username" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
