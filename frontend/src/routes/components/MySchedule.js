import styled from "styled-components";
import List from "./List";
import ListText from "./ListText";
import Box from './Box';
import CheckBox from "./CheckBox";
import ListHeader from './ListHeader';
import ListBox from './ListBox';
import ListTitle from './ListTitle';

import x from "../../images/x.png";
import plus from "../../images/plus.png";
import "../../fonts/Font.css";
import { Input } from "antd";
import { DatePicker, Space } from 'antd';

const Add = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
`;
const PlusImg = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 30px;
`;
const XImg = styled.img`
    width: 30px;
    height: 30px;
    display:block;
    vertical-align:center;
`;

const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

const MySchedule=()=>{
    return(
    <>
    <ListHeader>
                <ListTitle>스터디 히스토리</ListTitle>
                <ListTitle border="2px solid black">스케줄러</ListTitle>
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
                <PlusImg src={plus}></PlusImg>
                <Box left="70px" width="120px">
                <DatePicker onChange={onChange} />
                </Box>
                <Box left="200px" width="85%">
                    <Input placeholder="일정을 입력하세요" />
                </Box>
            </Add>
    </>
    );
}

export default MySchedule;