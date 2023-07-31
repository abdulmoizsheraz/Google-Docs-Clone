import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmission = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
    
      const json = await res.json();
      if (json.status === "ok") {
        localStorage.setItem("auth", json.authtoken);
        setname("");
        setemail("");
        setpassword("");
      } else {
        alert("Signup failed. Please check your input and try again.");
      }
    } catch (e) {
      alert(e.message);
    }

  };
  
  return (
    <form className="bg-grey-lighter min-h-screen flex flex-col" onSubmit={handlesubmission}>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            value={name}
            onChange={(e) => { setname(e.target.value) }}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setemail(e.target.value) }} />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }} />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
          >Create Account</button>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link className="no-underline border-b border-blue text-blue" to="/login">
            Log in
          </Link>.
        </div>
      </div>
    </form>
  );
};

export default Signup;
