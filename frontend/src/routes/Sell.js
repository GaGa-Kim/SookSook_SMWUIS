import "../css/share.css";
import { Table } from "antd";
import GlobalStyle from "./components/GlobalStyle";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import Logo from "./components/Logo.js";

const Sell = () => {
    const Shareblock = () => {
        return (
            <section className="block">
                <button className="share">판매/나눔 게시판</button>
                <Cwrite />
            </section>
        );

    };

    const Cwrite = () => {
        return (
            <section>
                <button className="newstudy" style={{ marginLeft: "0px" }}>
                    <Link to="/setboard_sell">글 작성하기</Link></button>
            </section>
        );
    };

    const [setNickname] = useState("");
    const [setTitle] = useState("");
    const [data, setData] = useState("");
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyPosts/category?category=%ED%8C%90%EB%A7%A4%2F%EB%82%98%EB%88%94%20%EA%B2%8C%EC%8B%9C%EA%B8%80")
            .then((response) => {
                setData(response.data)
                setNickname(response.data.nickname)
                setTitle(response.data.title)
            });
    }, []);
    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "key",
            render: (text, { key }) => <Link to={`/detailsell${key}`} state={{ key: key }}>{text}</Link>
        },

        {
            title: <div className="user">작성자</div>,
            dataIndex: "nickname",
            key: "key"
        }
    ];

    return (
        <>
            <GlobalStyle />
            <Logo />
            <Shareblock />
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </>
    )
};

export default Sell;
