import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from './components/InputArea';
import Button from './components/Button';
import "../fonts/Font.css";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";

import { Select } from "antd";
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Title = styled.div`
    position: absolute;
    top: 32px;
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
    align-items:center;
    margin-top: 50px;
    font-family: "DoHyeon";
    border-bottom:thin solid #C1DAFF;
`;

const Quest = styled.div`
    margin-left:10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;

const InputFile=styled.input`

`;
const LabelFile=styled.label`
    
    height:100%;
    border:thin solid #d9d9d9;
    color:#bfbfbf;
    border-radius:70px;
    padding:7px 66.5px;
    font-size:13px;

    &:hover{
        border-color: #4aacfc;
        transition:0.5s;  
        
    }
    
    transition:0.5s;
`;
const ButtonBox=styled.div`
    font-family:"DoHyeon";
    width:100%;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;
const OpenStudy = () => {
    return (
        <Root>
            <GlobalStyle />
            <ColorBox height="100px">
                <Title>게시판 작성</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>제목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" />
                    </Box>
                </InputBox>
                <InputBox mgBot="62px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px" >
                        <InputArea area="입력하세요" bg="#F0F0F0"/>
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
                    <Quest>파일</Quest>
                    <Box width="200px" left="100px" top="17px" >
                        <LabelFile for="inputFile" onclick="focus()">파일 선택하기</LabelFile>
                        <InputFile id="inputFile" type="file" style={{display:"none"}} />
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox>
                <Button width="70px">업로드</Button>
                <Button width="70px">삭제</Button>
                <Button width="70px">목록</Button>
            </ButtonBox>
        </Root>
    );
};
export default OpenStudy;
