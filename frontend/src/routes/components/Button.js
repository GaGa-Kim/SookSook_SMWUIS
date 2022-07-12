import styled from "styled-components";

const Button=styled.button`
    width:${(props)=>props.width};
    height:${(props)=>props.height};
    border-radius:50px;
    border:none;
    padding:10px;
    margin:0px 30px;
    background-color:#A2C3F4;
`;

export default Button;
