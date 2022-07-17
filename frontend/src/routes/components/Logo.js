import "../../css/board1.css";
import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import MenuBar from "./MenuBar";
import logo from "../../images/logo.png";
import "../../fonts/Font.css";
const onSearch = (value) => console.log(value);
const { Search } = Input;

const Top = (props) => {
    return <h2 className="topright">{props.children}</h2>;
};

const Logo = () => {
    const [show, setShow] = React.useState(false);
    const handleLogoImgClick = () => {
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    return (
        <section className="logo" style={{ display: "flex" }}>
            <div className="title">
            {show && <MenuBar style={{float:"left"}}/>}
                <img src={logo} alt="logo" onClick={handleLogoImgClick} />
                <div className="name" style={{ fontFamily: "Titillium" }}>
                    SookSook
                </div>
            </div>
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
