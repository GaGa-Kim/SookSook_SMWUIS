import "../css/board2.css";
import React from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import "antd/dist/antd.css";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Cstudy2 from "./components/Cstudy2.js";
import Drop2 from "./components/Drop2.js";

const columns = [
    {
        title: <div className="studyname">스터디 명</div>,
        dataIndex: "title",
        key: "key",
        render: (text, { key }) => <Link to={`/enterboard2/${key}`} state={{ key: key }}>{text}</Link>
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
        title: "토익 900점 달성",
        name: "송송"
    },
    {
        key: "2",
        title: "중국어 회화 스터디",
        name: "나송"
    },
    {
        key: "3",
        title: "토익스피킹 레벨8",
        name: "마송"
    }
];

const Board2 = () => (
    <>
        <GlobalStyle />
        <Logo />
        <div className="block" style={{ display: "flex" }}>
            <Drop2 />
            <Cstudy2 />
        </div>
        <section className="table">
            <Table columns={columns} dataSource={data} />;
        </section>
    </>
);

export default Board2;
