import React from 'react'
import {useLocation, useNavigate} from "react-router-dom";

export const Home = () => {
  
  const location=useLocation()  

  return (
    <div className='homepage'>
        <h1>Hello {location.state.id} welcome to the home page.</h1>

        {/* location.state.id is fishy */}
    </div>
  )
}


