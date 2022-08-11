import Logo from './components/Logo';
import axios from "axios";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";
import "../fonts/Font.css";
import { useSelector } from 'react-redux';
import { Input, Space } from "antd";

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
    margin-bottom:50px;
    font-family: "DoHyeon";
`;

const Quest = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;
const InputPassword = (item) => {
    const onChange = (e) => {
        item.getPw(e.target.value);
    }
    return (
        <Input.Password
            value={item.value}
            onChange={onChange}
            style={{ "border-radius": "70px" }}
            disabled={item.disable}
        />
    );
};

const Setting = () => {

    const handleDeleteClick = (e) => {
        // 회원탈퇴
        axios
            .delete("http://localhost:8080/user", {
                params: {
                    email: email,
                    id: id,
                }
            })
            .then(() => {
                alert("회원탈퇴가 완료되었습니다");
                navigate("/");
            })

    };

    const getPassword = (text) => {
        setPassword(text);
    };
    const getNickname = (text) => {
        setNickname(text);
    };
    const getIntroduction = (text) => {
        setIntroduction(text);
    };
    const getEmail = (text) => {
        setEmail(text);
    };

    const [nickname, setNickname] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [introduction, setIntroduction] = React.useState("");
    const navigate = useNavigate();
    const email = useSelector(state => state.email);
    const setEmail = React.useState("");
    const id = useSelector(state => state.loginId);

    React.useEffect(() => {
        axios
            .get(
                "http://localhost:8080/user/myInfo", {
                params: {
                    email: email,
                    id: id,
                }
            }
            )
            .then((response) => {
                setNickname(response.data.nickname);
                setIntroduction(response.data.introduction);
                setPassword(response.data.password);
                setName(response.data.name);
            });
    }, []);

    const handleUploadClick = () => {
        // 유저 정보 수정후 저장
        axios
            .put(`/user?id=${id}`, {
                email: email,
                introduction: introduction,
                nickname: nickname,
                name: name,
            })
            .then(setIsDisable(true));

    };

    // const handlePasswordClick = () => {
    //     //비밀번호 수정
    //     axios
    //     .put(`http://localhost:8080/studyMember?email=${email}`, {

    //         newpassword: password,
    //     })
    //     .then(setIsDisable(true));
    // };

    const [isModify, setIsModify] = React.useState(false);
    const [isDisable, setIsDisable] = React.useState(true);

    const handleModifyClick = () => {
        setIsModify(true);
        setIsDisable(false);
    };

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>정보수정</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>닉네임</Quest>
                    <Box width="200px" left="150px" top="7px">
                        <InputText value={nickname} disable={isDisable} getText={getNickname} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>현재 비밀번호</Quest>
                    <Box width="200px" left="150px" disable={isDisable} top="7px" >
                        <InputPassword value={password} disable={isDisable} getText={getPassword} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>새 비밀번호</Quest>
                    <Box width="200px" left="150px" disable={isDisable} top="7px" >
                        <InputPassword value={password} disable={isDisable} getText={getPassword} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>한 줄 소개</Quest>
                    <Box width="200px" left="150px" top="7px" >
                        <InputText value={introduction} disable={isDisable} text="입력하세요" getText={getIntroduction} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>이메일</Quest>
                    <Box width="200px" left="150px" top="7px">
                        <InputText value={email} disable={isDisable} type="email" getText={getEmail} />
                    </Box>
                </InputBox>
            </Main>

            <ButtonBox mgRight="50px">
                {isDisable && (
                    <Button
                        width="100px"
                        mg="30px"
                        onClick={handleModifyClick}
                    >
                        수정
                    </Button>
                )}
                {!isDisable && (
                    <Button
                        width="100px"
                        mg="30px"
                        onClick={handleUploadClick}
                    >
                        저장
                    </Button>
                )}

                <Button width="100px" mg="30px" onClick={handleDeleteClick}>회원탈퇴</Button>
            </ButtonBox>

        </Root>

    );
};

export default Setting;
