import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 150px;
    height: 50px;
    border: 1px solid #eee;
    outline: none;
    background: none;
`;

export const RedButton = styled(Button)`
    border-color: red;
    color: red;
`

export default Button;