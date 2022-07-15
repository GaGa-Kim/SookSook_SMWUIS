import "./login.css";
import React from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import Logo from "./Logo.js";

const Block = () => {
    return (
        <section>
            <button className="login">로그인</button>
            <button className="login">회원가입</button>
        </section>
    );
};

const Header = ({ text }) => {
    return (
        <div
            style={{
                borderBottom: "thin solid #aaa",
                lineHeight: "0.1em",
                margin: "10px 0 20px"
            }}
        >
            <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
        </div>
    );
};

const App = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Logo />
            <div className="loginblock">
                <Block />
            </div>
            <div className="header">
                <Header text="로그인" />
            </div>
            <div className="aclogin">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8
                    }}
                    wrapperCol={{
                        span: 16
                    }}
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="ID"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "아이디를 입력해 주세요"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="PW"
                        name="password"
                        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className="loginbutton" type="primary" htmlType="submit">
                            로그인
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default App;
