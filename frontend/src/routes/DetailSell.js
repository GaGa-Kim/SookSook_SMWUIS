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

const DetailSell = () => {
    const { key } = useParams();
    const location = useLocation();
    const dataKey = location.state.key;
    //?????? ????????? ?????? id ??????
    const id = "??????";
    //????????? ?????? db?????? key ?????? dataKey??? ?????? ????????????
    const [title, setTitle] = React.useState(dataKey);
    const [content, setContent] = React.useState(dataKey);
    // const file=
    // const name=

    const [isShow, setIsShow] = React.useState(true);
    /*????????? id??? ????????? ???????????? ????????? ?????? ?????? ?????? ????????????
    id === name ? setIsModify(true) : setIsModify(false);
    */
    const [isModify, setIsModify] = React.useState(false);
    const handleModifyClick = () => {
        setIsModify(true);
    };
    const handleUploadClick = () => {
        // ????????? ?????? ??????
    };
    const onChangeText = (e) => {
        setTitle(e.target.value);
    };
    const onChangeArea = (e) => {
        setContent(e.target.area);
    };
    const [comment, setComment] = React.useState("");
    const [commentList, setCommentList] = React.useState([/*db?????? ????????????*/]);

    const getText = (text) => {
        setComment(text);
    };
    const [nextKey, setNextKey] = React.useState(1);
    const handleXclick = (listKey) => {
        const nextComment = commentList.filter(
            (comment) => comment.key !== listKey
        );
        setCommentList(nextComment);
    };
    const handlePlusClick = () => {
        const nextCommentList = commentList.concat({
            key: nextKey,
            parent: null,
            id: id,
            comment: comment,
        });
        setCommentList(nextCommentList);
        setNextKey(nextKey + 1);
        setComment("");
    };
    //const commentCount=????????? id??? comment?????? ????????????;
    //commentCount++;
    //?????? commentCount ??? ?????????
    const [isRecomment, setIsRecomment] = React.useState(false);
    let parentIndex;
    const handleSendClick = (listKey) => {
        setIsRecomment(true);
        parentIndex = listKey;
    };
    const handleRecommentClick = () => {
        const addRecomment = commentList.concat({
            key: nextKey,
            parent: parentIndex,
            id: id,
            comment: comment,
        });
        setCommentList(addRecomment);
        setNextKey(nextKey + 1);
        setComment("");
    };
    const handleCommentClick = () => {
        setIsRecomment(false);
    };
    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="85px">
                <Title>??????/?????? ?????????</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>??????</Quest>
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
                    <Quest>??????</Quest>
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
                    <Quest>??????</Quest>
                    <Box width="200px" left="100px" top="17px">
                        {/* ?????????????????? */}
                        {isShow && (
                            <>
                                <LabelFile for="inputFile" onclick="focus()">
                                    ?????? ????????????
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
                            ??????
                        </Button>
                        <Button width="70px" mg="30px">
                            ??????
                        </Button>
                    </>
                )}
                {isModify && isShow && (
                    <Link to="/sell">
                        <Button width="70px" mg="30px">
                            ?????????
                        </Button>
                    </Link>
                )}
                <Link to="/sell">
                    <Button width="70px" mg="30px">
                        ??????
                    </Button>
                </Link>
            </ButtonBox>
            {/* ????????? */}
            {!isModify &&
                <Footer>
                    <CommentTitle onClick={handleCommentClick}>??????</CommentTitle>
                    <ListBox>
                        {commentList.map((comment) => (
                            <CommentList

                                listKey={comment.key}
                                id={comment.id}
                                parent={comment.parent}
                                comment={comment.comment}
                                handleXclick={handleXclick}
                                handleSendClick={handleSendClick}
                            />
                        ))}
                    </ListBox>
                    {!isRecomment && (
                        <CommentBox>
                            <InputText
                                text="???????????????"
                                getText={getText}
                                value={comment}
                            ></InputText>
                            <Button width="50px" mg="5px" onClick={handlePlusClick}>
                                ??????
                            </Button>
                        </CommentBox>
                    )}
                    {isRecomment && (
                        <CommentBox>
                            <InputText
                                text="???????????? ???????????????"
                                getText={getText}
                                value={comment}
                            ></InputText>
                            <Button
                                width="50px"
                                mg="5px"
                                onClick={handleRecommentClick}
                            >
                                ??????
                            </Button>
                        </CommentBox>
                    )}
                </Footer>
            }
        </Root>
    );
};

export default DetailSell;
