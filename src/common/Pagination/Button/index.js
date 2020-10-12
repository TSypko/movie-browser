import React from 'react';
import { ButtonText, StyledButton } from './styled';

const Button = ({ disabled, body, buttonText, previous }) => {
    return (
        previous
            ?
            <StyledButton disabled={disabled}>
                {body}
                <ButtonText mobile>
                    {buttonText}
                </ButtonText>
            </StyledButton>
            :
            <StyledButton disabled={disabled}>
                <ButtonText mobile>
                    {buttonText}
                </ButtonText>
                {body}
            </StyledButton>
    )
}

export default Button;
