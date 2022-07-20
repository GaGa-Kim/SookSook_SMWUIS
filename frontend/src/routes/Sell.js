import "../css/share.css";
import React from "react";
import { Table } from "antd";
import GlobalStyle from "./components/GlobalStyle";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import Addpage from "./components/Addpage.js";

const Shareblock = () => {
    return (
        <section className="block">
            <button className="share">판매/나눔 게시판</button>
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
        title: <div>작성자</div>,
        dataIndex: "address",
        key: <div>"address"</div>
    }
];

const data = [
    {
        key: "1",
        name: "판매/나눔 게시판 글1",
        address: "송송"
    },
    {
        key: "2",
        name: "판매/나눔 게시판 글2",
        address: "나송"
    },
    {
        key: "3",
        name: "판매/나눔 게시판 글4",
        address: "마송"
    },
    {
        key: "4",
        name: "판매/나눔 게시판 글5",
        address: "라송"
    },
    {
        key: "5",
        name: "판매/나눔 게시판 글6",
        address: "바송"
    },
    {
        key: "6",
        name: "판매/나눔 게시판 글7",
        address: "아송"
    }
];

const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <Shareblock />
        <section>
            <Table columns={columns} dataSource={data} />;
            <Addpage />
        </section>
    </>
);

export default App;