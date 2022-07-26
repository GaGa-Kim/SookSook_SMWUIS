import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import Button from "./components/Button";
import Logo from './components/Logo';
import { Link } from 'react-router-dom';
import "../fonts/Font.css";
import { useState } from 'react';


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
const SetBoardQa = () => {
    const [key, setKey] = useState(0);
    const [id, setId] = useState("가송");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const handleUploadClick = () => {

        if (title.trim() === '') {
            alert('제목을 입력하세요');
            return;
        }
        if (content.trim() === '') {
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
    }

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <ColorBox height="90px">
                <Title>글 작성</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" getText={getText} />
                    </Box>
                </InputBox>
                <InputBox mgBot="62px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="입력하세요" bg="#F0F0F0" getArea={getArea} />
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
                    <Quest>파일</Quest>
                    <Box width="200px" left="100px" top="17px">
                        <LabelFile for="inputFile" onclick="focus()">
                            파일 선택하기
                        </LabelFile>
                        <InputFile
                            id="inputFile"
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Link to="/qaboard">
                    <Button width="70px" mg="30px" >
                        업로드
                    </Button>
                </Link>
                <Link to="/qaboard">
                    <Button width="70px" mg="30px">
                        목록
                    </Button>
                </Link>
            </ButtonBox>
        </Root >
    );
};
export default SetBoardQa;
