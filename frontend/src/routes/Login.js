import "./login.css";
import React from "react";
import { Form } from "antd";
import "antd/dist/antd.css";
import Logo from "./Logo.js";
import Block from "./Block.js";
import Header from "./Header.js";
import Id from "./Id.js";
import Pw from "./Pw.js";
import Lgbutton from "./Lgbutton.js";

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
            <Block />
            <Header text="로그인" />
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
                    <Id />
                    <Pw />
                    <Lgbutton>로그인</Lgbutton>
                </Form>
            </div>
        </>
    );
};

export default App;
