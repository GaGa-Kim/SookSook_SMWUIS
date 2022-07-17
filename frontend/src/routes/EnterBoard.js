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
    margin: 10px 0px;
    font-family: "DoHyeon";
`;
const CommentBox = styled.div`
    margin: 5px 10px;
    display: flex;
    justify-content: space-around;
`;

const EnterBoard = () => {
    return (
        <Root>
            <GlobalStyle />
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
                        <InputText text="웹프로그래밍 기초" disable="true" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest ftSize="25px">이름</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="송송" disable="true" />
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
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
                        <InputPassword />
                    </Box>
                    <Box left="310px" top="7px">
                        <Button width="50px" height="32px" mg="0px">
                            입장
                        </Button>
                    </Box>
                </InputBox>
            </Main>
            <Footer>
                <Quest ftSize="17px">댓글</Quest>
                <CommentBox>
                    <InputText text="입력하세요"></InputText>
                    <Button width="50px" mg="5px">
                        입력
                    </Button>
                </CommentBox>
            </Footer>
        </Root>
    );
};
export default EnterBoard;
