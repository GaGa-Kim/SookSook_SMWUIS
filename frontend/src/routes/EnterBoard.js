import React from "react";
import ReactModal from "react-modal";
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
import { Input, Modal } from "antd";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Components } from 'antd/lib/date-picker/generatePicker';

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
    //현재 로그인 중인 nickname 받기
    const emailL=useSelector(state=>state.email);
    let nicknameL="";
    const [comment, setComment] = React.useState("");
    const [commentList, setCommentList] = React.useState([]);
    
    const { key } = useParams();
    const location = useLocation();
    const dataKey = location.state.key;

    const [dpt,setDpt]=React.useState("");
    const [subject,setSubject]=React.useState("");
    const [content,setContent]=React.useState("");
    const [title, setTitle] = React.useState(dataKey);



    React.useEffect(()=>{

        axios.get("http://localhost:8080/user/myInfo", {
            params: {
                email:emailL
            },
           
        })
        .then((response) => {
            nicknameL=response.data.nickname;
            }
        )
        axios.get("http://localhost:8080/studyBoard", {
            params: {
                id:dataKey
            },
           
        })
        .then((response) => {
                setDpt(response.data.department);
            }
        )
    },[])
    React.useEffect(()=>{
        /*db에서 댓글 가져오기*/
        axios.get("http://localhost:8080/passwordComment/all", {
            params: {
                studyBoardId:dataKey
            },
           
        })
        .then((response) => {
            setCommentList(response.data);

            }
        )
    },[commentList])
    
    
    const [isShow, setIsShow] = React.useState(true);
    /*로그인 id랑 작성자 이름이랑 같으면 수정 삭제 버튼 보이도록
    id === name ? setIsModify(true) : setIsModify(false);
    */
    // const [isModify, setIsModify] = React.useState(false);
    // const handleModifyClick = () => {
    //     setIsModify(true);
    // };
    // const handleUploadClick = () => {
    //     // 게시글 정보 저장
    // };
    // const onChangeText = (e) => {
    //     setTitle(e.target.value);
    // };
    // const onChangeArea = (e) => {
    //     setContent(e.target.area);
    // };

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
    const [isOpen, setIsOpen] = React.useState(false);
    //입장버튼눌렀을때
    const handleEnterClick = () => {
        //멤버라면 바로 입장
        setIsOpen(true);
    };
    //모달에서 입력버튼 눌렀을때
    const handleModalEnterClick = () => {
        setIsOpen(false);
        //비밀번호 틀렸을 때 경고
        if (!isRightPw) {
            alert("비밀번호가 틀렸습니다.");
        }
    }
    const handleRequestCloseFunc = () => {
        setIsOpen(false);
    }
    const handlePlusClick = () => {
       axios.post("http://localhost:8080/passwordComment",{
        "content":comment,
        "email":emailL,
        "studyBoardId":dataKey,
        "upIndex":"null"
       }).then((response)=>{
        const addCommentList=commentList.concat(response.data);
        setCommentList(addCommentList);
        
       })
        setComment("");
    };
    const [isRecomment, setIsRecomment] = React.useState(false);
    const [upIndex,setUpIndex]=React.useState();
    const handleSendClick = (id) => {
        setIsRecomment(true);
        setUpIndex(id);
 
    };
    const handleRecommentClick = () => {
        axios.post("http://localhost:8080/passwordComment",{
        "content":comment,
        "email":emailL,
        "studyBoardId":dataKey,
        "upIndex":upIndex
       }).then((response)=>{
        const addCommentList=commentList.concat(response.data);
        setCommentList(addCommentList);
       })
        setComment("");
    };
    const handleCommentClick = () => {
        setIsRecomment(false);
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
                        <InputText text={dpt} disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">과목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text={dataKey} disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text={dataKey} disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">인원</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요 ex)4" disable="true" />
                    </Box>
                </InputBox>
                <InputBox mgBot="65px">
                    <Quest ftSize="25px">내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="1주일에 2번 스터디" disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">기간</Quest>
                    <Box width="200px" left="100px" top="7px">
                    <InputText text={dataKey} disable="true" />
                    </Box>
                </InputBox>
                <InputBox pLeft="60px">
                    <CheckBox check="true" disable="true" />
                    <Quest ftSize="25px">온라인</Quest>
                    <CheckBox disable="true" />
                    <Quest ftSize="25px">오프라인</Quest>
                </InputBox>
                <InputBox>

                    <Box left="130px" top="7px">
                        <Button
                            width="100px"
                            height="32px"
                            mg="0px"
                            onClick={handleEnterClick}
                        >
                            입장
                        </Button>

                    </Box>
                </InputBox>
            </Main>
            <Footer>
                <CommentTitle onClick={handleCommentClick}>댓글</CommentTitle>
                <ListBox>
                    {commentList&&commentList.map((comment) => (
                        <CommentList                            
                            nickname={comment.nickname}
                            email={comment.email}
                            content={comment.content}
                            handleSendClick={handleSendClick}
                            id={comment.id}
                            dataKey={dataKey}
                            childList={comment.childList}
                        />
                    ))}
                </ListBox>
                {!isRecomment && (
                    <CommentBox>
                        <InputText
                            text="입력하세요"
                            getText={getText}
                            value={comment}
                        ></InputText>
                        <Button width="50px" mg="5px" onClick={handlePlusClick}>
                            입력
                        </Button>
                    </CommentBox>
                )}
                {isRecomment && (
                    <CommentBox>
                        <InputText
                            text="대댓글을 입력하세요"
                            getText={getText}
                            value={comment}
                        ></InputText>
                        <Button
                            width="50px"
                            mg="5px"
                            onClick={handleRecommentClick}
                        >
                            입력
                        </Button>
                    </CommentBox>
                )}
            </Footer>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleRequestCloseFunc}
                style={{
                    overlay: {
                        width: "100%",
                        height: "100%",
                        fontFamily: "DoHyeon",


                    },
                    content: {
                        width: "300px",
                        height: "300px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    },
                }}
            >
                <Quest ftSize="25px">비밀번호</Quest>
                <div style={{ margin: "10px" }}>
                    <InputPassword getPw={getPw} />
                </div>
                {isRightPw && (
                    <Link to={`/private/${pw}`}>
                        <Button width="50px" height="32px" mg="0px">
                            입력
                        </Button>
                    </Link>
                )}
                {!isRightPw && (
                    <Button
                        width="50px"
                        height="32px"
                        mg="0px"
                        onClick={handleModalEnterClick}
                    >
                        입력
                    </Button>
                )}
            </ReactModal>
        </Root>
    );
};

export default EnterBoard;
