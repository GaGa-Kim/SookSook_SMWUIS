import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import List from "./List";
import Box from "./Box";
import ListText from "./ListText";
import x from "../../images/x.png";

const XImg = styled.img`
    width: 30px;
    height: 30px;
    display: block;
    vertical-align: center;
    &:hover  {
        width:32px;
        height:32px;
    }
`;

const StudySchedule = ({handleXclick,id,date,content}) => {
    
    return (
        <List>
            <Box left="50px" top="13px">
                <CheckBox />
            </Box>
            <Box left="70px" top="13px">
                <ListText>
                   {date}
                </ListText>
            </Box>
            <Box left="230px">
                <ListText>{content}</ListText>
            </Box>
            <Box right="20px">
                <XImg src={x} onClick={()=>handleXclick(id)}></XImg>
            </Box>
        </List>
    );
};
export default StudySchedule;
