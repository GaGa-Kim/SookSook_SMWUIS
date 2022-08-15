import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import axios from "axios";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import Box from "./components/Box";
import Button from "./components/Button";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import ButtonBox from "./components/ButtonBox";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import Logo from './components/Logo';
import "../fonts/Font.css";
import { Rate, Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";


const Title = styled.div`
    position: absolute;
    top: 30px;
    left: 90px;
    font-size: 36px;
    color: #ffffff;
    font-family: "Cafe24";
`;

const Main = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: "DoHyeon";
`;

const Quest = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;

const MemberButton = styled.button`
    width: 49px;
    height: 32px;
    background-color: #d9d9d9;
    border-radius: 50px;
    margin: 4px;
    border: thin solid #d9d9d9;
    &:focus {
        border-color: #4aacfc;
        box-shadow: 0px 0px 0 2px #c7e4fe;
        transition: 0.5s;
    }
    &:active{
        border-color: #4aacfc;
        box-shadow: 0px 0px 0 2px #c7e4fe;
        transition: 0.5s;
    }
    &:selected{
        border-color: #4aacfc;
        box-shadow: 0px 0px 0 2px #c7e4fe;
        transition: 0.5s;
    }
`;

const MemberGrade = () => {
    React.useEffect(() => {
        axios
            .get("https://sooksook.herokuapp.com/user/myInfo", {
                params: {
                    email: email,
                },
            })

        axios
            .get("https://sooksook.herokuapp.com/studyBoard", {
                params: {
                    id: Key,
                },
            })

    }, []);

    const [tags, setTags] = useState([
        "성실해요",
        "과제 제출이 빨라요",
        "약속을 잘 지켜요",
        "성실하지 않아요"
    ]);
    const Membertag = () => {
        const [inputVisible, setInputVisible] = useState(false);
        const [inputValue, setInputValue] = useState("");
        const inputRef = useRef(null);
        useEffect(() => {
            if (inputVisible) {
                inputRef.current?.focus();
            }
        });

        const handleClose = (removedTag) => {
            const newTags = tags.filter((tag) => tag !== removedTag);
            console.log(newTags);
            setTags(newTags);
        };

        const showInput = () => {
            setInputVisible(true);
        };

        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        };

        const handleInputConfirm = () => {
            if (inputValue && tags.indexOf(inputValue) === -1) {
                setTags([...tags, inputValue]);
            }

            setInputVisible(false);
            setInputValue("");
        };

        const forMap = (tag) => {
            const tagElem = (
                <Tag
                    style={{
                        "border": "0.3px solid purple",
                        "background-color": "rgb(250, 230, 255)",
                        "paddingTop": "2.5px",
                        "marginBottom": "5px", "borderRadius": "30px"
                    }
                    }
                    closable
                    onClose={(e) => {
                        e.preventDefault();
                        handleClose(tag);
                    }}
                >
                    {tag}
                </Tag >
            );
            return <span key={tag}>{tagElem}</span>;
        };

        const tagChild = tags.map(forMap);
        return (
            <>
                <div
                    style={{
                        "display": "flex",
                        "flex-direction": "column",
                        "marginBottom": "4px"
                    }}
                >
                    {tagChild}
                </div>
                {inputVisible && (
                    <Input
                        ref={inputRef}
                        type="text"
                        size="small"
                        style={{
                            width: 78, "borderRadius": "30px"
                        }}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag style={{
                        "borderRadius": "30px"
                    }} onClick={showInput}>
                        <PlusOutlined />
                    </Tag>
                )}
            </>
        );
    };
    //현재 로그인 중인 email 받기
    const email = useSelector((state) => state.email);
    const navigate = useNavigate();
    const { Key } = useParams();
    const rates = [1, 2, 3, 4, 5];

    const RateMem = () => {
        const [value, setValue] = useState(3);
        return (
            <span>
                <Rate onChange={setValue} value={value} />
                {value ? <span >&nbsp;&nbsp;&nbsp;{rates[value - 1]}&nbsp;</span> : ''}
            </span>
        );
    }

    const [rate, setRate] = React.useState("");
    const [remail, setRemail] = React.useState("");
    const getRate = (value) => {
        const num = parseInt(value);
        setRate(num);
    };

    const handleSaveClick = () => {
        axios.post("https://sooksook.herokuapp.com/userRating", {
            score: rate,
            comment: tags,
            giverEmail: email,
            receiverEmail: remail,
            studyBoardId: Key,
        });
        navigate(`/private/${Key}`);
    };

    const handleNameClick = (remail) => {
            setRemail(remail);
    };
    const [memberInfo, setMememberInfo] = useState([]);
    React.useEffect(() => {
        axios.get(`/ studyMember ? studyBoardId = ${Key}`).then((response) => {
            setMememberInfo(response.data);

        });
    }, []);
    // 멤버정보
    
    const Mem = (props) => {
        return (
            <MemberButton onClick={()=>handleNameClick(props.email)}>{props.name}</MemberButton>
        )
    };
    const memberList = memberInfo.map((memberInfo) => (<Mem name={memberInfo} />))



    return (
        <Root >
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>스터디원 평가하기</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>스터디원 선택</Quest>
                    <Box width="700px" left="140px" top="4px">
                        {memberList}
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>별점</Quest>
                    <Box width="200px" left="145px" top="13px">
                        <RateMem getText={getRate} />/&nbsp;5
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>뱃지 선택</Quest>
                    <Box width="400px" left="140px" top="15px">
                        <Membertag />
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Button width="100px" mg="30px" onClick={handleSaveClick}>
                    저장하기
                </Button>
            </ButtonBox>
        </Root >
    );
};
export default MemberGrade;
