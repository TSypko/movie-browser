import React from 'react';
import { ButtonText, StyledButton } from './styled';

const Button = ({ disabled, body, buttonText, previous, onClick }) => {
    return (
        previous
            ?
            <StyledButton disabled={disabled} onClick={onClick}>
                {body}
                <ButtonText mobile>
                    {buttonText}
                </ButtonText>
            </StyledButton>
            :
            <StyledButton disabled={disabled} onClick={onClick}>
                <ButtonText mobile>
                    {buttonText}
                </ButtonText>
                {body}
            </StyledButton>
    )
}

export default Button;