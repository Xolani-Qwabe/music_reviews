import React from 'react';
import { useForm } from 'react-hook-form';
import FormGroup from '../components/FormGroup';
import './Register.css';

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="signUp-title">Register</h1>
      <div className="registration-form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            label="Username"
            type="text"
            name="username"
            id="username"
            register={register}
            autocomplete="username"
            required
            validation={{
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9]{3,15}$/,
                message: "Username must be 3-15 characters and contain only letters and numbers",
              },
            }}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}

          <FormGroup
            label="Email"
            type="email"
            name="email"
            id="email"
            register={register}
            autocomplete="email"
            required
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            }}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}

          <FormGroup
            label="Password"
            type="password"
            name="password"
            id="password"
            register={register}
            autocomplete="new-password"
            required
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message: "Password must include a capital letter, a number, and a special character",
              },
            }}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}

          <FormGroup
            label="Confirm Password"
            type="password"
            name="confirm-password"
            id="confirm-password"
            register={register}
            autocomplete="new-password"
            required
            validation={{
              required: "Confirm password is required",
              validate: (value) => value === watch('password') || "Passwords do not match",
            }}
          />
          {errors["confirm-password"] && <p className="error-message">{errors["confirm-password"].message}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
