import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Root";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Box from "./components/Box";
import InputArea from './components/InputArea';
import CheckBox from './components/CheckBox';
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
`;

const Quest = styled.div`
    margin-left:10px;
    margin-right: 10px;
    display: flex;
    font-size: 25px;
    align-items: center;
`;
const OpenStudy = () => {
    return (
        <Root>
            <GlobalStyle />
            <ColorBox height="100px">
                <Title>스터디 개설</Title>
            </ColorBox>
            <Main>
                <InputBox>
                    <Quest>학부</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <Select>
                            <Option value="lucy">lucy</Option>
                        </Select>
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>이름</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>비밀번호</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <Input.Password placeholder="입력하세요" />
                    </Box>
                </InputBox>
                <InputBox>
                    <Quest>과목</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputText text="입력하세요" />
                    </Box>
                </InputBox>
                <InputBox mgBot="50px">
                    <Quest>내용</Quest>
                    <Box width="200px" left="100px" top="7px">
                        <InputArea area="입력하세요" />
                    </Box>
                </InputBox>
                <InputBox>  
                    <CheckBox/>
                    <Quest>온라인</Quest>
                    <CheckBox/>
                    <Quest>오프라인</Quest>
                    <CheckBox/>
                    <Quest>장기</Quest>
                    <CheckBox/>
                    <Quest>단기</Quest>
                </InputBox>
            </Main>
        </Root>
    );
};
export default OpenStudy;
