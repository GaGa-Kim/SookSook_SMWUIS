import React from "react";
import styled from "styled-components";
import List from "./List";
import Box from "./Box";
import ListText from "./ListText";
import x from "../../images/x.png";
import arrow from "../../images/arrow_forward.png";
import send from "../../images/send.png";

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
const CommentList = ({
    handleSendClick,
    handleXclick,
    id,
    parent,
    comment,
    listKey,
}) => {
    const loginId = "나송"; //현재 로그인 중인 닉네임
    const [isDelete, setIsDelete] = React.useState(true);
    //데이터 받아오기
    const commentList = [
        { key: 1, parent: null, id: "가송", comment: "가송입니다" },
        { key: 2, parent: null, id: "나송", comment: "나송입니다" },
        { key: 3, parent: 1, id: "나송", comment: "대댓글입니다" },
    ];
    React.useState(() => {
        loginId === id ? setIsDelete(true) : setIsDelete(false);
    }, []);
    return parent === null ? (
        <>
            <List>
                <Box left="25px">
                    <ListText>{id}</ListText>
                </Box>
                <Box left="100px">
                    <ListText>{comment}</ListText>
                </Box>
                <Box right="20px">
                    {isDelete && (
                        <XImg
                            src={x}
                            onClick={() => handleXclick(listKey)}
                        ></XImg>
                    )}
                    {!isDelete && (
                        <SendImg
                            src={send}
                            onClick={() => handleSendClick(listKey)}
                        ></SendImg>
                    )}
                </Box>
            </List>
            {commentList.map((comment) =>
                listKey === comment.parent ? (
                    <List>
                        <Box left="35px">
                            <ArrowImg src={arrow} />
                        </Box>
                        <Box left="50px">
                            <ListText>{comment.id}</ListText>
                        </Box>
                        <Box left="100px">
                            <ListText>{comment.comment}</ListText>
                        </Box>
                        {loginId === comment.id ? (
                            <Box right="20px">
                                <XImg
                                    src={x}
                                    onClick={() => handleXclick(comment.key)}
                                ></XImg>
                            </Box>
                        ) : null}
                    </List>
                ) : null
            )}
        </>
    ) : null;
};
export default CommentList;
