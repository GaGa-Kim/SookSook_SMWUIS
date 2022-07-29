import "../css/join.css";
import React from "react";
import { Form, Input } from "antd";
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import { Link } from 'react-router-dom';
import Block from "./components/Block.js";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header.js";
import Id from "./components/Id.js";
import Pw from "./components/Pw.js";
import Lgbutton from "./components/Lgbutton.js";

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
};

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <Block />
            <div className="join">
                <Header text="회원가입" />
                <Form {...formItemLayout} className="form">
                    <Id />
                    <Pw />
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[{ required: true, message: "이메일을 입력해 주세요" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="nickname"
                        label="닉네임"
                        rules={[
                            {
                                required: true,
                                message: "닉네임을 입력해주세요",
                                whitespace: true
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Lgbutton>회원가입</Lgbutton>
                </Form>
            </div>
        </>
    );
};

export default App;
