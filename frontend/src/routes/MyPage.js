import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import Logo from "./components/Logo";
import List from "./components/List";
import ListText from "./components/ListText";
import Badge from "./components/Badge";
import ListBox from "./components/ListBox";
import ListHeader from "./components/ListHeader";
import ListTitle from "./components/ListTitle";
import Box from "./components/Box";
import CheckBox from "./components/CheckBox";
import InputText from "./components/InputText";
import "../fonts/Font.css";

import setting from "../images/setting.png";
import profile from "../images/profile.png";
import snowflake from "../images/snowflake.png";
import star from "../images/star.png";
import x from "../images/x.png";
import plus from "../images/plus.png";

import { Progress } from "antd";
import { DatePicker, Space } from "antd";

const SettingImg = styled.img`
    width: 50px;
    height: 50px;
    float: right;
    margin: 30px;
`;
const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: 220px;
    left: 150px;
    z-index: 1;
    @media screen and (max-width: 460px) {
        left: 100px;
    }
`;
const SnowImg = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    top: 200px;
    left: 130px;
    z-index: 2;
    @media screen and (max-width: 460px) {
        left: 80px;
    }
`;
const ProfileName = styled.div`
    width: 150px;
    color: #ffffff;
    font-family: "Dohyeon";
    font-size: 30px;
    position: absolute;
    top: 250px;
    left: 320px;
    @media screen and (max-width: 460px) {
        left: 270px;
    }
`;
const ProfileComment = styled.div`
    width: 660px;
    font-size: 15px;
    position: absolute;
    top: 320px;
    left: 320px;
    @media screen and (max-width: 460px) {
        left: 260px;
    }
`;
const Level = styled.div`
    margin: 100px 320px 70px 320px;
    height: 50px;
    @media screen and (max-width: 460px) {
        margin-left: 150px;
    }
`;
const LevelText = styled.div`
    width: 70px;
    font-size: 20px;
    font-family: "DoHyeon";
`;
const LevelGauge = styled.div`
    width: 100%;
    font-family: "DoHyeon";
`;
const StarImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`;
const Add = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
`;
const PlusImg = styled.img`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 22px;
`;
const XImg = styled.img`
    width: 30px;
    height: 30px;
    display: block;
    vertical-align: center;
`;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
function MyPage() {
    const [target, setTarget] = React.useState(true);
    const handleScheduleClick=()=>{
        setTarget(false);
    }
    const handleHistoryClick=()=>{
        setTarget(true);
    }
    const RandomColor = () => {
        return (
            "#" + Math.round(Math.random() * 0xffffff).toString(16)
        );
    };
    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="300px">
                <Link to="/setting">
                    <SettingImg src={setting} />
                </Link>
                <SnowImg src={snowflake} />
                <ProfileImg src={profile} />
                <ProfileName>눈송</ProfileName>
                <ProfileComment>이번 기말고사 화이팅!</ProfileComment>
            </ColorBox>
            <Level>
                <LevelText>새싹 등급</LevelText>
                <LevelGauge>
                    <Progress
                        percent={30}
                        format={(percent) => percent + "포인트"}
                    />
                </LevelGauge>
            </Level>

            {/*스터디 히스토리 클릭시*/}
            {target && (
                <>
                    <ListHeader>
                        <ListTitle border="3px solid black">
                            스터디 히스토리
                        </ListTitle>
                        <ListTitle onClick={handleScheduleClick}>
                            스케줄러
                        </ListTitle>
                    </ListHeader>
                    <ListBox>
                        <List>
                            <ListText>IT기기구조</ListText>
                            <ListText>진행중</ListText>
                        </List>
                        <List>
                            <ListText>
                                웹 프로그래밍 기초
                                <Badge rnd={RandomColor} mgLeft="50px">
                                    과제 제출이 빨라요
                                </Badge>
                                <Badge rnd={RandomColor} mgLeft="50px">
                                    성실해요
                                </Badge>
                            </ListText>
                            <ListText>
                                <StarImg src={star} />
                                4.7/5
                            </ListText>
                        </List>
                    </ListBox>
                </>
            )}
            {/*스케줄러 클릭시*/}
            {!target && <>
            <ListHeader>
                <ListTitle onClick={handleHistoryClick}>스터디 히스토리</ListTitle>
                <ListTitle border="3px solid black">스케줄러</ListTitle>
            </ListHeader>
            <ListBox>
                <List>
                    <Box left="90px">
                        <ListText>날짜</ListText>
                    </Box>
                    <Box left="250px">
                        <ListText>일정</ListText>
                    </Box>
                </List>
                <List>
                    <Box left="50px" top="13px">
                        <CheckBox />
                    </Box>
                    <Box left="70px" top="13px">
                        <ListText>2022/07/30</ListText>
                    </Box>
                    <Box left="230px">
                        <ListText>과제 제출하기</ListText>
                    </Box>
                    <Box right="20px">
                        <XImg src={x}></XImg>
                    </Box>
                </List>
            </ListBox>
            <Add>
                <Box left="50px" width="120px">
                    <DatePicker onChange={onChange} />
                </Box>
                <Box left="180px" width="200px" >
                    <InputText text="일정을 입력하세요"/>
                </Box>
                <PlusImg src={plus}></PlusImg>
            </Add>
        </>}
        </Root>
    );
}

export default MyPage;
