import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import MySchedule from './components/MySchedule';
import MyHistory from './components/MyHistory';
import "../fonts/Font.css";

import setting from "../images/setting.png";
import profile from "../images/profile.png";
import snowflake from "../images/snowflake.png";



import { Progress } from "antd";

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
`;
const SnowImg = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    top: 200px;
    left: 130px;
    z-index: 2;
`;
const ProfileName = styled.div`
    color: #ffffff;
    font-family: "Dohyeon";
    font-size: 30px;
    position: absolute;
    top: 250px;
    left: 320px;
`;
const ProfileComment = styled.div`
    font-size: 15px;
    position: absolute;
    top: 320px;
    left: 320px;
`;
const Level = styled.div`
    margin: 100px 320px 70px 320px;
    height: 50px;
`;
const LevelText = styled.div`
    font-size: 20px;
    font-family: "DoHyeon";
`;
const LevelGauge = styled.div`
    width: 1000px;
    font-family: "DoHyeon";
`;
const ListBox = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Dohyeon";
`;
const ListHeader = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    justify-content: space-around;
    font-family: "DoHyeon";
`;
const ListTitle = styled.div`
    padding-bottom: 10px;
    font-size: 23px;
    border-bottom: ${(props) => props.border};
`;
const StarImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`;

function MyPage() {
    return (
        <Root>
            <GlobalStyle />
            <ColorBox height="300px">
                <SettingImg src={setting} />
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
            {/* <MyHistory/> */}
            {/*스케줄러 클릭시*/}
            <MySchedule/>
        </Root> 
    );
}

export default MyPage;
