import Logo from './components/Logo';
import styled  from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from "./components/InputArea";
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import InputPassword from './components/InputPassword';
import "../fonts/Font.css";


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
    margin-bottom:50px;
    font-family: "DoHyeon";
`;

const Quest = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;
const InputEmail = styled.input`
    padding-left: 10px;
    font-size: 14px;
    width: 200px;
    height: 32px;
    border-radius: 70px;
    border: thin solid #d9d9d9;
    transition: 0.5s;
    ::placeholder {
        color: #bfbfbf;
    }
    &:hover {
        border-color: #4aacfc;
        transition: 0.5s;
    }
    &:focus {
        outline: none;
        border-color: #4aacfc;
        box-shadow: 0px 0px 0 2px #c7e4fe;
        transition: 0.5s;
    }
`;


const Setting = () => {
    return (
        <Root>
            <GlobalStyle />
            <Logo/>
            <ColorBox height="90px">
                <Title>정보수정</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>닉네임</Quest>
                    <Box width="200px" left="130px" top="7px">
                        <InputText text="입력하세요" bg="#F0F0F0"/>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>비밀번호</Quest>
                    <Box width="200px" left="130px" top="7px">
                        <InputPassword/>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>한 줄 소개</Quest>
                    <Box width="200px" left="130px" top="7px" >
                        <InputText text="입력하세요" bg="#F0F0F0"/>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>이메일</Quest>
                    <Box width="200px" left="130px" top="7px">
                        <InputEmail type="email" placeholder="입력하세요" />
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Button width="100px" mg="30px">회원탈퇴</Button>
            </ButtonBox>
        </Root>
    );
};
export default Setting;
