import styled from "styled-components";
import List from "./List";
import ListText from "./ListText";
import Badge from "./Badge";
import star from "../../images/star.png";
import { useSelector } from "react-redux";
import axios from 'axios';
import React from 'react';

const StarImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`;

const StudyHistory = () => {
    //현재 로그인 중인 email 받기
    const emailL = useSelector((state) => state.email);
    //랜덤한 색깔
    const RandomColor = () => {
        return "#" + Math.round(Math.random() * 0xffffff).toString(16);
    };
    //참여 스터디 조회
    const getMyStudy=async()=>{
        const res=await axios.get(`/studyMember/myInfo?email=${emailL}`);
        setStudyHistory(res.data);
    }
    const [studyHistoryList,setStudyHistory] = React.useState([]);
    React.useEffect(()=>{
        getMyStudy();
    },[])
    return studyHistoryList.map((history, index) => {
        if (history.finished === false) {
            return(
            <List key={index}>
                <ListText  style={{flexShrink:1}}>{history.name}</ListText>
                <ListText>진행중</ListText>
            </List>
            );
        } else {
            return(
            <List key={index}>
                <ListText  style={{flexBasis:"600px" ,flexShrink:0}}>
                    {history.name}
                    <Badge rnd={RandomColor} mgLeft="50px">
                        과제 제출이 빨라요
                    </Badge>
                    <Badge rnd={RandomColor} mgLeft="50px">
                        성실해요
                    </Badge>
                </ListText>
                <ListText>
                    <StarImg src={star} />
                    {history.star}/5
                </ListText>
            </List>
            );
        }
    }
    );
};


export default StudyHistory;