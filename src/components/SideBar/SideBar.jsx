import React, { useState } from "react";
import {TechLogo} from '../../assets/images/techLogo.png';
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent} from "react-pro-sidebar";

import {FiHome,FiLogOut,FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi";
import { FaList, FaRegHeart } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";

function SideBar(){
  const [collapse, setCollapse] = useState(false);

  function menuClick(){
    collapse ? setCollapse(true) : setCollapse(false);
  }
  
  return (
    <div>
      <div id="sideBar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={collapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{collapse ? "TechLogo" :<TechLogo size={10}></TechLogo>}</p>
            </div>
            <div className="closemenu" onClick={menuClick}>
              {/* changing menu collapse icon on click */}
              {collapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </div>
  );
}
export default {SideBar,ProSidebar,SidebarHeader,SidebarContent,SidebarFooter,Menu,MenuItem};