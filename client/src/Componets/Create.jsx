import React from 'react'
import {Link } from "react-router-dom";
const Create = () => {
  return (
    <div className='mt-20'>
        <Link to="/dashboard" className='createNow bg-gradient-to-b from-purple-600 to-blue-600 '>Start Creating </Link>
    </div>
  )
}

export default Create