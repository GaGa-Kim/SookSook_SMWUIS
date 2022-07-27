import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import Button from "./components/Button";
import Logo from "./components/Logo";
import ListBox from "./components/ListBox";
import CommentList from "./components/CommentList";
import "../fonts/Font.css";

import { Input } from "antd";
import { Link, useParams, useLocation } from "react-router-dom";
const { TextArea } = Input;
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
    border-bottom: thin solid #c1dafe;
`;
const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "DoHyeon";
`;
const CommentBox = styled.div`
    height: 40px;
    margin: 5px 10px;
    display: flex;
    justify-content: space-around;
`;
const CommentTitle = styled.div`
    width: 100%;
    padding:10px 0px 7px 35px;
    display: flex;
    align-items: center;
    font-size: 17px;
    border-bottom: thin solid #c1daff;
    background-color:#c1daff;
`;
const DetailBoard = () => {
    const { key } = useParams();
    const location = useLocation();
    const dataKey = location.state.key;
    //현재 로그인 중인 id 받기
    const id = "가송";
    //게시글 정보 db에서 key 값이 dataKey인 정보 받아오기
    const [title, setTitle] = React.useState(dataKey);
    const [content, setContent] = React.useState(dataKey);
    // const file=
    // const name=

    const [isShow, setIsShow] = React.useState(true);
    /*로그인 id랑 작성자 이름이랑 같으면 수정 삭제 버튼 보이도록
    id === name ? setIsModify(true) : setIsModify(false);
    */
    const [isModify, setIsModify] = React.useState(false);
    const handleModifyClick = () => {
        setIsModify(true);
    };
    const handleUploadClick = () => {
        // 게시글 정보 저장
    };
    const onChangeText = (e) => {
        setTitle(e.target.value);
    };
    const onChangeArea = (e) => {
        setContent(e.target.area);
    };
    const [comment, setComment] = React.useState("");
    const [commentList, setCommentList] = React.useState([
        /*db에서 가져오기*/
    ]);

    const handleXclick = (index) => {
        const nextComment = commentList.filter(
            (comment) => comment.index !== index
        );
        setCommentList(nextComment);
    };
    const [nextIndex, setNextIndex] = React.useState(1);

    const getText = (text) => {
        setComment(text);
    };
    const handlePlusClick = () => {
        const nextCommentList = commentList.concat({
            index: nextIndex,
            id: id,
            comment: comment,
        });
        setCommentList(nextCommentList);
        setNextIndex(nextIndex + 1);
        setComment("");
        //const commentCount=접속한 id의 comment개수 받아오기;
        //commentCount++;
        //다시 commentCount 값 보내기
    };
    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>{dataKey}</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        {!isModify && (
                            <InputText text={dataKey} disable="true" />
                        )}
                        {isModify && (
                            <Input
                                value={title}
                                onChange={onChangeText}
                                style={{ borderRadius: "70px" }}
                            />
                        )}
                    </Box>
                </InputBox>
                <InputBox mgBot="62px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        {!isModify && (
                            <InputArea
                                area={dataKey}
                                bg="#F0F0F0"
                                disable="true"
                            />
                        )}
                        {isModify && (
                            <TextArea
                                value={content}
                                rows={4}
                                onChange={onChangeArea}
                                style={{
                                    borderRadius: "20px",
                                    backgroundColor: "#F0F0F0",
                                }}
                            />
                        )}
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
                    <Quest>파일</Quest>
                    <Box width="200px" left="100px" top="17px">
                        {/* 기존파일추가 */}
                        {isShow && (
                            <>
                                <LabelFile for="inputFile" onclick="focus()">
                                    파일 선택하기
                                </LabelFile>
                                <InputFile
                                    id="inputFile"
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </>
                        )}
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                {isShow && !isModify && (
                    <>
                        <Button
                            width="70px"
                            mg="30px"
                            onClick={handleModifyClick}
                        >
                            수정
                        </Button>
                        <Button width="70px" mg="30px">
                            삭제
                        </Button>
                    </>
                )}
                {isModify && isShow && (
                    <Link to="/private">
                        <Button width="70px" mg="30px">
                            업로드
                        </Button>
                    </Link>
                )}
                <Link to="/private">
                    <Button width="70px" mg="30px">
                        목록
                    </Button>
                </Link>
            </ButtonBox>
            {/* 댓글창 */}
            {!isModify && (
                <>
                    <Footer>
                        <CommentTitle>댓글</CommentTitle>
                        <ListBox>
                            {commentList.map((comment) => (
                                <CommentList
                                    index={comment.index}
                                    id={comment.id}
                                    comment={comment.comment}
                                    handleXclick={handleXclick}
                                />
                            ))}
                        </ListBox>
                        <CommentBox>
                            <InputText
                                text="입력하세요"
                                getText={getText}
                                value={comment}
                            ></InputText>
                            <Button
                                width="50px"
                                mg="5px"
                                onClick={handlePlusClick}
                            >
                                입력
                            </Button>
                        </CommentBox>
                    </Footer>
                </>
            )}
        </Root>
    );
};

export default DetailBoard;
