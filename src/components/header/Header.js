//import useState hook to create menu collapse state
import React, { useState } from "react";
import {Link} from 'react-router-dom'
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { removeUserInfo } from "../../action/userAction";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";


const Header = (props) => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const dispatch=useDispatch()
    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
   
  };
  const handleLogout=()=>{
    localStorage.removeItem('token')
    props.history.push('/')
    dispatch(removeUserInfo())

}
  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <Link to='/'>Home</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}><Link to='/course'>Course</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to='/students'>Students</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to='/lecture'>Lecture</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to='/account'>Account</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default withRouter(Header);