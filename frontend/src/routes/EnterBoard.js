import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import CheckBox from "./components/CheckBox";
import InputPassword from "./components/InputPassword";
import Button from "./components/Button";
import Logo from "./components/Logo";
import ListBox from "./components/ListBox";
import CommentList from "./components/CommentList";
import "../fonts/Font.css";
import { Input } from "antd";
import { Link, useParams, useLocation } from "react-router-dom";

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
    margin-top: 20px;
    font-family: "DoHyeon";
    border-bottom: thin solid #c1daff;
`;

const Quest = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-size: ${(props) => props.ftSize};
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
    padding: 10px 0px 7px 35px;
    display: flex;
    align-items: center;
    font-size: 17px;
    border-bottom: thin solid #c1daff;
    background-color: #c1daff;
`;
const EnterBoard = () => {
    //현재 로그인 중인 id 받기
    const id = "가송";
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
    const { key } = useParams();
    const location = useLocation();
    const dataKey = location.state.key;

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

    const [nextIndex, setNextIndex] = React.useState(1);

    const getText = (text) => {
        setComment(text);
    };
    const pw = "1"; //비밀게시판 비밀번호 받아오기
    const [isRightPw, setIsRightPw] = React.useState(false);
    const getPw = (text) => {
        if (pw === text) {
            setIsRightPw(true);
        } else {
            setIsRightPw(false);
        }
    };
    const handleEnterClick = () => {
        //비밀번호 틀렸을 때 경고
        alert("비밀번호가 틀렸습니다.");
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
            <ColorBox height="90px">
                <Title>비밀게시판 입장</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest ftSize="25px">학부</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="ICT융합공학부" disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">과목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text={dataKey} disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">이름</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text={dataKey} disable="true" />
                    </Box>
                </InputBox>
                <InputBox mgBot="65px">
                    <Quest ftSize="25px">내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="1주일에 2번 스터디" disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <CheckBox check="true" disable="true" />
                    <Quest ftSize="25px">온라인</Quest>
                    <CheckBox disable="true" />
                    <Quest ftSize="25px">오프라인</Quest>
                    <CheckBox disable="true" />
                    <Quest ftSize="25px">장기</Quest>
                    <CheckBox check="true" disable="true" />
                    <Quest ftSize="25px">단기</Quest>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">비밀번호</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputPassword getPw={getPw} />
                    </Box>
                    <Box left="310px" top="7px">
                        {isRightPw && (
                            <Link to={`/private/${pw}`}>
                                <Button width="50px" height="32px" mg="0px">
                                    입장
                                </Button>
                            </Link>
                        )}
                        {!isRightPw && (
                            <Button
                                width="50px"
                                height="32px"
                                mg="0px"
                                onClick={handleEnterClick}
                            >
                                입장
                            </Button>
                        )}
                    </Box>
                </InputBox>
            </Main>
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
        </Root>
    );
};

export default EnterBoard;
