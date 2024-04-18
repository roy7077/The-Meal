import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import '../style/signupform.css';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
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
  
      const url = 'https://the-meal.onrender.com/api/v1/signup'; // Replace with your server endpoint
  
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
          navigate('/login'); // Redirect to login page after successful signup
      } catch (error) {
          // Handle errors
          console.error('There was a problem sending the form data:', error.message);
          //setError('There was a problem. Please try again later.'); // Update state to show error to the user
      }
  };
  

  return (
    <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
);
}

export default SignUp;
