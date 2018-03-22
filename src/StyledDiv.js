import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
    width: 200px;
    height: 200px;
    background: coral;
    colour: white;
`

const StyledDiv = (props) =>{
    return <StyledComponent> Hi</StyledComponent>
}

export default StyledDiv;