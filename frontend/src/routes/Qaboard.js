import "../css/qacss.css";
import React from "react";
import { Table } from "antd";
import { Link } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";

const Qablock = () => {
    return (
        <section className="block">
            <button className="qanda">Q & A 게시판</button><Cwrite />
        </section>
    );
};

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

const data = [
    {
        key: "1",
        title: "질문 게시판 질문 1",
        name: "송송"
    },
    {
        key: "2",
        title: "질문 게시판 질문 2",
        name: "나송"
    },
    {
        key: "3",
        title: "질문 게시판 질문3",
        name: "마송"
    }
];

const Cwrite = () => {
    return (
        <section>
            <button className="newstudy">
                <Link to="/setboard_qa">글 작성하기</Link></button>
        </section>
    );
};


const Qaboard = () => (
    <>
        <GlobalStyle />
        <Logo />
        <Qablock />
        <section className="table">
            <Table columns={columns} dataSource={data} />
        </section>
    </>
);

export default Qaboard;
