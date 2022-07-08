import styled from "styled-components";

const Badge=styled.div`
    border-radius:30px;
    background-color:${(props)=>props.rnd};
    width:150px;
    height:25px;
    text-align:center;
    padding-top:5px;
    margin-left:50px;
`;

export default Badge;