import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import Logo from "./components/Logo";
import List from "./components/List";
import ListText from "./components/ListText";
import ListBox from "./components/ListBox";
import ListHeader from "./components/ListHeader";
import ListTitle from "./components/ListTitle";
import StudySchedule from "./components/StudySchedule";
import Box from "./components/Box";

import InputText from "./components/InputText";
import StudyHistory from "./components/StudyHistory";
import "../fonts/Font.css";

import setting from "../images/setting.png";
import profile from "../images/profile.png";
import snowflake from "../images/snowflake.png";

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

    &:hover {
        width: 27px;
        height: 27px;
    }
`;

function MyPage() {
    const [date, setDate] = React.useState("");
    const onChange = (date, dateString) => {
        setDate(dateString);
    };
    const [target, setTarget] = React.useState(true);
    const [name, setName] = React.useState("눈송");
    const [comment, setComment] = React.useState("이번 기말고사 화이팅!");
    const handleScheduleClick = () => {
        setTarget(false);
    };
    const handleHistoryClick = () => {
        setTarget(true);
    };
    const [studyScheduleList, setStudyScheduleList] = React.useState([]);

    const handleXclick = (id) => {
        const nextStudyScheduleList = studyScheduleList.filter(
            (schedule) => schedule.id !== id
        );
        setStudyScheduleList(nextStudyScheduleList);
    };
    const [nextId, setNextId] = React.useState(1);
    const [text, setText] = React.useState("");
    const getText = (text) => {
        setText(text);
    };
    const handlePlusClick = () => {
        const nextStudyScheduleList = studyScheduleList.concat({
            id: nextId,
            date: date,
            content: text,
        });
        setNextId(nextId + 1);
        setStudyScheduleList(nextStudyScheduleList);
        setText("");
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
                <ProfileName>{name}</ProfileName>
                <ProfileComment>{comment}</ProfileComment>
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
                        <StudyHistory />
                    </ListBox>
                </>
            )}
            {/*스케줄러 클릭시*/}
            {!target && (
                <>
                    <ListHeader>
                        <ListTitle onClick={handleHistoryClick}>
                            스터디 히스토리
                        </ListTitle>
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

                        {studyScheduleList.map((schedule) => (
                            <StudySchedule
                                key={schedule.id}
                                {...schedule}
                                handleXclick={handleXclick}
                                studyScheduleList={studyScheduleList}
                            />
                        ))}
                    </ListBox>
                    <Add>
                        <Box left="50px" width="120px">
                            <DatePicker onChange={onChange} />
                        </Box>
                        <Box left="180px" width="200px">
                            <InputText
                                getText={getText}
                                text="일정을 입력하세요"
                                value={text}
                            />
                        </Box>
                        <PlusImg src={plus} onClick={handlePlusClick}></PlusImg>
                    </Add>
                </>
            )}
        </Root>
    );
}

export default MyPage;
