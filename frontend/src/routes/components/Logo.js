import "../../css/board1.css";
import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import logo from "../../images/logo.png";

const onSearch = (value) => console.log(value);
const { Search } = Input;

const Top = (props) => {
    return <h2 className="topright">{props.children}</h2>;
};

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

export default Logo;
