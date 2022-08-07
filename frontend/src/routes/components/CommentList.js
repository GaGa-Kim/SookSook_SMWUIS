import React, { useState } from "react";
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
    margin-right:10px;
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
const handleXclick = (email, id) => {
    
    axios.delete("/passwordComment", {
        params: {
            email: email,
            id: id,
        },
    });
};

const Recomment = ({ id, emailL }) => {
    const [nickname, setNickname] = React.useState("");
    const [content, setContent] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [get,setGet]=React.useState(false);
    const getRecomment=async ()=>{
        await axios
        .get("http://localhost:8080/passwordComment", {
            params: {
                email: emailL,
                id: id,
            },
        })
        .then((response) => {
            setNickname(response.data.nickname);
            setContent(response.data.content);
            setEmail(response.data.email);
            setGet(true);
        });
    }
    getRecomment();
    React.useEffect(() => {
        setGet(false);
       getRecomment();
            
    }, [get]);
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
                <Box right="50px">
                    <XImg
                        src={x}
                        onClick={() => handleXclick(email, id)}
                    ></XImg>
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
}) => {
    let nicknameL = "";
    const emailL = useSelector((state) => state.email);
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/user/myInfo", {
                params: {
                    email: emailL,
                },
            })
            .then((response) => {
                nicknameL = response.data.nickname;
            });
    }, []); //현재 로그인 중인 닉네임
    const [isDelete, setIsDelete] = React.useState(true);
    //데이터 받아오기
    const [nickname,setNickname]=React.useState("");
    const [content,setContent]=React.useState("");
    React.useEffect(() => {
        /*db에서 댓글 가져오기*/
        axios
            .get("http://localhost:8080/passwordComment", {
                params: {
                    email:emailL,
                    id:String(id)
                },
            })
            .then((response) => {
                setNickname(response.data.nickname);
                setContent(response.data.content);
            });
    }, []);

    React.useState(() => {
        emailL === email ? setIsDelete(true) : setIsDelete(false);
    }, []);
    return (
        <>
            <List>
                <Box left="25px">
                    <ListText>{nickname}</ListText>
                </Box>
                <Box left="100px">
                    <ListText>{content}</ListText>
                </Box>
                <Box right="15px" width="65px">
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
                            <XImg
                                src={x}
                                onClick={() => handleXclick(email, id)}
                            ></XImg>
                        // </div>
                    )}
                    {!isDelete && (
                        <SendImg
                            src={send}
                            onClick={() => handleSendClick(id)}
                        ></SendImg>
                    )}
                </Box>
            </List>
            {childList &&
                childList.map((id) => <Recomment id={id} emailL={emailL} />)}
        </>
    );
};
export default CommentList;
