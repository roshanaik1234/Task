import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    confirmPassword: ""
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
    number: false,
    confirmPassword: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Validation functions
  const validateUsername = (value) => {
    if (!value.trim()) return "Username is required";
    if (value.length < 3) return "Username must be at least 3 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    if (!/\d/.test(value)) return "Password must contain at least one digit";
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
      return "Password must contain at least one symbol";
    }
    return "";
  };

  const validateNumber = (value) => {
    if (!value.trim()) return "Contact number is required";
    const numberRegex = /^\d{10}$/;
    if (!numberRegex.test(value)) return "Please enter a valid 10-digit number";
    return "";
  };

  const validateConfirmPassword = (value) => {
    if (!value) return "Please confirm your password";
    if (value !== formData.password) return "Passwords do not match";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (touched[name]) {
      let error = "";
      switch (name) {
        case "username":
          error = validateUsername(value);
          break;
        case "email":
          error = validateEmail(value);
          break;
        case "password":
          error = validatePassword(value);
          if (formData.confirmPassword) {
            setErrors(prev => ({
              ...prev,
              confirmPassword: value !== formData.confirmPassword ? "Passwords do not match" : ""
            }));
          }
          break;
        case "number":
          error = validateNumber(value);
          break;
        case "confirmPassword":
          error = validateConfirmPassword(value);
          break;
        default:
          break;
      }
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    let error = "";
    switch (name) {
      case "username":
        error = validateUsername(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "number":
        error = validateNumber(value);
        break;
      case "confirmPassword":
        error = validateConfirmPassword(value);
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleRegister = () => {
    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const numberError = validateNumber(formData.number);
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword);

    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
      number: numberError,
      confirmPassword: confirmPasswordError
    });

    setTouched({
      username: true,
      email: true,
      password: true,
      number: true,
      confirmPassword: true
    });

    if (!usernameError && !emailError && !passwordError && !numberError && !confirmPasswordError) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          username: "",
          email: "",
          password: "",
          number: "",
          confirmPassword: ""
        });
        setTouched({
          username: false,
          email: false,
          password: false,
          number: false,
          confirmPassword: false
        });
        setErrors({
          username: "",
          email: "",
          password: "",
          number: "",
          confirmPassword: ""
        });
      }, 3000);
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          margin: 0;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .form-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 450px;
          padding: 40px;
          animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .header h2 {
          color: #333;
          font-size: 32px;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .header p {
          color: #666;
          font-size: 14px;
        }

        .success-message {
          background: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-message svg {
          width: 20px;
          height: 20px;
          fill: #155724;
          flex-shrink: 0;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          color: #333;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group input.error {
          border-color: #dc3545;
        }

        .form-group input.error:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
        }

        .error-message {
          color: #dc3545;
          font-size: 12px;
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .hint-text {
          color: #999;
          font-size: 12px;
          margin-top: 5px;
        }

        .btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .btn:active {
          transform: translateY(0);
        }

        .footer-text {
          text-align: center;
          color: #666;
          font-size: 14px;
          margin-top: 25px;
        }

        .footer-text span {
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-text span:hover {
          color: #764ba2;
        }

        @media (max-width: 480px) {
          .form-container {
            padding: 30px 20px;
          }

          .header h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="app-container">
        <div className="form-container">
          <div className="header">
            <h2>Create Account</h2>
            <p>Fill in the details to register</p>
          </div>

          {showSuccess && (
            <div className="success-message">
              <svg viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Registration Successful!</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.username && touched.username ? 'error' : ''}
            />
            {errors.username && touched.username && (
              <div className="error-message">
                <span>⚠</span>
                <span>{errors.username}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'error' : ''}
            />
            {errors.email && touched.email && (
              <div className="error-message">
                <span>⚠</span>
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="number">Contact Number</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Enter 10-digit number"
              value={formData.number}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength="10"
              className={errors.number && touched.number ? 'error' : ''}
            />
            {errors.number && touched.number && (
              <div className="error-message">
                <span>⚠</span>
                <span>{errors.number}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? 'error' : ''}
            />
            {errors.password && touched.password && (
              <div className="error-message">
                <span>⚠</span>
                <span>{errors.password}</span>
              </div>
            )}
            <div className="hint-text">Min 6 characters, 1 digit, 1 symbol required</div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.confirmPassword && touched.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="error-message">
                <span>⚠</span>
                <span>{errors.confirmPassword}</span>
              </div>
            )}
          </div>

          <button type="button" className="btn" onClick={handleRegister}>
            Register
          </button>

          <div className="footer-text">
            Already have an account? <span>Sign in</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;