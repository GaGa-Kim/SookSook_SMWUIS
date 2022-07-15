import "./join.css";
import React from "react";
import logo from "./logo.png";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";

const Logo = () => {
    return (
        <section className="logo" style={{ display: "flex" }}>
            <img src={logo} alt="logo" />
            <div className="search">
                <Search onSearch={onSearch} enterButton />
            </div>
            <div className="customer" style={{ display: "flex" }}>
                <Top>로그아웃</Top>
                <Top>고객센터</Top>
            </div>
        </section>
    );
};
const Top = (props) => {
    return <h2 className="topright">{props.children}</h2>;
};

const Block = () => {
    return (
        <section>
            <button className="login">로그인</button>
            <button className="login">회원가입</button>
        </section>
    );
};

const onSearch = (value) => console.log(value);
const { Search } = Input;

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

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
};

const App = () => {
    return (
        <>
            <Logo />
            <div className="loginblock">
                <Block />
            </div>
            <div className="header">
                <Header text="회원가입" />
            </div>
            <div className="join">
                <Form {...formItemLayout}>
                    <Form.Item
                        name="ID"
                        label="ID"
                        rules={[{ required: true, message: "아이디를 입력해 주세요" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
                    >
                        <Input.Password />
                    </Form.Item>
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
                    <Button className="joinbutton" type="primary" htmlType="submit">
                        회원가입
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default App;
