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
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
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
    margin-top: 20px;
    font-family: "DoHyeon";
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

const OpenStudy = () => {
    return (
        <Root>
            <GlobalStyle />
            <ColorBox height="90px">
                <Title>스터디 개설</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>학부</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <Select>
                            <option>ICT융합공학부</option>
                            <option>소프트웨어학부</option>
                        </Select>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>이름</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" bg="#F0F0F0" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>비밀번호</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputPassword />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>과목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" bg="#F0F0F0" />
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="입력하세요" />
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
                <Button width="100px" mg="30px">만들기</Button>
            </ButtonBox>
        </Root>
    );
};
export default OpenStudy;
