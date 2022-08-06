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

const Join = () => {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [nickname, setNickname] = useState("");
    const [name, setName] = useState("");
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
    const getName = (text) => {
        setName(text);
    };

    const onFinish = (e) => {
        axios
            .post("http://localhost:8080/user", {
                loginId: id,
                email: email,
                password: pw,
                nickname: nickname,
                name: name
            }
            )
            .then(() => {
                alert("회원가입이 완료되었습니다");
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <>
            <GlobalStyle />
            <Logo />
            <Block />
            <div className="join">
                <Header text="회원가입" />
                <Form
                    className="form"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
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
                        name="name"
                        label="이름"
                        getNname={getName}
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
                    <Link to="/login"><Lgbutton >회원가입</Lgbutton></Link>
                </Form>
            </div>
        </>
    );
};

export default Join;