import React, { useEffect, useState, useRef } from 'react'
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextEditor = ({ update, id }) => {
  const authToken=localStorage.getItem("authToken");
  const quillRef = useRef();
  const [title, settitle] = useState("");
  const [isdisabled, setisdisabled] = useState(false);
  const [btntext, setbtntext] = useState("Save");
  const [Content, setContent] = useState("Hi My Name is Moiz");
  
  const url = 'http://localhost:5000/api/createdocument';
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken
    },
    body: JSON.stringify({ title: title, content: Content })
  };
  const handlechangequill = () => {
    const plainText = quillRef.current.getEditor().getText();
    setContent(plainText);
  };
  const savedocument = async () => {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        toast.success('Saved !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setisdisabled(true);
        setbtntext("Saved!");
      } else {
        alert("Your Content can't be Empty");
      }
    } catch (error) {
      console.error(error);
    }
  }
  const updatedocument= async ()=>{
    try {
      const response = await fetch(`http://localhost:5000/api/updatedocument/${id}`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        body: JSON.stringify({ title: title, content: Content })
      });
      if (response.ok) {
        toast.success('Updated !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setisdisabled(true);
        setbtntext("Updated!")
      } else {
        alert("Your Content can't be Empty");
      }
    } catch (error) {
      console.error(error);
    }
    
  }
useEffect(() => {
localStorage.setItem("content",Content)
setContent(localStorage.getItem("content"));
}, [Content])

  return (
    <>
      <input type="text" className='enabled:hover:border-purple-600  p-2 m-3 rounded-xl border border-purple-600' placeholder='Title' value={title} onChange={(e) => { settitle(e.target.value) }} />
      <div className='flex flex-col justify-center '>
      <ReactQuill theme="snow" ref={quillRef}  onChange={handlechangequill} />
        {update !== true ? <button disabled={isdisabled} className="bg-purple-500 mt-10 text-white px-4 py-2 rounded-lg" onClick={savedocument}>
          {btntext}
        </button> : <button disabled={isdisabled} className="bg-purple-500 mt-10 text-white px-4 py-2 rounded-lg" onClick={updatedocument}>
          Update
        </button>}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  )
}

export default TextEditor