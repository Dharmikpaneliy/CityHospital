import {FormFeedback, Input} from 'reactstrap';
import styled from 'styled-components';

export const InputBoxStyled = styled(Input)`

`;

export const FormFeedbackStyled = styled(FormFeedback)`
    colour: red;
    display: ${props => props.error ? 'block' : 'none'};
`;