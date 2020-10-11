import React from "react";
import { Icon, LogoWrapper } from "./styled";
import LogoImage from "../../../assets/images/Logo.svg";

const Logo = () => (
    <LogoWrapper>
        <Icon src={ LogoImage } alt="" />
        Movie Browser
    </LogoWrapper>
);

export default Logo;