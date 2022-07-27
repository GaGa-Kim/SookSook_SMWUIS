import React from "react";
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
import ListText from "./components/ListText";
import List from "./components/List";
import ListBox from "./components/ListBox";
import CommentList from "./components/CommentList";
import "../fonts/Font.css";
import plus from "../images/plus.png";
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
`;
const Add = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom:10px;
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
const DetailShare = () => {
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
    const [commentList, setCommentList] = React.useState([/*db에서 가져오기*/]);

    const handleXclick = (index) => {
        const nextComment = commentList.filter((comment) => comment.key !== index);
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
    };
    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="85px">
                <Title>자료공유 게시판</Title>
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
                    <Link to="/share">
                        <Button width="70px" mg="30px">
                            업로드
                        </Button>
                    </Link>
                )}
                <Link to="/share">
                    <Button width="70px" mg="30px">
                        목록
                    </Button>
                </Link>
            </ButtonBox>
            {/* 댓글창 */}
            {!isModify &&
                <>
                    <ListBox>
                        {commentList.map((comment) => (
                            <CommentList
                                key={comment.index}
                                id={comment.id}
                                comment={comment.comment}
                                handleXclick={handleXclick}

                            />
                        ))}
                    </ListBox>
                    <Add>
                        <Box left="20px" width="90%">
                            <InputText
                                getText={getText}
                                text="댓글을 입력하세요"
                                value={comment}
                            />
                        </Box>
                        <PlusImg src={plus} onClick={handlePlusClick}></PlusImg>
                    </Add>
                </>
            }
        </Root>
    );
};

export default DetailShare;
