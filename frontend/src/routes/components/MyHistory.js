import styled from "styled-components";
import List from "./List";
import ListText from "./ListText";
import Badge from "./Badge";
import ListBox from './ListBox';
import ListHeader from './ListHeader';
import ListTitle from './ListTitle';

import star from "../../images/star.png";
import "../../fonts/Font.css";


const StarImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`;
const XImg = styled.img`
    width: 30px;
    height: 30px;
    display:block;
    vertical-align:center;
`;
const Box = styled.div`
    position: absolute;
    left: ${(props) => props.left};
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    width:${(props) => props.width};
    height:${(props)=>props.height};
`;

const MyHistory=()=>{
    return(
        <>
        <ListHeader>
                <ListTitle border="2px solid black">스터디 히스토리</ListTitle>
                <ListTitle>스케줄러</ListTitle>
            </ListHeader>
            <ListBox>
                <List>
                    <ListText>IT기기구조</ListText>
                    <ListText>진행중</ListText>
                </List>
                <List>
                    <ListText>웹 프로그래밍 기초<Badge rnd="yellow">과제 제출이 빨라요</Badge><Badge rnd="green">성실해요</Badge></ListText>
                    <ListText><StarImg src={star}/>4.7/5</ListText>
                </List>
            </ListBox>
        </>
    );
}

export default MyHistory;