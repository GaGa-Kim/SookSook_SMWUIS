import "../css/share.css";
import { Table } from "antd";
import GlobalStyle from "./components/GlobalStyle";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import React, { useState } from "react";
import axios from "axios";

const Share = () => {
    const Shareblock = () => {
        return (
            <section className="block">
                <button className="share">자료공유 게시판</button>
                <Cwrite />
            </section>
        );

    };

    const Cwrite = () => {
        return (
            <section>
                <button className="newstudy" style={{ marginLeft: "0px" }}>
                    <Link to="/setboard_share">글 작성하기</Link></button>
            </section>
        );
    };
    const [data, setData] = useState("");
    const [id, setId] = useState("");
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyPosts/category?category=%EC%9E%90%EB%A3%8C%20%EA%B3%B5%EC%9C%A0%20%EA%B2%8C%EC%8B%9C%EA%B8%80")
            .then((response) => {
                console.log(response.data);
                setId(response.data);
            });
    }, []);
    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "title",
            render: (text, record, index) => (
                <Link
                    to={`/detailshare/${id[index].id}`}
                    state={{ boardId: id[index].id }}
                >
                    {text}
                </Link>
            ),
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

export default Share;


