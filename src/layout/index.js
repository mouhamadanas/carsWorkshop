import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import style from "./style.module.scss";
import carIcon from "assets/images/carIcon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContent from "./sidebarContent";
const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  return (
    <Box className={style.layoutContainer}>
      <Box className={style.bgImage}>
        <img src={carIcon} alt="car icon" />
      </Box>
      <Box
        className={style.menuIconMobile}
        onClick={() => setOpenSidebarMobile(true)}
      >
        <MenuIcon sx={{ color: "#0D0A0B" }} />
      </Box>
      <Box className={`${style.sidebar} ${openSidebar && style.sidebarOpen}`}>
        <Box
          className={style.menuIcon}
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          <MenuIcon sx={{ color: "#454955" }} />
        </Box>
        <SidebarContent openSidebar={openSidebar} />
      </Box>
      <Drawer
        onClose={() => setOpenSidebarMobile(false)}
        open={openSidebarMobile}
        anchor="right"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#0D0A0B",
          },
        }}
      >
        <SidebarContent openSidebar={true} />
      </Drawer>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
