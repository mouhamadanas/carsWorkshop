import { Box } from "@mui/material";
import style from "./style.module.scss";
import logoBig from "assets/images/logoBig.svg";
import logo from "assets/images/logo.svg";
import brandIdentity from "assets/images/brand-identity.svg";
import repairIcon2 from "assets/images/repairIcon2.svg";
import repairIcon from "assets/images/repairIcon.svg";
import techIcon from "assets/images/techIcon.svg";
import { Link } from "react-router-dom";
const SidebarElement = ({ title, image, href, openSidebar }) => {
  return (
    <Link to={href}>
      <Box className={`${style.SidebarElement} ${openSidebar && style.open}`}>
        <img src={image} alt="" className={style.SidebarElementIcon} />
        <p className={`${!openSidebar && style.titleOpen}`}>{title}</p>
      </Box>
    </Link>
  );
};
const navElement = [
  {
    title: "بطاقة ماركة",
    image: brandIdentity,
    href: "/",
  },
  {
    title: "بطاقة موديل",
    image: brandIdentity,
    href: "/",
  },
  {
    title: "بطاقة قطعة",
    image: brandIdentity,
    href: "/card",
  },
  {
    title: "بطاقة فني",
    image: techIcon,
    href: "/",
  },
  {
    title: "بطاقة قسم",
    image: repairIcon,
    href: "/",
  },
  {
    title: "بطاقة خدمة",
    image: repairIcon2,
    href: "/",
  },
];
const SidebarContent = ({ openSidebar }) => {
  return (
    <Box className={style.SidebarContentContent}>
      <img src={openSidebar ? logoBig : logo} alt="" className={style.logo} />
      {navElement.map((element, index) => (
        <SidebarElement key={index} {...element} openSidebar={openSidebar} />
      ))}
    </Box>
  );
};

export default SidebarContent;
