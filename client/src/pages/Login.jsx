import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const handlesubmission = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          })
    
          if (res.ok) {
    const data= await res.json();
    localStorage.setItem("authToken",data.authToken);
            alert("Welcome")
            setemail("");
            setpassword("");
          } else {
            alert("Login failed. Please check your input and try again.");
          }
        } catch (e) {
          alert(e.message);
        }
    
      };
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Login</h1>
            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" 
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}/>

            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}} />
         

            <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                onClick={handlesubmission}
            >Login</button>
        </div>

        <div class="text-grey-dark mt-6">
         Don't have Account? 
            <Link class="no-underline border-b border-blue text-blue" to="/signup">
               Signup
            </Link>.
        </div>
    </div>
</div>
  )
}

export default Login