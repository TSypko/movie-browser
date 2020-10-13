import React from 'react';
import { StyledIcon } from './styled';
import arrowIcon from "../../../assets/images/arrowIcon.svg";

const Icon = ({ disabled, previous, alt, mobile }) => {
    return (
        <StyledIcon
            previous={previous}
            disabled={disabled}
            src={arrowIcon}
            alt={alt}
            mobile={mobile}
        />
    )
}

export default Icon;