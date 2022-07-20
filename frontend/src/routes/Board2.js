import "../css/board2.css";
import React from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import "antd/dist/antd.css";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Addpage from "./components/Addpage.js";
import Cstudy from "./components/Cstudy.js";
import Drop2 from "./components/Drop2.js";

const columns = [
    {
        title: <div className="studyname">스터디 명</div>,
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
        name: "토익 800점 달성",
        address: "송송"
    },
    {
        key: "2",
        name: "토익 900점 달성",
        address: "나송"
    },
    {
        key: "3",
        name: "토익스피킹 레벨8",
        address: "마송"
    },
    {
        key: "4",
        name: "정보처리기사 자격증",
        address: "라송"
    },
    {
        key: "5",
        name: "중국어 회화 입문",
        address: "바송"
    },
    {
        key: "6",
        name: "자소서 첨삭 스터디",
        address: "아송"
    },
    {
        key: "7",
        name: "면접 준비 스터디",
        address: "자송"
    },
    {
        key: "8",
        name: "중국어 중급 회화",
        address: "차송"
    },
    {
        key: "9",
        name: "교환학생 준비 스터디",
        address: "카송"
    },
    {
        key: "10",
        name: "리액트 프로그래밍 스터디",
        address: "타송"
    },
    {
        key: "11",
        name: "자바스크립트 스터디",
        address: "파송"
    },
    {
        key: "12",
        name: "크롤링 스터디",
        address: "하송"
    }
];

const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <div className="block" style={{ display: "flex" }}>
            <Drop2 />
            <Cstudy />
        </div>
        <div>
            <Table columns={columns} dataSource={data} />;
            <Link to="/openstudy2"><Addpage /></Link>
        </div>
    </>
);

export default App;
