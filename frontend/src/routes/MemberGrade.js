import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import Box from "./components/Box";
import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import Badge from "./components/Badge";
import Logo from './components/Logo';
import "../fonts/Font.css";
import { Rate } from "antd";

const Title = styled.div`
    position: absolute;
    top: 30px;
    left: 90px;
    font-size: 36px;
    color: #ffffff;
    font-family: "Cafe24";
`;

const Main = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: "DoHyeon";
`;

const Quest = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;

const MemberButton = styled.button`
    width: 49px;
    height: 32px;
    background-color: #d9d9d9;
    border-radius: 50px;
    margin: 4px;
    border: thin solid #d9d9d9;
`;
const PlusButton = styled.button`
    border:none;
    border-radius: 30px;
    width: 150px;
    height: 25px;
    text-align: center;
    padding-top: 5px;
    margin-left: ${(props) => props.mgLeft};
    margin-bottom: ${(props) => props.mgBot};
`;

const MemberGrade = () => {
    const RandomColor = () => {
        return (
            "#" + Math.round(Math.random() * 0xfffffe + 0x000002).toString(16)
        );
    };
    return (
        <Root >
            <GlobalStyle />
            <Logo/>
            <ColorBox height="90px">
                <Title>스터디원 평가하기</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>스터디원 선택</Quest>
                    <Box width="300px" left="140px" top="4px">
                        <MemberButton>송송</MemberButton>
                        <MemberButton>송이</MemberButton>
                        <MemberButton>송파</MemberButton>
                        <MemberButton>파파</MemberButton>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>별점</Quest>
                    <Box width="200px" left="145px" top="13px">
                        <Rate />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>뱃지 선택</Quest>
                    <Box width="400px" left="140px" top="15px">
                        <Badge rnd={RandomColor} mgBot="5px">
                            성실해요
                        </Badge>
                        <Badge rnd={RandomColor} mgBot="5px">
                            과제 제출이 빨라요
                        </Badge>
                        <Badge rnd={RandomColor} mgBot="5px">
                            약속을 잘 지켜요
                        </Badge>
                        <Badge rnd={RandomColor} mgBot="5px">
                            성실하지 않아요
                        </Badge>
                        <PlusButton>+</PlusButton>
                    </Box>
                </InputBox>
            </Main>
            <ButtonBox mgRight="50px">
                <Button width="100px" mg="30px">
                    저장하기
                </Button>
            </ButtonBox>
        </Root>
    );
};
export default MemberGrade;
