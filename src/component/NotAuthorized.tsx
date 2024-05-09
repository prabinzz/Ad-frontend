import React from 'react'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
   <div className="text-center mt-40 text-3xl">
      <p>Not Authorized </p>
      <div className='text-xl'> Go to <Link className='text-blue-500' to={"/login"} >Login</Link> / <Link className='text-blue-500' to={"/"}>Index</Link></div>
      </div>
  )
}

export default NotAuthorized