import React from "react";
import { Icon, LogoWrapper } from "./styled";
import LogoImage from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { toMovies } from "../../../routes";

const Logo = () => (
    <LogoWrapper as={Link} to={toMovies()}>
        <Icon src={LogoImage} alt="MovieBrowser logo" />
        Movie Browser
    </LogoWrapper>
);

export default Logo;