import "../css/qacss.css";
import { Table } from "antd";
import { Link } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import React, { useState } from "react";
import axios from "axios";


const Qaboard = () => {
    const Qablock = () => {
        return (
            <section className="block">
                <button className="qanda" >Q & A 게시판</button><Cwrite />
            </section>
        );
    };

    const Cwrite = () => {
        return (
            <section>
                <button className="newstudy" style={{ marginLeft: "0px" }}>
                    <Link to="/setboard_qa">글 작성하기</Link></button>
            </section>
        );
    };

    const [setNickname] = useState("");
    const [setTitle] = useState("");
    const [data, setData] = useState("");
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyPosts/category?category=question")
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
            render: (text, { key }) => <Link to={`/detailqa/${key}`} state={{ key: key }}>{text}</Link>
        },

        {
            title: <div className="user">작성자</div>,
            dataIndex: "name",
            key: <div>"address"</div>
        }
    ];

    return (
        <>
            <GlobalStyle />
            <Logo />
            <Qablock />
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </>
    )
};

export default Qaboard;

