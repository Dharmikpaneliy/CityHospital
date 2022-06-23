import React from 'react';
import { FormFeedbackStyled, InputBoxStyled } from './inputbox.style';

function InputBox({ children, error=false, errorMessage='', ...rest }) {
    return (
        <>
            <InputBoxStyled {...rest}>
                {children}
            </InputBoxStyled>
            <FormFeedbackStyled error={error}>
                {errorMessage}
            </FormFeedbackStyled>
        </>
    );
}

export default InputBox;