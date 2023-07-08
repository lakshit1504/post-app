import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BiAlbum} from "react-icons/bi"
import { FiLogOut} from "react-icons/fi"
import { FaUser} from "react-icons/fa"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import logo from "../../assets/logo11.svg"


const Header = ({isAuthenticated=false}) => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate("/login")
      }
    return (
      <div>
           <nav>
              <motion.div    
              initial={{x:"-100%"}} 
              whileInView={{x:0}} 
              >
                  <div className="logo"><img src={logo} alt="" /></div>
                  <Link to="/" style={{"color":"white"}}>Home</Link>
              </motion.div>
  
              <div>
                
              {(!localStorage.getItem('token'))?"":(<Link to="/login" onClick={handleLogout}> <FiLogOut/></Link>)}
  
              </div>
           </nav>
      </div>
    )
  }
  
  export default Header