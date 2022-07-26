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
        title: <div className="studyname">글 제목</div>,
        dataIndex: "name",
        key: "name",
        render: (text) => <Link to="" >{text}</Link>
    },

    {
        title: <div className="user">작성자</div>,
        dataIndex: "address",
        key: <div>"address"</div>
    }
];

const data = [
    {
        key: "1",
        name: "질문 게시판 질문 1",
        address: "송송"
    },
    {
        key: "2",
        name: "질문 게시판 질문 2",
        address: "나송"
    },
    {
        key: "3",
        name: "질문 게시판 질문3",
        address: "마송"
    },
    {
        key: "4",
        name: "질문 게시판 질문4",
        address: "라송"
    },
    {
        key: "5",
        name: "질문 게시판 질문 5",
        address: "바송"
    },
    {
        key: "6",
        name: "질문 게시판 질문 6",
        address: "아송"
    },
    {
        key: "7",
        name: "질문 게시판 질문 7",
        address: "자송"
    }
];

const Cwrite = () => {
    return (
        <section>
            <button className="newstudy">
                <Link to="/setboard_qa">스터디 개설</Link></button>
        </section>
    );
};


const App = () => (
    <>
        <GlobalStyle />
        <Logo />

        <Qablock />
        <section className="table">
            <Table columns={columns} dataSource={data} />
        </section>
    </>
);

export default App;
