import "../css/join.css";
import React, { useState } from "react";
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
import axios from "axios";

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
};

const Join = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [nickname, setNickname] = useState('');
    const getId = (text) => {
        setId(text);
    };
    const getPw = (text) => {
        setPw(text);
    };
    const getEmail = (text) => {
        setEmail(text);
    };
    const getNickname = (text) => {
        setNickname(text);
    };
    const register = () => {
        axios
            .post("http://localhost:8080/user", {
                loginId: id,
                email: email,
                password: pw,
                nickname: nickname
            })
            .then(() => {
                alert("회원가입이 완료되었습니다");
            })
    }

    return (
        <>
            <GlobalStyle />
            <Logo />
            <Block />
            <div className="join">
                <Header text="회원가입" />
                <Form {...formItemLayout} className="form">
                    <Id getId={getId} />
                    <Pw getPw={getPw} />
                    <Form.Item
                        name="email"
                        label="E-mail"
                        getEmail={getEmail}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="nickname"
                        label="닉네임"
                        getNickname={getNickname}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Link to="/login"><Lgbutton onClick={() => { register(); }}>회원가입</Lgbutton></Link>
                </Form>
            </div>
        </>
    );
};

export default Join;