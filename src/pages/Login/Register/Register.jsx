import React from "react";
import { Input, Button } from "react-daisyui";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // handle registration logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-fuchsia-300 p-6 rounded-lg shadow-lg w-1/2 h-4/5">
        <h2 className="text-lg font-semibold mb-4">Register</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col h-full space-y-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="input w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="input w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="input w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your photo URL"
              className="input w-full"
            />
          </div>
          <Button type="submit" className="btn btn-primary w-full">
            Register
          </Button>
          <p className="mb-12">
            <small>
              Already have an account ? please{" "}
              <Link className="text-primary-500 hover:underline font-bold" to="/login">
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;