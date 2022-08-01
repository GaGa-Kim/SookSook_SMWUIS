import axios from "axios";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import Button from "./components/Button";
import Logo from "./components/Logo";
import { Link } from "react-router-dom";
import "../fonts/Font.css";
import React from "react";
import { DatePicker, Space } from "antd";
import { useSelector } from 'react-redux';
const Title = styled.div`
    position: absolute;
    top: 30px;
    left: 100px;
    font-size: 36px;
    color: #ffffff;
    font-family: "Cafe24";
`;

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-family: "DoHyeon";
    border-bottom: thin solid #c1daff;
`;

const Quest = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;
const Select = styled.select`
    width: 200px;
    height: 32px;
    border-radius: 70px;
    text-align: center;
    border-color: #eeeeee;
    transition: 0.5s;
    outline: none;
    &:hover {
        border-color: #4aacfc;
        transition: 0.5s;
    }
    &:focus {
        border-color: #4aacfc;
        box-shadow: 0px 0px 0 2px #c7e4fe;
        transition: 0.5s;
    }
`;

const ButtonBox = styled.div`
    font-family: "DoHyeon";
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Openstudy = () => {
    const email=useSelector(state=>state.email);

    const [dpt, setDpt] = React.useState("문과대학");
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [date, setDate] = React.useState("");
    const [number, setNumber] = React.useState();
    const [onoff, setOnoff] = React.useState("");

    const handleUploadClick = (e) => {
        if (subject === "") {
            alert("과목을 입력하세요");
            e.stopPropagation();
            return;
        } else if (title === "") {
            alert("제목을 입력하세요");
            e.stopPropagation();
            return;
        } else if (number == null) {
            alert("인원를 입력하세요");
            e.stopPropagation();
            return;
        } else if (!Number.isInteger(number)) {
            alert("인원을 올바르게 입력하세요");
            e.stopPropagation();
            return;
        } else if (pw === "") {
            alert("비밀번호를 입력하세요");
            e.stopPropagation();
            return;
        } else if (content === "") {
            alert("내용을 입력하세요");
            e.stopPropagation();
            return;
        } else if (date === "") {
            alert("기간를 입력하세요");
            e.stopPropagation();
            return;
        } else if (onoff === "") {
            alert("온라인 또는 오프라인을 체크하세요");
            e.stopPropagation();
            return;
        } else {
            axios
                .post("http://localhost:8080/studyBoard/lecture", {
                    content: content,
                    department: dpt,
                    email: email,
                    number: number,
                    onoff: onoff,
                    password: pw,
                    period: date,
                    subject: subject,
                    title: title,
                })
                .then((response) => {
                    console.log(response.data);
                });
        }
        /*db에 게시글 정보 저장*/
    };
    const getText = (text) => {
        setTitle(text);
    };
    const getArea = (text) => {
        setContent(text);
    };
    const getSubject = (text) => {
        setSubject(text);
    };
    const getPw = (text) => {
        setPw(text);
    };
    const onChangeDate = (date, dateString) => {
        setDate(dateString);
    };
    const onChangeDpt = (dpt) => {
        setDpt(dpt);
    };
    const onChangeOn = (on) => {
        setOnoff(on.target.value);
    };
    const onChangeOff = (off) => {
        setOnoff(off.target.value);
    };
    const getNumber = (text) => {
        setNumber(Number(text));
    };

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>스터디 개설</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>학부</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <Select onChange={onChangeDpt}>
                            <option>문과대학</option>
                            <option>이과대학</option>
                            <option>공과대학</option>
                            <option>생활과학대학</option>
                            <option>법과대학</option>
                            <option>경상대학</option>
                            <option>음악대학</option>
                            <option>약학대학</option>
                            <option>미술대학</option>
                            <option>기초교양대학</option>
                            <option>글로벌서비스학부</option>
                            <option>영어영문학부</option>
                            <option>미디어학부</option>
                        </Select>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>과목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" getText={getSubject} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" getText={getText} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>인원</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요 ex)4" getText={getNumber} />
                    </Box>
                </InputBox>

                <InputBox>
                    <Quest>비밀번호</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputPassword text="입력하세요" getPw={getPw} />
                    </Box>
                </InputBox>
                <InputBox mgBot="70px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea
                            area="입력하세요"
                            bg="#F0F0F0"
                            getArea={getArea}
                        />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>기간</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <DatePicker onChange={onChangeDate} />
                    </Box>
                </InputBox>
                <InputBox pLeft="60px">
                    <input
                        type="radio"
                        value="on"
                        checked={onoff === "on"}
                        onChange={onChangeOn}
                    ></input>
                    <Quest>온라인</Quest>
                    <input
                        type="radio"
                        value="off"
                        checked={onoff === "off"}
                        onChange={onChangeOff}
                    ></input>
                    <Quest>오프라인</Quest>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Button width="70px" mg="30px" onClick={handleUploadClick}>
                    <Link to="/board1">업로드</Link>
                </Button>

                <Link to="/board1">
                    <Button width="70px" mg="30px">
                        목록
                    </Button>
                </Link>
            </ButtonBox>
        </Root>
    );
};
export default Openstudy;
