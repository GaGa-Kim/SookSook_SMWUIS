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
import InputPassword from "./components/InputPassword";
import Button from "./components/Button";
import Logo from "./components/Logo";
import ListBox from "./components/ListBox";
import CommentList from "./components/CommentList";
import "../fonts/Font.css";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { DatePicker, Space } from "antd";
import moment from "moment";

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
const Select = styled.select`
    width: 200px;
    height: 32px;
    border-radius: 70px;
    text-align: center;
    border-color: #eeeeee;
    transition: 0.5s;
    outline: none;
    &:hover {
        border-color: #4aacfc;
        transition: 0.5s;
    }
    &:focus {
        border-color: #4aacfc;
        box-shadow: 0px 0px 0 2px #c7e4fe;
        transition: 0.5s;
    }
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
    const navigate = useNavigate();
    const dateFormat = "YYYY-MM-DD";
    //현재 로그인 중인 email 받기
    const emailL = useSelector((state) => state.email);
    let nicknameL = "";
    const [comment, setComment] = React.useState("");
    const [commentList, setCommentList] = React.useState([]);

    const { boardId } = useParams();
    const location = useLocation();
    const dataKey = location.state.boardId;

    const [studyBoard, setStudyBoard] = React.useState(null);
    const [on, setOn] = React.useState(false);
    const [off, setOff] = React.useState(false);
    //게시글 정보
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [dpt, setDpt] = React.useState("문과대학");
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [date, setDate] = React.useState("");
    const [number, setNumber] = React.useState(0);
    const [onoff, setOnoff] = React.useState("");
    //수정 삭제 버튼 유무
    const [isShow, setIsShow] = React.useState(false);
    React.useEffect(()=>{
        if(emailL===""){
            alert("로그인이 필요합니다.");
            navigate("/login");  
        }

    },[emailL])
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
        axios
            .get("http://localhost:8080/studyBoard", {
                params: {
                    id: dataKey,
                },
            })
            .then((response) => {
                const data = response.data;
                setEmail(data.email);
                setDpt(data.department);
                setSubject(data.subject);
                setTitle(data.title);
                setNumber(data.number);
                setContent(data.content);
                setDate(data.period);
                setOnoff(data.onoff);
                setPassword(data.password);
                if (response.data.onoff === "on") {
                    setOn(true);
                    setOff(false);
                } else {
                    setOn(false);
                    setOff(true);
                }
                setStudyBoard(response.data);
                if (emailL === response.data.email) {
                    setIsShow(true);
                } else {
                    setIsShow(false);
                }
            });
    }, []);

    React.useEffect(() => {
        /*db에서 댓글 가져오기*/
        axios
            .get("http://localhost:8080/passwordComment/all", {
                params: {
                    studyBoardId: dataKey,
                },
            })
            .then((response) => {
                setCommentList(response.data);
            });
    }, [commentList]);

    const [isModify, setIsModify] = React.useState(false);
    const [isDisable, setIsDisable] = React.useState(true);
    const handleModifyClick = () => {
        setIsModify(true);
        setIsDisable(false);
    };
    const getTitle = (text) => {
        setTitle(text);
    };
    const getArea = (text) => {
        setContent(text);
    };

    const getSubject = (text) => {
        setSubject(text);
    };
    const onChangeDate = (date, dateString) => {
        setDate(dateString);
    };
    const onChangeDpt = (dpt) => {
        setDpt(dpt.target.value);
    };
    const onChangeOn = (on) => {
        setOnoff(on.target.value);
    };
    const onChangeOff = (off) => {
        setOnoff(off.target.value);
    };
    const getNumber = (text) => {
        setNumber(Number(text));
    };
    const handleUploadClick = () => {
        // 게시글 정보 저장
        axios
            .put(`/studyBoard?id=${dataKey}`, {
                department: dpt,
                email: email,
                number: number,
                onoff: onoff,
                password: password,
                period: date,
                subject: subject,
                title: title,
                content: content,
            })
            .then(setIsDisable(true));
    };
    const handleDeleteClick = () => {
        axios
            .delete("/studyBoard", {
                params: {
                    email: email,
                    id: dataKey,
                },
            })
            .then(navigate("/board1"));
    };
    const getText = (text) => {
        setComment(text);
    };

    //isOpen true이면 modal보임
    const [isOpen, setIsOpen] = React.useState(false);
    //입장버튼눌렀을때
    const [pw, setPw] = React.useState("");
    const getPw = (text) => {
        setPw(text);
    };
    const handleEnterClick = () => {
        //멤버라면 바로 입장
        axios
            .post(
                `http://localhost:8080/studyMember?email=${emailL}&studyBoardId=${dataKey}`
            )
            .then((response) => {
                if (response.data === true) {
                    navigate(`/private/${dataKey}`);
                } else {
                    setIsOpen(true);
                }
            });
    };
    //모달에서 입력버튼 눌렀을때
    const handleModalEnterClick = () => {
        setIsOpen(false);
        //비밀번호 확인
        if (password === pw) {
            axios.post("http://localhost:8080/studyMember/password", {
                email: emailL,
                password: pw,
                studyBoardId: dataKey,
            });
            navigate(`/private/${dataKey}`);
        } else {
            alert("비밀번호가 틀렸습니다");
        }
    };
    const handleRequestCloseFunc = () => {
        setIsOpen(false);
    };
    const handlePlusClick = () => {
        axios
            .post("http://localhost:8080/passwordComment", {
                content: comment,
                email: emailL,
                studyBoardId: dataKey,
                upIndex: "null",
            })
            .then((response) => {
                const addCommentList = commentList.concat(response.data);
                setCommentList(addCommentList);
            });
        setComment("");
    };
    const [isRecomment, setIsRecomment] = React.useState(false);
    const [upIndex, setUpIndex] = React.useState();
    const handleSendClick = (id) => {
        setIsRecomment(true);
        setUpIndex(id);
    };
    const handleRecommentClick = () => {
        axios
            .post("http://localhost:8080/passwordComment", {
                content: comment,
                email: emailL,
                studyBoardId: dataKey,
                upIndex: upIndex,
            })
            .then((response) => {
                const addCommentList = commentList.concat(response.data);
                setCommentList(addCommentList);
            });
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
            {studyBoard && (
                <Main>
                    <InputBox>
                        <Quest ftSize="25px">학부</Quest>
                        <Box width="200px" left="100px" top="7px">
                            {isDisable && (
                                <InputText
                                    value={studyBoard.department}
                                    disable={isDisable}
                                />
                            )}
                            {!isDisable && (
                                <Select onChange={onChangeDpt}>
                                    <option value="문과대학">문과대학</option>
                                    <option value="이과대학">이과대학</option>
                                    <option value="공과대학">공과대학</option>
                                    <option value="생활과학대학">
                                        생활과학대학
                                    </option>
                                    <option value="법과대학">법과대학</option>
                                    <option value="경과대학">경상대학</option>
                                    <option value="음악대학">음악대학</option>
                                    <option value="약학대학">약학대학</option>
                                    <option value="미술대학">미술대학</option>
                                    <option value="기초교양대학">
                                        기초교양대학
                                    </option>
                                    <option value="글로벌서비스학부">
                                        글로벌서비스학부
                                    </option>
                                    <option value="영어영문학부">
                                        영어영문학부
                                    </option>
                                    <option value="미디어대학">
                                        미디어학부
                                    </option>
                                </Select>
                            )}
                        </Box>
                    </InputBox>
                    <InputBox>
                        <Quest ftSize="25px">과목</Quest>
                        <Box width="200px" left="100px" top="7px">
                            <InputText
                                value={subject}
                                disable={isDisable}
                                getText={getSubject}
                            />
                        </Box>
                    </InputBox>
                    <InputBox>
                        <Quest ftSize="25px">제목</Quest>
                        <Box width="200px" left="100px" top="7px">
                            <InputText
                                value={title}
                                disable={isDisable}
                                getText={getTitle}
                            />
                        </Box>
                    </InputBox>
                    <InputBox>
                        <Quest ftSize="25px">인원</Quest>
                        <Box width="200px" left="100px" top="7px">
                            <InputText
                                value={number}
                                disable={isDisable}
                                getText={getNumber}
                            />
                        </Box>
                    </InputBox>
                    <InputBox mgBot="65px">
                        <Quest ftSize="25px">내용</Quest>
                        <Box width="200px" left="100px" top="7px">
                            <InputArea
                                value={content}
                                disable={isDisable}
                                getArea={getArea}
                            />
                        </Box>
                    </InputBox>
                    <InputBox>
                        <Quest ftSize="25px">기간</Quest>
                        <Box width="200px" left="100px" top="7px">
                            {isDisable && (
                                <InputText
                                    value={date.substr(0, 10)}
                                    disable={isDisable}
                                />
                            )}
                            {!isDisable && (
                                <DatePicker
                                    onChange={onChangeDate}
                                    defaultValue={moment(date, dateFormat)}
                                />
                            )}
                        </Box>
                    </InputBox>
                    <InputBox pLeft="60px">
                        <input
                            type="radio"
                            value="on"
                            checked={onoff === "on"}
                            disabled={isDisable}
                            onChange={onChangeOn}
                        ></input>
                        <Quest ftSize="25px">온라인</Quest>
                        <input
                            type="radio"
                            value="off"
                            checked={onoff === "off"}
                            disabled={isDisable}
                            onChange={onChangeOff}
                        ></input>
                        <Quest ftSize="25px">오프라인</Quest>
                    </InputBox>
                    <InputBox>
                        

                        {isShow && (
                            <Box left="10px" top="2px">
                                {isDisable && (
                                    <Button
                                        width="100px"
                                        height="32px"
                                        mg="5px"
                                        onClick={handleModifyClick}
                                    >
                                        수정
                                    </Button>
                                )}
                                {!isDisable && (
                                    <Button
                                        width="100px"
                                        height="32px"
                                        mg="5px"
                                        onClick={handleUploadClick}
                                    >
                                        업로드
                                    </Button>
                                )}
                            </Box>
                        )}
                        <Box left="118px" top="7px">
                            <Button
                                width="100px"
                                height="32px"
                                mg="0px"
                                onClick={handleEnterClick}
                            >
                                입장
                            </Button>
                        </Box>
                        {isShow && (
                            <Box left="221px" top="7px">
                                <Button
                                    width="100px"
                                    height="32px"
                                    mg="0px"
                                    onClick={handleDeleteClick}
                                >
                                    삭제
                                </Button>
                            </Box>
                        )}
                    </InputBox>
                </Main>
            )}
            <Footer>
                <CommentTitle onClick={handleCommentClick}>댓글</CommentTitle>
                <ListBox>
                    {commentList &&
                        commentList.map((comment) => (
                            <CommentList
                                email={comment.email}
                                writeEmail={email}
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
                        transform: "translate(-50%, -50%)",
                    },
                }}
            >
                <Quest ftSize="25px">비밀번호</Quest>
                <div style={{ margin: "10px" }}>
                    <InputPassword getPw={getPw} />
                </div>

                <Button
                    width="50px"
                    height="32px"
                    mg="0px"
                    onClick={handleModalEnterClick}
                >
                    입력
                </Button>
            </ReactModal>
        </Root>
    );
};

export default EnterBoard;
