import "../css/board1.css";
import { Link } from 'react-router-dom';
import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import GlobalStyle from "./components/GlobalStyle";
import Logo from "./components/Logo.js";
import Cstudy from "./components/Cstudy.js";
import Drop1 from "./components/Drop1.js";
import Root from './components/Root';
const Board1 = () => {


    const data = [
        {
            key: "1",
            title: "웹프로그래밍 기초",
            name: "송송"
        },
        {
            key: "2",
            title: "데이터사이언스 개론",
            name: "나송"
        },
        {
            key: "3",
            title: "운영체제",
            name: "마송"
        }
    ];
    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "key",
            render: (text, { key }) => <Link to={`/enterboard/${key}`} state={{ key: key }}>{text}</Link>
        },

        {
            title: <div className="user">작성자</div>,
            dataIndex: "name",
            key: <div>"address"</div>
        }
    ];

    return (
        <Root>
            <GlobalStyle />
            <Logo />
            <div className="block">
                <Drop1 />
                <Cstudy />
            </div>
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </Root>)
};

export default Board1;
