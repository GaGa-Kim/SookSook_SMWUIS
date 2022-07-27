import React from "react";
import styled from "styled-components";
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

const CommentList = ({handleXclick,id,comment,index}) => {
    
    return (
        <List>
            <Box left="25px">
                <ListText>{id}</ListText>
            </Box>
            <Box left="100px">
                <ListText>{comment}</ListText>
            </Box>
            <Box right="20px">
                <XImg src={x} onClick={()=>handleXclick(index)}></XImg>
            </Box>
        </List>
    );
};
export default CommentList;