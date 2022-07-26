import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import Button from "./components/Button";
import Logo from './components/Logo';
import { Link } from 'react-router-dom';
import "../fonts/Font.css";
import { useState } from 'react';
import CheckBox from "./components/CheckBox";


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

const ButtonBox = styled.div`
    font-family: "DoHyeon";
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Openstudy = () => {
    const [key, setKey] = useState(0);
    const [id, setId] = useState("가송");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user, setUser] = useState("");
    const [pw, setPw] = useState("");

    const handleUploadClick = () => {

        if (title.trim() === '') {
            alert('제목을 입력하세요');
            return;
        }
        if (content.trim() === '') {
            alert('내용을 입력하세요');
            return;
        }
        if (user.trim() === '') {
            alert('내용을 입력하세요');
            return;
        }
        if (pw.trim() === '') {
            alert('내용을 입력하세요');
            return;
        }
        /*db에 게시글 정보 저장*/

    }
    const getText = (text) => {
        setTitle(text);
    };
    const getArea = (text) => {
        setContent(text);
    };
    const getUser = (text) => {
        setUser(text);
    }
    const getPw = (text) => {
        setPw(text);
    }

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>스터디 개설</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>대학</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <Select>
                            <option>문과대학</option>
                            <option>이과대학</option>
                            <option>공과대학</option>
                            <option>생활과학대학</option>
                            <option>법과대학</option>
                            <option>경상대학</option>
                            <option>음악대학</option>
                            <option>약학대학</option>
                            <option>미술대학</option>
                            <option>기초교양대학</option>
                            <option>글로벌서비스학부</option>
                            <option>영어영문학부</option>
                            <option>미디어학부</option>
                        </Select>
                    </Box></InputBox>
                <InputBox >
                    <Quest>이름</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" getText={getText} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>비밀번호</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputPassword text="입력하세요" getPw={getPw} />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" getText={getText} />
                    </Box>
                </InputBox>
                <InputBox mgBot="75px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="입력하세요" bg="#F0F0F0" getArea={getArea} />
                    </Box>
                </InputBox>
                <InputBox>
                    <CheckBox />
                    <Quest>온라인</Quest>
                    <CheckBox />
                    <Quest>오프라인</Quest>
                    <CheckBox />
                    <Quest>장기</Quest>
                    <CheckBox />
                    <Quest>단기</Quest>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Link to="/board1">
                    <Button width="70px" mg="30px" >
                        업로드
                    </Button>
                </Link>
                <Link to="/board1">
                    <Button width="70px" mg="30px" >
                        목록
                    </Button>
                </Link>
            </ButtonBox>
        </Root >
    );
};
export default Openstudy;
