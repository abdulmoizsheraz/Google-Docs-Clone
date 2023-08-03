import React, { useEffect ,useState} from 'react'
import {Link } from "react-router-dom";
import {RiDeleteBin5Fill} from "react-icons/ri"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
  const [documents,setdocuments]=useState([])
  const authToken=localStorage.getItem("authToken");
  const url = 'http://localhost:5000/api/documents';
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken
    },
  };
  const fetchdocuments=async()=>{
    const response = await fetch(url, options);
   let  data= await response.json();
   setdocuments(data);
   console.log(documents)
  }
  const deletedocument=async(id)=>{
    const response = await fetch(`http://localhost:5000/api/deletedocument/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token":authToken
      },
    });
    if(response.ok){
      toast.success('Deleted Succssfully !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }
  useEffect(() => {
    fetchdocuments();
  }, [])
  

  return (
    <section className='dashboard flex flex-col justify-center items-center border w-screen'>
    <div className='createnew flex justify-center items-center border-b-2 border-purple-600'>
      <Link to='/workspace' className='createNow bg-gradient-to-b from-purple-600 to-blue-600'>
        Make New
      </Link>
    </div>
    <div className='userdocuments p-9 w-screen flex flex-col items-center justify-between'>
      <h1 className='font-bold text-2xl  text-center mb-5'>Your Documents</h1>
      {documents.length > 0 ? (
        <table className='documentstable table-auto border-collapse rounded-md'>
          <thead className='bg-gradient-to-b from-purple-600 to-blue-600 text-white'>
            <tr>
              <th>#</th>
              <th className='px-2 py-1'>Title</th>
              <th className='px-4 py-2'>Author</th>
              <th className='px-4 py-2'>Created At</th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>
          <tbody className='bg-gray-100'>
            {documents.map((document, index) => (
              <tr className='text-center' key={document._id}>
                <td className='font-mono font-bold border'>{index + 1}</td>
                <td className='px-2 py-1 font-mono font-bold border hover:text-red-600 cursor-pointer'>
                  <Link to={`/workspace/document/${document._id}`}>{document.title.slice(0, 18)}..</Link>
                </td>
                <td className='px-2 py-1 font-mono font-bold border'>{}</td>
                <td className='px-4 py-2 font-mono font-bold border'>{document.creationDate}</td>
                <td className='px-4 py-2 font-mono font-bold border cursor-pointer' onClick={()=>{deletedocument(document._id)}}><RiDeleteBin5Fill color='red'/></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No Documents Click Above to Create One!</h3>
      )}
      
    </div>
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
  </section>
  )
}

export default Dashboard