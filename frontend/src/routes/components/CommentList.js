import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import List from "./List";
import Box from "./Box";
import ListText from "./ListText";
import x from "../../images/x.png";
import cut from "../../images/cut.png";
import arrow from "../../images/arrow_forward.png";
import send from "../../images/send.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { FieldContext } from "rc-field-form";

const XImg = styled.img`
    width: 30px;
    height: 30px;
    display: block;
    vertical-align: center;
    &:hover {
        width: 32px;
        height: 32px;
    }
`;
const CutImg = styled.img`
    margin-right: 10px;
    width: 20px;
    height: 30px;
    display: block;
    vertical-align: center;
    &:hover {
        width: 24px;
        height: 32px;
    }
`;
const ArrowImg = styled.img`
    width: 20px;
    height: 20px;
    display: block;
    vertical-align: center;
`;
const SendImg = styled.img`
    width: 20px;
    height: 20px;
    display: block;
    vertical-align: center;
    &:hover {
        width: 22px;
        height: 22px;
    }
`;

const Recomment = ({ id, emailL, getComment }) => {
    const [nickname, setNickname] = React.useState("");
    const [content, setContent] = React.useState("");
    const [email, setEmail] = React.useState("");

    const getRecomment = async () => {
        const response = await axios.get(
            "https://sooksook.herokuapp.com/studyComment/info",
            {
                params: {
                    id: id,
                },
            }
        );
        setNickname(response.data.nickname);
        setContent(response.data.content);
        setEmail(response.data.email);
    };
    const handleXclick = async (email, id) => {
 
        const res = await axios.delete("/studyComment", {
            params: {
                email: email,
                id: id,
            },
        });
        getRecomment();
    };
    React.useEffect(() => {
        
        getRecomment();
    }, []);

    return (
        <List>
            <Box left="35px">
                <ArrowImg src={arrow} />
            </Box>
            <Box left="50px">
                <ListText>{nickname}</ListText>
            </Box>
            <Box left="100px">
                <ListText>{content}</ListText>
            </Box>
            {emailL === email ? (
                <Box right="35px" onClick={() => handleXclick(email, id)}>
                    <XImg src={x}></XImg>
                </Box>
            ) : null}
        </List>
    );
};
const CommentList = ({
    handleSendClick,
    id,
    email,
    dataKey,
    childList,
    writeEmail,
    handleXclick,
}) => {
    //댓글 작성자 닉네임
    let nicknameL = "";
    //현재 로그인 중인 닉네임
    const emailL = useSelector((state) => state.email);
    React.useEffect(() => {
        axios
            .get("https://sooksook.herokuapp.com/user/myInfo", {
                params: {
                    email: emailL,
                },
            })
            .then((response) => {
                nicknameL = response.data.nickname;
            });
    }, []);
    const [isDelete, setIsDelete] = React.useState(true);
    const [nickname,setNickname]=React.useState("");
    const [content,setContent]=React.useState("");
  
    const getComment = async () => {
        const response = await axios.get(
            "https://sooksook.herokuapp.com/studyComment/info",
            {
                params: {
                    id: id,
                },
            }
        );
        setNickname(response.data.nickname);
        setContent(response.data.content);
    };
    useEffect(()=>{
        
        getComment();
    },[]);
    React.useState(() => {
        emailL === email ? setIsDelete(true) : setIsDelete(false);
    }, [emailL,email]);
    return (
        <>
            <List>
                <Box left="25px">
                    <ListText>{nickname}</ListText>
                </Box>
                <Box left="100px">
                    <ListText>{content}</ListText>
                </Box>
                <Box
                    right="35px"
                    width="30px"
                    onClick={() => handleXclick(email, id)}
                    style={{ overflow: "hidden" }}
                >
                    {isDelete && (
                        // <div
                        //     style={{
                        //         display: "flex",
                        //         justifyContent: "center",
                        //     }}
                        // >
                        //     <CutImg
                        //         src={cut}
                        //         onClick={() => handleXclick(email, id)}
                        //     ></CutImg>
                        <XImg src={x}></XImg>
                        // </div>
                    )}
                </Box>
                <Box right="60px" width="30px">
                    
                        <SendImg
                            src={send}
                            onClick={() => handleSendClick(id)}
                        ></SendImg>
                    
                </Box>
            </List>
            {childList &&
                childList.map((id) => (
                    <Recomment
                        id={id}
                        emailL={emailL}
                        getComment={getComment}
                    />
                ))}
        </>
    );
};
export default CommentList;
