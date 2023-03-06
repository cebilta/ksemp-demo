import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import './SignIn.css'

const roles = ['Admin', 'User', 'Guest'];

const SignIn = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState(roles[0]);
  const [captchaToken, setCaptchaToken] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User ID:', userId);
    console.log('Password:', password);
    console.log('User Role:', userRole);
    console.log('Captcha Token:', captchaToken);
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <div className="container signin-box">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="userId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="userRole">
          <Form.Label>User Role</Form.Label>
          <Form.Control
            as="select"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="captcha">
          <Form.Label>Captcha</Form.Label>
          <ReCAPTCHA
            sitekey="6LfICr0kAAAAABROwAvw8OqD0dWHLktTTQ_UaMCW"
            onChange={handleCaptchaChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;

