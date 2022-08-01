import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import Button from "./components/Button";
import Logo from './components/Logo';
import { Link } from 'react-router-dom';
import React from "react";
import "../fonts/Font.css";
import { useState } from 'react';
import axios from "axios";
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

const InputFile = styled.input``;
const LabelFile = styled.label`
    height: 100%;
    border: thin solid #d9d9d9;
    color: #bfbfbf;
    border-radius: 70px;
    padding: 7px 66.5px;
    font-size: 13px;

    &:hover {
        border-color: #4aacfc;
        transition: 0.5s;
    }

    transition: 0.5s;
`;
const ButtonBox = styled.div`
    font-family: "DoHyeon";
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SetBoardQa = () => {
    const [email, setEmail] = React.useState("");
    const loginId = useSelector(state => state.loginId);
    const password = useSelector(state => state.password);
    React.useEffect(() => {
        axios
            .get(
                "http://localhost:8080/studyPost/question", {
                params: {
                    loginId: loginId,
                    password: password
                }
            }
            )
            .then((response) => {
                setEmail(response.data.email);
            });
    }, []);
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [file, setFile] = React.useState("");
    const handleUploadClick = (e) => {
        if (title.trim() === '') {
            alert('제목을 입력하세요');
            e.stopPropagation();
            return;
        }
        if (content.trim() === '') {
            alert('내용을 입력하세요');
            e.stopPropagation();
            return;
        }
        else {
            axios.post("http://localhost:8080/studyPost/question", {
                content: content,
                email: email,
                file: file,
                title: title,
            })
                .then((response) => {
                    console.log(response.data);
                });
        }
        /*db에 게시글 정보 저장*/

    }
    const getText = (text) => {
        setTitle(text);
    };
    const getArea = (text) => {
        setContent(text);
    };
    const getFile = (text) => {
        setFile(text);
    }


    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>글 작성</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" getText={getText} />
                    </Box>
                </InputBox>
                <InputBox mgBot="62px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="입력하세요" bg="#F0F0F0" getArea={getArea} />
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
                    <Quest>파일</Quest>
                    <Box width="200px" left="100px" top="17px">
                        <LabelFile for="inputFile" onclick="focus()" getfile={getFile}>
                            파일 선택하기
                        </LabelFile>
                        <InputFile
                            id="inputFile"
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Link to="/qaboard">
                    <Button width="70px" mg="30px" onclick={handleUploadClick}>
                        업로드
                    </Button>
                </Link>
                <Link to="/qaboard">
                    <Button width="70px" mg="30px">
                        목록
                    </Button>
                </Link>
            </ButtonBox>
        </Root >
    );
};
export default SetBoardQa;
