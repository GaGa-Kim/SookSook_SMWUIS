import "../css/board1.css";
import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import Addpage from "./components/Addpage.js";
import Cstudy from "./components/Cstudy.js";
import Drop1 from "./components/Drop1.js";

const columns = [
    {
        title: <div className="studyname">스터디 명</div>,
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>
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
        name: "웹프로그래밍 기초",
        address: "송송"
    },
    {
        key: "2",
        name: "데이터사이언스 개론",
        address: "나송"
    },
    {
        key: "3",
        name: "운영체제",
        address: "마송"
    },
    {
        key: "4",
        name: "객체지향프로그래밍",
        address: "라송"
    },
    {
        key: "5",
        name: "빅데이터 활용 입문",
        address: "바송"
    },
    {
        key: "6",
        name: "선형대수학",
        address: "아송"
    },
    {
        key: "7",
        name: "인공지능과기계학습",
        address: "자송"
    }
];

const App = () => (
    <>
        <Logo />
        <div className="block" style={{ display: "flex" }}>
            <Drop1 />
            <Cstudy />
        </div>
        <section>
            <Table columns={columns} dataSource={data} />;
            <Addpage />
        </section>
    </>
);

export default App;
